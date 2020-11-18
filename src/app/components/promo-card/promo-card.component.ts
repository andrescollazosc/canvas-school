import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  PromoCard,
  PromoCardResponseModel,
} from '../../models/promo-card.model';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss'],
})
export class PromoCardComponent implements OnInit {
  @Input() promoCard: PromoCard;
  @Output() resultEmittedMenu = new EventEmitter<PromoCardResponseModel>();

  public isClosed = false;

  constructor() {}

  ngOnInit(): void {}

  public openOrCLoseMenu(): void {
    this.isClosed = !this.isClosed;
  }

  public defaultConfig(): void {
    if (!this.promoCard) {
    }
  }

  public onClickEmmitter(promoCardId: string, menuItemId: string): void {
    const model: PromoCardResponseModel = { menuItemId, promoCardId };
    this.resultEmittedMenu.emit(model);
  }
}
