import { Concept } from "../../models/concept.model";

export const jasmineKarmaConcepts: Concept[] = [
  {
    id: 'jasmine-vs-karma',
    title: 'Jasmine vs Karma',
    category: 'Jasmine-Karma',
    slangDefinition: `Jasmine na test ezhudhuvathu — describe, it, expect ellam Jasmine syntax. Karma na adha run pannuvom — browser open panni test execute pannudhu, pass/fail result kaatudhu. Rendu-um together use pannuvanga Angular-la. Simple-a solla: Jasmine = exam question paper (questions ezhudhurom), Karma = exam invigilator (adha conduct pannuvom). ng test command run pannа — Karma browser open pannudhu, Jasmine tests execute aagudhu, results kaatudhu.`,
    interviewDefinition: `Jasmine is a behavior-driven testing framework used to write tests in Angular. It provides the syntax and structure for defining test suites (describe), test cases (it), setup hooks (beforeEach, afterEach), and assertions (expect with matchers like toBe, toEqual). Karma is a test runner that executes Jasmine tests in a real browser environment. It watches for file changes and re-runs tests automatically. Angular CLI integrates both — ng test launches Karma, which compiles the app using Webpack, opens a browser, runs all Jasmine tests, and reports pass/fail results. TestBed and HttpTestingController are Angular-specific testing utilities, not part of Jasmine or Karma.`,
    example: `// ══════════════════════════════════════════════
// JASMINE — Test writing syntax (100% Jasmine)
// ══════════════════════════════════════════════

// ✅ describe() → Jasmine
describe('CounterComponent', () => {

  // ✅ beforeEach() → Jasmine
  beforeEach(() => {
    // Setup code
  })

  // ✅ afterEach() → Jasmine
  afterEach(() => {
    // Cleanup code
  })

  // ✅ it() → Jasmine
  it('should increment count', () => {

    // ✅ expect() + matchers → Jasmine
    expect(component.count).toBe(1)
    expect(component.name).toEqual('Anjali')
    expect(component.isActive).toBeTruthy()
    expect(component.items).toContain('apple')
  })
})

// All of these → 100% Jasmine ✅


// ══════════════════════════════════════════════
// ANGULAR TESTING UTILITIES — Not Jasmine/Karma
// ══════════════════════════════════════════════

// ✅ TestBed → Angular Testing Utility
TestBed.configureTestingModule({
  declarations: [CounterComponent]
})

// ✅ ComponentFixture → Angular Testing Utility
const fixture = TestBed.createComponent(CounterComponent)
fixture.detectChanges()

// ✅ HttpTestingController → Angular Testing Utility
const httpMock = TestBed.inject(HttpTestingController)
httpMock.expectOne('/api/users')
httpMock.verify()


// ══════════════════════════════════════════════
// KARMA — Test Runner (no code writing needed)
// ══════════════════════════════════════════════

// Karma run panna terminal-la idhu type pannuvom:
// ng test

// Karma does:
// Step 1: Browser open pannudhu (Chrome)
// Step 2: All test files compile pannudhu
// Step 3: Jasmine tests execute pannudhu
// Step 4: Pass / Fail result kaatudhu
// Step 5: File change aana — auto re-run pannudhu ✅

// karma.conf.js — Karma configuration
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],          // Jasmine use pannuvom ✅
    browsers: ['Chrome'],             // Chrome-la run pannuvom ✅
    files: ['src/**/*.spec.ts'],      // Test files ✅
    singleRun: false,                 // Watch mode — auto re-run ✅
    restartOnFileChange: true
  })
}


// ══════════════════════════════════════════════
// FULL FLOW — Everything together
// ══════════════════════════════════════════════

// Step 1: Namma test ezhudhurom (Jasmine syntax)
describe('PatientService', () => {        // Jasmine ✅
  let service: PatientService

  beforeEach(() => {                      // Jasmine ✅
    TestBed.configureTestingModule({})    // Angular ✅
    service = TestBed.inject(PatientService) // Angular ✅
  })

  it('should fetch patients', () => {     // Jasmine ✅
    service.getPatients().subscribe(data => {
      expect(data.length).toBe(2)         // Jasmine ✅
    })
  })
})

// Step 2: ng test run pannuvom
// → Karma starts                        // Karma ✅
// → Chrome browser opens                // Karma ✅
// → Angular compiles (TestBed)          // Angular ✅
// → Jasmine tests execute               // Jasmine ✅
// → Results show (pass/fail)            // Karma ✅


// ══════════════════════════════════════════════
// CONCEPT MAP — Which belongs to what
// ══════════════════════════════════════════════

// JASMINE (Writing tests):
// describe()              → Test suite
// it()                    → Test case
// expect()                → Assertion
// beforeEach()            → Setup hook
// afterEach()             → Cleanup hook
// beforeAll()             → One-time setup
// afterAll()              → One-time cleanup
// toBe()                  → Exact match matcher
// toEqual()               → Deep equal matcher
// toBeTruthy()            → Truthy matcher
// toContain()             → Contains matcher
// toThrow()               → Error matcher
// jasmine.createSpyObj()  → Mock object create ✅
// spyOn()                 → Function spy ✅

// KARMA (Running tests):
// ng test                 → Karma start pannuvom
// Browser launch          → Chrome/Firefox
// Watch mode              → File change → auto re-run
// Pass/Fail report        → Terminal + browser kaatudhu
// karma.conf.js           → Karma configuration

// ANGULAR TESTING (Angular specific):
// TestBed                 → Angular environment simulate
// ComponentFixture        → Component wrapper
// fixture.detectChanges() → Change detection trigger
// TestBed.inject()        → DI system use panni service get
// HttpClientTestingModule → HTTP mock module
// HttpTestingController   → HTTP request intercept + control
// By.css()                → DOM query helper

// 📌 Summary:
// Jasmine  → Exam question paper (test ezhudhurom) ✅
// Karma    → Exam invigilator (test run pannuvom) ✅
// Angular  → Testing utilities (TestBed, Fixture) ✅
//
// Flow:
// Write test (Jasmine)
//   → ng test (Karma starts)
//   → Browser opens (Karma)
//   → Angular compiles (TestBed)
//   → Tests execute (Jasmine)
//   → Pass / Fail result (Karma) ✅`
  },
  {
    id: 'unit-testing-what-is',
    title: 'What is Unit Testing?',
    category: 'Jasmine-Karma',
    slangDefinition: `Unit Testing na small small code pieces correct-a work aagudha nu check pannuvom. Full app test pannuvom illa — one function, one component, one service mattum isolate panni test pannuvom. Indha function indha input-ku indha output kudukudha nu verify pannuvom. Real database, real API use pannuvom illa — logic mattum test pannuvom. Bugs early-a catch panna, refactor panna confidence kedaikka, code quality improve panna unit testing romba important.`,
    interviewDefinition: `Unit Testing is a software testing technique where individual units of code — functions, components, or services — are tested in isolation to verify their correctness. Each test validates that a specific piece of logic produces the expected output for a given input. Unit tests run fast, are independent of external systems (DB, API), and serve as documentation for code behavior. In Angular, Jasmine is the testing framework and Karma is the test runner used by default.`,
    example: `// ✅ Simple Counter Component
@Component({
  selector: 'app-counter',
  template: '<p>{{ count }}</p>'
})
export class CounterComponent {
  count = 0

  increment() { this.count++ }
  decrement() { this.count-- }
  reset()     { this.count = 0 }
}

// ✅ Unit Test — Logic only check pannuvom
describe('CounterComponent', () => {
  let component: CounterComponent

  beforeEach(() => {
    component = new CounterComponent() // Direct instantiation
  })

  it('should start with count 0', () => {
    expect(component.count).toBe(0)    // Initial value check ✅
  })

  it('should increment count', () => {
    component.increment()
    expect(component.count).toBe(1)    // Input → Run → Check output ✅
  })

  it('should decrement count', () => {
    component.count = 5
    component.decrement()
    expect(component.count).toBe(4)    // ✅
  })

  it('should reset count to 0', () => {
    component.count = 10
    component.reset()
    expect(component.count).toBe(0)    // ✅
  })
})

// 📌 Key Idea:
// Test LOGIC only — not entire app
// Input → Run function → Check output
// Fast, isolated, no real DB/API needed`
  },
  {
    id: 'unit-testing-structure',
    title: 'Test Structure (describe, it, beforeEach)',
    category: 'Jasmine-Karma',
    slangDefinition: `Test file-oda structure dhaan idhu — describe, it, beforeEach. describe na test group — "CounterComponent tests ellam inga irukku" nu organize pannuvom. it na oru single test case — "should increment count" maari specific behavior test pannuvom. beforeEach na every test run aagura munnade execute aagudhu — fresh setup pannuvom. expect na actual result check pannuvom — toBe, toEqual, toBeTruthy maari matchers use pannuvom. Important rule: it() count = beforeEach() run count — 5 tests irundha 5 times beforeEach run aagudhu.`,
    interviewDefinition: `Angular unit tests follow Jasmine's structure. describe() creates a test suite — a logical grouping of related tests. it() or test() defines individual test cases with a description and test function. beforeEach() runs setup code before every test — typically used for component/service instantiation to ensure test isolation. afterEach() runs cleanup after every test. expect() combined with matchers (toBe, toEqual, toBeTruthy, toContain) creates assertions. Each test must be completely independent — one test's state should not affect another.`,
    example: `// ✅ Full Test Structure
describe('CounterComponent', () => {   // Test Suite — Group pannuvom
  let component: CounterComponent

  // Runs BEFORE every single it() block
  beforeEach(() => {
    component = new CounterComponent() // Fresh instance every test ✅
    // 5 it() irundha → 5 times beforeEach run aagudhu
  })

  // Runs AFTER every single it() block
  afterEach(() => {
    // Cleanup if needed
    console.log('Test completed')
  })

  // Runs ONCE before all tests
  beforeAll(() => {
    console.log('All tests starting...')
  })

  // Runs ONCE after all tests
  afterAll(() => {
    console.log('All tests finished')
  })

  // ✅ it() — Individual test cases
  it('should initialize with count 0', () => {
    expect(component.count).toBe(0)          // Exact value check ✅
  })

  it('should increment count by 1', () => {
    component.increment()
    expect(component.count).toBe(1)          // ✅
  })

  it('should decrement count by 1', () => {
    component.count = 5
    component.decrement()
    expect(component.count).toBe(4)          // ✅
  })

  // ✅ Nested describe — Further grouping
  describe('reset functionality', () => {
    it('should reset to 0 from positive', () => {
      component.count = 10
      component.reset()
      expect(component.count).toBe(0)        // ✅
    })

    it('should reset to 0 from negative', () => {
      component.count = -5
      component.reset()
      expect(component.count).toBe(0)        // ✅
    })
  })
})

// ✅ Common Matchers
describe('Matchers Example', () => {
  it('should demonstrate common matchers', () => {
    // toBe — Exact equality (===)
    expect(1 + 1).toBe(2)                    // ✅
    expect('hello').toBe('hello')            // ✅

    // toEqual — Deep equality (objects/arrays)
    expect([1, 2, 3]).toEqual([1, 2, 3])     // ✅
    expect({ a: 1 }).toEqual({ a: 1 })       // ✅

    // toBeTruthy / toBeFalsy
    expect(true).toBeTruthy()                // ✅
    expect(0).toBeFalsy()                    // ✅
    expect('').toBeFalsy()                   // ✅

    // toContain — Array/string contains
    expect([1, 2, 3]).toContain(2)           // ✅
    expect('hello world').toContain('world') // ✅

    // toBeGreaterThan / toBeLessThan
    expect(5).toBeGreaterThan(3)             // ✅
    expect(2).toBeLessThan(5)               // ✅

    // toBeNull / toBeUndefined
    expect(null).toBeNull()                  // ✅
    expect(undefined).toBeUndefined()        // ✅

    // toThrow — Error throw check pannuvom
    expect(() => {
      throw new Error('Oops!')
    }).toThrow('Oops!')                      // ✅

    // not — Negate panna
    expect(1).not.toBe(2)                    // ✅
    expect([]).not.toContain(1)              // ✅
  })
})

// 📌 Key Rules:
// describe  → Test group (suite)
// it        → Single test case
// beforeEach → Fresh setup before EVERY test ✅
// afterEach  → Cleanup after EVERY test
// expect    → Assertion check
// it() count = beforeEach() run count ⚠️
// Each test must be INDEPENDENT ✅`
  },
  {
    id: 'unit-testing-testbed',
    title: 'Angular Testing with TestBed',
    category: 'Jasmine-Karma',
    slangDefinition: `TestBed na Angular testing environment simulate pannudhu — DI, template rendering, lifecycle hooks ellam real Angular maari work aagudhu. Direct new Component() panna Angular features work aagaathu — TestBed use panna ellam work aagudhu. fixture na component-oda wrapper — DOM access panna, component instance access panna use pannuvom. detectChanges() na Angular change detection manually trigger pannuvom — data binding update aaganum na adha call pannanum. DOM test panna nativeElement use pannuvom.`,
    interviewDefinition: `TestBed is Angular's primary testing utility that creates a testing module simulating the Angular environment including Dependency Injection, template compilation, and component lifecycle. configureTestingModule() sets up the testing module similar to @NgModule. createComponent() returns a ComponentFixture which wraps the component and provides access to the component instance, DOM, and change detection. detectChanges() triggers Angular's change detection cycle — must be called after component creation and after any state changes to reflect updates in the DOM. The fixture.nativeElement gives direct DOM access for UI assertions.`,
    example: `import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'

// ✅ Component to Test
@Component({
  selector: 'app-greeting',
  template: \`
    <h1>{{ title }}</h1>
    <p *ngIf="isVisible">Hello {{ name }}!</p>
    <button (click)="toggleVisibility()">Toggle</button>
    <input [(ngModel)]="name" />
  \`
})
export class GreetingComponent {
  title = 'Welcome'
  name = 'Anjali'
  isVisible = true

  toggleVisibility() {
    this.isVisible = !this.isVisible
  }
}

// ✅ TestBed Setup
describe('GreetingComponent', () => {
  let component: GreetingComponent
  let fixture: ComponentFixture<GreetingComponent>

  beforeEach(async () => {
    // Step 1: Configure Testing Module
    await TestBed.configureTestingModule({
      declarations: [GreetingComponent],  // Component declare pannuvom
      imports: [FormsModule],             // Required modules import pannuvom
      providers: []                       // Services provide pannuvom
    }).compileComponents()               // Templates compile pannuvom

    // Step 2: Create Component + Fixture
    fixture = TestBed.createComponent(GreetingComponent)
    component = fixture.componentInstance  // Component instance ✅

    // Step 3: Trigger initial change detection
    fixture.detectChanges()  // ngOnInit run aagudhu, DOM update aagudhu ✅
  })

  // ✅ Test 1: Component instance check
  it('should create component', () => {
    expect(component).toBeTruthy()         // Component created? ✅
  })

  // ✅ Test 2: DOM content check
  it('should display title in h1', () => {
    const h1 = fixture.nativeElement.querySelector('h1')
    expect(h1.textContent).toBe('Welcome') // DOM text check ✅
  })

  // ✅ Test 3: Logic + DOM together
  it('should show greeting when isVisible is true', () => {
    component.isVisible = true
    fixture.detectChanges()               // State change → detectChanges ✅

    const p = fixture.nativeElement.querySelector('p')
    expect(p).toBeTruthy()                // p element exists ✅
    expect(p.textContent).toContain('Hello Anjali!')
  })

  it('should hide greeting when isVisible is false', () => {
    component.isVisible = false
    fixture.detectChanges()               // Update DOM ✅

    const p = fixture.nativeElement.querySelector('p')
    expect(p).toBeNull()                  // *ngIf — p element gone ✅
  })

  // ✅ Test 4: Button click test
  it('should toggle visibility on button click', () => {
    const initialVisibility = component.isVisible  // true

    // Method 1: Direct button click via nativeElement
    const button = fixture.nativeElement.querySelector('button')
    button.click()
    fixture.detectChanges()

    expect(component.isVisible).toBe(!initialVisibility) // Toggled ✅

    // Method 2: Using fixture.debugElement (recommended)
    const btn = fixture.debugElement.query(By.css('button'))
    btn.triggerEventHandler('click', null)
    fixture.detectChanges()

    expect(component.isVisible).toBe(initialVisibility)  // Toggled back ✅
  })

  // ✅ Test 5: Input value check
  it('should display correct name', () => {
    component.name = 'Rohit'
    fixture.detectChanges()

    const p = fixture.nativeElement.querySelector('p')
    expect(p.textContent).toContain('Rohit') // ✅
  })

  // ✅ Test 6: By.css selector (cleaner)
  it('should find elements using By.css', () => {
    const h1 = fixture.debugElement.query(By.css('h1'))
    expect(h1.nativeElement.textContent).toBe('Welcome') // ✅

    const allParagraphs = fixture.debugElement.queryAll(By.css('p'))
    expect(allParagraphs.length).toBeGreaterThan(0)      // ✅
  })
})

// 📌 Key Concepts:
// TestBed.configureTestingModule() → Testing module setup
// TestBed.createComponent()        → Create component + fixture
// fixture.componentInstance        → Component class instance
// fixture.nativeElement            → Raw DOM element
// fixture.debugElement             → Angular wrapped DOM
// fixture.detectChanges()          → Trigger change detection ⚠️
// By.css()                         → CSS selector-based DOM query`
  },
  {
    id: 'unit-testing-services-di',
    title: 'Testing Services & Dependency Injection',
    category: 'Jasmine-Karma',
    slangDefinition: `Service testing na UI illa pure business logic test pannuvom. TestBed.inject() use panni service instance get pannuvom — DI system use panna Angular-oda service creation handle pannudhu. Service-la localStorage use pannuvom na window.localStorage mock pannuvom. Oru service vera service-a depend pannuvom na — real service use pannama fake (spy/stub) use pannuvom. Service without UI test panna fast, isolated, reliable aagudhu.`,
    interviewDefinition: `Service testing in Angular focuses on testing business logic without any UI involvement. TestBed.inject() retrieves the service instance from Angular's DI system. For services with dependencies, you can provide real or mock implementations in the providers array. Services are tested by calling their methods directly and asserting on return values or state changes. localStorage, sessionStorage, and other browser APIs are typically mocked to avoid test environment issues. Services with HTTP calls are tested using HttpClientTestingModule.`,
    example: `// ✅ Service 1: Simple Counter Service
@Injectable({ providedIn: 'root' })
export class CounterService {
  private count = 0

  increment()    { this.count++ }
  decrement()    { this.count-- }
  reset()        { this.count = 0 }
  getCount()     { return this.count }
  isPositive()   { return this.count > 0 }
}

// ✅ Testing CounterService
describe('CounterService', () => {
  let service: CounterService

  beforeEach(() => {
    TestBed.configureTestingModule({})        // Minimal setup ✅
    service = TestBed.inject(CounterService)  // DI through TestBed ✅
  })

  it('should be created', () => {
    expect(service).toBeTruthy()              // ✅
  })

  it('should start with count 0', () => {
    expect(service.getCount()).toBe(0)        // ✅
  })

  it('should increment count', () => {
    service.increment()
    service.increment()
    expect(service.getCount()).toBe(2)        // ✅
  })

  it('should decrement count', () => {
    service.increment()
    service.decrement()
    expect(service.getCount()).toBe(0)        // ✅
  })

  it('should reset count to 0', () => {
    service.increment()
    service.increment()
    service.reset()
    expect(service.getCount()).toBe(0)        // ✅
  })

  it('should return true when count is positive', () => {
    service.increment()
    expect(service.isPositive()).toBeTruthy() // ✅
  })
})


// ✅ Service 2: LocalStorage Service
@Injectable({ providedIn: 'root' })
export class StorageService {
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

// ✅ Testing StorageService — localStorage mock pannuvom
describe('StorageService', () => {
  let service: StorageService
  let mockLocalStorage: { [key: string]: string } = {}

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(StorageService)

    // ✅ Mock localStorage — real browser storage use pannuvom illa
    mockLocalStorage = {}

    spyOn(localStorage, 'setItem').and.callFake(
      (key: string, value: string) => { mockLocalStorage[key] = value }
    )
    spyOn(localStorage, 'getItem').and.callFake(
      (key: string) => mockLocalStorage[key] || null
    )
    spyOn(localStorage, 'removeItem').and.callFake(
      (key: string) => { delete mockLocalStorage[key] }
    )
    spyOn(localStorage, 'clear').and.callFake(
      () => { mockLocalStorage = {} }
    )
  })

  it('should store and retrieve item', () => {
    service.setItem('user', { name: 'Anjali' })
    const result = service.getItem<{ name: string }>('user')
    expect(result?.name).toBe('Anjali')       // ✅
  })

  it('should return null for missing key', () => {
    const result = service.getItem('nonexistent')
    expect(result).toBeNull()                 // ✅
  })

  it('should remove item', () => {
    service.setItem('token', 'abc123')
    service.removeItem('token')
    expect(service.getItem('token')).toBeNull() // ✅
  })

  it('should clear all items', () => {
    service.setItem('key1', 'value1')
    service.setItem('key2', 'value2')
    service.clear()
    expect(service.getItem('key1')).toBeNull()  // ✅
    expect(service.getItem('key2')).toBeNull()  // ✅
  })
})


// ✅ Service 3: Service with Dependency
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private storageService: StorageService) {}

  login(user: any) {
    this.storageService.setItem('currentUser', user)
    return true
  }

  logout() {
    this.storageService.removeItem('currentUser')
  }

  getCurrentUser() {
    return this.storageService.getItem('currentUser')
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser()
  }
}

// ✅ Testing AuthService with Mock Dependency
describe('AuthService', () => {
  let authService: AuthService
  let mockStorageService: jasmine.SpyObj<StorageService>

  beforeEach(() => {
    // ✅ Create mock StorageService — real one use pannuvom illa
    mockStorageService = jasmine.createSpyObj('StorageService', [
      'setItem',
      'getItem',
      'removeItem'
    ])

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {
          provide: StorageService,
          useValue: mockStorageService  // Real-a replace, mock use pannuvom ✅
        }
      ]
    })

    authService = TestBed.inject(AuthService)
  })

  it('should login user and store in storage', () => {
    const user = { name: 'Anjali', role: 'admin' }
    authService.login(user)

    // StorageService.setItem called with correct args? ✅
    expect(mockStorageService.setItem)
      .toHaveBeenCalledWith('currentUser', user)
  })

  it('should return true when user is logged in', () => {
    mockStorageService.getItem.and.returnValue({ name: 'Anjali' }) // Mock return ✅
    expect(authService.isLoggedIn()).toBeTruthy()                  // ✅
  })

  it('should return false when no user logged in', () => {
    mockStorageService.getItem.and.returnValue(null)  // Mock null return ✅
    expect(authService.isLoggedIn()).toBeFalsy()       // ✅
  })

  it('should logout and remove user from storage', () => {
    authService.logout()
    expect(mockStorageService.removeItem)
      .toHaveBeenCalledWith('currentUser')             // ✅
  })
})

// 📌 Key Concepts:
// TestBed.inject()           → Get service from DI ✅
// jasmine.createSpyObj()     → Mock service create pannuvom ✅
// useValue: mockService      → Real service replace pannuvom ✅
// spyOn(localStorage, ...)   → Browser API mock pannuvom ✅
// Test service WITHOUT UI    → Fast, isolated, reliable ✅`
  },
  {
    id: 'unit-testing-http-mocking',
    title: 'HTTP Testing & Mocking (HttpClientTestingModule)',
    category: 'Jasmine-Karma',
    slangDefinition: `Unit test-la real API call panna koodathu — slow, unreliable, network depend pannudhu. HttpClientTestingModule use panna fake HTTP layer create aagudhu. httpMock.expectOne() use panna specific URL-ku vandha request catch pannuvom. req.flush() use panna fake response return pannuvom. req.request.method check panna HTTP method (GET/POST) verify pannuvom. httpMock.verify() use panna unexpected requests irukka nu check pannuvom — test end-la always call pannanum. Real API never call aagaathu — controlled fake response use pannuvom.`,
    interviewDefinition: `HTTP testing in Angular uses HttpClientTestingModule and HttpTestingController to intercept and mock HTTP requests without making actual network calls. HttpClientTestingModule replaces the real HttpClient with a test double. httpMock.expectOne() captures a request matching a URL or RequestMatch object. req.flush() provides the mock response data. req.error() simulates HTTP errors. expectOne() also validates that exactly one matching request was made. httpMock.verify() after each test ensures no unexpected requests were made, preventing test pollution. This approach makes HTTP tests fast, deterministic, and independent of network conditions.`,
    example: `import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http'

// ✅ Service with HTTP calls
@Injectable({ providedIn: 'root' })
export class PatientService {
  private apiUrl = 'https://api.hospital.com'

  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http.get<any[]>(\`\${this.apiUrl}/patients\`)
  }

  getPatientById(id: string) {
    return this.http.get<any>(\`\${this.apiUrl}/patients/\${id}\`)
  }

  createPatient(patient: any) {
    return this.http.post<any>(\`\${this.apiUrl}/patients\`, patient)
  }

  updatePatient(id: string, data: any) {
    return this.http.put<any>(\`\${this.apiUrl}/patients/\${id}\`, data)
  }

  deletePatient(id: string) {
    return this.http.delete<any>(\`\${this.apiUrl}/patients/\${id}\`)
  }
}

// ✅ Testing PatientService HTTP calls
describe('PatientService', () => {
  let service: PatientService
  let httpMock: HttpTestingController  // Fake HTTP controller ✅

  const mockPatients = [
    { id: '1', name: 'Anjali', age: 26 },
    { id: '2', name: 'Rohit',  age: 30 }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Real HttpClient replace pannuvom ✅
      providers: [PatientService]
    })

    service  = TestBed.inject(PatientService)
    httpMock = TestBed.inject(HttpTestingController) // Mock controller ✅
  })

  // ✅ Cleanup — After every test verify pannuvom
  afterEach(() => {
    httpMock.verify()  // Unexpected requests irukka? Error throw pannudhu ✅
  })

  // ✅ Test 1: GET request
  it('should fetch all patients', () => {
    service.getPatients().subscribe(patients => {
      expect(patients.length).toBe(2)         // Response check ✅
      expect(patients[0].name).toBe('Anjali') // ✅
    })

    // Step 1: Request catch pannuvom
    const req = httpMock.expectOne(
      'https://api.hospital.com/patients'     // URL match pannanum ✅
    )

    // Step 2: HTTP method verify pannuvom
    expect(req.request.method).toBe('GET')   // GET request? ✅

    // Step 3: Fake response flush pannuvom
    req.flush(mockPatients)                  // Mock data return pannuvom ✅
  })

  // ✅ Test 2: GET by ID
  it('should fetch patient by id', () => {
    const mockPatient = { id: '1', name: 'Anjali', age: 26 }

    service.getPatientById('1').subscribe(patient => {
      expect(patient.name).toBe('Anjali')    // ✅
      expect(patient.id).toBe('1')           // ✅
    })

    const req = httpMock.expectOne(
      'https://api.hospital.com/patients/1'
    )
    expect(req.request.method).toBe('GET')   // ✅
    req.flush(mockPatient)                   // Fake response ✅
  })

  // ✅ Test 3: POST request
  it('should create a new patient', () => {
    const newPatient  = { name: 'Sara', age: 28 }
    const mockResponse = { id: '3', ...newPatient }

    service.createPatient(newPatient).subscribe(response => {
      expect(response.id).toBe('3')          // ✅
      expect(response.name).toBe('Sara')     // ✅
    })

    const req = httpMock.expectOne(
      'https://api.hospital.com/patients'
    )
    expect(req.request.method).toBe('POST')  // POST check ✅
    expect(req.request.body).toEqual(newPatient) // Request body check ✅
    req.flush(mockResponse)                  // Fake response ✅
  })

  // ✅ Test 4: PUT request
  it('should update patient', () => {
    const updateData   = { name: 'Anjali Updated', age: 27 }
    const mockResponse = { id: '1', ...updateData }

    service.updatePatient('1', updateData).subscribe(response => {
      expect(response.name).toBe('Anjali Updated') // ✅
    })

    const req = httpMock.expectOne(
      'https://api.hospital.com/patients/1'
    )
    expect(req.request.method).toBe('PUT')   // PUT check ✅
    req.flush(mockResponse)
  })

  // ✅ Test 5: DELETE request
  it('should delete patient', () => {
    service.deletePatient('1').subscribe(response => {
      expect(response).toBeTruthy()          // ✅
    })

    const req = httpMock.expectOne(
      'https://api.hospital.com/patients/1'
    )
    expect(req.request.method).toBe('DELETE') // DELETE check ✅
    req.flush({ success: true })              // Fake response ✅
  })

  // ✅ Test 6: Error handling
  it('should handle 404 error', () => {
    service.getPatientById('999').subscribe({
      next: () => fail('Should have failed'),  // Should not reach here ❌
      error: (error) => {
        expect(error.status).toBe(404)         // Error status check ✅
        expect(error.statusText).toBe('Not Found')
      }
    })

    const req = httpMock.expectOne(
      'https://api.hospital.com/patients/999'
    )

    // ✅ Simulate error response
    req.flush('Patient not found', {
      status: 404,
      statusText: 'Not Found'
    })
  })

  // ✅ Test 7: Request headers check
  it('should send correct headers', () => {
    service.getPatients().subscribe()

    const req = httpMock.expectOne(
      'https://api.hospital.com/patients'
    )

    // Headers verify pannuvom
    expect(req.request.headers.get('Content-Type'))
      .toBe('application/json')              // ✅

    req.flush(mockPatients)
  })

  // ✅ Test 8: Multiple requests
  it('should handle multiple requests', () => {
    service.getPatientById('1').subscribe()
    service.getPatientById('2').subscribe()

    // expectOne — exactly one request match aaganum
    const req1 = httpMock.expectOne(
      'https://api.hospital.com/patients/1'
    )
    const req2 = httpMock.expectOne(
      'https://api.hospital.com/patients/2'
    )

    req1.flush({ id: '1', name: 'Anjali' })
    req2.flush({ id: '2', name: 'Rohit' })

    // verify() — unexpected requests illana confirm pannuvom ✅
    httpMock.verify()
  })
})

// 📌 Key Concepts:
// HttpClientTestingModule  → Real HttpClient replace pannuvom ✅
// HttpTestingController    → Requests intercept + control pannuvom
// httpMock.expectOne(url)  → Specific URL request catch pannuvom
// req.request.method       → HTTP method verify pannuvom (GET/POST/PUT/DELETE)
// req.request.body         → Request body verify pannuvom
// req.flush(data)          → Fake success response return pannuvom ✅
// req.flush(msg, {status}) → Fake error response simulate pannuvom ✅
// httpMock.verify()        → Unexpected requests check pannuvom ⚠️ (afterEach-la always call)
// Real API never called    → Fast, deterministic, reliable tests ✅`
  },

]