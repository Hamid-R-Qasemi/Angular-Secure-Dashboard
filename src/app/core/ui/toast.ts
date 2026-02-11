import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class Toast {
  message = inject(MessageService);

  success(summary: string, detail?: string) {
    this.message.add({ severity: 'success', detail: detail, summary: summary });
  }

  warn(summary: string, detail?: string) {
    this.message.add({ severity: 'warn', detail: detail, summary: summary });
  }

  error(summary: string, detail?: string) {
    this.message.add({ severity: 'error', detail: detail, summary: summary });
  }

  info(summary: string, detail?: string) {
    this.message.add({ severity: 'info', detail: detail, summary: summary });
  }
}
