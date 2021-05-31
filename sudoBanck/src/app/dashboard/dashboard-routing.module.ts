import { ExtratoComponent } from './extrato/extrato.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DashboardRouting: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{path: 'extrato', component: ExtratoComponent}]
  }
];
