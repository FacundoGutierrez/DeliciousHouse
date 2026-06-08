import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { SITE_CONTENT } from '../../core/content/site-content';
import { APP_CONFIG } from '../../core/config/app-config.token';
import { ButtonComponent } from '../../shared/ui/button.component';
import { SectionHeadingComponent } from '../../shared/ui/section-heading.component';

@Component({
  selector: 'app-contact-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ButtonComponent, SectionHeadingComponent],
  templateUrl: './contact.page.html',
})
export class ContactPage {
  protected readonly t = SITE_CONTENT;

  private readonly fb = inject(FormBuilder);
  protected readonly config = inject(APP_CONFIG);

  readonly mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(this.config.address);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(this.t.contact.mailto.emailSubjectText(name));
    const body = encodeURIComponent(
      this.t.contact.mailto.emailBodyText(name, email, message),
    );
    window.location.href = `mailto:${this.config.email}?subject=${subject}&body=${body}`;
  }
}
