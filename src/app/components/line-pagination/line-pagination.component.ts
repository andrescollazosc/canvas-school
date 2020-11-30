import { Component, Input, OnInit } from '@angular/core';
import { LinePaginationModel } from 'src/app/models/line-pagination.model';

@Component({
  selector: 'app-line-pagination',
  templateUrl: './line-pagination.component.html',
  styleUrls: ['./line-pagination.component.scss'],
})
export class LinePaginationComponent implements OnInit {
  @Input() paginationModel: LinePaginationModel;

  public paginationItems = [];
  public initPos = 1;
  public finalPos = 0;

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.validateModel();
    this.finalPos = this.paginationModel.splitter;
    this.loadItems(this.initPos, this.finalPos);
  }

  private validateModel(): void {
    if (!this.paginationModel) {
      this.paginationModel = {
        quantityPages: 20,
        splitter: 7,
      };
    }
  }

  public nextPage(): void {
    if (this.finalPos >= this.paginationModel.quantityPages) {
      return;
    }
    
    this.initPos = this.initPos+this.paginationModel.splitter;
    this.finalPos = this.finalPos+this.paginationModel.splitter;
    this.finalPos = this.finalPos>this.paginationModel.quantityPages ? this.paginationModel.quantityPages:this.finalPos;
    this.loadItems(this.initPos,this.finalPos);
  }

  public prevPage(): void {
    if (this.initPos < this.paginationModel.splitter) {
      return;
    }

    this.initPos = this.initPos-this.paginationModel.splitter;
    this.finalPos = this.validateRecursive(this.finalPos)-this.paginationModel.splitter;
    this.loadItems(this.initPos,this.finalPos);
  }

  private loadItems(initValue: number, length: number): void {
    this.paginationItems.length = 0;
    for (let i = initValue; i <= length; i++) {
      this.paginationItems.push(i);
    }
  }

  private validateRecursive(value: number): number{
    let res=0;
    const operation = value % this.paginationModel.splitter;
    res = operation!==0 ? this.validateRecursive(value+1) : value;

    return res;
  }
}
