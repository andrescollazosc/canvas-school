import { Component, OnInit } from '@angular/core';
import { PrimaryCardModel } from '../../models/primary-card.model';
import { PrimaryCardMock } from '../../mocks/primary-card.mock';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss'],
})
export class CardsPageComponent implements OnInit {

  public configCard: PrimaryCardModel[] = PrimaryCardMock.getPeople();

  ngOnInit(): void {}
}
