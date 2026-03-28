import { Injectable, signal } from '@angular/core';
import { Category, Concept, ConceptSearch } from '../models/concept.model';
import { angularConcepts } from './concepts/angular';
import { csharpConcepts } from './concepts/csharp';
import { htmlConcepts } from './concepts/html';
import { javaScriptConcepts } from './concepts/javaScript';
import { rxjsConcepts } from './concepts/rxjs';
import { scssConcepts } from './concepts/scss';
import { typeScriptConcepts } from './concepts/typeScript';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {
  readonly categories = signal<Category[]>([
    { name: 'Angular', referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notebooks/74tdo4fae6312b4244d05bc0d9beb31504b05/notecards' },
    { name: 'TypeScript' },
    { name: 'JavaScript', referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notebooks/74tdob92f15c15b344e928c94b5eb8fed5709/notecards' },
    { name: 'Node.js', referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notebooks/22bt476df5a5c794347bf88309ac18f842346/notecards' },
    { name: 'C#', referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notebooks/74tdo9fe8c7f96c6c457182304c40c6f733b3/notecards' },
    { name: 'HTML' },
    { name: 'SCSS', referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/74tdo9d0e3ca5e6754fa89261cf9b01ec38d9' },
    { name: 'RxJS', referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/74tdo6de2284eb4094849927b2ce917ac5781' }
  ]);

  private readonly mockConcepts: ConceptSearch[] = [
    ...angularConcepts,
    ...typeScriptConcepts,
    ...javaScriptConcepts,
    ...csharpConcepts,
    ...htmlConcepts,
    ...scssConcepts,
    ...rxjsConcepts
  ].map(c => ({
    ...c,
    _category: c.category.toLowerCase(),
    _searchText: (
      c.title + ' ' +
      c.slangDefinition + ' ' +
      c.interviewDefinition
    ).toLowerCase()
  }));

  readonly concepts = signal<ConceptSearch[]>(this.mockConcepts);

  getConceptById(id: string): Concept | undefined {
    return this.concepts().find(c => c.id === id);
  }
}

