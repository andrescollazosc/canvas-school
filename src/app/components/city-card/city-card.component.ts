import { Component, Input, OnInit } from '@angular/core';
import { CitiesCardModel } from 'src/app/models/cities-card.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() configCity : CitiesCardModel;

  ngOnInit(): void {
    if (!this.configCity) {
      throw new Error("configCity is requiered.");      
    }
  }

  public sendInfo(value: boolean): void {
    if (value) {
      alert('Hola mundo');
    } else {
      alert('No paso nada');      
    }
  }

}
