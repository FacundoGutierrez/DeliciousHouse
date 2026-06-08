import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="alignClass()">
      @if (eyebrow()) {
        <p class="mb-2 text-sm font-semibold tracking-widest text-honey uppercase">
          {{ eyebrow() }}
        </p>
      }
      <h2 class="text-3xl font-semibold text-espresso md:text-4xl">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="mt-3 max-w-2xl text-lg text-espresso-muted">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string | undefined>(undefined);
  readonly eyebrow = input<string | undefined>(undefined);
  readonly centered = input(false);

  alignClass(): string {
    return this.centered() ? 'text-center mx-auto' : '';
  }
}
