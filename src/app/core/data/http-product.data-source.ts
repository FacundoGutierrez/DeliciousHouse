import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { ProductRepository } from './product.repository';

interface ProductResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class HttpProductDataSource implements ProductRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/products';

  getAll(): Observable<Product[]> {
    return this.http.get<ProductResponse[]>(this.apiUrl).pipe(
      map((items) =>
        items.map((item) => ({
          id: String(item.id),
          name: item.name,
          description: item.description,
          price: item.price,
          category: item.category as Product['category'],
          quantity: item.quantity,
          image: item.image,
          isAvailable: item.isAvailable,
          createdAt: new Date(item.createdAt),
          updatedAt: new Date(item.updatedAt),
        })),
      ),
    );
  }
}
