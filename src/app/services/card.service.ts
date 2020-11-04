import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ServiceCardModel } from '../models/service-card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  // public getServices(): Observable<ServiceCardModel[]> {
  //   const url = '../mocks/service-card.mocks';
  //   return this.http.get(url);
  // }

}
