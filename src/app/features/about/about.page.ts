import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SITE_CONTENT } from '../../core/content/site-content';
import { APP_CONFIG } from '../../core/config/app-config.token';
import { ButtonComponent } from '../../shared/ui/button.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, SectionHeadingComponent],
})
export class AboutPage {
  protected readonly t = SITE_CONTENT;
  protected readonly config = inject(APP_CONFIG);
}
