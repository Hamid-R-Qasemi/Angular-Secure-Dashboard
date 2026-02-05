import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse, LoginRequest } from './auth.types';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private router = inject(Router);

  private API = 'http://localhost:3000';

  user = signal<User | null>(null);

  async login(dto: { username: string; password: string }) {
    const users = await firstValueFrom(
      this.http.get<User[]>(`${this.API}/users`, {
        params: {
          username: dto.username,
          password: dto.password,
        },
      }),
    );

    if (!users.length) {
      throw new Error('Invalid credentials');
    }

    const user = users[0];

    const token = btoa(JSON.stringify(user)); // fake jwt

    localStorage.setItem('token', token);
    this.user.set(user);

    this.router.navigateByUrl('/dashboard');
  }

  logout() {
    localStorage.removeItem('token');
    this.user.set(null);
    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}
