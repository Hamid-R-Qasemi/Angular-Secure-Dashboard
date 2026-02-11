import { Routes } from '@angular/router';
import { ShellPage } from './layout/shell/shell.page';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    component: ShellPage,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
    ],
  },
];
