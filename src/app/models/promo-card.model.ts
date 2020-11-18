export interface PromoCard{
    id: string;
    img?: string;
    name: string;
    size: string;
    price: number;
    menuItems?: MenuItems[];
}

export interface MenuItems{
    id: string,
    name: string,
}

export interface PromoCardResponseModel{
    promoCardId: string;
    menuItemId: string;
}