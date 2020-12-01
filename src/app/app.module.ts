import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { PrimaryCardComponent } from './components/primary-card/primary-card.component';
import { ButtonDarkComponent } from './components/button-dark/button-dark.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { ButtonGoogleComponent } from './components/button-google/button-google.component';
import { PromoCardComponent } from './components/promo-card/promo-card.component';
import { PaginatorsComponent } from './pages/paginators/paginators.component';
import { LinePaginationComponent } from './components/line-pagination/line-pagination.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { TablesComponent } from './pages/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsPageComponent,
    PrimaryCardComponent,
    ButtonDarkComponent,
    ServiceCardComponent,
    CityCardComponent,
    ButtonGoogleComponent,
    PromoCardComponent,
    PaginatorsComponent,
    LinePaginationComponent,
    DynamicTableComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
