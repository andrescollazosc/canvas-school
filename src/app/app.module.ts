import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { PrimaryCardComponent } from './components/primary-card/primary-card.component';
import { ButtonDarkComponent } from './components/button-dark/button-dark.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsPageComponent,
    PrimaryCardComponent,
    ButtonDarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
