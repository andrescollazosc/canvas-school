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
  public finalPos = 4;

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.validateModel();
    this.loadItems(1, this.paginationModel.splitter);
  }

  private validateModel(): void {
    if (!this.paginationModel) {
      this.paginationModel = {
        quantityPages: 20,
        splitter: 4,
      };
    }
  }

  public nextPage(): void {
    this.initPos = this.initPos+this.paginationModel.splitter;
    this.finalPos = this.finalPos+this.paginationModel.splitter;
    if (this.finalPos > this.paginationModel.quantityPages) {
      return;
    }
    this.loadItems(this.initPos,this.finalPos);
  }

  public prevPage(): void {
    this.initPos = this.initPos-this.paginationModel.splitter;
    this.finalPos = this.finalPos-this.paginationModel.splitter;
    if (this.initPos<1) {
      return;
    }
    this.loadItems(this.initPos,this.finalPos);
  }

  private loadItems(initValue: number, length: number): void {
    this.paginationItems.length = 0;
    for (let i = initValue; i <= length; i++) {
      this.paginationItems.push(i);
    }
  }
}
