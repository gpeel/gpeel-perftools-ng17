import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {providePlog} from '@gpeel/plog';

import {routes} from './app.routes';
import {plogConfig} from './plog-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // importProvidersFrom(PlogModule.forRoot(plogConfig)) // works OK
    providePlog(plogConfig) // also works OK with the standalone strategy
  ]
};
