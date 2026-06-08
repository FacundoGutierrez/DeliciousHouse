import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { Client } from '../models/client.model';
import { ClientRepository } from './client.repository';
import { MOCK_CATALOG } from './mock-product.data-source';

const MOCK_CLIENTS: Client[] = [
  {
    id: 'c-001',
    name: 'María García',
    email: 'maria.garcia@example.com',
    phone: '+54 11 5555-0101',
    address: 'Av. Corrientes 1234, CABA',
    order: [MOCK_CATALOG[0], MOCK_CATALOG[0]],
    cost: 7000,
  },
  {
    id: 'c-002',
    name: 'Carlos López',
    email: 'carlos.lopez@example.com',
    phone: '+54 11 5555-0202',
    address: 'Sarmiento 567, CABA',
    order: [],
    cost: 0,
  },
  {
    id: 'c-003',
    name: 'Lucía Martínez',
    email: 'lucia.martinez@example.com',
    phone: '+54 11 5555-0303',
    address: 'Palermo 890, CABA',
    order: [MOCK_CATALOG[1]],
    cost: 1200,
  },
  {
    id: 'c-004',
    name: 'Pedro Fernández',
    email: 'pedro.fernandez@example.com',
    phone: '+54 11 5555-0404',
    address: 'Belgrano 345, CABA',
    order: [],
    cost: 0,
  },
];

const MOCK_NETWORK_DELAY_MS = 800;

@Injectable()
export class MockClientDataSource implements ClientRepository {
  getAll(): Observable<Client[]> {
    return of(MOCK_CLIENTS).pipe(delay(MOCK_NETWORK_DELAY_MS));
  }
}
