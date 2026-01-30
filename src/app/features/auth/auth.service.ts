import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse, LoginRequest } from './auth..types';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly _token = signal<string | null>(null);

  readonly token = this._token.asReadonly();
  readonly isAuthenticated = () => !!this._token();

  constructor(private router: Router) {}

  login(payload: LoginRequest): Promise<AuthResponse> {
    // mock behavior (JSON Server later)
    return new Promise((resolve) => {
      setTimeout(() => {
        const response: AuthResponse = {
          token: 'mock-jwt-token',
          expiresAt: new Date(Date.now() + 3600_000).toISOString(),
        };

        this._token.set(response.token);
        localStorage.setItem('token', response.token);

        resolve(response);
      }, 800);
    });
  }

  logout(): void {
    this._token.set(null);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
