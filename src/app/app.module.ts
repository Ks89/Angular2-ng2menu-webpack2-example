import ApplicationComponent from './application/application';
import HomeComponent from './pages/home/home';

import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

// App is our top level component
// import { App } from './app.component';
import { GlobalState } from './common/services/global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';




@NgModule({
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    PagesModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'pages', pathMatch: 'full' }
    ], { useHash: true })
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

export class AppModule {

  constructor(public appRef: ApplicationRef) {

  }

  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    // this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }

  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    // const state = this.appState._state;
    // store.state = state;
    // store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
