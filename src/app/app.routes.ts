import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./features/menu/menu.page').then((m) => m.MenuPage),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.page').then((m) => m.AboutPage),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.page').then((m) => m.ContactPage),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.page').then((m) => m.CartPage),
  },
    {
    path: '**',
    redirectTo: '',
  },
];
