import { isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, input, PLATFORM_ID, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Concept } from '../../../core/models/concept.model';
import { DefinitionType, PreferencesService } from '../../../core/services/preferences.service';

@Component({
  selector: 'app-concept-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './concept-card.component.html',
})
export class ConceptCardComponent {
  concept = input.required<Concept>();

  private preferences = inject(PreferencesService);
  private platformId = inject(PLATFORM_ID);

  activeTab = signal<DefinitionType>(this.preferences.defaultDefinitionType());
  copied = signal(false);

  constructor() {
    effect(() => {
      // By only reading the global preference, this effect will only run when the global preference changes.
      // It will not run when activeTab changes, allowing individual overrides.
      const globalPref = this.preferences.defaultDefinitionType();
      this.activeTab.set(globalPref);
    });
  }

  copyCode(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.concept().example);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }
}
