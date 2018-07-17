import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*Define a inicialização do módulo principal da aplicação.
plataforma.iniciarModulo(módulo) */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
