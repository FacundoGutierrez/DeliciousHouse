import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAppConfig } from './core/config/app-config.token';
import { provideProductRepository } from './core/data/provide-product-repository';
import { provideClientRepository } from './core/data/provide-client-repository';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAppConfig(),
    provideProductRepository(),
    provideClientRepository()
  ],
};
