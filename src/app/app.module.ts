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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsPageComponent,
    PrimaryCardComponent,
    ButtonDarkComponent,
    ServiceCardComponent,
    CityCardComponent,
    ButtonGoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
