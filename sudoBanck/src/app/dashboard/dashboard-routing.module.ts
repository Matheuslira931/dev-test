import { ExtratoComponent } from './extrato/extrato.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

export const DashboardRouting: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{path: 'home', component: HomeComponent}, {path: 'extrato', component: ExtratoComponent}]
  }
];
