import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';
import { PreferencesService } from '../../../core/services/preferences.service';
import { SearchService } from '../../../core/services/search.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  theme = inject(ThemeService);
  preferences = inject(PreferencesService);
  searchService = inject(SearchService);
  private router = inject(Router);

  searchControl = new FormControl('');
  private subs = new Subscription();

  ngOnInit() {
    // Set initial value from service if any
    if (this.searchService.searchQuery()) {
      this.searchControl.setValue(this.searchService.searchQuery(), { emitEvent: false });
    }

    // Handle debounce for search input
    this.subs.add(
      this.searchControl.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(value => {
        this.searchService.updateSearch(value || '');
      })
    );

    // Clear search when navigating to a new page
    this.subs.add(
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.searchControl.setValue('');
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }
}

