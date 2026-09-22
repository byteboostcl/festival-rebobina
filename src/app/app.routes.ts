import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'REBOBINA · Festival de la Nostalgia',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  { path: '**', redirectTo: '' },
];
