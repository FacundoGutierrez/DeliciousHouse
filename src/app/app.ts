import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SiteFooterComponent } from './shared/layout/site-footer.component';
import { SiteHeaderComponent } from './shared/layout/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
