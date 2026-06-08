import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <a
      routerLink="/cart"
      class="relative inline-flex items-center p-2 text-espresso-muted transition hover:text-honey"
      aria-label="Carrito"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      @if (cartService.totalItems() > 0) {
        <span
          class="absolute -top-0.5 -right-0.5 flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-honey px-1 text-[11px] font-bold leading-none text-white"
        >
          {{ cartService.totalItems() }}
        </span>
      }
    </a>
  `,
})
export class CartIconComponent {
  protected readonly cartService = inject(CartService);
}
