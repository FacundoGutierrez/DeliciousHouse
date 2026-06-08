import { computed, inject, Injectable, signal } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';

import { PRODUCT_REPOSITORY } from '../data/product.repository';
import { Product } from '../models/product.model';

/**
 * Catalog facade — single entry for features. Hides repository and owns signal state.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly repository = inject(PRODUCT_REPOSITORY);

  private readonly _products = signal<Product[]>([]);
  private readonly _isLoading = signal(false);

  readonly products = this._products.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();

  readonly budines = computed(() =>
    this._products().filter((p) => p.category === 'budin'),
  );
  readonly cookies = computed(() =>
    this._products().filter((p) => p.category === 'cookie'),
  );

  fetchProducts(): Observable<Product[]> {
    this._isLoading.set(true);
    return this.repository.getAll().pipe(
      tap((data) => this._products.set(data)),
      finalize(() => this._isLoading.set(false)),
    );
  }
}
