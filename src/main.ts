import { enableProdMode } from '@angular/core';
import { ApplicationRef } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }  from './app/app.module';
import { bootloader } from '@angularclass/hmr';

if (webpack.ENV === 'production') {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);


export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)

}

bootloader(main);
