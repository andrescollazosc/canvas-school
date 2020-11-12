import { CitiesCardModel } from "../models/cities-card.model";

export class CitiesCardMock {
    public static getCities(): CitiesCardModel[] {
        return [
            {
                img: '../../../assets/img/Catedralpopayan.jpg',
                city_name: 'Popayán',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel bibendum nulla. Mauris nec massa sodales, egestas mauris at, ornare tellus.',
                subtitle: 'Capital del Cauca'
            },
            {
                img: '../../../assets/img/Barranquilla-catedral.jpg',
                city_name: 'Barranquilla',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel bibendum nulla. Mauris nec massa sodales, egestas mauris at, ornare tellus.',
                subtitle: 'Capital del Atlántico'
            },
            {
                img: '../../../assets/img/bogotaSkyview.jpg',
                city_name: 'Bogotá',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel bibendum nulla. Mauris nec massa sodales, egestas mauris at, ornare tellus.',
                subtitle: 'Capital de Colombia'
            }
        ];
    }
}