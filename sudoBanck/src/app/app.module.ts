import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SiteModule } from './site/site.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutingModule),
    SiteModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
