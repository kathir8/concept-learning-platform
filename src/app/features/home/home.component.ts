import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ConceptService } from '../../core/services/concept.service';
import { SearchService } from '../../core/services/search.service';
import { ConceptCardComponent } from '../../shared/components/concept-card/concept-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatIconModule, ConceptCardComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private conceptService = inject(ConceptService);
  private searchService = inject(SearchService);

  categories = this.conceptService.categories;
  searchQuery = this.searchService.searchQuery;

  searchResults = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    if (!q) return [];

    return this.searchService.searchConcepts(q).slice(0, 50);
  });
}
