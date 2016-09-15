import ApplicationComponent from './application/application';
import HomeComponent from './pages/home/home';

import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { GlobalState } from './common/services/global.state';
import { NgaModule } from './theme/nga.module';

@NgModule({
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent}
    ])
  ],
  declarations: [
    ApplicationComponent,
    HomeComponent
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    GlobalState
  ],
  bootstrap: [ ApplicationComponent ]
})

export class AppModule {}
