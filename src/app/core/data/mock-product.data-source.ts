import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

import { Product } from '../models/product.model';
import { ProductRepository } from './product.repository';

export const MOCK_CATALOG: Product[] = [
  {
    id: 'p-001',
    name: 'Budín de Limón y Amapolas',
    description: 'Clásico budín esponjoso con glaseado cítrico.',
    category: 'budin',
    image: '/images/Delicious1.webp',
    isAvailable: true,
    price: 3500,
    quantity: 0,
    createdAt: new Date('2023-10-09'),
    updatedAt: new Date('2023-10-10'),
  },
  {
    id: 'p-002',
    name: 'Cookies con Chips de Chocolate',
    description:
      'Galletas estilo NY, crujientes por fuera y tiernas por dentro.',
    category: 'cookie',
    image: '/images/cookies2.webp',
    isAvailable: true,
    price: 1200,
    quantity: 900,
    createdAt: new Date('2023-10-09'),
    updatedAt: new Date('2023-10-10'),
  },
];

/** Simulates network latency for loading states in the UI. */
const MOCK_NETWORK_DELAY_MS = 800;

@Injectable()
export class MockProductDataSource implements ProductRepository {
  getAll(): Observable<Product[]> {
    return of(MOCK_CATALOG).pipe(delay(MOCK_NETWORK_DELAY_MS));
  }
}
