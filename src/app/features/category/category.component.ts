import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { ConceptService } from '../../core/services/concept.service';
import { SearchService } from '../../core/services/search.service';
import { ConceptCardComponent } from '../../shared/components/concept-card/concept-card.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatIconModule, ConceptCardComponent],
  templateUrl: './category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent {
  private route = inject(ActivatedRoute);
  private conceptService = inject(ConceptService);
  private searchService = inject(SearchService);

  categoryName = computed(() => this.route.snapshot.paramMap.get('name') || '');

  currentCategory = computed(() => {
    const name = this.categoryName().toLowerCase();
    return this.conceptService.categories().find(c => c.name.toLowerCase() === name);
  });

  searchQuery = this.searchService.searchQuery;

  filteredConcepts = computed(() => {
    const cat = this.categoryName().toLowerCase();
    const q = this.searchQuery().trim().toLowerCase();

    const concepts = this.conceptService.concepts();

    // category filter
    let list = concepts.filter(c => c._category === cat);

    // fuzzy search filter
    if (q) {
      const results = this.searchService.searchConcepts(q);
      const ids = new Set(results.map(c => c.id));

      list = list.filter(c => ids.has(c.id));
      return list.slice(0, 50);
    }

    return list;
  });
}
