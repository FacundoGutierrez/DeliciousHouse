import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from '../models/client.model';

export interface ClientRepository { // contract for the product repository
  getAll(): Observable<Client[]>;
}

export const CLIENT_REPOSITORY = new InjectionToken<ClientRepository>(
  'ClientRepository',
);  