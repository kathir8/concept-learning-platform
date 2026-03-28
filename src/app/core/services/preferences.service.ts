import { Injectable, signal, PLATFORM_ID, effect, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type DefinitionType = 'slang' | 'interview';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly PREF_KEY = 'app-def-pref';
  readonly defaultDefinitionType = signal<DefinitionType>('slang');
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const storedPref = localStorage.getItem(this.PREF_KEY) as DefinitionType;
      if (storedPref === 'slang' || storedPref === 'interview') {
        this.defaultDefinitionType.set(storedPref);
      }
    }

    effect(() => {
      const pref = this.defaultDefinitionType();
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.PREF_KEY, pref);
      }
    });
  }

  toggleDefinitionType(): void {
    this.defaultDefinitionType.update(current => current === 'slang' ? 'interview' : 'slang');
  }

  setDefinitionType(type: DefinitionType): void {
    this.defaultDefinitionType.set(type);
  }
}
