import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('secure-dashboard');

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element!.getAttribute('data-theme')) {
      element?.removeAttribute('data-theme');
      return;
    }
    element?.setAttribute('data-theme', 'dark');
  }
}
