import { Component, Input, OnInit } from '@angular/core';
import { CitiesCardModel } from 'src/app/models/cities-card.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input() configCity : CitiesCardModel;

  constructor() { }

  ngOnInit(): void {
  }

}
