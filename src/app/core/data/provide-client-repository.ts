import { Provider } from '@angular/core';

import { HttpClientDataSource } from './http-client.data-source';
import { CLIENT_REPOSITORY } from './client.repository';

export function provideClientRepository(): Provider {
  return {
    provide: CLIENT_REPOSITORY,
    useClass: HttpClientDataSource,
  };
}
