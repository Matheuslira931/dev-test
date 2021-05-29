import { SiteRouting } from './site-routing.module';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteComponent } from './site.component';


@NgModule({
  declarations: [
    SiteComponent,
    BodyComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(SiteRouting)
  ]
})
export class SiteModule { }
