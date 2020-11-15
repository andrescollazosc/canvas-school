import { CitiesCardModel } from "../models/cities-card.model";
import { ExternalUrl } from "../constants/external_url.constant";

export class CityCardMock {

    static URL_SEARCH_TERM = ExternalUrl.URL.GOOGLE_EARTH_SEARCH;

    public static getCities(): CitiesCardModel[] {
        return [
            {
                id: '1',
                img: '../../../assets/img/Catedralpopayan.jpg',
                city_name: 'Popayán',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel bibendum nulla. Mauris nec massa sodales, egestas mauris at, ornare tellus.',
                subtitle: 'Capital del Cauca',
                searchTerm: `${this.URL_SEARCH_TERM}Popayan`
            },
            {
                id: '2',
                img: '../../../assets/img/Barranquilla-catedral.jpg',
                city_name: 'Barranquilla',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel bibendum nulla. Mauris nec massa sodales, egestas mauris at, ornare tellus.',
                subtitle: 'Capital del Atlántico',
                labelBtn: 'See more',
                searchTerm: `${this.URL_SEARCH_TERM}Barranquilla`
            },
            {
                id: '3',
                img: '../../../assets/img/bogotaSkyview.jpg',
                city_name: 'Bogotá',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel bibendum nulla. Mauris nec massa sodales, egestas mauris at, ornare tellus.',
                subtitle: 'Capital de Colombia',
                searchTerm: `${this.URL_SEARCH_TERM}Bogota`
            }
        ];
    }
}