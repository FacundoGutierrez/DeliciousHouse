import { Provider } from '@angular/core';

import { CLIENT_REPOSITORY } from './client.repository';
import { MockClientDataSource } from './mock-client.data';

export function provideClientRepository(): Provider {
  return {
    provide: CLIENT_REPOSITORY,
    useClass: MockClientDataSource,
  };
}
