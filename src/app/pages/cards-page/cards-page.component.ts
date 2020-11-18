import { Component, OnInit } from '@angular/core';
import { PrimaryCardModel } from '../../models/primary-card.model';
import { PrimaryCardMock } from '../../mocks/primary-card.mock';
import { ServiceCardMock } from '../../mocks/service-card.mocks';
import { ServiceCardModel } from '../../models/service-card.model';
import { CitiesCardModel } from 'src/app/models/cities-card.model';
import { CityCardMock } from 'src/app/mocks/city-card.mock';
import { PromoCardMock } from 'src/app/mocks/promo-card.mock';
import {
  PromoCard,
  PromoCardResponseModel,
} from 'src/app/models/promo-card.model';
import { PromoCardEnum } from 'src/app/enums/promo-card.enum';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss'],
})
export class CardsPageComponent implements OnInit {
  public configCard: PrimaryCardModel[] = PrimaryCardMock.getPeople();
  public configServiceCard: ServiceCardModel = ServiceCardMock.getServices();
  public configCityCard: CitiesCardModel[] = CityCardMock.getCities();
  public promoCardMock: PromoCard[] = PromoCardMock.getProducts();

  ngOnInit(): void {}

  public onClick(value: ServiceCardModel): void {
    alert(JSON.stringify(value.id));
  }

  public removeCityCard(id: string): void {
    this.configCityCard.forEach((city, i) => {
      if (city.id == id) {
        this.configCityCard.splice(i, 1);
      }
    });
  }

  public onClickPromo(modelResponse: PromoCardResponseModel): void {
    switch (modelResponse.menuItemId) {
      case PromoCardEnum.accept:
        alert('accept');
        break;
      case PromoCardEnum.buy:
        alert('buy');
        break;
      case PromoCardEnum.cancel:
        alert('cancel');
        break;
      case PromoCardEnum.delete:
        this.removePromoCard(modelResponse.promoCardId);
        break;
    }
  }

  private removePromoCard(promoCardId: string) {
    const promoCard = this.promoCardMock.find(
      (card) => card.id === promoCardId
    );
    const index = this.promoCardMock.indexOf(promoCard);
    this.promoCardMock.splice(index, 1);
  }
}
