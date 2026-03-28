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
    }
];
