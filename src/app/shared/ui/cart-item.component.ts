import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { SITE_CONTENT } from '../../core/content/site-content';
import { CartService } from '../../core/services/cart.service';
import { CartItem } from '../../core/models/cart.model';
import { CurrencyFormatPipe } from '../pipes/currency-format.pipe';

@Component({
  selector: 'app-cart-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyFormatPipe],
  template: `
    <article
      class="flex items-center gap-4 rounded-2xl border border-espresso/8 bg-white p-4 shadow-sm"
    >
      <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-cream-dark">
        <img
          [src]="item().product.image"
          [alt]="item().product.name"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div class="min-w-0 flex-1">
        <h3 class="font-semibold text-espresso truncate">
          {{ item().product.name }}
        </h3>
        <p class="mt-0.5 text-sm text-espresso-muted">
          {{ item().product.price | currencyFormat }} c/u
        </p>
      </div>

      <div class="flex items-center gap-3">
        <div class="flex items-center rounded-xl border border-espresso/15">
          <button
            class="flex h-8 w-8 items-center justify-center text-espresso-muted transition hover:text-espresso"
            (click)="decrement()"
            aria-label="Reducir cantidad"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
          <span class="flex h-8 min-w-[2.5rem] items-center justify-center text-sm font-semibold text-espresso">
            {{ item().quantity }}
          </span>
          <button
            class="flex h-8 w-8 items-center justify-center text-espresso-muted transition hover:text-espresso"
            (click)="increment()"
            aria-label="Aumentar cantidad"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <p class="min-w-[5rem] text-right font-bold text-honey">
          {{ item().product.price * item().quantity | currencyFormat }}
        </p>

        <button
          class="flex h-8 w-8 items-center justify-center rounded-lg text-espresso-muted transition hover:bg-terracotta/10 hover:text-terracotta"
          (click)="remove()"
          [attr.aria-label]="t.cart.removeItemLabelText"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </article>
  `,
})
export class CartItemComponent {
  protected readonly t = SITE_CONTENT;
  private readonly cartService = inject(CartService);

  readonly item = input.required<CartItem>();

  increment(): void {
    this.cartService.updateQuantity(
      this.item().product.id,
      this.item().quantity + 1,
    );
  }

  decrement(): void {
    this.cartService.updateQuantity(
      this.item().product.id,
      this.item().quantity - 1,
    );
  }

  remove(): void {
    this.cartService.remove(this.item().product.id);
  }
}
