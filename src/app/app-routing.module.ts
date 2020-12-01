import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { RoutesConstans } from './constants/routes.constans';
import { PaginatorsComponent } from './pages/paginators/paginators.component';
import { TablesComponent } from './pages/tables/tables.component';

const ROUTES = { ...RoutesConstans.Routes };

const routes: Routes = [
  { path: ROUTES.CARDS, component: CardsPageComponent },
  { path: ROUTES.PAGINATORS, component: PaginatorsComponent },
  { path: ROUTES.TABLES, component: TablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
