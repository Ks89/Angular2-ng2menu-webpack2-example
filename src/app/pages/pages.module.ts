import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { NgaModule } from '../theme/nga.module';
import { RouterModule } from '@angular/router';

import { Pages } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    RouterModule.forRoot([
      {path: 'pages', component: Pages}
    ])
  ],
  declarations: [Pages]
})
export class PagesModule {
}
