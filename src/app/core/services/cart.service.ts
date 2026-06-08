import { computed, Injectable, signal } from '@angular/core';

import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = signal<CartItem[]>([]);

  readonly items = this._items.asReadonly();

  readonly totalItems = computed(() =>
    this._items().reduce((sum, item) => sum + item.quantity, 0),
  );

  readonly totalCost = computed(() =>
    this._items().reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    ),
  );

  readonly isEmpty = computed(() => this._items().length === 0);

  add(product: Product, quantity = 1): void {
    this._items.update((items) => {
      const existing = items.find((i) => i.product.id === product.id);
      if (existing) {
        return items.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        );
      }
      return [...items, { product, quantity }];
    });
  }

  remove(productId: string): void {
    this._items.update((items) => items.filter((i) => i.product.id !== productId));
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.remove(productId);
      return;
    }
    this._items.update((items) =>
      items.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i,
      ),
    );
  }

  clear(): void {
    this._items.set([]);
  }
}
