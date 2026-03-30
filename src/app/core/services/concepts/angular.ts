import { Concept } from '../../models/concept.model';

export const angularConcepts: Concept[] = [
  {
    id: 'update-angular-packages',
    title: 'Update Angular Packages',
    category: 'Angular',
    slangDefinition: `Angular update pannradhu na project-ah latest version-ku kondu pogaradhu so bugs fix and new features use panna mudiyum. Idha CLI commands use pannitu easy-a pannuvom. Indha example-la global CLI, Angular core, and dependencies ellam step-by-step update pannrom.`,
    interviewDefinition: `Updating Angular packages means upgrading Angular and its dependencies to the latest version to get new features and fixes. It is done using Angular CLI and npm commands. The example shows updating global CLI, Angular core, and project dependencies.`,
    example: `# 1. Update the global Angular CLI
npm install -g @angular/cli@latest

# 2. Update Angular core and CLI in your project (e.g., to v21)
ng update @angular/core @angular/cli@21 --force

# 3. Update all other third-party dependencies in package.json
npx npm-check-updates -u && npm install`
  },
  {
    id: 'angular-advantages',
    title: 'Advantages of Angular',
    category: 'Angular',
    slangDefinition: `Angular use pannradhu na common features already built-in irukkum so separate libraries install panna thevai illa. Idhu development easy and fast aagum. Indha example-la Router, HTTP, Forms modules direct-a import pannitu use pannrom.`,
    interviewDefinition: `Angular provides built-in modules for common functionalities, reducing the need for external libraries. This simplifies development. The example shows importing RouterModule, HttpClientModule, and ReactiveFormsModule.`,
    example: `// Everything is built-in, just import it!
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';`
  },
  {
    id: 'change-detection',
    title: 'Change Detection Strategy',
    category: 'Angular',
    slangDefinition: `Change detection na data change aana UI update pannradhu, performance improve panna use pannuvom. Indha example-la OnPush use pannitu input change aana mattum component update aagudhu.`,
    interviewDefinition: `Change detection updates the UI when data changes, and OnPush improves performance by updating only when inputs change. The example demonstrates ChangeDetectionStrategy.OnPush.`,
    example: `@Component({
  selector: 'app-optimized',
  template: \`<div>{{ data }}</div>\`,
  // Tells Angular to only check this component if its inputs change
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class OptimizedComponent {
  @Input() data: string;
}`
  },
  {
    id: 'rxjs',
    title: 'RxJS',
    category: 'Angular',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/74tdo6de2284eb4094849927b2ce917ac5781',
    slangDefinition: `RxJS async events handle panna use pannuvom so data stream control panna mudiyum. Idhu performance improve pannum. Indha example-la input event listen pannitu debounce pannitu value map pannitu process pannrom.`,
    interviewDefinition: `RxJS is used for handling asynchronous data streams efficiently. It helps control and transform event data. The example shows using fromEvent with debounceTime and map to process input values.`,
    example: `import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

// Listen to input events, wait 300ms after the user stops typing, then get the value
const searchInput = document.getElementById('search');
fromEvent(searchInput, 'input').pipe(
  debounceTime(300),
  map((event: any) => event.target.value)
).subscribe(value => console.log('Searching for:', value));`
  },
  {
    id: 'state-management',
    title: 'State Management',
    category: 'Angular',
    slangDefinition: `State management na app data manage pannradhu so components share panna easy aagum. Idhu centralized control kudukkum. Indha example-la service-la signal use pannitu data store pannitu update pannrom.`,
    interviewDefinition: `State management is used to manage and share application data efficiently. It helps maintain consistency across components. The example shows using a service with signals to store and update state.`,
    example: `// Using a simple Service with a Signal for state management
@Injectable({ providedIn: 'root' })
export class CartStateService {
  private items = signal<Product[]>([]);
  
  readonly cartItems = this.items.asReadonly();
  
  addToCart(product: Product) {
    this.items.update(current => [...current, product]);
  }
}`
  },
  {
    id: 'ngrx',
    title: 'NgRx',
    category: 'Angular',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/74tdo8cf79db989874f90be54026d00a9f988',
    slangDefinition: `NgRx state manage panna strict pattern follow pannum so predictable updates kidaikkum. Idhu debugging easy pannum. Indha example-la action create pannitu reducer-la state update pannitu selector-la data eduthom.`,
    interviewDefinition: `NgRx is used for structured state management with predictable state changes. It improves maintainability and debugging. The example shows actions, reducers, and selectors working together.`,
    example: `// 1. Action
export const loadUsers = createAction('[User List] Load Users');

// 2. Reducer
export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);

// 3. Selector
export const selectAllUsers = createSelector(selectUserState, state => state.users);`
  },
  {
    id: 'component',
    title: 'Component (@Component)',
    category: 'Angular',
    slangDefinition: `Component na UI create panna use pannuvom, HTML + CSS + TS combine pannum. Idhu reusable. Indha example-la template-la variable bind pannitu UI display pannrom.`,
    interviewDefinition: `A component is used to define a part of the UI with template, styles, and logic. It helps create reusable UI blocks. The example shows binding a class property to the template.`,
    example: `// Generate with: ng g c my-component
@Component({
  selector: 'app-user-profile',
  template: \`
    <div class="profile">
      <h2>{{ name }}</h2>
    </div>
  \`,
  styles: [\`.profile { padding: 20px; }\`]
})
export class UserProfileComponent {
  name = 'John Doe';
}`
  },
  {
    id: 'services',
    title: 'Services (@Injectable)',
    category: 'Angular',
    slangDefinition: `Service logic separate-a vechitu reuse panna use pannuvom. Idhu clean architecture kudukkum. Indha example-la HttpClient inject pannitu API call pannrom.`,
    interviewDefinition: `Services are used to handle reusable logic and API calls, improving code separation. The example shows using HttpClient through dependency injection.`,
    example: `// Generate with: ng g s my-service
@Injectable({
  providedIn: 'root' // Singleton available everywhere
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('/api/users');
  }
}`
  },
  {
    id: 'angular-vs-react',
    title: 'Angular vs React',
    category: 'Angular',
    slangDefinition: `Angular-la two-way binding easy-a use pannuvom, React-la manual update pannuvom. Idhu difference purinjika important. Indha example-la ngModel vs useState kaamikudhu.`,
    interviewDefinition: `Angular supports two-way binding, while React uses one-way binding with manual state updates. The example compares ngModel and useState.`,
    example: `/* Angular (Two-way binding built-in) */
// <input [(ngModel)]="name">

/* React (One-way binding, manual update) */
// const [name, setName] = useState('');
// <input value={name} onChange={e => setName(e.target.value)} />`
  },
  {
    id: 'angular-expressions',
    title: 'Angular vs JS Expressions',
    category: 'Angular',
    slangDefinition: `Angular template-la component data mattum access panna mudiyum so safe execution. Indha example-la title work aagudhu but window use panna mudiyadhu.`,
    interviewDefinition: `Angular expressions are restricted to component scope for safety. The example shows component properties working but global objects like window are not accessible.`,
    example: `<!-- Angular Template -->
<!-- This works because 'title' is a property of the component -->
<h1>{{ title }}</h1>

<!-- This will FAIL because 'window' is not on the component scope -->
<!-- <h1>{{ window.location.href }}</h1> -->`
  },
  {
    id: 'spa',
    title: 'Single Page Application (SPA)',
    category: 'Angular',
    slangDefinition: `SPA use pannumbodhu page reload illaama navigation pannuvom so fast and smooth experience kidaikkum. Indha example-la routerLink use pannitu router-outlet-la content change aagudhu.`,
    interviewDefinition: `A Single Page Application allows navigation without full page reload, improving user experience. The example shows routing using routerLink and router-outlet.`,
    example: `// In an SPA, clicking a link doesn't trigger a browser navigation.
// Instead, the Angular Router intercepts it and swaps the component.
<a routerLink="/dashboard">Go to Dashboard</a>
<router-outlet></router-outlet> <!-- Content swaps here -->`
  },
  {
    id: 'directives',
    title: 'Directives',
    category: 'Angular',
    slangDefinition: `Directives HTML behavior control panna use pannuvom so UI dynamic aagum. Indha example-la component tag, condition rendering, and ngClass use pannitu UI control pannrom.`,
    interviewDefinition: `Directives modify DOM structure and behavior dynamically. The example shows component, structural, and attribute directives.`,
    example: `<!-- 1. Component Directive (has a template) -->
<app-header></app-header>

<!-- 2. Structural Directive (changes DOM layout) -->
@if (isVisible) { <div>Visible</div> }
<!-- Legacy: <div *ngIf="isVisible">Visible</div> -->

<!-- 3. Attribute Directive (changes appearance/behavior) -->
<div [ngClass]="{'active': isActive}">Styled Div</div>`
  },
  {
    id: 'data-binding',
    title: 'Data Binding',
    category: 'Angular',
    slangDefinition: `Data binding TS and HTML connect panna use pannuvom so UI sync aagum. Indha example-la interpolation, property, event, two-way binding use pannrom.`,
    interviewDefinition: `Data binding connects component logic with the UI for synchronization. The example shows interpolation, property binding, event binding, and two-way binding.`,
    example: `<!-- 1. Interpolation (Component to DOM) -->
<p>Hello {{ name }}</p>

<!-- 2. Property Binding (Component to DOM property) -->
<img [src]="imageUrl">

<!-- 3. Event Binding (DOM event to Component) -->
<button (click)="save()">Save</button>

<!-- 4. Two-Way Binding (Syncs both ways) -->
<input [(ngModel)]="username">`
  },
  {
    id: 'modules',
    title: 'Modules (NgModules)',
    category: 'Angular',
    slangDefinition: `Modules use pannitu app structure organize pannuvom so maintain easy aagum. Indha example-la declarations, imports, providers, exports define pannrom.`,
    interviewDefinition: `NgModules organize application structure by grouping related components and services. The example shows declarations, imports, providers, and exports.`,
    example: `@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, FormsModule],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class AuthModule { }`
  },
  {
    id: 'ng-container-vs-template',
    title: 'ng-container vs ng-template',
    category: 'Angular',
    slangDefinition: `Conditional rendering clean-a panna use pannuvom so extra DOM avoid pannalaam. Indha example-la ng-container group pannudhu, ng-template else-la use pannudhu.`,
    interviewDefinition: `ng-container helps group elements without adding extra DOM, and ng-template is used for conditional rendering. The example shows usage with *ngIf and else.`,
    example: `<!-- ng-container: Groups elements without adding a <div> -->
<ng-container *ngIf="isLoggedIn">
  <header>Welcome</header>
  <nav>Menu</nav>
</ng-container>

<!-- ng-template: Defines a blueprint to be used later -->
<ng-template #loadingTemplate>
  <p>Loading data...</p>
</ng-template>

<div *ngIf="dataReady; else loadingTemplate">
  Data is here!
</div>`
  },
  {
    id: 'decorators',
    title: 'Decorators',
    category: 'Angular',
    slangDefinition: `Decorators Angular-ku metadata kudukka use pannuvom so framework understand pannum. Idhu class and properties behavior define pannum. Indha example-la @Component class-ku, @Input/@Output/@ViewChild properties-ku use pannrom.`,
    interviewDefinition: `Decorators provide metadata to Angular so it can process classes and properties correctly. They define behavior like input binding and DOM access. The example shows @Component, @Input, @Output, and @ViewChild.`,
    example: `@Component({ ... }) // Class decorator
export class MyComponent {
  @Input() title: string; // Property decorator
  @Output() changed = new EventEmitter(); // Property decorator
  @ViewChild('myInput') inputRef; // Property decorator
}`
  },
  {
    id: 'angular-universal',
    title: 'Angular Universal (SSR)',
    category: 'Angular',
    slangDefinition: `SSR-na Angular app server-la render pannuvom so fast loading and SEO improve aagum. Browser APIs server-la work aagadhu so check pannitu use panna vendum. Indha example-la PLATFORM_ID inject pannitu isPlatformBrowser use pannitu safe-a browser code run pannrom.`,
    interviewDefinition: `Angular Universal enables server-side rendering to improve performance and SEO. Since browser APIs are not available on the server, checks are required. The example shows using PLATFORM_ID with isPlatformBrowser to safely access browser APIs.`,
    example: `// In modern Angular, SSR is built-in and configured via angular.json
// and server.ts. You can check if you are on the server or browser:
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  if (isPlatformBrowser(this.platformId)) {
    // Safe to use window or localStorage here
  }
}`
  },
  {
    id: 'loading-strategies',
    title: 'Loading Strategies',
    category: 'Angular',
    slangDefinition: `Loading strategies na app modules epdi load aagudhu nu decide pannradhu so performance improve aagum. Initial load fast aaguradhu mukkiyam. Indha example-la home eager-a load aagudhu, admin lazy loading use pannudhu, and PreloadAllModules use pannitu background-la load pannrom.`,
    interviewDefinition: `Loading strategies control how modules are loaded to optimize performance and reduce initial load time. Angular supports eager, lazy, and preloading strategies. The example shows eager loading, lazy loading using loadChildren, and preloading using PreloadAllModules.`,
    example: `const routes: Routes = [
  // Eagerly loaded
  { path: 'home', component: HomeComponent },
  
  // Lazily loaded (only loads when user navigates to /admin)
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  }
];

// Preloading strategy configuration
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })`
  },
  {
    id: 'encapsulation',
    title: 'View Encapsulation',
    category: 'Angular',
    slangDefinition: `Encapsulation na component CSS scope control pannradhu so styles leak aagama irukkum. Idhu UI consistency-ku important. Indha example-la ViewEncapsulation.None use pannitu style global-a apply aagum.`,
    interviewDefinition: `View encapsulation controls whether component styles are scoped or applied globally. It helps prevent style conflicts. The example shows ViewEncapsulation.None, where styles are applied globally.`,
    example: `@Component({
  selector: 'app-styled',
  template: \`<p>Styled text</p>\`,
  styles: [\`p { color: red; }\`],
  // None means this 'p' style will leak globally!
  encapsulation: ViewEncapsulation.None 
})
export class StyledComponent {}`
  },
  {
    id: 'route-guards',
    title: 'Route Guards',
    category: 'Angular',
    slangDefinition: `Route guards use pannradhu na user access control panna so unauthorized access avoid pannalaam. Indha example-la login check pannitu true return pannina allow pannum, illa na login page-ku redirect pannum.`,
    interviewDefinition: `Route guards are used to control access to routes based on conditions like authentication. They help protect routes. The example shows a CanActivate function that checks login status and redirects if unauthorized.`,
    example: `// Modern functional guard
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isLoggedIn()) {
    return true;
  }
  return router.parseUrl('/login');
};

// In routes:
// { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] }`
  },
  {
    id: 'npm-run-build',
    title: 'npm run build',
    category: 'Angular',
    slangDefinition: `Build command use pannradhu na app production-ku ready panna so optimized files generate aagum. Idhu performance and deployment-ku important. Indha example-la npm run build and production configuration use pannitu build run pannrom.`,
    interviewDefinition: `The build command compiles and optimizes the application for production deployment. It improves performance and reduces bundle size. The example shows using npm run build and production configuration.`,
    example: `# Run this in your terminal before deploying
npm run build

# Or for a specific environment configuration
ng build --configuration production`
  },
  {
    id: 'jit-vs-aot',
    title: 'JIT vs AOT Compilation',
    category: 'Angular',
    slangDefinition: `Compilation na code JS-a convert pannradhu so browser run panna mudiyum. Performance improve panna use pannuvom. Indha example-la AOT default-a use pannrom and angular.json-la "aot": true set pannirukkom.`,
    interviewDefinition: `Compilation converts Angular code into executable JavaScript, improving performance. AOT compiles during build time, making apps faster. The example shows AOT enabled in angular.json.`,
    example: `// Modern Angular uses AOT by default for production builds.
// You don't usually write code for this, it's a build configuration.

// In angular.json:
// "aot": true`
  },
  {
    id: 'injectable-vs-inject',
    title: '@Injectable vs @Inject',
    category: 'Angular',
    slangDefinition: `Dependency injection use pannradhu services share panna so reusable code kidaikkum. Idhu loose coupling-ku helpful. Indha example-la @Injectable service create pannudhu and inject() use pannitu component-la service eduthom.`,
    interviewDefinition: `Dependency injection is used to provide services across components, improving reusability and decoupling. @Injectable defines a service, and inject() retrieves it. The example shows creating a service and accessing it using inject().`,
    example: `// @Injectable marks the service
@Injectable({ providedIn: 'root' })
export class MyService {}

// Modern Angular prefers the inject() function over constructor injection!
@Component({ ... })
export class MyComponent {
  // Modern way (no @Inject needed):
  private myService = inject(MyService);
  
  // Legacy way with @Inject (usually only needed for InjectionTokens):
  // constructor(@Inject(APP_CONFIG) private config: AppConfig) {}
}`
  },
  {
    id: 'shared-module',
    title: 'Shared Module',
    category: 'Angular',
    slangDefinition: `Shared module na common components/directives reuse panna use pannuvom so repeated imports avoid pannalaam. Idhu code reuse-ku helpful. Indha example-la components declare pannitu exports-la add pannirukkom so other modules use panna mudiyum.`,
    interviewDefinition: `A shared module is used to group and reuse common components and directives across the application. It reduces duplication. The example shows declaring components and exporting them for use in other modules.`,
    example: `@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, HighlightDirective],
  exports: [ButtonComponent, HighlightDirective, CommonModule] 
  // Exporting makes them available to whoever imports SharedModule
})
export class SharedModule {}`
  },
  {
    id: 'browser-module',
    title: 'BrowserModule',
    category: 'Angular',
    slangDefinition: `BrowserModule Angular app browser-la run panna use pannuvom, idhu root module-la mattum import pannuvom. Idhu app start panna necessary. Indha example-la AppModule-la BrowserModule import pannirukkom.`,
    interviewDefinition: `BrowserModule enables Angular applications to run in the browser and should be imported only in the root module. It provides essential browser-related services. The example shows importing it in AppModule.`,
    example: `// In a traditional NgModule app (app.module.ts):
@NgModule({
  imports: [
    BrowserModule, // Only imported in the root module!
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }`
  },
  {
    id: 'trackby',
    title: 'trackBy',
    category: 'Angular',
    slangDefinition: `trackBy use pannradhu list render optimize panna so unnecessary DOM updates avoid pannalaam. Idhu performance improve pannum. Indha example-la user.id use pannitu items track pannrom.`,
    interviewDefinition: `trackBy is used to optimize list rendering by uniquely identifying items, preventing unnecessary DOM updates. It improves performance. The example shows tracking items using user.id.`,
    example: `<!-- Modern @for syntax has tracking built-in! -->
@for (user of users; track user.id) {
  <li>{{ user.name }}</li>
}

<!-- Legacy *ngFor syntax -->
<!-- <li *ngFor="let user of users; trackBy: trackById">{{ user.name }}</li> -->`
  },
  {
    id: 'ngclass-types',
    title: 'Types of ngClass',
    category: 'Angular',
    slangDefinition: `ngClass use pannradhu dynamic-a CSS class apply panna so UI condition based-a change pannalaam. Idhu flexibility kudukkum. Indha example-la string, array, object, and condition syntax use pannitu classes apply pannrom.`,
    interviewDefinition: `ngClass is used to dynamically apply CSS classes based on conditions, improving UI flexibility. It supports multiple syntaxes. The example shows string, array, object, and conditional usage.`,
    example: `<!-- 1. String Syntax -->
<div [ngClass]="'active important'"></div>

<!-- 2. Array Syntax -->
<div [ngClass]="['active', 'important']"></div>

<!-- 3. Object Syntax (Most common for toggling) -->
<div [ngClass]="{ 'active': isActive, 'error': hasError }"></div>

<!-- 4. Conditional (Ternary) Syntax -->
<div [ngClass]="isActive ? 'active' : 'inactive'"></div>`
  },
  {
    id: 'angular-signals',
    title: 'Signals',
    category: 'Angular',
    slangDefinition: `Signals na reactive variable, value change aana dependent values auto update aagum so manual change detection thevai illa. Idhu performance improve pannum. Indha example-la signal create pannitu computed use pannitu doubleCount derive pannrom, count change pannumbodhu auto update aagudhu.`,
    interviewDefinition: `Signals are reactive primitives used to manage state and automatically update dependent values, improving performance. The example shows creating a signal and a computed value that updates automatically when the signal changes.`,
    example: `import { signal, computed } from '@angular/core';

const count = signal(0);
const doubleCount = computed(() => count() * 2);

count.set(1); // doubleCount automatically becomes 2`
  },
  {
    id: 'angular-standalone',
    title: 'Standalone Components',
    category: 'Angular',
    slangDefinition: `Standalone components na NgModule illaama direct-a use panna mudiyum so setup simple aagum. Idhu boilerplate reduce pannum. Indha example-la standalone:true use pannitu imports direct-a component-la define pannirukkom.`,
    interviewDefinition: `Standalone components allow building Angular applications without NgModules, simplifying structure and reducing boilerplate. The example shows standalone:true with direct imports in the component.`,
    example: `@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  template: \`<h1>Hello {{ name }}</h1>\`
})
export class HelloComponent {
  name = 'World';
}`
  },
  {
    id: 'webpack',
    title: 'Webpack',
    category: 'Angular',
    slangDefinition: `Webpack na oru module bundler — project-la irukka JS, CSS, images, fonts ellathayum eduthu one (or some) optimized files-a bundle pannidum. Browser namma multiple files-a separately load panna slow aagum, so webpack ellathayum oru file-a compress panni fast-a load aaga help pannudhu. Angular-la internally webpack use pannudhu — ng build panna dist folder-la bundled files varudhu adhu dhaan webpack result.`,
    interviewDefinition: `Webpack is a static module bundler for JavaScript applications. It takes all project dependencies — JS, CSS, images, fonts — and bundles them into optimized output files for the browser. It uses an entry point to build a dependency graph and processes files through loaders (for transformation) and plugins (for optimization). Angular CLI uses Webpack internally to compile and bundle the application during build.`,
    example: `// webpack.config.js (basic setup)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point — where webpack starts building
  entry: './src/index.ts',

  // Output — where bundled file goes
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Loaders — transform non-JS files
  module: {
    rules: [
      {
        test: /\.ts$/,           // TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,         // SCSS files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg)$/,    // Image files
        type: 'asset/resource',
      },
    ],
  },

  // Plugins — extra optimizations
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Auto inject bundle into HTML
    }),
  ],

  resolve: {
    extensions: ['.ts', '.js'],
  },
};

// 📦 Angular internally runs webpack during:
// ng serve  → dev build with HMR
// ng build  → prod build → dist/ folder (bundled + minified)`
  },
  {
    id: 'route-guards',
    title: 'Route Guards',
    category: 'Angular',
    slangDefinition: `Route Guards na Angular-la route access control panra mechanism — login aagatha user-a protected page-ku pooga vidalaam, illa unsaved changes irukka page-la irunthu leave aaga confirm pannalaam. Security bouncer maari — "nee eligible-a? illana entry illa" nu check pannudhu. canActivate login check panna, canDeactivate page leave confirm panna, canLoad lazy module load restrict panna use pannrom.`,
    interviewDefinition: `Route Guards in Angular are interfaces that control navigation to and from routes. They are used to protect routes based on conditions like authentication, authorization, or unsaved changes. Common guards are canActivate (block route entry), canDeactivate (block route exit), canLoad (block lazy module loading), and canActivateChild (protect child routes). Guards return a boolean or Observable/Promise of boolean to allow or deny navigation.`,
    example: `// ✅ 1. canActivate — Protect route if not logged in
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

// ✅ 2. canDeactivate — Confirm before leaving unsaved form
@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent): boolean {
    if (component.hasUnsavedChanges()) {
      return confirm('You have unsaved changes. Leave anyway?');
    }
    return true;
  }
}

// ✅ 3. canLoad — Block lazy module if not authorized
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanLoad {
  constructor(private authService: AuthService) {}

  canLoad(): boolean {
    return this.authService.isAdmin(); // Load module only for admins
  }
}

// ✅ Register guards in routing module
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],           // Block entry
    canDeactivate: [UnsavedChangesGuard] // Block exit
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard]               // Block lazy load
  }
];`
  },
  {
    id: 'content-projection',
    title: 'Content Projection',
    category: 'Angular',
    slangDefinition: `Content Projection na parent component-la irukka HTML content-a child component-la <ng-content> maathiri inject panra mechanism. Simple-a solla: child component oru "slot" vachirukkum, parent adha fill pannuvom. Reusable card, modal, layout components create panna romba useful. Multi-slot projection-la select attribute use panni specific content-a specific slot-la project pannalaam.`,
    interviewDefinition: `Content Projection is an Angular pattern that allows a parent component to inject HTML content into a child component using the <ng-content> directive. It enables reusable component design by letting the parent control what content appears inside the child. Single-slot projection uses a plain <ng-content>, while multi-slot projection uses <ng-content select=""> to target specific elements by CSS selector or attribute.`,
    example: `// ✅ Child Component — card.component.html
<div class="card">
  <div class="card-header">
    <ng-content select="[header]"></ng-content>  <!-- Slot 1 -->
  </div>
  <div class="card-body">
    <ng-content select="[body]"></ng-content>     <!-- Slot 2 -->
  </div>
  <div class="card-footer">
    <ng-content></ng-content>                     <!-- Default Slot -->
  </div>
</div>

// ✅ Parent Component — app.component.html
<app-card>
  <h2 header>My Card Title</h2>       <!-- Goes to slot 1 -->
  <p body>This is the card body.</p>  <!-- Goes to slot 2 -->
  <button>Click Me</button>           <!-- Goes to default slot -->
</app-card>

// ✅ Single Slot (Simple usage)
// child.component.html
<div class="wrapper">
  <ng-content></ng-content>  <!-- Whatever parent passes comes here -->
</div>

// parent.component.html
<app-child>
  <p>Hello from Parent!</p>  <!-- Projected into child -->
</app-child>`
  },

  {
    id: 'service-root-vs-non-root',
    title: 'Service: Root Level vs Non-Root Level',
    category: 'Angular',
    slangDefinition: `providedIn: 'root' na app-wide singleton — oru instance mattum create aagum, everywhere share aagum. Non-root (component-level) service na adha provide panra component destroy aana service-um destroy aagum — fresh instance kedaikkum. Login user data, theme maari global state-ku root use pannuvom. Form wizard maari component-specific temporary state-ku component-level use pannuvom.`,
    interviewDefinition: `A service with providedIn: 'root' is a singleton — Angular creates one instance for the entire application, shared across all components. It is tree-shakable and registered in the root injector. A non-root service (provided in a component's providers array) creates a new instance scoped to that component and its children. When the component is destroyed, the service instance is also destroyed. Use root for global shared state and component-level for isolated, component-specific logic.`,
    example: `// ✅ Root Level Service — Single instance app-wide
@Injectable({
  providedIn: 'root' // Registered in root injector
})
export class AuthService {
  private isLoggedIn = false;

  login() { this.isLoggedIn = true; }
  logout() { this.isLoggedIn = false; }
  getStatus() { return this.isLoggedIn; }
}
// Same instance shared across ALL components ✅

// ✅ Component Level Service — New instance per component
@Injectable() // No providedIn here
export class FormStateService {
  private formData = {};
  setData(data: any) { this.formData = data; }
  getData() { return this.formData; }
}

@Component({
  selector: 'app-wizard',
  providers: [FormStateService], // New instance created here
  template: '...'
})
export class WizardComponent {
  constructor(private formState: FormStateService) {}
  // Fresh instance — destroyed when WizardComponent destroys
}

// 📌 Summary:
// providedIn: 'root' → Singleton, app-wide, shared ✅
// Component providers → Scoped, fresh instance, auto-destroyed ✅`
  },

  {
    id: 'why-signals-came',
    title: 'Why Signals Came?',
    category: 'Angular',
    slangDefinition: `Angular-la Zone.js use panni change detection run pannuvom — aana adhu entire component tree-a check pannudhu, unnecessary renders varum, performance hit aagum. Signals vandhadhu adha fix panna — exact-a which value changed nu track pannudhu, adha depend panra components mattum update pannudhu. RxJS compare panna signals simple — subscribe/unsubscribe manage pannanum illa, boilerplate illa, reactive-a value track panna easy.`,
    interviewDefinition: `Signals were introduced in Angular 16+ to address the performance limitations of Zone.js-based change detection. Zone.js triggers change detection across the entire component tree even for small updates, causing unnecessary re-renders. Signals provide fine-grained reactivity — only components that depend on a changed signal are re-rendered. Unlike RxJS, Signals are simpler to use with no subscription management. They also pave the way for Zone-less Angular applications with better performance.`,
    example: `// ❌ Before Signals — Zone.js change detection (checks everything)
@Component({
  template: '{{ counter }}'
})
export class OldComponent {
  counter = 0;

  increment() {
    this.counter++; // Zone.js detects this, checks entire tree 😬
  }
}

// ✅ After Signals — Fine-grained reactivity
@Component({
  template: '{{ counter() }}',  // Signal read with ()
})
export class NewComponent {
  counter = signal(0);           // Create signal

  increment() {
    this.counter.update(v => v + 1); // Only THIS signal's dependents update ✅
  }
}

// ✅ computed — Derived signal (auto updates when dependency changes)
const doubleCount = computed(() => this.counter() * 2);

// ✅ effect — Side effect when signal changes
effect(() => {
  console.log('Counter changed:', this.counter()); // Runs on every change
});

// 📌 Why Signals?
// Zone.js    → Checks entire tree, slow for large apps ❌
// Signals    → Fine-grained, only dependents update ✅
// RxJS       → Powerful but complex, needs subscribe/unsubscribe
// Signals    → Simple, no subscription management needed ✅`
  },

  {
    id: 'defer-block',
    title: '@defer Block',
    category: 'Angular',
    slangDefinition: `@defer na Angular 17+ la vandha feature — component/template-a lazy load panna use pannuvom. Page load aagum pothu ellathayum load pannama, user scroll panna, hover panna, illa specific condition meet aana mattum load pannuvom. Initial bundle size kudaikkum, performance improve aagum. @placeholder load aagura varaikkum fallback UI kaatalam, @loading spinner kaatalam, @error error UI kaatalam.`,
    interviewDefinition: `@defer is a built-in Angular 17+ template syntax for lazy loading parts of a template. It defers the loading of a component or block until a specific trigger condition is met — such as viewport visibility, user interaction, or idle time. This reduces initial bundle size and improves page load performance. It supports @placeholder (shown before load), @loading (shown during load), and @error (shown on failure) blocks for complete UX control.`,
    example: `// ✅ Basic @defer — Load when block enters viewport
@defer (on viewport) {
  <app-heavy-chart />       <!-- Loaded only when scrolled into view -->
} @placeholder {
  <div>Chart will load soon...</div>   <!-- Shown before load -->
} @loading (minimum 500ms) {
  <app-spinner />                       <!-- Shown while loading -->
} @error {
  <p>Failed to load chart.</p>          <!-- Shown on error -->
}

// ✅ @defer on interaction — Load on hover/click
@defer (on interaction) {
  <app-comments />          <!-- Loaded only when user interacts -->
} @placeholder {
  <button>Load Comments</button>
}

// ✅ @defer on idle — Load when browser is idle
@defer (on idle) {
  <app-recommendations />   <!-- Loaded during browser idle time -->
}

// ✅ @defer with when condition — Load based on signal/variable
@defer (when isLoggedIn()) {
  <app-dashboard />         <!-- Loaded only when isLoggedIn is true -->
}

// 📌 Trigger Options:
// on viewport    → when element enters screen
// on idle        → when browser is idle
// on interaction → on hover/click/focus
// on timer(2s)   → after delay
// when condition → custom boolean/signal condition`
  },

  {
    id: 'route-data-passing',
    title: 'Passing Data Between Routes',
    category: 'Angular',
    slangDefinition: `Angular-la route-ku route data pass panna multiple ways irukku. Query params use panna URL-la visible aagum (?id=1), route params use panna URL part-a aagum (/user/1), state use panna URL-la visible aagaadhu (sensitive data-ku good), service use panna global-a share pannalaam. Each approach-ku use case different — public filter-ku query params, detail page-ku route params, sensitive data-ku state or service use pannuvom.`,
    interviewDefinition: `Angular provides multiple ways to pass data between routes. Route Parameters (:id) are used for required data that forms part of the URL path. Query Parameters (?key=value) are used for optional data like filters or search terms. Navigation State (router.navigate with state) passes data without showing it in the URL, suitable for sensitive or temporary data. Shared Service is used for complex objects or data that needs to persist across multiple routes.`,
    example: `// ✅ 1. Route Params — /user/42
// app-routing.module.ts
{ path: 'user/:id', component: UserComponent }

// Sender
this.router.navigate(['/user', 42]);

// Receiver
constructor(private route: ActivatedRoute) {}
ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id'); // '42'
}

// ✅ 2. Query Params — /products?category=shoes&sort=price
// Sender
this.router.navigate(['/products'], {
  queryParams: { category: 'shoes', sort: 'price' }
});

// Receiver
this.route.queryParams.subscribe(params => {
  console.log(params['category']); // 'shoes'
  console.log(params['sort']);     // 'price'
});

// ✅ 3. Navigation State — URL-la visible aagaadhu
// Sender
this.router.navigate(['/checkout'], {
  state: { orderId: 'ORD123', amount: 999 }
});

// Receiver
constructor(private router: Router) {}
ngOnInit() {
  const state = this.router.getCurrentNavigation()?.extras.state;
  console.log(state?.['orderId']); // 'ORD123'
}

// ✅ 4. Shared Service — Complex data across routes
@Injectable({ providedIn: 'root' })
export class DataShareService {
  private data = signal<any>(null);
  setData(value: any) { this.data.set(value); }
  getData() { return this.data(); }
}

// Sender Component
this.dataShare.setData({ user: 'John', role: 'admin' });
this.router.navigate(['/dashboard']);

// Receiver Component
ngOnInit() {
  const data = this.dataShare.getData(); // { user: 'John', role: 'admin' }
}

// 📌 Summary:
// Route Params  → Required, part of URL path (/user/42)
// Query Params  → Optional, visible in URL (?sort=price)
// State         → Hidden from URL, temporary data
// Service       → Complex/persistent data sharing`
  }
];
