import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { Auth } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (!auth.isAuthenticated()) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
