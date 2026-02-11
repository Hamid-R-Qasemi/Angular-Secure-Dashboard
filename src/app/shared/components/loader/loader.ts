import { Component } from '@angular/core';
import { loading } from '../../../core/ui/loader.store';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [ProgressSpinnerModule],
  template: `
    @if (loading()) {
      <div class="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <p-progress-spinner ariaLabel="loading" />
      </div>
    }
  `,
})
export class LoaderComponent {
  loading = loading;
}
