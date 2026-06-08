import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { SITE_CONTENT } from '../../core/content/site-content';
import { Product } from '../../core/models/product.model';
import { CartService } from '../../core/services/cart.service';
import { CurrencyFormatPipe } from '../pipes/currency-format.pipe';

@Component({
  selector: 'app-product-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyFormatPipe],
  template: `
    <article
      class="group flex h-full flex-col overflow-hidden rounded-2xl border border-espresso/8 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div class="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        <img
          [src]="product().image"
          [alt]="product().name"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          (error)="onImageError($event)"
        />
        @if (!product().isAvailable) {
          <span
            class="absolute top-3 right-3 rounded-full bg-espresso/80 px-3 py-1 text-xs font-semibold text-cream"
          >
            {{ t.productCard.soldOutBadgeText }}
          </span>
        }
      </div>
      <div class="flex flex-1 flex-col p-5">
        <h3 class="text-xl font-semibold text-espresso">{{ product().name }}</h3>
        <p class="mt-2 flex-1 text-sm leading-relaxed text-espresso-muted">
          {{ product().description }}
        </p>
        <div class="mt-4 flex items-center justify-between gap-3">
          <p class="text-lg font-bold text-honey">
            {{ product().price | currencyFormat }}
          </p>
          @if (product().isAvailable) {
            <button
              class="inline-flex items-center gap-1 rounded-full bg-honey px-4 py-2 text-sm font-semibold text-white transition hover:bg-honey-dark"
              (click)="addToCart()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              {{ t.productCard.addToCartText }}
            </button>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProductCardComponent {
  protected readonly t = SITE_CONTENT;
  private readonly cartService = inject(CartService);
  readonly product = input.required<Product>();

  addToCart(): void {
    this.cartService.add(this.product());
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const label = SITE_CONTENT.common.imagePlaceholderBrandLabel;
    img.src =
      'data:image/svg+xml,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#f0e8dc" width="400" height="300"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6b5a56" font-family="sans-serif" font-size="18">${label}</text></svg>`,
      );
  }
}
