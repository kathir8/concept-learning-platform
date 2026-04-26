import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';
import { RouterTestingModule } from '@angular/router/testing';
import { PLATFORM_ID } from '@angular/core';

describe('App Component', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

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
      imports: [App, RouterTestingModule],
      providers: [
        {
          provide: PLATFORM_ID,
          useValue: 'browser'
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should be standalone', () => {
    const componentMetadata = (App as any).ɵcmp;
    expect(componentMetadata.standalone).toBe(true);
  });

  it('should have app-root selector', () => {
    const componentMetadata = (App as any).ɵcmp;
    expect(componentMetadata.selectors[0][0]).toBe('app-root');
  });

  it('should render the component in DOM', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  });

  it('should have RouterOutlet in imports', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
  });

  it('should have HeaderComponent in imports', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
  });
});
