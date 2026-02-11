import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppStore {
  //----------------------
  //STATE
  //----------------------

  private _sidebarOpen = signal(true);
  private _pageTitle = signal('Dashboard');

  //----------------------
  //SELECTOR
  //----------------------

  sidebarOpen = computed(() => this._sidebarOpen());
  pageTitle = computed(() => this._pageTitle());

  //----------------------
  //ACTION
  //----------------------

  toggleSidebar() {
    this._sidebarOpen.update((x) => !x);
  }

  setPageTitle(title: string) {
    this._pageTitle.set(title);
  }
}
