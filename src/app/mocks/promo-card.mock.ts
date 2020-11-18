import { PromoCard } from '../models/promo-card.model';

export class PromoCardMock {
  public static getProducts(): PromoCard[] {
    return [
      {
        id: '1000',
        img: 'https://www.zenu.com.co/wp-content/uploads/2019/07/salchicha-superperro-zenu-1200x900.png',
        name: 'Salchicha',
        price: 2500,
        size: '1',
      },
      {
        id: '1001',
        img: 'https://content-us-7.content-cms.com/1285e1d2-5151-4eab-9da2-775291879cb9/dxresources/049c/049c749b-584e-4cf6-9f98-97b35e8b8723.png?resize=450px%3A450px&crop=450%3A450%3B0%2C0',
        name: 'Queso',
        price: 2500,
        size: '1',
        menuItems: [
          { id: '1', name: 'Cancelar' },
          { id: '2', name: 'Aceptar' },
          { id: '3', name: 'Eliminar' },
        ],
      },
      {
        id: '1002',
        img: 'https://content-us-7.content-cms.com//1285e1d2-5151-4eab-9da2-775291879cb9/dxresources/f9a6/f9a6137d-0765-401a-a83f-c7542ce32bbf.png?resize=600px%3A600px&crop=600%3A600%3B0%2C0',
        name: 'Mermelada',
        price: 2500,
        size: '1',
        menuItems: [
          { id: '1', name: 'Cancelar' },
          { id: '2', name: 'Aceptar' },
          { id: '3', name: 'Eliminar' },
          { id: '4', name: 'Comprar' },
        ],
      },
      {
        id: '1003',
        img: 'https://supermercadocomunal.com/4638-large_default/galletas-saltin-noel-integral-9-und-.jpg',
        name: 'Mermelada',
        price: 2500,
        size: '1',
        menuItems: [
          { id: '1', name: 'Cancelar' },
          { id: '3', name: 'Eliminar' },
        ],
      },
    ];
  }
}
