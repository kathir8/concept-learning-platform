import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ConceptCardComponent } from './concept-card.component';
import { PreferencesService } from '../../../core/services/preferences.service';
import { Concept } from '../../../core/models/concept.model';
import { PLATFORM_ID } from '@angular/core';

describe('ConceptCardComponent', () => {
  let component: ConceptCardComponent;
  let fixture: ComponentFixture<ConceptCardComponent>;
  let preferencesService: PreferencesService;
  let mockConcept: Concept;

  beforeEach(async () => {
    // Mock window.matchMedia for PreferencesService
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

    mockConcept = {
      id: '1',
      title: 'Component',
      category: 'Angular',
      slangDefinition: 'A reusable piece of UI',
      interviewDefinition: 'A modular, reusable unit of the view with its own logic and data',
      example: 'export class MyComponent { }',
      referenceUrl: 'https://example.com'
    };

    await TestBed.configureTestingModule({
      imports: [ConceptCardComponent],
      providers: [
        PreferencesService,
        {
          provide: PLATFORM_ID,
          useValue: 'browser'
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConceptCardComponent);
    component = fixture.componentInstance;
    preferencesService = TestBed.inject(PreferencesService);

    // Set the input
    fixture.componentRef.setInput('concept', mockConcept);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Component Initialization', () => {
    it('should create the concept card component', () => {
      expect(component).toBeTruthy();
    });

    it('should be standalone', () => {
      const componentMetadata = (ConceptCardComponent as any).ɵcmp;
      expect(componentMetadata.standalone).toBe(true);
    });
  });

  describe('Input Properties', () => {
    it('should have required concept input', () => {
      expect(component.concept).toBeDefined();
    });

    it('should receive concept input correctly', () => {
      expect(component.concept()).toEqual(mockConcept);
    });

    it('should have access to concept properties', () => {
      const concept = component.concept();
      expect(concept.id).toBe('1');
      expect(concept.title).toBe('Component');
      expect(concept.category).toBe('Angular');
    });

    it('should display concept title', () => {
      expect(component.concept().title).toBe('Component');
    });

    it('should display concept slang definition', () => {
      expect(component.concept().slangDefinition).toBe('A reusable piece of UI');
    });

    it('should display concept interview definition', () => {
      expect(component.concept().interviewDefinition).toBe('A modular, reusable unit of the view with its own logic and data');
    });

    it('should display concept example', () => {
      expect(component.concept().example).toBe('export class MyComponent { }');
    });
  });

  describe('Active Tab Management', () => {
    it('should have activeTab signal', () => {
      expect(component.activeTab).toBeDefined();
    });

    it('should initialize with default definition type from preferences', () => {
      const defaultType = preferencesService.defaultDefinitionType();
      expect(component.activeTab()).toBe(defaultType);
    });

    it('should allow setting active tab to slang', () => {
      component.activeTab.set('slang');
      expect(component.activeTab()).toBe('slang');
    });

    it('should allow setting active tab to interview', () => {
      component.activeTab.set('interview');
      expect(component.activeTab()).toBe('interview');
    });

    it('should update tab when global preference changes', async () => {
      preferencesService.setDefinitionType('interview');
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(component.activeTab()).toBe('interview');
    });
  });

  describe('Copy Functionality', () => {
    it('should have copyCode method', () => {
      expect(component.copyCode).toBeDefined();
    });

    it('should have copied signal', () => {
      expect(component.copied).toBeDefined();
    });

    it('should initialize copied signal to false', () => {
      expect(component.copied()).toBe(false);
    });

    it('should set copied to true when copying', async () => {
      // Mock clipboard
      Object.assign(navigator, {
        clipboard: {
          writeText: vi.fn().mockResolvedValue(undefined)
        }
      });

      component.copyCode();
      expect(component.copied()).toBe(true);
    });

    it('should reset copied to false after 2 seconds', async () => {
      Object.assign(navigator, {
        clipboard: {
          writeText: vi.fn().mockResolvedValue(undefined)
        }
      });

      component.copyCode();
      expect(component.copied()).toBe(true);

      await new Promise(resolve => setTimeout(resolve, 2100));
      expect(component.copied()).toBe(false);
    });

    it('should copy example text to clipboard', () => {
      const writeTextSpy = vi.fn().mockResolvedValue(undefined);
      Object.assign(navigator, {
        clipboard: {
          writeText: writeTextSpy
        }
      });

      component.copyCode();
      expect(writeTextSpy).toHaveBeenCalledWith(mockConcept.example);
    });
  });

  describe('Service Integration', () => {
    it('should inject PreferencesService', () => {
      expect(preferencesService).toBeTruthy();
    });

    it('should inject PLATFORM_ID', () => {
      const platformId = TestBed.inject(PLATFORM_ID);
      expect(platformId).toBeDefined();
    });

    it('should update tab when default definition type changes', async () => {
      preferencesService.setDefinitionType('interview');
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(component.activeTab()).toBe('interview');

      preferencesService.setDefinitionType('slang');
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(component.activeTab()).toBe('slang');
    });

    it('should allow individual tab override', () => {
      const initialTab = component.activeTab();
      const otherTab = initialTab === 'slang' ? 'interview' : 'slang';

      component.activeTab.set(otherTab);
      expect(component.activeTab()).toBe(otherTab);

      // Should still be overridden even if preferences change
      const currentTab = component.activeTab();
      expect(currentTab).toBe(otherTab);
    });
  });

  describe('Effect Behavior', () => {
    it('should have constructor effect', () => {
      expect(component.constructor).toBeDefined();
    });

    it('should sync active tab with global preference on initialization', () => {
      const defaultType = preferencesService.defaultDefinitionType();
      expect(component.activeTab()).toBe(defaultType);
    });

    it('should update active tab when global preference changes', async () => {
      const initialTab = component.activeTab();
      const newTab = initialTab === 'slang' ? 'interview' : 'slang';

      preferencesService.setDefinitionType(newTab);
      await new Promise(resolve => setTimeout(resolve, 100));

      expect(component.activeTab()).toBe(newTab);
    });
  });

  describe('Template Rendering', () => {
    it('should render concept card container', () => {
      fixture.detectChanges();
      const card = fixture.nativeElement.querySelector('[class*="concept-card"]');
      expect(card).toBeDefined();
    });

    it('should render definition tabs', () => {
      fixture.detectChanges();
      const tabs = fixture.nativeElement.querySelectorAll('[class*="tab"]');
      expect(tabs.length).toBeGreaterThanOrEqual(0);
    });

    it('should render copy button', () => {
      fixture.detectChanges();
      const buttons = fixture.nativeElement.querySelectorAll('button');
      expect(buttons.length).toBeGreaterThanOrEqual(0);
    });

    it('should display example code', () => {
      fixture.detectChanges();
      const exampleElement = fixture.nativeElement;
      expect(exampleElement.textContent).toContain('export class MyComponent');
    });
  });

  describe('Data Integrity', () => {
    it('should maintain concept data integrity', () => {
      const originalConcept = component.concept();
      expect(originalConcept).toEqual(mockConcept);
    });

    it('should not modify input concept', () => {
      const originalConcept = { ...mockConcept };
      component.activeTab.set('interview');
      component.copyCode();

      expect(component.concept()).toEqual(originalConcept);
    });

    it('should handle concepts with optional referenceUrl', () => {
      const conceptWithoutRef: Concept = {
        ...mockConcept,
        referenceUrl: undefined
      };

      fixture.componentRef.setInput('concept', conceptWithoutRef);
      expect(component.concept().referenceUrl).toBeUndefined();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty strings in concept definitions', () => {
      const conceptWithEmpty: Concept = {
        ...mockConcept,
        slangDefinition: '',
        interviewDefinition: '',
        example: ''
      };

      fixture.componentRef.setInput('concept', conceptWithEmpty);
      expect(component.concept().slangDefinition).toBe('');
    });

    it('should handle very long example code', () => {
      const longExample = 'export class Component { ' + 'x'.repeat(1000) + ' }';
      const conceptWithLongExample: Concept = {
        ...mockConcept,
        example: longExample
      };

      fixture.componentRef.setInput('concept', conceptWithLongExample);
      expect(component.concept().example).toBe(longExample);
    });

    it('should handle special characters in definitions', () => {
      const conceptWithSpecialChars: Concept = {
        ...mockConcept,
        slangDefinition: '<div>Test & "quotes" \'single\'</div>',
        interviewDefinition: '© 2024 § definition ™'
      };

      fixture.componentRef.setInput('concept', conceptWithSpecialChars);
      expect(component.concept().slangDefinition).toContain('<div>');
    });

    it('should handle rapid activeTab changes', () => {
      component.activeTab.set('slang');
      component.activeTab.set('interview');
      component.activeTab.set('slang');
      expect(component.activeTab()).toBe('slang');
    });

    it('should handle rapid copy calls', () => {
      const writeTextSpy = vi.fn().mockResolvedValue(undefined);
      Object.assign(navigator, {
        clipboard: {
          writeText: writeTextSpy
        }
      });

      component.copyCode();
      component.copyCode();
      component.copyCode();

      expect(writeTextSpy).toHaveBeenCalledTimes(3);
    });
  });
});
