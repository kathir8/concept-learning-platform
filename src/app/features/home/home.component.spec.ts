import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ConceptService } from '../../core/services/concept.service';
import { SearchService } from '../../core/services/search.service';
import { PLATFORM_ID } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let conceptService: ConceptService;
  let searchService: SearchService;

  beforeEach(async () => {
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        ConceptService,
        SearchService,
        {
          provide: PLATFORM_ID,
          useValue: 'browser'
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    conceptService = TestBed.inject(ConceptService);
    searchService = TestBed.inject(SearchService);
  });

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  it('should be standalone', () => {
    const componentMetadata = (HomeComponent as any).ɵcmp;
    expect(componentMetadata.standalone).toBe(true);
  });

  it('should have categories signal', () => {
    expect(component.categories).toBeDefined();
    const categories = component.categories();
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should contain expected categories', () => {
    const categories = component.categories();
    const names = categories.map(c => c.name);
    expect(names).toContain('Angular');
    expect(names).toContain('TypeScript');
    expect(names).toContain('JavaScript');
  });

  it('should have searchQuery signal', () => {
    expect(component.searchQuery).toBeDefined();
    expect(component.searchQuery()).toBe('');
  });

  it('should have searchResults computed signal', () => {
    expect(component.searchResults).toBeDefined();
    const results = component.searchResults();
    expect(Array.isArray(results)).toBe(true);
  });

  it('should return empty results when search query is empty', () => {
    searchService.updateSearch('');
    expect(component.searchResults()).toEqual([]);
  });

  it('should return empty results when search query is whitespace only', () => {
    searchService.updateSearch('   ');
    expect(component.searchResults()).toEqual([]);
  });

  it('should update search query through service', () => {
    searchService.updateSearch('test');
    expect(component.searchQuery()).toBe('test');
  });

  it('should have ConceptService injected', () => {
    expect(conceptService).toBeTruthy();
    const concepts = conceptService.concepts();
    expect(concepts.length).toBeGreaterThan(0);
  });

  it('should have SearchService injected', () => {
    expect(searchService).toBeTruthy();
  });

  it('should render component on detect changes', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeTruthy();
  });
});

