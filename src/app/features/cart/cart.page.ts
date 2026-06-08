import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SITE_CONTENT } from '../../core/content/site-content';
import { APP_CONFIG } from '../../core/config/app-config.token';
import { CartService } from '../../core/services/cart.service';
import { ButtonComponent } from '../../shared/ui/button.component';
import { CartItemComponent } from '../../shared/ui/cart-item.component';
import { CurrencyFormatPipe } from '../../shared/pipes/currency-format.pipe';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';

@Component({
  selector: 'app-cart-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    ButtonComponent,
    CartItemComponent,
    CurrencyFormatPipe,
    SectionHeadingComponent,
  ],
  templateUrl: './cart.page.html',
})
export class CartPage {
  protected readonly t = SITE_CONTENT;
  protected readonly config = inject(APP_CONFIG);
  protected readonly cartService = inject(CartService);

  checkout(): void {
    const items = this.cartService.items().map((i) => ({
      name: i.product.name,
      qty: i.quantity,
      price: i.product.price,
    }));
    const total = this.cartService.totalCost();
    const message = this.t.cart.whatsappOrderMessage(items, total);
    window.open(
      `${this.config.whatsAppUrl}?text=${encodeURIComponent(message)}`,
      '_blank',
    );
    this.cartService.clear();
  }
}
