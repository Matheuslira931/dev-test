import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SiteRouting } from './site-routing.module';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteComponent } from './site.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SiteComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SiteRouting)
  ]
})
export class SiteModule { }
