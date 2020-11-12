import { Component, OnInit } from '@angular/core';
import { PrimaryCardModel } from '../../models/primary-card.model';
import { PrimaryCardMock } from '../../mocks/primary-card.mock';
import { ServiceCardMock } from '../../mocks/service-card.mocks';
import { ServiceCardModel } from '../../models/service-card.model';
import { CitiesCardModel } from 'src/app/models/cities-card.model';
import { CityCardMock } from 'src/app/mocks/city-card.mock';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss'],
})
export class CardsPageComponent implements OnInit {

  public configCard: PrimaryCardModel[] = PrimaryCardMock.getPeople();
  public configServiceCard: ServiceCardModel = ServiceCardMock.getServices();

  public configCityCard: CitiesCardModel[] = CityCardMock.getCities();

  ngOnInit(): void {}

  public onClick(value: ServiceCardModel): void {
    alert(JSON.stringify(value.id));
  }

}
