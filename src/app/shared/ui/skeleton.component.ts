import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="animate-pulse rounded-2xl bg-cream-dark"
      [class]="heightClass()"
      role="status"
      aria-label="Cargando"
    ></div>
  `,
})
export class SkeletonComponent {
  readonly height = input<'card' | 'line' | 'hero'>('card');

  heightClass(): string {
    const map = {
      card: 'h-72 w-full',
      line: 'h-4 w-full',
      hero: 'h-48 w-full md:h-64',
    };
    return map[this.height()];
  }
}
