import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //tells to open all the url on the platform 'browser'

import { AppModule } from './app/app.module';   //to import app module
import { environment } from './environments/environment'; ///import envornment module

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)  //when we write bootstrapModule at host 4200 the first module going to open is AppModule
  .catch(err => console.log(err));
