import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ThemeService } from '../../../core/services/theme.service';
import { PreferencesService } from '../../../core/services/preferences.service';
import { SearchService } from '../../../core/services/search.service';
import { PLATFORM_ID } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let themeService: ThemeService;
  let preferencesService: PreferencesService;
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
      imports: [HeaderComponent, ReactiveFormsModule, RouterTestingModule],
      providers: [
        ThemeService,
        PreferencesService,
        SearchService,
        {
          provide: PLATFORM_ID,
          useValue: 'browser'
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
    preferencesService = TestBed.inject(PreferencesService);
    searchService = TestBed.inject(SearchService);
  });

  afterEach(() => {
    if (component) {
      component.ngOnDestroy();
    }
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should be standalone', () => {
    const componentMetadata = (HeaderComponent as any).ɵcmp;
    expect(componentMetadata.standalone).toBe(true);
  });

  it('should implement OnInit and OnDestroy', () => {
    expect(component.ngOnInit).toBeDefined();
    expect(component.ngOnDestroy).toBeDefined();
  });

  it('should inject ThemeService', () => {
    expect(component.theme).toBe(themeService);
  });

  it('should inject PreferencesService', () => {
    expect(component.preferences).toBe(preferencesService);
  });

  it('should inject SearchService', () => {
    expect(component.searchService).toBe(searchService);
  });

  it('should have a search form control', () => {
    expect(component.searchControl).toBeDefined();
    expect(component.searchControl instanceof FormControl).toBe(true);
  });

  it('should initialize search control with empty value', () => {
    expect(component.searchControl.value).toBe('');
  });

  it('should have clearSearch method', () => {
    expect(component.clearSearch).toBeDefined();
    expect(typeof component.clearSearch).toBe('function');
  });

  it('should clear search control on clearSearch call', () => {
    component.searchControl.setValue('test query');
    component.clearSearch();
    expect(component.searchControl.value).toBe('');
  });

  it('should expose theme service with isDarkMode signal', () => {
    expect(component.theme).toBeTruthy();
    expect(component.theme.isDarkMode).toBeDefined();
  });

  it('should expose preferences service with defaultDefinitionType signal', () => {
    expect(component.preferences).toBeTruthy();
    expect(component.preferences.defaultDefinitionType).toBeDefined();
  });

  it('should be able to toggle theme', () => {
    const toggleSpy = vi.spyOn(component.theme, 'toggleTheme');
    component.theme.toggleTheme();
    expect(toggleSpy).toHaveBeenCalled();
  });

  it('should be able to toggle definition type', () => {
    const toggleSpy = vi.spyOn(component.preferences, 'toggleDefinitionType');
    component.preferences.toggleDefinitionType();
    expect(toggleSpy).toHaveBeenCalled();
  });

  it('should unsubscribe on destroy', () => {
    component.ngOnInit();
    expect(component['subs'].closed).toBe(false);
    component.ngOnDestroy();
    expect(component['subs'].closed).toBe(true);
  });

  it('should render header element', () => {
    fixture.detectChanges();
    const header = fixture.nativeElement.querySelector('header');
    expect(header).toBeDefined();
  });

  it('should render component on detect changes', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement).toBeTruthy();
  });
});

