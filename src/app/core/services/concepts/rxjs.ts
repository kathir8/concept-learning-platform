import { Concept } from '../../models/concept.model';

export const rxjsConcepts: Concept[] = [
  {
    id: 'rxjs-overview',
    title: 'What is RxJS?',
    category: 'RxJS',
    slangDefinition: `RxJS use pannradhu async data handle panna stream-a manage panna so events easy-a control pannalaam. Idhu reactive programming-ku useful. Indha example-la of() use pannitu values emit pannitu subscribe pannitu print pannrom and unsubscribe pannitu cleanup pannrom.`,
    interviewDefinition: `RxJS is used to handle asynchronous data as streams, enabling reactive programming. It helps manage events and data flow efficiently. The example shows creating an observable using of(), subscribing to it, and unsubscribing to prevent memory leaks.`,
    example: `// Install via npm
npm install rxjs

// Basic usage
import { of } from 'rxjs';
const stream$ = of(1, 2, 3);
const sub = stream$.subscribe(val => console.log(val));
sub.unsubscribe(); // Always clean up!`
  },
  {
    id: 'rxjs-variable-observable',
    title: 'Variable as Observable',
    category: 'RxJS',
    slangDefinition: `Variable-a observable-a convert pannradhu data changes react pannanum-nu so components auto update aagum. Idhu state share panna useful. Indha example-la BehaviorSubject use pannitu value set pannitu subscribe pannitu changes receive pannrom.`,
    interviewDefinition: `Using BehaviorSubject allows converting a variable into an observable stream so components can react to data changes. It helps in state sharing. The example shows setting values using next() and subscribing to receive updates.`,
    example: `// In Service:
private title = new BehaviorSubject<string>('initial value');
title$ = this.title.asObservable();

setTitle(value: string) {
  this.title.next(value);
}

// In Component:
this.sub = this.service.title$.subscribe(val => this.word = val);
// Don't forget to unsubscribe in ngOnDestroy!`
  },
  {
    id: 'rxjs-observables-vs-promises',
    title: 'Observables vs Promises',
    category: 'RxJS',
    slangDefinition: `Async data handle panna use pannuvom but behavior different. Promise one time value, Observable multiple values and cancel panna mudiyum. Indha example-la promise once resolve aagudhu, observable multiple values emit pannitu unsubscribe pannalaam.`,
    interviewDefinition: `Promises and Observables are used for asynchronous operations but differ in behavior. Promises emit once and cannot be cancelled, while Observables can emit multiple values and be cancelled. The example shows a promise resolving once and an observable emitting multiple values with unsubscribe.`,
    example: `// Promise (Eager, Single Value, Uncancellable)
const promise = new Promise(resolve => setTimeout(() => resolve('Done'), 1000));
promise.then(console.log);

// Observable (Lazy, Multiple Values, Cancellable)
const observable$ = new Observable(observer => {
  observer.next('1');
  setTimeout(() => observer.next('2'), 1000);
});
const sub = observable$.subscribe(console.log);
sub.unsubscribe(); // Cancels the execution`
  },
  {
    id: 'rxjs-behaviorsubject-vs-subject',
    title: 'BehaviorSubject vs Subject',
    category: 'RxJS',
    slangDefinition: `Subject and BehaviorSubject use pannradhu data broadcast panna. Difference na BehaviorSubject last value store pannum so new subscriber-kum kidaikkum. Indha example-la Subject previous value miss pannudhu, BehaviorSubject last value immediate-a kudukkudhu.`,
    interviewDefinition: `Subject and BehaviorSubject are used to emit values to subscribers. BehaviorSubject holds the latest value and emits it to new subscribers, while Subject does not. The example shows BehaviorSubject replaying the last value but Subject missing it.`,
    example: `const subject = new Subject();
const behaviorSubject = new BehaviorSubject(0); // Needs initial value

subject.next(1);
behaviorSubject.next(1);

// Misses the '1'
subject.subscribe(v => console.log('Subject:', v));

// Instantly gets the '1'
behaviorSubject.subscribe(v => console.log('BehaviorSubject:', v));`
  },
  {
    id: 'rxjs-operators-overview',
    title: 'Categories of Operators',
    category: 'RxJS',
    slangDefinition: `Operators na RxJS stream-la data process panna use pannuvom so filtering, transforming, side effects easy-a panna mudiyum. Idhu clean pipeline create panna help pannum. Indha example-la filter use pannitu unwanted values remove pannitu, map use pannitu value change pannitu, tap use pannitu side effect (log) pannrom.`,
    interviewDefinition: `Operators are used to process and manipulate data streams in RxJS, improving readability and control. They allow filtering, transformation, and side effects. The example shows filter for filtering values, map for transformation, and tap for side effects.`,
    example: `// Chaining different operator types
source$.pipe(
  filter(x => x > 0),    // Filtering
  map(x => x * 2),       // Transformation
  tap(x => console.log)  // Utility
).subscribe();`
  },
  {
    id: 'rxjs-creation-operators',
    title: 'Creation Operators (of, from, repeat)',
    category: 'RxJS',
    slangDefinition: `Creation operators use pannradhu observable create panna so data stream start panna mudiyum. Idhu base for RxJS usage. Indha example-la of values create pannudhu, from array/promise convert pannudhu, repeat use pannitu values multiple times emit pannrom.`,
    interviewDefinition: `Creation operators are used to generate Observables from values, arrays, or promises. They form the starting point of streams. The example shows of creating a stream, from converting data sources, and repeat emitting values multiple times.`,
    example: `import { of, from } from 'rxjs';
import { repeat } from 'rxjs/operators';

const of$ = of('Hello', 'World');
const fromArray$ = from([1, 2, 3]);
const fromPromise$ = from(fetch('/api/data'));

// Repeats the sequence 3 times
of(1, 2).pipe(repeat(3)).subscribe(console.log);`
  },
  {
    id: 'rxjs-transformation-operators',
    title: 'Transformation Operators (Map, switchMap, etc.)',
    category: 'RxJS',
    slangDefinition: `Transformation operators use pannradhu data change panna and async calls manage panna so correct result handle panna mudiyum. Idhu API calls handle panna useful. Indha example-la switchMap use pannitu new search vandha old request cancel pannitu latest result eduthom.`,
    interviewDefinition: `Transformation operators modify emitted values and handle inner observables. They help manage asynchronous flows. The example shows switchMap cancelling previous requests and processing only the latest search result.`,
    example: `// switchMap is great for search inputs to cancel old requests
searchInput$.pipe(
  switchMap(searchTerm => http.get(\`/api/search?q=\${searchTerm}\`))
).subscribe(results => console.log(results));`
  },
  {
    id: 'rxjs-combination-operators',
    title: 'Combination Operators',
    category: 'RxJS',
    slangDefinition: `Combination operators multiple observables join panna use pannuvom so data combine panna mudiyum. Idhu multiple API calls handle panna useful. Indha example-la forkJoin use pannitu rendu API complete aana apram result eduthom.`,
    interviewDefinition: `Combination operators are used to merge multiple observables and handle their results together. They are useful for coordinating multiple async operations. The example shows forkJoin waiting for all API calls to complete before emitting results.`,
    example: `import { forkJoin, merge, concat } from 'rxjs';

// Wait for all API calls to finish
forkJoin({
  users: http.get('/users'),
  posts: http.get('/posts')
}).subscribe(data => console.log(data.users, data.posts));`
  },
  {
    id: 'rxjs-filtering-operators',
    title: 'Filtering Operators',
    category: 'RxJS',
    slangDefinition: `Filtering operators stream-la unwanted values remove panna use pannuvom so required data mattum process pannalaam. Idhu clean data flow-ku useful. Indha example-la distinct duplicate remove pannudhu, filter even numbers mattum edukkudhu, take first value mattum eduthudhu.`,
    interviewDefinition: `Filtering operators control which values are emitted in a stream, improving data accuracy. They help remove unwanted values. The example shows distinct removing duplicates, filter applying a condition, and take limiting the output.`,
    example: `import { of } from 'rxjs';
import { filter, distinct, take, skip } from 'rxjs/operators';

of(1, 1, 2, 3, 4, 4, 5).pipe(
  distinct(),               // 1, 2, 3, 4, 5
  filter(x => x % 2 === 0), // 2, 4
  take(1)                   // 2
).subscribe(console.log);`
  },
  {
    id: 'rxjs-error-handling',
    title: 'Error Handling (catchError, retry)',
    category: 'RxJS',
    slangDefinition: `Error handling use pannradhu stream crash aagumbodhu handle panna so app break aagadhu. Idhu stability-ku important. Indha example-la retry use pannitu request fail aana marubadi try pannrom, catchError use pannitu error handle pannitu fallback return pannrom.`,
    interviewDefinition: `Error handling operators manage failures in streams to improve reliability. retry attempts re-execution, and catchError handles errors gracefully. The example shows retrying a failed request and catching errors to return a fallback.`,
    example: `http.get('/api/data').pipe(
  retry(1), // Try 1 more time if it fails
  catchError(error => {
    console.error('Failed after retries', error);
    return throwError(() => new Error('Fallback error object'));
  })
).subscribe();`
  },
  {
    id: 'rxjs-utility-operators',
    title: 'Utility Operators (tap, finalize)',
    category: 'RxJS',
    slangDefinition: `Utility operators side effects and cleanup panna use pannuvom so debugging and lifecycle handle panna mudiyum. Idhu logging-ku useful. Indha example-la tap use pannitu values log pannrom, finalize use pannitu stream mudinja apram cleanup pannrom.`,
    interviewDefinition: `Utility operators are used for side effects and cleanup without altering the data stream. They help in debugging and lifecycle handling. The example shows tap for logging values and finalize for executing cleanup logic.`,
    example: `source$.pipe(
  startWith('Loading...'),
  tap(val => console.log('Spying on:', val)),
  finalize(() => console.log('Stream ended or errored!'))
).subscribe();`
  },
  {
    id: 'rxjs-time-handling',
    title: 'Time Handling Operators',
    category: 'RxJS',
    slangDefinition: `Time operators events timing control panna use pannuvom so unnecessary calls avoid pannalaam. Idhu performance improve pannum. Indha example-la debounceTime use pannitu typing stop aana apram call pannrom, throttleTime use pannitu frequent clicks ignore pannrom.`,
    interviewDefinition: `Time-based operators control when values are emitted, helping optimize performance and avoid unnecessary executions. The example shows debounceTime delaying execution until inactivity and throttleTime limiting frequent events.`,
    example: `// Wait 500ms after user stops typing before searching
searchInput$.pipe(
  debounceTime(500),
  distinctUntilChanged()
).subscribe(val => search(val));

// Ignore clicks for 1 second after the first click
buttonClick$.pipe(
  throttleTime(1000)
).subscribe(() => console.log('Throttled click'));`
  },
  {
    id: 'concatmap-vs-exhaustmap',
    title: 'ConcatMap vs ExhaustMap',
    category: 'RxJS',
    slangDefinition: `ConcatMap na oru request complete aana mattum next request start pannudhu — queue maari wait pannudhu, order guarantee pannudhu. ExhaustMap na first request complete aagura varaikkum new requests ellam ignore pannudhu — busy-a irukkum pothu vandha requests drop aagidudhu. Hospital analogy: ConcatMap = token system (oru patient treat aana mattum next patient call pannuvom), ExhaustMap = busy doctor (currently patient paakum pothu new appointment request ellam reject pannuvom). Form submit-ku exhaustMap use pannuvom — double submit avoid pannalaam. Sequential API calls-ku concatMap use pannuvom.`,
    interviewDefinition: `ConcatMap and ExhaustMap are RxJS operators that handle inner Observable subscriptions differently. ConcatMap queues all incoming values and processes them one at a time in order — it waits for the current inner Observable to complete before subscribing to the next. This guarantees ordering but can cause delays. ExhaustMap ignores all new source emissions while the current inner Observable is still active — if a new value arrives during processing, it is dropped entirely. ConcatMap is used for sequential ordered operations, ExhaustMap is used to prevent duplicate requests like form submissions or login clicks.`,
    example: `import {
  exhaustMap,
  concatMap,
  fromEvent,
  interval,
  timer,
  of,
  switchMap,
  mergeMap
} from 'rxjs'
import { ajax } from 'rxjs/ajax'

// ══════════════════════════════════════════════
// SETUP — Common mock API call
// ══════════════════════════════════════════════

// Simulate API call that takes 3 seconds
function callApi(value: number) {
  return timer(3000).pipe(
    map(() => \`Response for request \${value}\`)
  )
}


// ══════════════════════════════════════════════
// 1. CONCATMAP — Queue and process in order
// "Oru request complete aana mattum next start pannudhu"
// ══════════════════════════════════════════════

// ✅ Basic ConcatMap behavior
// User rapid-a 3 clicks pannuthe — 1, 2, 3 queue aagudhu
of(1, 2, 3).pipe(
  concatMap(value => {
    console.log(\`Starting request \${value}\`)
    return callApi(value)          // Each takes 3 seconds
  })
).subscribe(response => {
  console.log(response)
})

// OUTPUT (in order, one after another):
// Starting request 1
// ... 3 seconds wait ...
// Response for request 1   ← Request 1 complete, then start 2
// Starting request 2
// ... 3 seconds wait ...
// Response for request 2   ← Request 2 complete, then start 3
// Starting request 3
// ... 3 seconds wait ...
// Response for request 3
//
// Total time: 9 seconds (3+3+3)
// Order guaranteed ✅
// No requests dropped ✅
// Queue-la wait pannudhu ✅


// ══════════════════════════════════════════════
// 2. EXHAUSTMAP — Ignore new requests when busy
// "Busy-a irukkum pothu new requests drop pannidhu"
// ══════════════════════════════════════════════

// ✅ Basic ExhaustMap behavior
of(1, 2, 3).pipe(
  exhaustMap(value => {
    console.log(\`Starting request \${value}\`)
    return callApi(value)
  })
).subscribe(response => {
  console.log(response)
})

// OUTPUT:
// Starting request 1       ← Request 1 start aagudhu
// (2 and 3 IGNORED) ❌     ← Request 1 busy-a irukkum pothu vandhuchu
// ... 3 seconds wait ...
// Response for request 1   ← Only request 1 response varudhu
//
// Total time: 3 seconds
// Only first request processed ✅
// New requests ignored while busy ✅
// Requests 2 and 3 dropped ❌ (intentional!)


// ══════════════════════════════════════════════
// 3. REAL WORLD — Form Submit (ExhaustMap)
// "Double submit avoid pannuvom"
// ══════════════════════════════════════════════

// ✅ ExhaustMap — Prevent double form submission
@Component({
  selector: 'app-patient-form',
  template: \`
    <form>
      <input [(ngModel)]="patientName" placeholder="Patient Name" />
      <button #submitBtn (click)="onSubmit()">
        Save Patient
      </button>
    </form>
  \`
})
export class PatientFormComponent implements OnInit {
  patientName = ''

  @ViewChild('submitBtn') submitBtn!: ElementRef

  private destroy$ = new Subject<void>()

  ngOnInit() {
    // ✅ ExhaustMap — Button click-ku perfect!
    fromEvent(this.submitBtn.nativeElement, 'click').pipe(
      exhaustMap(() => {
        console.log('Submitting patient data...')
        return this.http.post('/api/patients', {
          name: this.patientName
        })
        // While this request is running:
        // User frantically clicks Save button — ALL IGNORED ✅
        // No duplicate API calls! ✅
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res) => console.log('Patient saved!', res),
      error: (err) => console.error('Save failed', err)
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}

// ❌ Without exhaustMap — Double submit varum!
// User "Save" button rapid-a click pannuvaan
// Multiple API calls fire aagudhu — duplicate data! ❌


// ══════════════════════════════════════════════
// 4. REAL WORLD — Sequential API Calls (ConcatMap)
// "Order-a process pannanum"
// ══════════════════════════════════════════════

// ✅ ConcatMap — Sequential dependent API calls
@Injectable({ providedIn: 'root' })
export class PatientService {

  // Patient admit panna — steps order-a aaganum
  // Step 1: Create patient record
  // Step 2: Assign bed (Step 1 complete aana mattum)
  // Step 3: Notify doctor (Step 2 complete aana mattum)
  admitPatient(patientData: any) {
    return this.http.post('/api/patients', patientData).pipe(
      concatMap(patient => {
        console.log('Patient created, now assigning bed...')
        return this.http.post('/api/beds/assign', {
          patientId: patient.id  // Step 1 result use pannudhu
        })
      }),
      concatMap(bedAssignment => {
        console.log('Bed assigned, now notifying doctor...')
        return this.http.post('/api/notifications/doctor', {
          bedId: bedAssignment.id  // Step 2 result use pannudhu
        })
      })
    )
  }
  // Order guaranteed ✅
  // Each step previous step result use pannudhu ✅
}

// ✅ ConcatMap — Process items in queue order
@Component({ selector: 'app-upload', template: '' })
export class FileUploadComponent {

  uploadFiles(files: File[]) {
    // Files oru-oru-va upload aaganum — parallel-a vendam
    from(files).pipe(
      concatMap(file => {
        console.log(\`Uploading \${file.name}...\`)
        return this.uploadService.upload(file)
        // Next file starts only after current upload complete ✅
      })
    ).subscribe(result => {
      console.log(\`Upload complete: \${result.fileName}\`)
    })
  }
}


// ══════════════════════════════════════════════
// 5. REAL WORLD — Login Button (ExhaustMap)
// ══════════════════════════════════════════════

@Component({
  selector: 'app-login',
  template: \`
    <button (click)="login$.next()">Login</button>
    <p *ngIf="isLoading">Logging in...</p>
  \`
})
export class LoginComponent {
  login$ = new Subject<void>()
  isLoading = false

  constructor(private authService: AuthService) {
    this.login$.pipe(
      exhaustMap(() => {
        this.isLoading = true
        return this.authService.login().pipe(
          finalize(() => this.isLoading = false)
        )
        // User login button spam pannalum — only ONE request fire aagudhu ✅
      })
    ).subscribe({
      next: () => console.log('Login success!'),
      error: (err) => console.error('Login failed', err)
    })
  }
}


// ══════════════════════════════════════════════
// 6. COMPARISON WITH OTHER FLATMAP OPERATORS
// ══════════════════════════════════════════════

const clicks$ = fromEvent(document, 'click')

// MergeMap — All requests parallel-a run aagudhu (no queue, no ignore)
clicks$.pipe(
  mergeMap(() => callApi(Date.now()))
  // Every click → new request → all run simultaneously
  // Order NOT guaranteed ❌
  // No requests dropped ✅ (all processed)
).subscribe(console.log)

// SwitchMap — New request vandha, previous cancel pannudhu
clicks$.pipe(
  switchMap(() => callApi(Date.now()))
  // New click → previous request cancel → new request start
  // Only latest request matters ✅
  // Previous requests cancelled ❌
).subscribe(console.log)

// ConcatMap — Queue panni order-a process pannudhu
clicks$.pipe(
  concatMap(() => callApi(Date.now()))
  // Every click → queue-la add aagudhu → one by one process
  // Order guaranteed ✅
  // No requests dropped ✅ (all queued)
).subscribe(console.log)

// ExhaustMap — Busy-a irukkum pothu new requests ignore pannudhu
clicks$.pipe(
  exhaustMap(() => callApi(Date.now()))
  // First click → request start → busy
  // New clicks → IGNORED ❌
  // Request complete → next click accepted ✅
).subscribe(console.log)


// ══════════════════════════════════════════════
// 7. VISUAL TIMELINE COMPARISON
// ══════════════════════════════════════════════

// Clicks:      C1----C2--C3--------C4
// API takes:   [====3sec====]

// mergeMap:
// C1:          [====response1====]
// C2:              [====response2====]
// C3:                [====response3====]
// C4:                          [====response4====]
// All parallel, all processed ✅ order not guaranteed ❌

// switchMap:
// C1:          [====can]  ← C2 vandhuchu, C1 cancel!
// C2:              [====can] ← C3 vandhuchu, C2 cancel!
// C3:                [====response3====] ← only this completes
// C4:                          [====response4====]
// Only latest processed ✅ previous cancelled ❌

// concatMap:
// C1:          [====response1====]
// C2:                            [====response2====] ← queued, waited
// C3:                                               [====response3====]
// All processed ✅ in order ✅ but slow (sequential) ⚠️

// exhaustMap:
// C1:          [====response1====]
// C2:              IGNORED ❌     ← C1 busy-a irukku
// C3:                IGNORED ❌   ← C1 still busy
// C4:                          [====response4====] ← C1 done, accepted ✅
// Only first processed ✅ others dropped ❌


// 📌 Summary:
// concatMap  → Queue panni order-a process pannudhu
//              Use: Sequential API calls, file uploads, ordered operations
//              Drops: Nothing (queues everything)
//              Speed: Slow (sequential)
//
// exhaustMap → Busy-a irukkum pothu new requests ignore pannudhu
//              Use: Form submit, login button, prevent duplicate requests
//              Drops: All new requests while busy
//              Speed: Fast (ignores extra work)
//
// mergeMap   → All parallel-a process pannudhu (no control)
//              Use: Independent parallel requests
//
// switchMap  → New request vandha previous cancel pannudhu
//              Use: Search autocomplete, latest value matters`
  },
  {
    id: 'forkjoin-vs-switchmap',
    title: 'ForkJoin vs SwitchMap',
    category: 'RxJS',
    slangDefinition: `ForkJoin na multiple observables-a parallel-a run panni, ellam complete aana mattum result return pannudhu — "ellam ready aana mattum serve pannuvom" maari. SwitchMap na oru observable emit panna, adha inner observable-a map pannudhu — new value vandha previous cancel pannidhu, latest mattum matter. Hospital analogy: ForkJoin = lab reports ellam ready aana mattum doctor-ku results kuduppom (parallel wait), SwitchMap = search bar-la type panna latest search mattum fire aagudhu, previous cancel aagudhu (latest wins).`,
    interviewDefinition: `ForkJoin combines multiple Observables and emits a single array/object of their last values only after ALL source Observables complete. It is used for parallel independent HTTP requests where all results are needed together. If any one Observable errors or never completes, ForkJoin will not emit. SwitchMap maps each source emission to an inner Observable and automatically cancels the previous inner Observable when a new source value arrives. It is used for dependent sequential operations where only the latest result matters — like search autocomplete, route-dependent data fetching, or live filters.`,
    example: `import {
  forkJoin,
  switchMap,
  of,
  timer,
  Subject,
  combineLatest,
  interval
} from 'rxjs'
import { map, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators'


// ══════════════════════════════════════════════
// SETUP — Mock API Services
// ══════════════════════════════════════════════

@Injectable({ providedIn: 'root' })
export class HospitalApiService {

  // Simulate different API calls with delays
  getPatientDetails(id: string) {
    return timer(1000).pipe(
      map(() => ({ id, name: 'Anjali', age: 26, bloodType: 'O+' }))
    )
  }

  getPatientReports(id: string) {
    return timer(2000).pipe(
      map(() => ({ patientId: id, reports: ['X-Ray', 'Blood Test', 'ECG'] }))
    )
  }

  getPatientMedications(id: string) {
    return timer(1500).pipe(
      map(() => ({ patientId: id, medications: ['Aspirin', 'Metformin'] }))
    )
  }

  getPatientBilling(id: string) {
    return timer(500).pipe(
      map(() => ({ patientId: id, amount: 15000, status: 'pending' }))
    )
  }

  searchPatients(query: string) {
    return timer(800).pipe(
      map(() => ([
        { id: '1', name: \`\${query} Result 1\` },
        { id: '2', name: \`\${query} Result 2\` }
      ]))
    )
  }

  getDoctorList() {
    return timer(1000).pipe(
      map(() => ([
        { id: 'D1', name: 'Dr. Kumar', dept: 'Cardiology' },
        { id: 'D2', name: 'Dr. Priya', dept: 'Neurology' }
      ]))
    )
  }

  getWardDetails() {
    return timer(800).pipe(
      map(() => ([
        { id: 'W1', name: 'ICU', beds: 10 },
        { id: 'W2', name: 'General', beds: 50 }
      ]))
    )
  }
}


// ══════════════════════════════════════════════
// 1. FORKJOIN — Parallel, wait for ALL
// "Ellam complete aana mattum result kuduppom"
// ══════════════════════════════════════════════

@Component({
  selector: 'app-patient-dashboard',
  template: \`
    <div *ngIf="isLoading">Loading patient data...</div>
    <div *ngIf="patientData">
      <h2>{{ patientData.details.name }}</h2>
      <p>Reports: {{ patientData.reports.reports }}</p>
      <p>Medications: {{ patientData.medications.medications }}</p>
      <p>Bill: Rs.{{ patientData.billing.amount }}</p>
    </div>
  \`
})
export class PatientDashboardComponent implements OnInit {
  patientData: any = null
  isLoading = false

  constructor(private api: HospitalApiService) {}

  ngOnInit() {
    const patientId = 'P001'
    this.isLoading = true

    // ✅ ForkJoin — All 4 APIs parallel-a call pannudhu
    // Ellam complete aana mattum (2 seconds — slowest one) emit pannudhu
    forkJoin({
      details:     this.api.getPatientDetails(patientId),     // 1 sec
      reports:     this.api.getPatientReports(patientId),     // 2 sec ← slowest
      medications: this.api.getPatientMedications(patientId), // 1.5 sec
      billing:     this.api.getPatientBilling(patientId)      // 0.5 sec
    }).subscribe({
      next: (result) => {
        // Ellam ready! One shot-la ellam kedaikkudhu ✅
        this.patientData = result
        this.isLoading = false
        console.log('All data loaded:', result)
        // {
        //   details:     { id: 'P001', name: 'Anjali', ... }
        //   reports:     { patientId: 'P001', reports: [...] }
        //   medications: { patientId: 'P001', medications: [...] }
        //   billing:     { patientId: 'P001', amount: 15000, ... }
        // }
      },
      error: (err) => {
        // ⚠️ Any ONE API fail aana — forkJoin error emit pannudhu
        // Other APIs results kaanoma pogudhu ❌
        console.error('One of the APIs failed:', err)
        this.isLoading = false
      }
    })

    // ❌ Without forkJoin — Sequential (slow!)
    // Total time: 1 + 2 + 1.5 + 0.5 = 5 seconds

    // ✅ With forkJoin — Parallel
    // Total time: max(1, 2, 1.5, 0.5) = 2 seconds (3x faster!) 🚀
  }
}


// ══════════════════════════════════════════════
// 2. FORKJOIN — Array syntax
// ══════════════════════════════════════════════

// ✅ Object syntax (recommended — named results)
forkJoin({
  patients: this.api.getPatientDetails('P001'),
  doctors:  this.api.getDoctorList(),
  wards:    this.api.getWardDetails()
}).subscribe(({ patients, doctors, wards }) => {
  console.log(patients, doctors, wards)  // Destructure clean-a ✅
})

// ✅ Array syntax (index-based results)
forkJoin([
  this.api.getPatientDetails('P001'),
  this.api.getDoctorList(),
  this.api.getWardDetails()
]).subscribe(([patients, doctors, wards]) => {
  console.log(patients, doctors, wards)  // Same result ✅
})


// ══════════════════════════════════════════════
// 3. FORKJOIN ERROR HANDLING — catchError use pannanum
// ══════════════════════════════════════════════

import { catchError } from 'rxjs/operators'

// ❌ Problem: One API fail aana entire forkJoin fail aagudhu
forkJoin({
  details:  this.api.getPatientDetails('P001'),
  reports:  this.api.getPatientReports('INVALID_ID'), // This fails! ❌
  billing:  this.api.getPatientBilling('P001')
}).subscribe({
  next: (data) => console.log(data),
  error: (err) => console.error('Everything failed!', err) // All lost ❌
})

// ✅ Fix: Individual catchError panna — partial results save pannalaam
forkJoin({
  details: this.api.getPatientDetails('P001').pipe(
    catchError(err => of({ error: true, message: err.message })) // Fallback ✅
  ),
  reports: this.api.getPatientReports('INVALID_ID').pipe(
    catchError(err => of({ error: true, reports: [] }))          // Empty fallback ✅
  ),
  billing: this.api.getPatientBilling('P001').pipe(
    catchError(err => of({ error: true, amount: 0 }))            // Zero fallback ✅
  )
}).subscribe(result => {
  // Even if one fails — others still come through ✅
  console.log(result)
})


// ══════════════════════════════════════════════
// 4. SWITCHMAP — Latest wins, previous cancel
// "New value vandha — previous cancel, latest fire pannudhu"
// ══════════════════════════════════════════════

@Component({
  selector: 'app-patient-search',
  template: \`
    <input
      [formControl]="searchControl"
      placeholder="Search patients..."
    />
    <div *ngFor="let patient of searchResults">
      {{ patient.name }}
    </div>
    <div *ngIf="isSearching">Searching...</div>
  \`
})
export class PatientSearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('')
  searchResults: any[] = []
  isSearching = false

  private destroy$ = new Subject<void>()

  constructor(private api: HospitalApiService) {}

  ngOnInit() {
    // ✅ SwitchMap — Search autocomplete perfect use case
    this.searchControl.valueChanges.pipe(
      debounceTime(300),           // 300ms type panna wait pannuvom
      distinctUntilChanged(),      // Same value again vandha skip pannuvom
      switchMap(query => {
        if (!query || query.length < 2) {
          return of([])            // Empty query — empty result return ✅
        }

        this.isSearching = true
        console.log(\`Searching for: \${query}\`)

        return this.api.searchPatients(query).pipe(
          // Previous search cancel aagudhu — new search start aagudhu ✅
          catchError(() => of([]))
        )
        // User "Anj" type panna → API call fire aagudhu
        // User immediately "Anja" type panna → "Anj" API cancel! ✅
        // Only "Anja" result varudhu — stale results avoid pannudhu ✅
      }),
      takeUntil(this.destroy$)
    ).subscribe(results => {
      this.searchResults = results
      this.isSearching = false
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}


// ══════════════════════════════════════════════
// 5. SWITCHMAP — Route dependent data fetch
// "Route change aana previous data fetch cancel pannudhu"
// ══════════════════════════════════════════════

@Component({
  selector: 'app-patient-detail',
  template: \`
    <div *ngIf="patient">
      <h2>{{ patient.name }}</h2>
      <p>Age: {{ patient.age }}</p>
    </div>
  \`
})
export class PatientDetailComponent implements OnInit {
  patient: any = null

  constructor(
    private route: ActivatedRoute,
    private api: HospitalApiService
  ) {}

  ngOnInit() {
    // ✅ SwitchMap — Route param change aana previous request cancel
    this.route.params.pipe(
      switchMap(params => {
        console.log(\`Loading patient: \${params['id']}\`)
        return this.api.getPatientDetails(params['id'])
        // User P001 page-la irukkaan → API call fire aagudhu
        // User quickly P002 page-ku navigate pannuvaan
        // → P001 API call cancel! ✅
        // → P002 API call start! ✅
        // P001 stale data show aagaathu ✅
      })
    ).subscribe(patient => {
      this.patient = patient
    })
  }
}


// ══════════════════════════════════════════════
// 6. SWITCHMAP — Dependent API calls
// "First API result use panni second API call pannuvom"
// ══════════════════════════════════════════════

@Component({ selector: 'app-doctor-patients', template: '' })
export class DoctorPatientsComponent implements OnInit {

  selectedDoctorId$ = new Subject<string>()
  doctorPatients: any[] = []

  ngOnInit() {
    // ✅ SwitchMap — Doctor select panna, that doctor's patients fetch pannuvom
    this.selectedDoctorId$.pipe(
      switchMap(doctorId => {
        console.log(\`Fetching patients for doctor: \${doctorId}\`)
        // New doctor select panna — previous doctor's API cancel ✅
        return this.api.getPatientsByDoctor(doctorId)
      })
    ).subscribe(patients => {
      this.doctorPatients = patients
    })
  }

  onDoctorSelect(doctorId: string) {
    this.selectedDoctorId$.next(doctorId)
    // D1 select panna → API fire
    // Immediately D2 select panna → D1 API cancel, D2 API start ✅
  }
}


// ══════════════════════════════════════════════
// 7. FORKJOIN + SWITCHMAP COMBO — Real World
// "Route change aana, parallel-a multiple APIs call pannuvom"
// ══════════════════════════════════════════════

@Component({
  selector: 'app-patient-full-profile',
  template: ''
})
export class PatientFullProfileComponent implements OnInit {

  profileData: any = null

  constructor(
    private route: ActivatedRoute,
    private api: HospitalApiService
  ) {}

  ngOnInit() {
    // ✅ SwitchMap (route change handle) + ForkJoin (parallel APIs)
    this.route.params.pipe(
      switchMap(params => {
        const patientId = params['id']
        console.log(\`Loading full profile for: \${patientId}\`)

        // SwitchMap: Route change aana previous forkJoin cancel ✅
        // ForkJoin: All APIs parallel-a run aagudhu ✅
        return forkJoin({
          details:     this.api.getPatientDetails(patientId),
          reports:     this.api.getPatientReports(patientId),
          medications: this.api.getPatientMedications(patientId),
          billing:     this.api.getPatientBilling(patientId)
        })
        // Route P001 → P002 quick navigate panna:
        // P001's forkJoin (all 4 APIs) cancel aagudhu ✅
        // P002's forkJoin start aagudhu ✅
      })
    ).subscribe(data => {
      this.profileData = data  // All 4 APIs result ✅
    })
  }
}


// ══════════════════════════════════════════════
// 8. VISUAL TIMELINE COMPARISON
// ══════════════════════════════════════════════

// ForkJoin — Parallel, wait for all:
//
// API 1 (1s):  [===========]✅
// API 2 (2s):  [====================]✅
// API 3 (1.5s):[===============]✅
// API 4 (0.5s):[=====]✅
//              ↑                    ↑
//            start               emit (all done at 2s)
// Result: ONE emission with ALL results after 2 seconds 🚀

// SwitchMap — Latest wins, previous cancel:
//
// Source:      --A--------B---C-----→
// A's inner:   --[========X]        ← Cancelled when B arrives
// B's inner:              --[==X]   ← Cancelled when C arrives
// C's inner:                  --[=======]✅
// Result:                           ← Only C's result emitted ✅


// 📌 Summary:
// forkJoin   → Parallel APIs, wait for ALL complete, one emission
//              Use: Dashboard load, page init data, independent parallel calls
//              ⚠️ Any one error → entire forkJoin fails (use catchError)
//              ⚠️ Observables must COMPLETE (not infinite streams)
//
// switchMap  → Source emit → inner Observable start → new source → cancel previous
//              Use: Search autocomplete, route-dependent fetch, live filters
//              ✅ Prevents stale data
//              ✅ Cancels unnecessary HTTP requests
//
// Combo      → switchMap (route change) + forkJoin (parallel APIs) = powerful! 🚀`
  }
];
