import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SITE_CONTENT } from '../../core/content/site-content';
import { APP_CONFIG } from '../../core/config/app-config.token';
import { ButtonComponent } from '../ui/button.component';
import { CartIconComponent } from '../ui/cart-icon.component';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, ButtonComponent, CartIconComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {
  protected readonly t = SITE_CONTENT;
  protected readonly config = inject(APP_CONFIG);
  protected readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
