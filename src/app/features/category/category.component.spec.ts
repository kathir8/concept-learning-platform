import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CategoryComponent } from './category.component';
import { ConceptService } from '../../core/services/concept.service';
import { SearchService } from '../../core/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let conceptService: ConceptService;
  let searchService: SearchService;
  let activatedRoute: ActivatedRoute;

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
      imports: [CategoryComponent],
      providers: [
        ConceptService,
        SearchService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: vi.fn((key: string) => {
                  if (key === 'name') return 'Angular';
                  return null;
                })
              }
            }
          }
        },
        {
          provide: PLATFORM_ID,
          useValue: 'browser'
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    conceptService = TestBed.inject(ConceptService);
    searchService = TestBed.inject(SearchService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create the category component', () => {
    expect(component).toBeTruthy();
  });

  it('should be standalone', () => {
    const componentMetadata = (CategoryComponent as any).ɵcmp;
    expect(componentMetadata.standalone).toBe(true);
  });

  it('should have categoryName signal', () => {
    expect(component.categoryName).toBeDefined();
    expect(component.categoryName()).toBe('Angular');
  });

  it('should have currentCategory signal', () => {
    expect(component.currentCategory).toBeDefined();
    const category = component.currentCategory();
    expect(category).toBeDefined();
    if (category) {
      expect(category.name).toBe('Angular');
    }
  });

  it('should have searchQuery signal', () => {
    expect(component.searchQuery).toBeDefined();
    expect(component.searchQuery()).toBe('');
  });

  it('should update search query from service', () => {
    searchService.updateSearch('component');
    expect(component.searchQuery()).toBe('component');
  });

  it('should have filteredConcepts signal', () => {
    expect(component.filteredConcepts).toBeDefined();
    const filtered = component.filteredConcepts();
    expect(Array.isArray(filtered)).toBe(true);
  });

  it('should filter concepts by category', () => {
    const filtered = component.filteredConcepts();
    filtered.forEach(concept => {
      expect(concept._category.toLowerCase()).toBe('angular');
    });
  });

  it('should have all concepts from service', () => {
    const concepts = conceptService.concepts();
    expect(Array.isArray(concepts)).toBe(true);
    expect(concepts.length).toBeGreaterThan(0);
  });

  it('should have Angular concepts in service', () => {
    const concepts = conceptService.concepts();
    const angularConcepts = concepts.filter(c => c._category === 'angular');
    expect(angularConcepts.length).toBeGreaterThan(0);
  });

  it('should inject ActivatedRoute', () => {
    expect(activatedRoute).toBeTruthy();
  });

  it('should inject ConceptService', () => {
    expect(conceptService).toBeTruthy();
  });

  it('should inject SearchService', () => {
    expect(searchService).toBeTruthy();
  });

  it('should render component on detect changes', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeTruthy();
  });
});

