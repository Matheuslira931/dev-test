import {  Routes } from '@angular/router';

export const AppRoutingModule: Routes = [
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
  }
];
