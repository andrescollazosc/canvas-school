import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {

  public isClosed = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openOrCLoseMenu(): void {
    this.isClosed = !this.isClosed;
  }

}
