import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import ApplicationComponent from './application/application';
import HomeComponent from './pages/home/home';

import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
            RouterModule.forRoot([
              {path: '', component: HomeComponent}
            ]),
   LaddaModule
  ],
  declarations: [
    ApplicationComponent,
    HomeComponent
  ],
  bootstrap: [ ApplicationComponent ]
})

export class AppModule { }
