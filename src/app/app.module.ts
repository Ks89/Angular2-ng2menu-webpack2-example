import ApplicationComponent from './application/application';
import HomeComponent from './pages/home/home';
import { SidebarModule } from './sidebar-module/nga.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ // import Angular's modules
    BrowserModule,
    SidebarModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent}
    ])
  ],
  declarations: [
    ApplicationComponent,
    HomeComponent
  ],
  bootstrap: [ ApplicationComponent ]
})

export class AppModule {}
