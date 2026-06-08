import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { SITE_CONTENT } from '../../core/content/site-content';
import { APP_CONFIG } from '../../core/config/app-config.token';
import { ProductService } from '../../core/services/product.service';
import { ButtonComponent } from '../../shared/ui/button.component';
import { ProductCardComponent } from '../../shared/ui/product-card.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';
import { SkeletonComponent } from '../../shared/ui/skeleton.component';

@Component({
  selector: 'app-menu-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonComponent,
    SectionHeadingComponent,
    ProductCardComponent,
    SkeletonComponent,
  ],
  templateUrl: './menu.page.html',
})
export class MenuPage implements OnInit {
  protected readonly t = SITE_CONTENT;
  protected readonly config = inject(APP_CONFIG);
  protected readonly productService = inject(ProductService);

  ngOnInit(): void {
    if (this.productService.products().length === 0) {
      this.productService.fetchProducts().subscribe();
    }
  }
}
