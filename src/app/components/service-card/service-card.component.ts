import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceCardModel } from 'src/app/models/service-card.model';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  // Input 
  @Input() configCard: ServiceCardModel;

  // Output
  @Output() onClickEmit = new EventEmitter<ServiceCardModel>();

  constructor() { }

  ngOnInit(): void {
    this.configServiceCard();
  }

  public onClick(value: ServiceCardModel): void {
    this.onClickEmit.emit(value);
  }

  private configServiceCard(): void {
    if (!this.configCard) {
      this.configCard = {
        id: '423',
        icon: '../../../assets/img/logo_claro.png',
        title: 'Titulo...',
        value: 0
      };
    }

    if (!this.configCard.icon) {
      this.configCard.icon = '../../../assets/img/logo-default.PNG';
    }
  }

}
