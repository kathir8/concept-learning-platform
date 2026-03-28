import { Concept } from '../../models/concept.model';

export const javaScriptConcepts: Concept[] = [
    {
        id: 'closures',
        title: 'Closures',
        category: 'JavaScript',
        slangDefinition: `Closure na inner function outer function variable-a remember pannum so state maintain panna use pannalaam. Idhu data hide pannitu reuse panna useful. Indha example-la makeCounter function return pannura inner function count variable-a remember pannitu every call-la increment pannudhu.`,
        interviewDefinition: `A closure allows a function to retain access to variables from its outer scope, even after the outer function has executed. It is useful for maintaining state. The example shows a counter function remembering and updating the count variable across calls.`,
        example: `function makeCounter() {
  let count = 0; // Lexical environment variable
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`
    },
    {
        id: 'event-loop',
        title: 'Event Loop',
        category: 'JavaScript',
        referenceUrl: 'https://js-engine-visualizer.vercel.app/',
        slangDefinition: `Event loop na sync code first execute pannum, async tasks queue-la wait pannum so blocking avoid pannalaam. Idhu JS non-blocking behavior-ku important. Indha example-la console logs first run aagudhu, Promise callback next, setTimeout last execute aagudhu.`,
        interviewDefinition: `The event loop manages execution of synchronous and asynchronous tasks, ensuring non-blocking behavior in JavaScript. It prioritizes microtasks over macrotasks. The example shows synchronous logs first, then Promise (microtask), followed by setTimeout (macrotask).`,
        example: `console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('End');

// Output:
// Start
// End
// Promise callback
// Timeout callback`
    }
];
