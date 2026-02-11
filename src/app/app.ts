import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BidiModule } from '@angular/cdk/bidi';
import { LoaderComponent } from './shared/components/loading/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, BidiModule, LoaderComponent],
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
