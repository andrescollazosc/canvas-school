import { ServiceCardModel } from '../models/service-card.model';
export class ServiceCardMock {
  private static configCard: ServiceCardModel[] = [];

  public static getServices(): ServiceCardMock {
    return (this.configCard = [
      {
        id: 'dsds12-ds45d6-ds5d46a-dsd45',
        icon: '../../../assets/img/logo_claro.png',
        title: 'Claro hogar',
        value: 132000,
      },
      {
        id: 'dsds12-ds45d6-ds5d46a-dss23',
        icon: '../../../assets/img/logo_claro.png',
        title: 'Claro telefonia',
        value: 75000,
      },
      {
        id: 'dsds12-ds45d6-ds5d46a-dsd102',

        icon: '../../../assets/img/enel.jpg',
        title: 'Enel enerigia de bogotá',
        value: 53000,
      },
      {
        id: 'dsds12-ds45d6-ds5d46a-dsax564',
        icon: '../../../assets/img/acueducto-bogota_1_0.jpg',
        title: 'Acueducto de Bogotá D.C.',
        value: 53000,
      },
      {
        id: 'dsds12-ds45d6-ds5d46a-accxd458',
        icon: '../../../assets/img/movistar.png',
        title: 'Movistar telefonica celular',
        value: 0,
      },
      {
        id: 'dsds12-ds45d6-ds5d46a-451aaa',
        title: 'Wom Telefonica',
        value: 0,
      }
    ]);
  }
}
