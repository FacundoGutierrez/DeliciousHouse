import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { describe, expect, it, beforeEach } from 'vitest';

import { PRODUCT_REPOSITORY } from '../data/product.repository';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';

const mockProducts: Product[] = [
  {
    id: 'test-1',
    name: 'Test Cookie',
    description: 'Test',
    category: 'cookie',
    image: '/test.jpg',
    isAvailable: true,
    price: 100,
    quantity: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PRODUCT_REPOSITORY,
          useValue: { getAll: () => of(mockProducts) },
        },
      ],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update products signal after fetchProducts', () => {
    service.fetchProducts().subscribe();

    expect(service.products()).toEqual(mockProducts);
    expect(service.isLoading()).toBe(false);
  });

  it('should filter cookies and budines via computed signals', () => {
    const budin: Product = { ...mockProducts[0], id: 'b-1', category: 'budin' };
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PRODUCT_REPOSITORY,
          useValue: { getAll: () => of([mockProducts[0], budin]) },
        },
      ],
    });
    service = TestBed.inject(ProductService);
    service.fetchProducts().subscribe();

    expect(service.cookies()).toHaveLength(1);
    expect(service.budines()).toHaveLength(1);
  });
});
