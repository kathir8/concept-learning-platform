import { effect, inject, Injectable, signal } from '@angular/core';
import Fuse from 'fuse.js';
import { ConceptService } from './concept.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly conceptService = inject(ConceptService);
  readonly searchQuery = signal<string>('');

  private fuse!: Fuse<any>;

  constructor() {
    effect(() => {
      const data = this.conceptService.concepts();

      this.fuse = new Fuse(data, {
        keys: [
          { name: 'title', weight: 0.6 },
          { name: 'slangDefinition', weight: 0.25 },
          { name: 'interviewDefinition', weight: 0.15 }
        ],
        threshold: 0.3,
        ignoreLocation: true
      });
    });
  }

  updateSearch(query: string): void {
    this.searchQuery.set(query);
  }

  searchConcepts(query: string) {
    if (!query) return [];
    return this.fuse.search(query).map(r => r.item);
  }
}
