import { Component, OnInit } from '@angular/core';
import { RoutesConstans } from '../../constants/routes.constans';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public ROUTES = { ...RoutesConstans.Routes };

  constructor() { }

  ngOnInit(): void {
  }

}
