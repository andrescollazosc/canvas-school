import { Component, Input, OnInit } from '@angular/core';
import { PrimaryCardModel } from 'src/app/models/primary-card.model';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card.component.html',
  styleUrls: ['./primary-card.component.scss'],
})
export class PrimaryCardComponent implements OnInit {
  @Input() configCard: PrimaryCardModel;

  constructor() {}

  ngOnInit(): void {
    this.defaultConfig();
  }

  private defaultConfig(): void {
    if (!this.configCard) {
      this.configCard = {
        img: '../../../assets/img/avatar.jpg',
        personName: 'Person name',
        profession: 'Profession',
        origin: 'origin',
      };
    } else if (!this.configCard.img) {
      this.configCard.img = '../../../assets/img/avatar.jpg';
    }
  }
}
