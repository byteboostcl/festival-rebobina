import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Festival Rebobina · Edición 2027',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  { path: '**', redirectTo: '' },
];
