import { RouterModule } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRouting } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ExtratoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRouting)
  ]
})
export class DashboardModule { }
