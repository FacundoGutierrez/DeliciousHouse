import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';
import { NgTemplateOutlet } from '@angular/common';  // 👈 add this

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgTemplateOutlet],  // 👈 add NgTemplateOutlet here
  template: `
    <ng-template #content>
      <ng-content />
    </ng-template>

    @if (routerLink()) {
      <a [routerLink]="routerLink()!" [class]="classes()">
        <ng-container *ngTemplateOutlet="content" />
      </a>
    } @else if (href()) {
      
       <a [href]="href()"
        [attr.target]="external() ? '_blank' : null"
        [attr.rel]="external() ? 'noopener noreferrer' : null"
        [class]="classes()"
      >
        <ng-container *ngTemplateOutlet="content" />
      </a>
    } @else {
      <button [type]="type()" [disabled]="disabled()" [class]="classes()">
        <ng-container *ngTemplateOutlet="content" />
      </button>
    }
  `,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('lg');
  readonly routerLink = input<string | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly external = input(false);
  readonly disabled = input(false);
  readonly type = input<'button' | 'submit'>('button');
  readonly fullWidth = input(false);
  
  classes(): string {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-honey';
    const sizes: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-honey text-white hover:bg-honey-dark',
      secondary: 'bg-espresso text-cream hover:bg-espresso/90',
      outline:
        'border-2 border-espresso/20 bg-transparent text-espresso hover:border-honey hover:text-honey',
    };
    const width = this.fullWidth() ? 'w-full' : '';
    return [base, sizes[this.size()], variants[this.variant()], width]
      .filter(Boolean)
      .join(' ');
  }
}
