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
  },
  {
    "id": "crlf-injection",
    "title": "CRLF Injection",
    "category": "JavaScript",
    "slangDefinition": `CRLF Injection na hacker user input la special characters (\\r = carriage return, \\n = new line) inject panni HTTP response structure ah break panna try pannuvanga. Idhu mostly headers manipulate panna use pannuvanga. Example ku attacker input la "\\r\\nSet-Cookie: admin=true" nu inject panna server additional header create pannidum. Idhu dangerous because attacker cookies modify panna, redirects create panna, illa response splitting panna mudiyum. Adhanala user input sanitize panna romba important.`,
    "interviewDefinition": `CRLF Injection is a security vulnerability where an attacker injects carriage return (CR) and line feed (LF) characters into HTTP headers or logs. These characters terminate a header line and start a new one, allowing attackers to manipulate the structure of the HTTP response. This can lead to HTTP response splitting, header manipulation, cookie injection, or cache poisoning. The issue occurs when user input is directly included in headers without proper validation or sanitization.`,
    "example": `// Vulnerable example
app.get('/redirect', (req, res) => {
  const url = req.query.url;
  res.setHeader('Location', url);
  res.status(302).end();
});

// Malicious input
// /redirect?url=https://example.com%0d%0aSet-Cookie:%20admin=true`
  },
  {
    id: 'spread-vs-rest',
    title: 'Spread vs Rest',
    category: 'JavaScript',
    slangDefinition: `Spread na array/object-a unpack panni values-a spread pannidum, Rest na multiple values-a oru variable-la collect pannidum. Rendu-um ... syntax use pannuvanga, but purpose different. Spread - values spread pannidhu (expand), Rest - values gather pannidhu (collect). Example-la spread array merge panna use pannrom, rest function parameters collect panna use pannrom.`,
    interviewDefinition: `Spread (...) expands an array or object into individual elements, useful for copying, merging, or passing values. Rest (...) collects multiple values into a single array, commonly used in function parameters to handle variable arguments. Both use the same syntax but serve opposite purposes — Spread expands, Rest collects.`,
    example: `// ✅ Spread — Expand values
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2 }

// ✅ Rest — Collect values
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Rest in destructuring
const [first, ...remaining] = [10, 20, 30, 40];
console.log(first);     // 10
console.log(remaining); // [20, 30, 40]`
  },
  {
    id: 'hoisting',
    title: 'Hoisting',
    category: 'JavaScript',
    slangDefinition: `Hoisting na JavaScript execution start aagura munnade, variable and function declarations-a memory-la top-ku move pannidhu. So function-a declare pannura munnade call panna mudiyum. Aana var hoisted aagum but undefined-a irukum, let/const hoisted aagum but Temporal Dead Zone (TDZ) la irukum — access panna ReferenceError varum. Function declaration fully hoisted, function expression hoisted aagaadhu.`,
    interviewDefinition: `Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compile phase, before code execution. Function declarations are fully hoisted and can be called before they are defined. var is hoisted but initialized as undefined. let and const are hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration is reached — accessing them before declaration throws a ReferenceError. Function expressions and arrow functions are not hoisted.`,
    example: `// ✅ Function Declaration — Fully hoisted
greet(); // "Hello!" — works fine before declaration
function greet() {
  console.log('Hello!');
}

// ✅ var — Hoisted but undefined
console.log(myVar); // undefined (no error)
var myVar = 10;
console.log(myVar); // 10

// ❌ let — Hoisted but in TDZ
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;

// ❌ const — Same as let (TDZ)
console.log(myConst); // ReferenceError
const myConst = 30;

// ❌ Function Expression — Not hoisted
sayHi(); // TypeError: sayHi is not a function
var sayHi = function() {
  console.log('Hi!');
};

// ❌ Arrow Function — Not hoisted
sayBye(); // TypeError: sayBye is not a function
var sayBye = () => {
  console.log('Bye!');
};

// 📌 Summary:
// var         → hoisted + undefined
// let/const   → hoisted + TDZ (ReferenceError if accessed early)
// function    → fully hoisted ✅
// expression  → not hoisted ❌`
  },
  {
    id: 'error-handling-without-promise',
    title: 'Error Handling Without Promise (Callback Pattern)',
    category: 'JavaScript',
    slangDefinition: `Promise varuradhu munnaadi JavaScript-la async errors handle panna callback pattern use pannuvanga — specifically "error-first callback" pattern. Idhu Node.js-la romba common. Function-ku oru callback pass pannuvom, adhu first parameter-a error, second parameter-a result receive pannum. Error irundha first param check pannuvom, illana result use pannuvom. Aana nested callbacks varum pothu "Callback Hell" problem varum — code pyramid maari teriyadhu, maintain panna kashtam.`,
    interviewDefinition: `Before Promises, JavaScript handled asynchronous errors using the error-first callback pattern (also called Node.js callback convention). A callback function is passed as the last argument, where the first parameter is an error object and the second is the result. If an error occurs, the first argument is populated; otherwise it is null. The main drawback is Callback Hell — deeply nested callbacks that are hard to read and maintain. Promises and async/await were introduced to solve this problem.`,
    example: `// ✅ Error-First Callback Pattern
function fetchData(id, callback) {
  setTimeout(() => {
    if (!id) {
      callback(new Error('ID is required'), null); // ❌ Error case
    } else {
      callback(null, { id, name: 'John' });         // ✅ Success case
    }
  }, 1000);
}

// Usage
fetchData(1, (error, data) => {
  if (error) {
    console.error('Error:', error.message); // Handle error
    return;
  }
  console.log('Data:', data); // { id: 1, name: 'John' }
});

fetchData(null, (error, data) => {
  if (error) {
    console.error('Error:', error.message); // Error: ID is required
    return;
  }
  console.log('Data:', data);
});

// ❌ Callback Hell — Nested callbacks (hard to read)
fetchUser(1, (err, user) => {
  if (err) { console.error(err); return; }

  fetchOrders(user.id, (err, orders) => {
    if (err) { console.error(err); return; }

    fetchOrderDetails(orders[0].id, (err, details) => {
      if (err) { console.error(err); return; }

      console.log('Details:', details); // Deeply nested 😵
    });
  });
});

// ✅ This problem was solved by Promises → then/catch
// and later async/await for cleaner syntax

// 📌 Summary:
// callback(error, result) — error-first convention
// if (error) → handle error, return early
// Nested callbacks → Callback Hell ❌
// Solution → Promises / async-await ✅`
  },
  {
    id: 'call-apply-bind',
    title: 'Call, Apply, Bind',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/74tdo3f7f43b8f50e4b82b453691fdcf6bac1',
    slangDefinition: `Call, Apply, Bind — moonum-um function-la 'this' keyword-a manually set panna use pannuvom. Call na function-a immediately invoke pannudhu, arguments comma separated-a pass pannuvom. Apply na same maari immediately invoke pannudhu, aana arguments array-la pass pannuvom. Bind na function-a immediately call pannaamal, new function return pannudhu — adha later call pannalaam. Simple-a: Call = invoke now + comma args, Apply = invoke now + array args, Bind = invoke later + returns new function.`,
    interviewDefinition: `call(), apply(), and bind() are Function prototype methods used to explicitly set the this context of a function. call() invokes the function immediately with arguments passed individually. apply() invokes the function immediately with arguments passed as an array. bind() does not invoke the function — instead it returns a new function with this permanently bound, which can be called later. All three are useful when borrowing methods from other objects or controlling execution context.`,
    example: `// ✅ Common Setup
const person1 = { name: 'John', age: 30 };
const person2 = { name: 'Jane', age: 25 };

function greet(greeting, punctuation) {
  console.log(\`\${greeting}, I am \${this.name} aged \${this.age}\${punctuation}\`);
}

// ✅ call() — Invoke immediately, args comma separated
greet.call(person1, 'Hello', '!');  // Hello, I am John aged 30!
greet.call(person2, 'Hi', '.');     // Hi, I am Jane aged 25.

// ✅ apply() — Invoke immediately, args as array
greet.apply(person1, ['Hello', '!']); // Hello, I am John aged 30!
greet.apply(person2, ['Hi', '.']);    // Hi, I am Jane aged 25.

// ✅ bind() — Returns new function, invoke later
const greetJohn = greet.bind(person1, 'Hey');
greetJohn('!');  // Hey, I am John aged 30!
greetJohn('?');  // Hey, I am John aged 30?

// ✅ Real World — Method Borrowing
const calculator = {
  value: 100,
  add(num) {
    return this.value + num;
  }
};

const myObj = { value: 200 };

// Borrow add method from calculator for myObj
console.log(calculator.add.call(myObj, 50));  // 250 (uses myObj.value)

// ✅ Real World — bind() in Event Listeners
class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    // Without bind — 'this' would be undefined inside setInterval
    setInterval(this.tick.bind(this), 1000); // ✅ bind fixes 'this'
  }

  tick() {
    this.seconds++;
    console.log(this.seconds);
  }
}

// ✅ apply() Real World — Math with arrays
const numbers = [5, 2, 8, 1, 9];
console.log(Math.max.apply(null, numbers)); // 9
// Same as: Math.max(...numbers) in modern JS

// 📌 Summary:
// call()  → invoke now  + args: fn.call(this, arg1, arg2)
// apply() → invoke now  + args: fn.apply(this, [arg1, arg2])
// bind()  → invoke later + returns new fn: const fn = fn.bind(this)`
  },
  {
    id: 'coercion',
    title: 'Type Coercion',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/74tdofa31499ff3914315adf22d4f4e13d730',
    slangDefinition: `Coercion na JavaScript automatic-a (implicit) illa manually (explicit) oru data type-a vera type-a convert panradhu. JS loosely typed language — so different types compare panna illa operate panna try panna, JS automatically convert pannidhu. Idhu sometimes unexpected results kudukum. "5" + 3 = "53" (string concatenation), "5" - 3 = 2 (number conversion) — same maari operate pannalum result different aagudhu. Strict equality (===) use panna coercion avoid pannalaam.`,
    interviewDefinition: `Type Coercion in JavaScript is the automatic or explicit conversion of a value from one data type to another. Implicit coercion happens automatically when JavaScript tries to perform operations on mixed types — like adding a string and a number. Explicit coercion is when the developer manually converts types using Number(), String(), Boolean() etc. Coercion can lead to unexpected bugs, especially with == (loose equality) which allows type coercion, whereas === (strict equality) does not.`,
    example: `// ✅ Implicit Coercion — JS auto converts
// String + Number → String concatenation
console.log('5' + 3);       // '53'  (number → string)
console.log('5' + true);    // '5true'

// String - Number → Number subtraction
console.log('5' - 3);       // 2     (string → number)
console.log('10' * 2);      // 20    (string → number)
console.log('10' / '2');    // 5     (both → number)

// Boolean coercion
console.log(true + 1);      // 2     (true → 1)
console.log(false + 1);     // 1     (false → 0)
console.log('' + 1);        // '1'   (empty string → string)

// ✅ Explicit Coercion — Manual conversion
console.log(Number('42'));      // 42
console.log(Number(''));        // 0
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number('abc'));     // NaN

console.log(String(42));        // '42'
console.log(String(true));      // 'true'
console.log(String(null));      // 'null'

console.log(Boolean(0));        // false
console.log(Boolean(''));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false
console.log(Boolean(1));        // true
console.log(Boolean('hello'));  // true

// ✅ == (Loose) vs === (Strict)
console.log(5 == '5');    // true  ✅ (coercion happens)
console.log(5 === '5');   // false ❌ (no coercion, type matters)

console.log(0 == false);  // true  ✅ (false → 0)
console.log(0 === false); // false ❌

console.log(null == undefined);  // true  ✅ (special case)
console.log(null === undefined); // false ❌

// ❌ Tricky Coercion Gotchas
console.log([] + []);    // ''    (both arrays → empty string)
console.log([] + {});    // '[object Object]'
console.log({} + []);    // '[object Object]'
console.log('' == false);  // true 😵

// 📌 Summary:
// Implicit  → JS auto converts (can cause bugs) ⚠️
// Explicit  → Manual convert using Number(), String(), Boolean()
// ==        → Loose equality, allows coercion ❌
// ===       → Strict equality, no coercion ✅ (always prefer this)`
  },
  {
    id: 'prototypal-inheritance',
    title: 'Prototypal Inheritance',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/o5bskb8a16f032f2c45ed8e261e97f3b48e63',
    slangDefinition: `Prototypal Inheritance na JavaScript-la object, vera oru object-oda properties and methods-a inherit panra mechanism. Every object-ku oru hidden __proto__ property irukkum — adhu parent object-a point pannudhu. Namma object-la oru property illa na, JS automatic-a prototype chain-la search pannudhu. Class-based inheritance maari illa — directly object-from-object inherit pannudhu. Array methods maari (map, filter, forEach) ellam Array.prototype-la define aagirukku, adhanala every array adha use panna mudiyudhu.`,
    interviewDefinition: `Prototypal Inheritance is JavaScript's mechanism for sharing properties and methods between objects through a prototype chain. Every object has an internal [[Prototype]] reference (accessible via __proto__) pointing to its parent object. When a property or method is not found on an object, JavaScript traverses up the prototype chain until it finds it or reaches null. Unlike classical inheritance, JavaScript uses object-to-object inheritance. ES6 class syntax is syntactic sugar over prototypal inheritance.`,
    example: `// ✅ Basic Prototype Chain
const animal = {
  breathe() {
    console.log(\`\${this.name} is breathing\`);
  }
};

const dog = {
  name: 'Rex',
  bark() {
    console.log('Woof!');
  }
};

// Set animal as prototype of dog
Object.setPrototypeOf(dog, animal);

dog.bark();    // Woof!         (own method)
dog.breathe(); // Rex is breathing (inherited from animal ✅)

// ✅ Prototype Chain Lookup
console.log(dog.hasOwnProperty('bark'));    // true  (own property)
console.log(dog.hasOwnProperty('breathe')); // false (inherited)

// ✅ Constructor Function — Old way
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to prototype — shared across all instances
Person.prototype.greet = function() {
  console.log(\`Hi, I am \${this.name}\`);
};

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

john.greet(); // Hi, I am John
jane.greet(); // Hi, I am Jane

// Both share same greet method from prototype ✅
console.log(john.greet === jane.greet); // true

// ✅ ES6 Class — Syntactic sugar over prototypal inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {  // Dog.prototype → Animal.prototype
  constructor(name) {
    super(name); // Call parent constructor
  }

  bark() {
    console.log(\`\${this.name} barks!\`);
  }
}

const rex = new Dog('Rex');
rex.bark();  // Rex barks!   (own method)
rex.speak(); // Rex makes a sound (inherited ✅)

// ✅ Prototype Chain Visualization
// rex → Dog.prototype → Animal.prototype → Object.prototype → null

console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true ✅ (chain)

// ✅ Object.create() — Direct prototypal inheritance
const vehicleProto = {
  startEngine() {
    console.log(\`\${this.model} engine started\`);
  }
};

const car = Object.create(vehicleProto); // car.__proto__ = vehicleProto
car.model = 'Tesla';
car.startEngine(); // Tesla engine started ✅

// ✅ Real World — Array prototype
const nums = [1, 2, 3];
// nums.__proto__ === Array.prototype
// Array.prototype has map, filter, forEach etc.
nums.map(n => n * 2);    // [2, 4, 6] — inherited from Array.prototype ✅

// 📌 Summary:
// Every object has __proto__ pointing to parent object
// Property not found → JS walks up prototype chain
// Constructor fn  → methods added to .prototype
// ES6 class       → syntactic sugar, still prototypal underneath
// Object.create() → cleanest way for direct prototypal inheritance`
  },
  {
    id: 'this-keyword',
    title: 'This Keyword',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/o5bsk2c9399b7833b4d24be98b59a08f94805',
    slangDefinition: `'this' na JavaScript-la current execution context-a refer pannudhu — depends upon where we call pannuvom and how we call, 'this' value will change. Global scope-la 'this' = window object. Object method-la 'this' = adha object. Arrow function-la 'this' = surrounding (lexical) scope — own 'this' illa. Event listener-la 'this' = event trigger panna element. Strict mode-la global 'this' = undefined. Idhu confusing because same function different context-la call panna 'this' different aagum.`,
    interviewDefinition: `'this' in JavaScript refers to the object that is currently executing the function. Its value is determined by how and where the function is called, not where it is defined. In the global scope, this refers to the window object (or undefined in strict mode). In object methods, this refers to the object. Arrow functions do not have their own this — they inherit it from the enclosing lexical scope. In event listeners, this refers to the DOM element that triggered the event. call(), apply(), and bind() can explicitly set this.`,
    example: `// ✅ 1. Global Context
console.log(this); // window (browser) / {} (Node.js)

function showThis() {
  console.log(this); // window (non-strict) / undefined (strict mode)
}
showThis();

// ✅ 2. Object Method — this = the object
const person = {
  name: 'John',
  greet() {
    console.log(this.name); // 'John' ✅
  }
};
person.greet();

// ❌ Method extracted — loses context
const greetFn = person.greet;
greetFn(); // undefined ❌ (this = window now)

// ✅ 3. Arrow Function — Lexical this (no own this)
const timer = {
  seconds: 0,

  // ❌ Regular function — this is lost inside setInterval
  startWrong() {
    setInterval(function() {
      this.seconds++; // ❌ this = window, not timer
      console.log(this.seconds); // NaN
    }, 1000);
  },

  // ✅ Arrow function — inherits this from startCorrect
  startCorrect() {
    setInterval(() => {
      this.seconds++; // ✅ this = timer object
      console.log(this.seconds); // 1, 2, 3...
    }, 1000);
  }
};

// ✅ 4. Class — this = instance
class Car {
  constructor(model) {
    this.model = model; // this = new Car instance
  }

  getModel() {
    console.log(this.model); // ✅ this = Car instance
  }

  getModelArrow = () => {
    console.log(this.model); // ✅ Arrow — lexical this, safe to use as callback
  }
}

const tesla = new Car('Tesla');
tesla.getModel(); // 'Tesla'

// Safe to pass as callback (arrow method)
const fn = tesla.getModelArrow;
fn(); // 'Tesla' ✅ (arrow preserves this)

// ✅ 5. Event Listener — this = DOM element
const button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log(this); // <button> element ✅
});

button.addEventListener('click', () => {
  console.log(this); // window ❌ (arrow — lexical this)
});

// ✅ 6. Explicit Binding — call, apply, bind
function introduce(greeting) {
  console.log(\`\${greeting}, I am \${this.name}\`);
}

const user = { name: 'Jane' };
introduce.call(user, 'Hello');   // Hello, I am Jane ✅
introduce.apply(user, ['Hi']);   // Hi, I am Jane ✅

const boundFn = introduce.bind(user);
boundFn('Hey'); // Hey, I am Jane ✅

// ✅ 7. Strict Mode
'use strict';
function strictFn() {
  console.log(this); // undefined (not window) ✅
}
strictFn();

// 📌 Summary:
// Global scope          → this = window / undefined (strict)
// Object method         → this = that object
// Arrow function        → this = enclosing scope (lexical)
// Class constructor     → this = new instance
// Event listener        → this = DOM element (regular fn)
// call / apply / bind   → this = manually set`
  },
  {
    id: 'operators-and-expressions',
    title: 'Operators and Expressions (&&, ||, ??, !!, ?:)',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/bietvf747e2f90f84485c885d24a2a7bef8af',
    slangDefinition: `Indha operators ellam values-a evaluate panni condition based-a result return pannuvanga. ?? na only null/undefined-ku default kudukum — 0, '', false ellam valid-a treat pannudhu. || na any falsy value-ku (0, '', false, null, undefined) default kudukum. && na left truthy-a irundha right return pannudhu — condition shorthand maari use pannuvom. !! na any value-a boolean-a convert pannudhu. ?: na if-else shorthand. Logical assignment operators (&&=, ||=, ??=) na condition check + assign oru line-la pannuvom.`,
    interviewDefinition: `JavaScript logical operators evaluate expressions and return values based on truthiness. ?? (Nullish Coalescing) returns the right side only when the left is null or undefined — 0, false, and empty string are treated as valid values. || (Logical OR) returns the right side for any falsy value. && (Logical AND) returns the right side only if the left is truthy. !! (Double NOT) converts any value to its boolean equivalent. ?: (Ternary) is a concise if-else. Logical Assignment operators (&&=, ||=, ??=) combine condition check and assignment in one expression.`,
    example: `// ✅ ?? Nullish Coalescing — default only for null/undefined
console.log("Hello"   ?? 'Default'); // 'Hello'
console.log(" "       ?? 'Default'); // ' '
console.log(4         ?? 'Default'); // 4
console.log(-4        ?? 'Default'); // -4
console.log(true      ?? 'Default'); // true
console.log(false     ?? 'Default'); // false  ✅ (not null/undefined)
console.log([]        ?? 'Default'); // []
console.log({}        ?? 'Default'); // {}
console.log(0         ?? 'Default'); // 0      ✅ (not null/undefined)
console.log(""        ?? 'Default'); // ''     ✅ (not null/undefined)
console.log(null      ?? 'Default'); // 'Default' ✅
console.log(undefined ?? 'Default'); // 'Default' ✅

// ✅ || Logical OR — default for ANY falsy value
console.log("Hello"   || 'Default'); // 'Hello'
console.log(" "       || 'Default'); // ' '
console.log(4         || 'Default'); // 4
console.log(-4        || 'Default'); // -4
console.log(true      || 'Default'); // true
console.log([]        || 'Default'); // []
console.log({}        || 'Default'); // {}
console.log(false     || 'Default'); // 'Default' ❌ (false is falsy)
console.log(""        || 'Default'); // 'Default' ❌ ('' is falsy)
console.log(0         || 'Default'); // 'Default' ❌ (0 is falsy)
console.log(null      || 'Default'); // 'Default' ❌
console.log(undefined || 'Default'); // 'Default' ❌

// ✅ && Logical AND — returns right if left is truthy
console.log("Hello"   && 'Result'); // 'Result'  ✅ (left truthy)
console.log(0         && 'Result'); // 0          ❌ (left falsy, stops)
console.log(null      && 'Result'); // null       ❌ (left falsy, stops)

// Real world && usage — shorthand condition
const user = { theme: 'dark', name: 'John' };

// ❌ Old way
if (user.theme) {
  console.log(\`\${user.name}'s theme is \${user.theme}\`);
}
// ✅ New way
user.theme && console.log(\`\${user.name}'s theme is \${user.theme}\`);

// ✅ ?: Ternary Operator — if-else shorthand
console.log("Hello"   ? true : false); // true
console.log(" "       ? true : false); // true
console.log(4         ? true : false); // true
console.log(-4        ? true : false); // true
console.log(true      ? true : false); // true
console.log([]        ? true : false); // true
console.log({}        ? true : false); // true
console.log(false     ? true : false); // false
console.log(""        ? true : false); // false
console.log(0         ? true : false); // false
console.log(null      ? true : false); // false
console.log(undefined ? true : false); // false

// ✅ !! Double Bang — convert to boolean
console.log(!!"Hello");    // true
console.log(!!" ");        // true
console.log(!!4);          // true
console.log(!!-4);         // true
console.log(!!true);       // true
console.log(!![]);         // true
console.log(!!{});         // true
console.log(!!"");         // false ❌
console.log(!!0);          // false ❌
console.log(!!null);       // false ❌
console.log(!!undefined);  // false ❌
console.log(!!false);      // false ❌

// ✅ Logical Assignment Operators
// &&= — Assign only if current value is truthy
const user1 = { featureEnabled: true };
user1.featureEnabled &&= false;
console.log(user1.featureEnabled); // false ✅ (was truthy, so assigned)

const user2 = { featureEnabled: false };
user2.featureEnabled &&= false;
console.log(user2.featureEnabled); // false (was falsy, NOT assigned — stays same)

// ||= — Assign only if current value is falsy
const config = { customColors: '' };
config.customColors ||= '#ffffff';
console.log(config.customColors); // '#ffffff' ✅ (was falsy empty string)

const config2 = { customColors: '#000000' };
config2.customColors ||= '#ffffff';
console.log(config2.customColors); // '#000000' (was truthy, NOT assigned)

// ??= — Assign only if current value is null/undefined
const settings = { animations: null };
settings.animations ??= true;
console.log(settings.animations); // true ✅ (was null)

const settings2 = { animations: false };
settings2.animations ??= true;
console.log(settings2.animations); // false ✅ (was false, NOT null/undefined)

// 📌 Quick Reference Table:
// ??   → default if null/undefined ONLY
// ||   → default if ANY falsy (0, '', false, null, undefined)
// &&   → return right if left is truthy
// !!   → convert to boolean
// ?:   → ternary if-else shorthand
// &&=  → assign if current is truthy
// ||=  → assign if current is falsy
// ??=  → assign if current is null/undefined`
  },
  {
    id: 'axios-vs-fetch',
    title: 'Axios vs Fetch',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/9wn9o1d44de83e025400ebe8c529fa6c5960f',
    slangDefinition: `HTTP requests send pannradhu-ku fetch native browser API-ku mattum free, but axios library install pannanum. Fetch basic request-ku ok, but JSON parsing manually pannanum. Axios automatic-a handle pannidhu. Indha example-la fetch-le .json() call pannanum, pero axios-le direct object handle pannalam. Timeout, interceptor, request cancellation-ku axios better.`,
    interviewDefinition: `Fetch is a native browser API for making HTTP requests, while Axios is a third-party library. Fetch requires manual JSON parsing and doesn't have built-in timeout, but Axios handles this automatically. Axios provides interceptors for request/response manipulation and easier error handling. The example shows Fetch needing .json() conversion while Axios gives data directly. For large projects with complex API needs, Axios is preferred; for simple requests, Fetch works fine.`,
    example: `// FETCH - Native Browser API
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) throw new Error('Network error');
    return response.json(); // Manual JSON parsing
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// AXIOS - Third Party Library
import axios from 'axios';

axios.get('https://api.example.com/users')
  .then(response => console.log(response.data)) // Direct access to data
  .catch(error => console.error('Error:', error));

// AXIOS with Interceptor (Fetch requires manual wrapping)
axios.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer token';
  return config;
});

// AXIOS with Timeout (Fetch needs AbortController)
axios.get('https://api.example.com/users', { timeout: 5000 });`
  },
  {
    id: 'async-await',
    title: 'Async / Await',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/bietvc1bccedb4e8740b890393911a2d45add',
    slangDefinition: `Async/await use pannradhu na Promises-ku readable syntax-a give pannradhu so code synchronous-a look pannudhu. Async function use pannumbodhu Promise return pannum, await keyword use pannumbodhu Promise complete aagum varaikum wait pannalaam. Indha example-la async function-la data fetch pannitu processing pannudhu. Await keyword-dha Promise settle aagum varaikum next line execute agadhu. Try-catch use pannalaam error handling-ku.`,
    interviewDefinition: `Async/await is syntactic sugar over Promises making asynchronous code look and behave more like synchronous code. The async keyword declares an asynchronous function that always returns a Promise. The await keyword pauses execution until the Promise resolves. This makes code more readable than nested .then() chains. Error handling is simpler with try-catch blocks instead of .catch(). The example shows fetching data and processing it cleanly with async/await.`,
    example: `// WITHOUT Async/Await (Callback Hell / Promise Chaining)
function getUserData() {
  return fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(data => {
      return fetch('https://api.example.com/posts/' + data.id)
        .then(response => response.json())
        .then(posts => ({ user: data, posts }));
    })
    .catch(error => console.error('Error:', error));
}

// WITH Async/Await (Clean & Readable)
async function getUserData() {
  try {
    const userResponse = await fetch('https://api.example.com/user');
    const userData = await userResponse.json();
    
    const postsResponse = await fetch('https://api.example.com/posts/' + userData.id);
    const postsData = await postsResponse.json();
    
    return { user: userData, posts: postsData };
  } catch (error) {
    console.error('Error:', error);
  }
}

// USING in Angular Service
@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}
  
  async fetchUserWithPosts(userId: number) {
    try {
      const user = await this.http.get(\`/api/users/\${userId}\`).toPromise();
      const posts = await this.http.get(\`/api/posts?userId=\${userId}\`).toPromise();
      return { user, posts };
    } catch (error) {
      console.error('Failed to fetch:', error);
      throw error;
    }
  }
}`
  },
  {
    id: 'pre-post-increment',
    title: 'Pre / Post Increment & Decrement',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/bietv01715716756548c5b85089e2937d6e07',
    slangDefinition: `Pre-increment (++x) na first increment pannudhu, aparam value return pannudhu. Post-increment (x++) na first current value return pannudhu, aparam increment pannudhu. Simple-a solla: Pre = "먼저 올리고 줘" (先 increment, then return), Post = "먼저 줘, 올려" (先 return, then increment). Loop-la mostly x++ use pannuvom — current value use panni aparam increment aagudhu. Decrement-um same logic — --x (pre) and x-- (post).`,
    interviewDefinition: `Pre-increment (++x) increments the value first and then returns the updated value. Post-increment (x++) returns the current value first and then increments it. The same logic applies to decrement — --x (pre-decrement) decrements first then returns, x-- (post-decrement) returns first then decrements. In simple statements the difference doesn't matter, but in assignments or expressions the order of operation produces different results.`,
    example: `// ✅ Post-Increment (x++) — Return THEN increment
let a = 5;
console.log(a++); // 5  ← returns current value FIRST
console.log(a);   // 6  ← THEN increments

// ✅ Pre-Increment (++x) — Increment THEN return
let b = 5;
console.log(++b); // 6  ← increments FIRST, THEN returns
console.log(b);   // 6

// ✅ Post-Decrement (x--) — Return THEN decrement
let c = 5;
console.log(c--); // 5  ← returns current value FIRST
console.log(c);   // 4  ← THEN decrements

// ✅ Pre-Decrement (--x) — Decrement THEN return
let d = 5;
console.log(--d); // 4  ← decrements FIRST, THEN returns
console.log(d);   // 4

// ✅ Assignment Difference — Where it matters
let x = 5;
let y = x++;      // y gets OLD value (5), x becomes 6
console.log(y);   // 5
console.log(x);   // 6

let p = 5;
let q = ++p;      // p increments first (6), q gets NEW value (6)
console.log(q);   // 6
console.log(p);   // 6

// ✅ In Loops — Common usage
// Post-increment (most common in loops)
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// Pre-increment (same result in simple for loop)
for (let i = 0; i < 3; ++i) {
  console.log(i); // 0, 1, 2  (same output here)
}

// ✅ Tricky Expression Example
let n = 3;
let result = n++ + ++n;
// Step 1: n++ → returns 3, then n becomes 4
// Step 2: ++n → n becomes 5, returns 5
// Step 3: 3 + 5 = 8
console.log(result); // 8
console.log(n);      // 5

// ✅ Real World Usage
let count = 0;
const items = ['a', 'b', 'c'];

// Post-increment — use index then move to next
items.forEach(() => {
  console.log(\`Processing item \${count++}\`);
  // Output: item 0, item 1, item 2
});

// Pre-increment — move to next then use (1-based counter)
let counter = 0;
items.forEach(() => {
  console.log(\`Item number \${++counter}\`);
  // Output: Item number 1, Item number 2, Item number 3
});

// 📌 Summary:
// x++  → Post-increment: return FIRST, then increment
// ++x  → Pre-increment:  increment FIRST, then return
// x--  → Post-decrement: return FIRST, then decrement
// --x  → Pre-decrement:  decrement FIRST, then return
// Simple loop → both same result
// Assignment  → difference matters ⚠️`
  },
  {
    id: 'memory-management',
    title: 'Memory Management in JavaScript',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/ozl9gfa4f2bafa4294d3397f156f2253e6bb8',
    slangDefinition: `Memory Management na JavaScript-la variables, objects, functions create panna memory allocate aagudhu, use aana aparam garbage collector automatic-a free pannudhu. Aana namma code properly write pannama potta memory leaks varum — data use aagama memory-la stuck aagidum, app slow aagum, crash aagum. Common leaks: global variables, event listeners remove pannama vitrutal, closures unnecessary reference hold pannuradhu, detached DOM nodes. WeakMap/WeakRef use panna GC automatically clean pannudhu.`,
    interviewDefinition: `JavaScript uses automatic memory management through a Garbage Collector (GC) which allocates memory when variables are created and frees it when they are no longer reachable. Memory has three phases: Allocation (variable/object creation), Usage (read/write), and Release (GC cleanup). The primary GC algorithm is Mark-and-Sweep — it marks all reachable objects from root and sweeps unreachable ones. Memory leaks occur when references are unintentionally held, preventing GC from freeing memory. Common causes include global variables, forgotten event listeners, closures retaining references, and detached DOM nodes.`,
    example: `// ✅ 1. Memory Lifecycle
// Phase 1: Allocation
let user = { name: 'John', age: 30 }; // Memory allocated
let nums = [1, 2, 3, 4, 5];           // Memory allocated

// Phase 2: Usage
console.log(user.name); // Read
user.age = 31;          // Write

// Phase 3: Release
user = null; // Reference removed → GC will free memory ✅

// ✅ 2. Stack vs Heap
// Stack — Primitives (fixed size, fast)
let a = 10;       // Stored in Stack
let b = 'Hello';  // Stored in Stack
let c = true;     // Stored in Stack

// Heap — Objects/Arrays/Functions (dynamic size)
let obj = { x: 1 };    // Reference in Stack → Data in Heap
let arr = [1, 2, 3];   // Reference in Stack → Data in Heap

// ✅ 3. Garbage Collection — Mark and Sweep
let obj1 = { name: 'John' };
let obj2 = obj1;  // Both reference same object

obj1 = null;      // obj1 reference removed
// obj2 still holds reference → NOT garbage collected yet

obj2 = null;      // Last reference removed
// Now unreachable → GC will free memory ✅

// ✅ 4. Memory Leaks — Common Causes

// ❌ Leak 1: Accidental Global Variables
function createLeak() {
  leakedVar = 'I am global!'; // No let/const/var → global variable ❌
}
// Fix:
function noLeak() {
  'use strict';
  let localVar = 'I am local'; // ✅ Scoped, GC will clean
}

// ❌ Leak 2: Forgotten Event Listeners
const button = document.getElementById('btn');
function handleClick() { console.log('clicked'); }
button.addEventListener('click', handleClick);
// Component destroyed but listener still alive ❌

// Fix: Remove listener when done
button.removeEventListener('click', handleClick); // ✅

// Angular Fix: Use takeUntilDestroyed / ngOnDestroy
ngOnDestroy() {
  button.removeEventListener('click', handleClick); // ✅
}

// ❌ Leak 3: Closure Retaining Large Data
function createLeak() {
  const largeData = new Array(1000000).fill('data'); // Large array

  return function() {
    console.log('done'); // largeData never used
    // But closure keeps largeData in memory ❌
  };
}

// Fix: Clear reference when not needed
function noLeak() {
  let largeData = new Array(1000000).fill('data');
  const result = processData(largeData);
  largeData = null; // Release reference ✅
  return result;
}

// ❌ Leak 4: Detached DOM Nodes
let detachedNode;
function createDetachedLeak() {
  const div = document.createElement('div');
  detachedNode = div;               // Stored in variable
  document.body.appendChild(div);
  document.body.removeChild(div);   // Removed from DOM
  // But detachedNode still holds reference ❌ Memory not freed
}

// Fix:
function noDetachedLeak() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  document.body.removeChild(div);
  // No external reference → GC cleans up ✅
}

// ❌ Leak 5: setInterval not cleared
const intervalId = setInterval(() => {
  console.log('Running...'); // Runs forever, holds closure ❌
}, 1000);

// Fix: Always clear intervals
clearInterval(intervalId); // ✅

// Angular Fix:
private intervalId: any;
ngOnInit() {
  this.intervalId = setInterval(() => { ... }, 1000);
}
ngOnDestroy() {
  clearInterval(this.intervalId); // ✅
}

// ✅ 5. WeakMap / WeakSet — GC Friendly References
// Regular Map — Holds strong reference (prevents GC)
const map = new Map();
let keyObj = { id: 1 };
map.set(keyObj, 'data');
keyObj = null;
// Object NOT garbage collected — Map still holds reference ❌

// WeakMap — Holds weak reference (allows GC)
const weakMap = new WeakMap();
let weakKey = { id: 1 };
weakMap.set(weakKey, 'data');
weakKey = null;
// Object IS garbage collected — WeakMap won't prevent it ✅

// Real World WeakMap — DOM node metadata
const nodeData = new WeakMap();
const element = document.querySelector('#myDiv');
nodeData.set(element, { clicks: 0, created: Date.now() });
// When element removed from DOM → WeakMap entry auto cleaned ✅

// ✅ 6. WeakRef — Weak Reference to Object
let heavyObject = { data: new Array(1000000).fill('x') };
const weakRef = new WeakRef(heavyObject);

heavyObject = null; // Allow GC to collect if memory needed

// Check if still alive before using
const obj = weakRef.deref();
if (obj) {
  console.log('Object still in memory:', obj.data.length);
} else {
  console.log('Object was garbage collected');
}

// ✅ 7. Chrome DevTools — Detect Memory Leaks
// 1. Open DevTools → Memory tab
// 2. Take Heap Snapshot before action
// 3. Perform action (navigate, click, etc.)
// 4. Take another Heap Snapshot
// 5. Compare snapshots — growing objects = potential leak

// 📌 Summary:
// GC Algorithm    → Mark and Sweep (reachable = keep, unreachable = free)
// Stack           → Primitives (fast, auto managed)
// Heap            → Objects/Arrays (GC managed)
// Common Leaks    → Global vars, Event listeners, Closures, Detached DOM, Intervals
// WeakMap/WeakSet → GC friendly, won't prevent cleanup ✅
// WeakRef         → Weak reference, deref() to check if alive
// Fix Leaks       → null references, removeEventListener, clearInterval, ngOnDestroy`
  },
  {
    id: 'falsy-values-and-equality',
    title: 'Falsy Values & Equality in JavaScript',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/74tdo95babb2fba84446eb2ac22695f8b549e',
    slangDefinition: `JavaScript-la 6 falsy values irukku — false, 0, '', null, undefined, NaN. Baaki ellam truthy. ! operator use panna value-a boolean-a flip pannudhu. === (strict equality) na type + value rendu-um same-a irukanum — NaN === NaN false (special case), {} === {} false (different memory reference). == (loose equality) na type coercion pannudhu — [] == ![] true aagudhu, step by step coercion rules follow pannudhu. Idhu confusing, adhanala === always prefer pannuvom.`,
    interviewDefinition: `JavaScript has 6 falsy values: false, 0, empty string, null, undefined, and NaN. All other values are truthy. The ! operator negates a boolean expression. Strict equality (===) compares both type and value without coercion — NaN is never equal to itself, and two objects are only equal if they reference the same memory location. Loose equality (==) follows type coercion rules: Boolean converts to number, Object converts to primitive, String vs Number converts string to number, null and undefined are only equal to each other. Always prefer === to avoid unexpected coercion behavior.`,
    example: `// ✅ 6 Falsy Values
console.log(Boolean(false));     // false ❌
console.log(Boolean(0));         // false ❌
console.log(Boolean(''));        // false ❌
console.log(Boolean(null));      // false ❌
console.log(Boolean(undefined)); // false ❌
console.log(Boolean(NaN));       // false ❌

// Everything else is Truthy ✅
console.log(Boolean(1));         // true ✅
console.log(Boolean('hello'));   // true ✅
console.log(Boolean([]));        // true ✅ (empty array is truthy!)
console.log(Boolean({}));        // true ✅ (empty object is truthy!)
console.log(Boolean(-1));        // true ✅
console.log(Boolean(' '));       // true ✅ (space string is truthy!)

// ✅ ! Boolean Operator — Negation
console.log(!3);                    // false (3 is truthy → flip → false)
console.log(!0);                    // true  (0 is falsy  → flip → true)
console.log(!"arvind");             // false (string truthy → flip → false)
console.log(!"");                   // true  (empty string falsy → flip → true)
console.log(!{});                   // false (object truthy → flip → false)
console.log(!("arvind" || 0));      // false ("arvind" is truthy → || returns "arvind" → !truthy → false)
console.log(!("arvind" && 0));      // true  (0 is falsy → && returns 0 → !0 → true)
console.log(!(0 && "arvind"));      // true  (0 is falsy → && short circuits → 0 → !0 → true)

// ✅ Strict Equality (===) — Type + Value, No Coercion
console.log(NaN === NaN);                          // false ⚠️ (NaN is never equal to itself!)
console.log(undefined === undefined);              // true ✅
console.log(null === null);                        // true ✅
console.log({} === {});                            // false ❌ (different memory references)
console.log(-0 === 0);                             // true ⚠️ (special case)

let obj = { name: 'kathir' };
console.log(obj === obj);                          // true  ✅ (same reference)
console.log({ name: 'kathir' } === { name: 'kathir' }); // false ❌ (different references)

// Fix NaN check:
console.log(Number.isNaN(NaN));   // true  ✅
console.log(Object.is(NaN, NaN)); // true  ✅
console.log(Object.is(-0, 0));    // false ✅ (Object.is handles edge cases)

// ✅ Loose Equality (==) Coercion Rules — Step by Step

// 🔥 Famous: [] == ![]  →  true
// Step 1: ![] → false       ([] is truthy, !truthy = false)
// Step 2: [] == false
// Step 3: false → 0         (Boolean → Number)
// Step 4: [] == 0
// Step 5: [] → ""           (Object → Primitive → toString)
// Step 6: "" == 0
// Step 7: "" → 0            (String → Number)
// Step 8: 0 == 0            → true ✅ 😵
console.log([] == ![]);  // true

// ✅ Coercion Rules:
// Rule 1: Same type?        → Direct compare (===)
// Rule 2: null == undefined → true (special case, nothing else)
// Rule 3: Boolean?          → Convert Boolean to Number
// Rule 4: Object?           → Convert Object to Primitive (valueOf/toString)
// Rule 5: String vs Number? → Convert String to Number

// null & undefined special case
console.log(null == undefined);  // true  ✅ (only each other)
console.log(null == 0);          // false ✅ (null only == undefined)
console.log(null == false);      // false ✅
console.log(null == '');         // false ✅
console.log(undefined == false); // false ✅
console.log(undefined == 0);     // false ✅

// Boolean coercion in ==
console.log(true == 1);   // true  (true → 1)
console.log(false == 0);  // true  (false → 0)
console.log(true == '1'); // true  (true → 1, '1' → 1)
console.log(true == 2);   // false (true → 1, 1 !== 2)

// Object to Primitive
console.log([] == 0);     // true  ([] → "" → 0)
console.log([] == '');    // true  ([] → "")
console.log([1] == 1);    // true  ([1] → "1" → 1)
console.log([1,2] == '1,2'); // true ([1,2] → "1,2")

// 📌 Summary:
// Falsy  → false, 0, '', null, undefined, NaN
// Truthy → everything else ([], {}, ' ', -1, 'false')
// ===    → strict, no coercion, always prefer ✅
// ==     → loose, coercion happens, avoid ❌
// NaN    → never equals itself, use Number.isNaN() ✅
// {}==={}→ false (reference check for objects)
// null == undefined → true, null/undefined != anything else`
  },
  {
    id: 'oops-concepts',
    title: 'OOPS',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notebooks/ozl9ge1aa4b4a1f484d2baf6769d3b2b917b0/notecards',
    slangDefinition: `OOP na real world objects-a code-la represent panra way. for example we can take Hospital system — Patient, Doctor, Nurse ellam oru Person — common properties share panranga (inheritance). Patient-oda medical records outsiders can't see (encapsulation). Same method different objects-la different behavior — Doctor treat() vera, Nurse treat() vera (polymorphism). Abstract class-la "Person must have a name" nu rules define panlam, direct instance create panna mudiyadhu (abstraction).`,
    interviewDefinition: `Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects and classes. The 4 pillars are: Encapsulation — bundling data and methods, hiding internal state using private fields; Inheritance — child class inherits properties and methods from parent class using extends; Polymorphism — same method name behaves differently in different classes (method overriding); Abstraction — hiding implementation details, exposing only necessary interface. JavaScript supports OOP through ES6 classes which are syntactic sugar over prototypal inheritance.`,
    example: `// 🏥 Story: Hospital Management System

// ══════════════════════════════════════════════
// 1. CLASS & OBJECT — Blueprint & Instance
// ══════════════════════════════════════════════
// Class = Hospital form template (blueprint)
// Object = Filled form for each patient (instance)

class Person {
  constructor(name, age) {
    this.name = name  // public property
    this.age = age
  }

  introduce() {
    return \`Hi, I am \${this.name}, aged \${this.age}\`
  }
}

// Object = Instance of Class
const person1 = new Person('Anjali', 26)
const person2 = new Person('Rohit', 30)

console.log(person1.introduce()) // Hi, I am Anjali, aged 26
console.log(person2.introduce()) // Hi, I am Rohit, aged 30
console.log(person1 instanceof Person) // true ✅


// ══════════════════════════════════════════════
// 2. ENCAPSULATION — Data Hiding 🔒
// ══════════════════════════════════════════════
// Patient-ோட medical records direct-a access பண்ண கூடாது
// Private fields (#) use பண்ணி hide பண்ணலாம்

class Patient {
  #medicalRecord  // Private field — outside access ❌
  #bloodType      // Private field

  constructor(name, age, bloodType) {
    this.name = name          // Public ✅
    this.age = age            // Public ✅
    this.#bloodType = bloodType // Private 🔒
    this.#medicalRecord = []  // Private 🔒
  }

  // Public method to access private data (controlled access)
  addRecord(record) {
    this.#medicalRecord.push({
      date: new Date().toLocaleDateString(),
      note: record
    })
  }

  getRecords() {
    return this.#medicalRecord // Controlled read ✅
  }

  getBloodType() {
    return this.#bloodType     // Controlled read ✅
  }

  // Getter — access like property
  get patientInfo() {
    return \`\${this.name} | Age: \${this.age} | Blood: \${this.#bloodType}\`
  }

  // Setter — validate before set
  set patientAge(value) {
    if (value < 0 || value > 150) {
      throw new Error('Invalid age!')
    }
    this.age = value
  }
}

const anjali = new Patient('Anjali', 26, 'O+')
anjali.addRecord('Fever — prescribed paracetamol')
anjali.addRecord('Follow-up — recovered')

console.log(anjali.name)           // 'Anjali' ✅ (public)
console.log(anjali.patientInfo)    // 'Anjali | Age: 26 | Blood: O+' ✅
console.log(anjali.getRecords())   // [{date, note}, {date, note}] ✅
// console.log(anjali.#bloodType)  // ❌ SyntaxError: Private field

anjali.patientAge = 27             // Setter — validates ✅
// anjali.patientAge = -5          // ❌ Error: Invalid age!


// ══════════════════════════════════════════════
// 3. INHERITANCE — Parent → Child 👨‍👩‍👧
// ══════════════════════════════════════════════
// Doctor and Nurse are also Persons — share common properties
// extends use பண்ணி parent class-ல இருந்து inherit பண்ணலாம்

class HospitalStaff extends Person {  // Inherits Person ✅
  constructor(name, age, staffId, department) {
    super(name, age)               // Call parent constructor
    this.staffId = staffId
    this.department = department
  }

  getStaffInfo() {
    return \`\${this.introduce()} | ID: \${this.staffId} | Dept: \${this.department}\`
    //       ↑ inherited from Person ✅
  }
}

class Doctor extends HospitalStaff {  // Inherits HospitalStaff ✅
  constructor(name, age, staffId, department, specialization) {
    super(name, age, staffId, department) // Call HospitalStaff constructor
    this.specialization = specialization
  }

  treat(patient) {
    return \`Dr. \${this.name} (\${this.specialization}) is treating \${patient.name}\`
  }

  prescribe(medicine) {
    return \`Dr. \${this.name} prescribed: \${medicine}\`
  }
}

class Nurse extends HospitalStaff {   // Inherits HospitalStaff ✅
  constructor(name, age, staffId, department, shift) {
    super(name, age, staffId, department)
    this.shift = shift
  }

  treat(patient) {                    // Same method name — different behavior!
    return \`Nurse \${this.name} is monitoring \${patient.name}'s vitals\`
  }

  administerMedicine(medicine) {
    return \`Nurse \${this.name} administered: \${medicine}\`
  }
}

const doctor = new Doctor('Kumar', 45, 'D001', 'Cardiology', 'Cardiologist')
const nurse = new Nurse('Priya', 30, 'N001', 'ICU', 'Morning')
const patient = new Patient('Sara', 28, 'A+')

console.log(doctor.introduce())       // Hi, I am Kumar, aged 45 (inherited ✅)
console.log(doctor.getStaffInfo())    // Hi, I am Kumar... | ID: D001 (inherited ✅)
console.log(doctor.treat(patient))    // Dr. Kumar (Cardiologist) is treating Sara
console.log(doctor.prescribe('Aspirin')) // Dr. Kumar prescribed: Aspirin

// instanceof checks entire chain
console.log(doctor instanceof Doctor)        // true ✅
console.log(doctor instanceof HospitalStaff) // true ✅ (chain)
console.log(doctor instanceof Person)        // true ✅ (chain)


// ══════════════════════════════════════════════
// 4. POLYMORPHISM — Same Method, Different Behavior 🎭
// ══════════════════════════════════════════════
// treat() method — Doctor and Nurse behave differently
// Same method name, different implementation

class Pharmacist extends HospitalStaff {
  constructor(name, age, staffId) {
    super(name, age, staffId, 'Pharmacy')
  }

  treat(patient) {  // Override treat() again
    return \`Pharmacist \${this.name} is dispensing medicine to \${patient.name}\`
  }
}

const pharmacist = new Pharmacist('Ravi', 35, 'P001')

// Polymorphism in action — same method, different results
const staffList = [doctor, nurse, pharmacist]

staffList.forEach(staff => {
  console.log(staff.treat(patient))
  // Dr. Kumar (Cardiologist) is treating Sara       ← Doctor behavior
  // Nurse Priya is monitoring Sara's vitals         ← Nurse behavior
  // Pharmacist Ravi is dispensing medicine to Sara  ← Pharmacist behavior
})

// Method Overriding
class Surgeon extends Doctor {
  treat(patient) {          // Override Doctor's treat()
    return \`Surgeon Dr. \${this.name} is performing surgery on \${patient.name}\`
  }

  treat_parent(patient) {   // Call parent method if needed
    return super.treat(patient) // Calls Doctor's treat() ✅
  }
}

const surgeon = new Surgeon('Ramesh', 50, 'S001', 'Surgery', 'Neurosurgeon')
console.log(surgeon.treat(patient))         // Surgeon Dr. Ramesh is performing surgery...
console.log(surgeon.treat_parent(patient))  // Dr. Ramesh (Neurosurgeon) is treating...


// ══════════════════════════════════════════════
// 5. ABSTRACTION — Hide Complexity 🫥
// ══════════════════════════════════════════════
// Abstract class — direct instance create பண்ண முடியாது
// "Every hospital staff MUST have these methods" — rules define பண்ணலாம்
// JS-la native abstract class இல்லை — manually implement பண்ணுவோம்

class AbstractHospitalStaff {
  constructor(name, age) {
    if (new.target === AbstractHospitalStaff) {
      throw new Error('Cannot create instance of Abstract class!') // ❌
    }
    this.name = name
    this.age = age
  }

  // Abstract method — child MUST implement this
  treat(patient) {
    throw new Error(\`\${this.constructor.name} must implement treat() method!\`)
  }

  // Concrete method — shared implementation
  clockIn() {
    return \`\${this.name} clocked in at \${new Date().toLocaleTimeString()}\`
  }
}

// Direct instantiation fails ✅
// const staff = new AbstractHospitalStaff('Test', 25) // ❌ Error!

class Radiologist extends AbstractHospitalStaff {
  treat(patient) {
    return \`Radiologist \${this.name} is scanning \${patient.name}\` // ✅ implemented
  }
}

const radiologist = new Radiologist('Meena', 40)
console.log(radiologist.treat(patient))  // Radiologist Meena is scanning Sara ✅
console.log(radiologist.clockIn())       // Meena clocked in at... ✅


// ══════════════════════════════════════════════
// 6. STATIC METHODS & PROPERTIES
// ══════════════════════════════════════════════
// Hospital-level data — specific instance-ku சொந்தமானது இல்லை

class Hospital {
  static hospitalName = 'City General Hospital' // Static property
  static #totalPatients = 0                     // Private static

  static addPatient() {
    Hospital.#totalPatients++
  }

  static getTotalPatients() {
    return Hospital.#totalPatients
  }

  static getHospitalInfo() {
    return \`\${Hospital.hospitalName} | Patients: \${Hospital.#totalPatients}\`
  }
}

Hospital.addPatient()
Hospital.addPatient()
Hospital.addPatient()

console.log(Hospital.hospitalName)        // 'City General Hospital' ✅
console.log(Hospital.getTotalPatients())  // 3 ✅
console.log(Hospital.getHospitalInfo())   // 'City General Hospital | Patients: 3'

// Static methods called on CLASS not instance
// const h = new Hospital()
// h.getTotalPatients() // ❌ not a function on instance


// 📌 OOP 4 Pillars Summary:
// Encapsulation  → #privateField, getters/setters (data hiding) 🔒
// Inheritance    → extends + super (parent → child) 👨‍👩‍👧
// Polymorphism   → same method, different behavior (override) 🎭
// Abstraction    → hide complexity, expose only needed (new.target) 🫥
// Bonus:
// static         → class-level, not instance-level
// instanceof     → checks prototype chain
// new.target     → detects direct instantiation (abstract class trick)`
  },
  {
    id: 'mutable-object-understanding',
    title: 'Mutable Object & Reference Understanding',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/e6rfeab6b8103b2a545e5b20b6d1668a7b2c2',
    slangDefinition: `JavaScript-la objects reference-a store pannudhu — value directly illa, memory address store pannudhu. Indha example-la 'a' oru blue box-a 🟦 point pannudhu, adhu inside-la oru green box-a 🟩 point pannudhu (a.next). 'b = a.next' pannum bodhu b also same green box-a point pannudhu — copy illa, same reference. Aparam 'a.next = null' pannа — "hey a, green box-a point pannatha" nu solludhu. Green box destroy aagala! So b still same green box-a point pannudhu — b.val = 2 kedaikkudhu. Reference concept purinja linked list, tree எல்லாம் easy-a puriyum.`,
    interviewDefinition: `In JavaScript, objects are stored by reference, not by value. When you assign an object to a variable, the variable holds a memory address pointing to that object, not a copy of it. When multiple variables point to the same object, changing one variable's reference does not affect the other variable's reference. In this example, b = a.next makes b point to the same object as a.next. Setting a.next = null only removes a's pointer to that object — it does not destroy the object itself. Since b still holds a direct reference to { val: 2 }, b.val returns 2.`,
    example: `// ✅ The Code
let a = { val: 1, next: { val: 2, next: null } };
let b = a.next;
a.next = null;
console.log(b.val); // ?

// ══════════════════════════════════════════════
// STEP 1: 
     let a = { 
                val: 1,
                next: {
                        val: 2,
                        next: null
                      }
              }
// ══════════════════════════════════════════════
// Memory-la rendu boxes create aagudhu:

 a → 🟦  { val: 1, next: → 🟩 }
                    |
                    ↓
        🟩 { val: 2, next: null }

// 'a' variable BLUE BOX-a point pannudhu
// BLUE BOX inside 'next' property GREEN BOX-a point pannudhu

// ══════════════════════════════════════════════
// STEP 2: let b = a.next
// ══════════════════════════════════════════════
 a.next = GREEN BOX reference
 So b also same GREEN BOX-a point pannudhu — NEW copy create aagala!

 a → 🟦  { val: 1, next: → 🟩 }
 b → 🟩 { val: 2, next: null }

 b and a.next — rendu perum same GREEN BOX-a share pannuvanga ✅

// ══════════════════════════════════════════════
// STEP 3: a.next = null
// ══════════════════════════════════════════════
 Ithu GREEN BOX-a destroy pannala!
 "Hey a (BLUE BOX), GREEN BOX-a point pannatha" — nu sollum

 a → 🟦  { val: 1, next: null }  ← a.next now null
 b → 🟩 { val: 2, next: null }  ← b still points GREEN BOX ✅

 GREEN BOX safe-a irukkudhu — b still hold pannudhu!

// ══════════════════════════════════════════════
// STEP 4: console.log(b.val)
// ══════════════════════════════════════════════
 b still GREEN BOX-a direct-a point pannudhu
 So b.val = 2 ✅
console.log(b.val); // 2 ✅

// ══════════════════════════════════════════════
// WHY THIS MATTERS — Real World Examples
// ══════════════════════════════════════════════

// ✅ Example 1: Same reference — one change affects both
let obj1 = { name: 'Anjali' }
let obj2 = obj1              // Same reference — NOT a copy!

obj2.name = 'Rohit'
console.log(obj1.name)       // 'Rohit' 😱 (obj1 also changed!)
console.log(obj1 === obj2)   // true (same memory address)

// ✅ Fix: Create a copy using spread
let obj3 = { name: 'Anjali' }
let obj4 = { ...obj3 }       // New copy — different reference

obj4.name = 'Rohit'
console.log(obj3.name)       // 'Anjali' ✅ (obj3 unchanged)
console.log(obj3 === obj4)   // false (different memory address)

// ✅ Example 2: Array — same reference behavior
let arr1 = [1, 2, 3]
let arr2 = arr1              // Same reference!

arr2.push(4)
console.log(arr1)            // [1, 2, 3, 4] 😱 (arr1 also changed!)

// Fix: Spread copy
let arr3 = [1, 2, 3]
let arr4 = [...arr3]         // New copy

arr4.push(4)
console.log(arr3)            // [1, 2, 3] ✅ (unchanged)

// ✅ Example 3: Function — object passed by reference
function updateName(person) {
  person.name = 'Updated'    // Modifies ORIGINAL object! ⚠️
}

let user = { name: 'Kathir' }
updateName(user)
console.log(user.name)       // 'Updated' 😱

// Fix: Pass a copy
function updateNameSafe(person) {
  return { ...person, name: 'Updated' } // Returns NEW object ✅
}

let user2 = { name: 'Kathir' }
let updated = updateNameSafe(user2)
console.log(user2.name)      // 'Kathir'   ✅ (original safe)
console.log(updated.name)    // 'Updated'  ✅ (new object)

// ✅ Example 4: Deep vs Shallow Copy
let original = {
  name: 'Anjali',
  address: { city: 'Chennai' }  // Nested object
}

// Shallow copy — nested object still shared! ⚠️
let shallow = { ...original }
shallow.address.city = 'Mumbai'
console.log(original.address.city) // 'Mumbai' 😱 (nested still shared!)

// Deep copy — completely independent
let deep = JSON.parse(JSON.stringify(original)) // Deep copy ✅
deep.address.city = 'Delhi'
console.log(original.address.city) // 'Mumbai' ✅ (original safe)

// Modern deep copy
let deep2 = structuredClone(original) // Best way ✅
deep2.address.city = 'Bangalore'
console.log(original.address.city)  // 'Mumbai' ✅

// 📌 Summary:
// Objects stored by REFERENCE not VALUE
// b = a.next    → b and a.next point SAME object
// a.next = null → only removes a's pointer, object NOT destroyed
// b.val         → still 2 ✅ (b holds direct reference)
// Shallow copy  → spread (...) — nested objects still shared ⚠️
// Deep copy     → structuredClone() or JSON.parse(JSON.stringify()) ✅`
  },
  {
    id: 'solid-principles',
    title: 'SOLID Principles',
    category: 'JavaScript',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notebooks/e6rfedc6a18cc1057460fbd355466d121ebcc/notecards',
    slangDefinition: `SOLID na 5 design principles — code maintainable-a, scalable-a, readable-a vaika help pannudhu. S = Single Responsibility (oru class oru velai mattum pannanum). O = Open/Closed (extend pannalaam, modify panna koodathu). L = Liskov Substitution (child class, parent class-a replace panna mudiyanum). I = Interface Segregation (unnecessary methods implement panna vaika koodathu). D = Dependency Inversion (high level module, low level module-a directly depend panna koodathu). Hospital system vachchu explain pannuvom.`,
    interviewDefinition: `SOLID is an acronym for 5 object-oriented design principles that make software more maintainable, scalable, and testable. S — Single Responsibility Principle: a class should have only one reason to change. O — Open/Closed Principle: open for extension, closed for modification. L — Liskov Substitution Principle: subtypes must be substitutable for their base types. I — Interface Segregation Principle: clients should not be forced to depend on interfaces they don't use. D — Dependency Inversion Principle: high-level modules should not depend on low-level modules, both should depend on abstractions.`,
    example: `// 🏥 Story: Hospital Management System — SOLID Principles

// ══════════════════════════════════════════════
// S — Single Responsibility Principle (SRP)
// "Oru class, oru velai mattum pannanum"
// ══════════════════════════════════════════════

// ❌ BAD — Patient class too many responsibilities
class PatientBad {
  constructor(
    public name: string,
    public age: number
  ) {}

  // Responsibility 1: Patient data
  getPatientInfo() {
    return \`\${this.name}, Age: \${this.age}\`
  }

  // Responsibility 2: Database — inga irukka koodathu ❌
  saveToDatabase() {
    console.log(\`Saving \${this.name} to DB...\`)
  }

  // Responsibility 3: Email — inga irukka koodathu ❌
  sendAppointmentEmail() {
    console.log(\`Sending email to \${this.name}...\`)
  }

  // Responsibility 4: Report — inga irukka koodathu ❌
  generateReport() {
    console.log(\`Generating report for \${this.name}...\`)
  }
}
// Oru change panna (email logic change), Patient class touch pannanum — wrong! ❌


// ✅ GOOD — Each class has one responsibility
class Patient {
  constructor(
    public name: string,
    public age: number
  ) {}

  getPatientInfo() {
    return \`\${this.name}, Age: \${this.age}\`
  }
}

class PatientRepository {          // Only DB velai
  save(patient: Patient) {
    console.log(\`Saving \${patient.name} to DB...\`)
  }

  findById(id: string): Patient {
    return new Patient('Anjali', 26)
  }
}

class PatientEmailService {        // Only Email velai
  sendAppointmentEmail(patient: Patient) {
    console.log(\`Sending email to \${patient.name}...\`)
  }
}

class PatientReportService {       // Only Report velai
  generateReport(patient: Patient) {
    console.log(\`Generating report for \${patient.name}...\`)
  }
}
// Each class has ONE reason to change ✅


// ══════════════════════════════════════════════
// O — Open/Closed Principle (OCP)
// "Extend pannalaam, Modify panna koodathu"
// ══════════════════════════════════════════════

// ❌ BAD — New payment type add panna existing class modify pannanum
class PaymentProcessorBad {
  processPayment(type: string, amount: number) {
    if (type === 'cash') {
      console.log(\`Processing cash payment: Rs.\${amount}\`)
    } else if (type === 'card') {
      console.log(\`Processing card payment: Rs.\${amount}\`)
    } else if (type === 'upi') {       // New type — modify pannanum ❌
      console.log(\`Processing UPI payment: Rs.\${amount}\`)
    }
    // Every new payment type = modify this class ❌
  }
}


// ✅ GOOD — New payment type add panna existing code touch pannakoodathu
// Abstract base — modification-ku closed
abstract class PaymentMethod {
  abstract processPayment(amount: number): void

  printReceipt(amount: number) {
    console.log(\`Receipt generated for Rs.\${amount}\`)
  }
}

// Extension-ku open — each payment type thaani class ✅
class CashPayment extends PaymentMethod {
  processPayment(amount: number) {
    console.log(\`Processing cash payment: Rs.\${amount}\`)
  }
}

class CardPayment extends PaymentMethod {
  processPayment(amount: number) {
    console.log(\`Processing card payment: Rs.\${amount}\`)
  }
}

class UpiPayment extends PaymentMethod {   // New type — existing code untouched ✅
  processPayment(amount: number) {
    console.log(\`Processing UPI payment: Rs.\${amount}\`)
  }
}

class InsurancePayment extends PaymentMethod { // Innoru new type ✅
  processPayment(amount: number) {
    console.log(\`Processing insurance claim: Rs.\${amount}\`)
  }
}

// Usage — all types-ku work aagudhu, modification illama ✅
function processHospitalPayment(method: PaymentMethod, amount: number) {
  method.processPayment(amount)
  method.printReceipt(amount)
}

processHospitalPayment(new CashPayment(), 500)       // Cash ✅
processHospitalPayment(new UpiPayment(), 1500)       // UPI ✅
processHospitalPayment(new InsurancePayment(), 5000) // Insurance ✅


// ══════════════════════════════════════════════
// L — Liskov Substitution Principle (LSP)
// "Child class, Parent class-a replace panna mudiyanum"
// ══════════════════════════════════════════════

// ❌ BAD — Child class parent behavior-a break pannudhu
class Bird {
  fly() {
    console.log('Flying...')
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Penguins cannot fly!') // ❌ LSP violated!
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly() // Penguin pass pannа — ERROR varum! ❌
}

makeBirdFly(new Bird())    // Works ✅
makeBirdFly(new Penguin()) // Error varudhu ❌ — LSP violated!


// ✅ GOOD — Hospital Staff example (LSP satisfied)
abstract class HospitalStaff {
  constructor(
    public name: string,
    public staffId: string
  ) {}

  abstract treat(patientName: string): string
  abstract getRole(): string

  clockIn(): string {   // Common behavior — all staff-ku work aagudhu
    return \`\${this.name} clocked in\`
  }
}

class Doctor extends HospitalStaff {
  treat(patientName: string): string {
    return \`Dr. \${this.name} is diagnosing \${patientName}\` // ✅
  }
  getRole(): string { return 'Doctor' }
}

class Nurse extends HospitalStaff {
  treat(patientName: string): string {
    return \`Nurse \${this.name} is monitoring \${patientName}\` // ✅
  }
  getRole(): string { return 'Nurse' }
}

class Surgeon extends HospitalStaff {
  treat(patientName: string): string {
    return \`Surgeon \${this.name} is operating on \${patientName}\` // ✅
  }
  getRole(): string { return 'Surgeon' }
}

// Edha pass pannalum — parent-a replace panna mudiyudhu, LSP satisfied ✅
function assignPatient(staff: HospitalStaff, patientName: string) {
  console.log(staff.treat(patientName))  // All staff types-ku work aagudhu ✅
  console.log(staff.clockIn())
}

assignPatient(new Doctor('Kumar', 'D001'), 'Anjali')  // ✅
assignPatient(new Nurse('Priya', 'N001'), 'Rohit')    // ✅
assignPatient(new Surgeon('Ramesh', 'S001'), 'Sara')  // ✅


// ══════════════════════════════════════════════
// I — Interface Segregation Principle (ISP)
// "Unnecessary methods implement panna vaika koodathu"
// ══════════════════════════════════════════════

// ❌ BAD — Fat interface, unnecessary methods implement panna vaikiradhu
interface HospitalWorkerBad {
  treat(patient: string): void
  prescribeMedicine(medicine: string): void  // Doctors mattum pannuvanga
  performSurgery(): void                     // Surgeons mattum pannuvanga
  administerInjection(): void                // Nurses mattum pannuvanga
  cleanWard(): void                          // Housekeeping mattum pannuvanga
}

// Receptionist-ku relate illatha methods implement panna vaikiradhu ❌
class ReceptionistBad implements HospitalWorkerBad {
  treat(patient: string) {
    throw new Error('Receptionist cannot treat!') // ❌
  }
  prescribeMedicine(medicine: string) {
    throw new Error('Receptionist cannot prescribe!') // ❌
  }
  performSurgery() {
    throw new Error('Receptionist cannot do surgery!') // ❌
  }
  administerInjection() {
    throw new Error('Receptionist cannot inject!') // ❌
  }
  cleanWard() {
    console.log('Cleaning...') // Idhu mattum relevant ❌
  }
}


// ✅ GOOD — Segregated interfaces, each one focused
interface Treatable {
  treat(patient: string): void
}

interface Prescribable {
  prescribeMedicine(medicine: string): void
}

interface Operable {
  performSurgery(patient: string): void
}

interface Injectable {
  administerInjection(medicine: string): void
}

interface Cleanable {
  cleanWard(): void
}

// Each class implements only relevant interfaces ✅
class DoctorISP implements Treatable, Prescribable {
  treat(patient: string) {
    console.log(\`Doctor treating \${patient}\`)  // ✅ relevant
  }
  prescribeMedicine(medicine: string) {
    console.log(\`Prescribed: \${medicine}\`)     // ✅ relevant
  }
}

class NurseISP implements Treatable, Injectable {
  treat(patient: string) {
    console.log(\`Nurse monitoring \${patient}\`) // ✅ relevant
  }
  administerInjection(medicine: string) {
    console.log(\`Administered: \${medicine}\`)   // ✅ relevant
  }
}

class SurgeonISP implements Treatable, Operable, Prescribable {
  treat(patient: string) {
    console.log(\`Surgeon preparing for \${patient}\`) // ✅
  }
  performSurgery(patient: string) {
    console.log(\`Operating on \${patient}\`)          // ✅
  }
  prescribeMedicine(medicine: string) {
    console.log(\`Post-op prescribed: \${medicine}\`)  // ✅
  }
}

class Receptionist implements Cleanable {
  cleanWard() {
    console.log('Ward cleaned!')  // ✅ Only relevant velai
  }
  scheduleAppointment(patient: string) {
    console.log(\`Appointment scheduled for \${patient}\`) // ✅
  }
}


// ══════════════════════════════════════════════
// D — Dependency Inversion Principle (DIP)
// "High level module, low level module-a directly depend panna koodathu"
// ══════════════════════════════════════════════

// ❌ BAD — High level directly depends on low level
class MySQLDatabase {                    // Low level module
  save(data: string) {
    console.log(\`Saving to MySQL: \${data}\`)
  }
}

class PatientServiceBad {                // High level module
  private db = new MySQLDatabase()       // Direct dependency ❌

  savePatient(name: string) {
    this.db.save(name)                   // MySQL-a tightly coupled ❌
  }
}
// MySQL-a MongoDB-ku change panna — PatientServiceBad modify pannanum ❌


// ✅ GOOD — Abstraction (interface) mela depend pannuvom
interface Database {
  save(data: string): void
  findById(id: string): any
  delete(id: string): void
}

// Low level modules — interface implement pannudhu
class MySQLDatabaseGood implements Database {
  save(data: string) {
    console.log(\`Saving to MySQL: \${data}\`)
  }
  findById(id: string) {
    return \`MySQL result for \${id}\`
  }
  delete(id: string) {
    console.log(\`Deleted from MySQL: \${id}\`)
  }
}

class MongoDatabase implements Database {  // MongoDB-ku swap pannalaam ✅
  save(data: string) {
    console.log(\`Saving to MongoDB: \${data}\`)
  }
  findById(id: string) {
    return \`MongoDB result for \${id}\`
  }
  delete(id: string) {
    console.log(\`Deleted from MongoDB: \${id}\`)
  }
}

class FirebaseDatabase implements Database { // Firebase-ku swap pannalaam ✅
  save(data: string) {
    console.log(\`Saving to Firebase: \${data}\`)
  }
  findById(id: string) {
    return \`Firebase result for \${id}\`
  }
  delete(id: string) {
    console.log(\`Deleted from Firebase: \${id}\`)
  }
}

// High level module — abstraction mela depend pannudhu, implementation illa ✅
class PatientService {
  constructor(private db: Database) {}    // Inject pannuvom — hardcode pannala ✅

  savePatient(name: string) {
    this.db.save(name)                    // Edha vachhalum work aagudhu ✅
  }

  getPatient(id: string) {
    return this.db.findById(id)
  }

  removePatient(id: string) {
    this.db.delete(id)
  }
}

// PatientService touch pannama — database swap pannalaam ✅
const mysqlService    = new PatientService(new MySQLDatabaseGood())
const mongoService    = new PatientService(new MongoDatabase())
const firebaseService = new PatientService(new FirebaseDatabase())

mysqlService.savePatient('Anjali')     // Saving to MySQL: Anjali ✅
mongoService.savePatient('Rohit')      // Saving to MongoDB: Rohit ✅
firebaseService.savePatient('Sara')    // Saving to Firebase: Sara ✅


// 📌 SOLID Summary:
// S — Single Responsibility → Oru class, oru velai mattum pannanum
//     PatientService (data), EmailService (email), ReportService (report)
//
// O — Open/Closed → Extend pannalaam, existing code modify panna koodathu
//     New PaymentMethod class — existing code untouched ✅
//
// L — Liskov Substitution → Child, parent-a safely replace panna mudiyanum
//     Doctor/Nurse/Surgeon — HospitalStaff expected edathula work aagudhu ✅
//
// I — Interface Segregation → Small focused interfaces mattum implement pannanum
//     Treatable, Prescribable, Operable — one fat interface vendam ✅
//
// D — Dependency Inversion → Abstraction mela depend pannanum
//     PatientService uses Database interface — MySQL/Mongo freely swap pannalaam ✅`
  },
  {
    id: 'javascript-compiler',
    title: 'JavaScript Compiler (V8 Engine)',
    category: 'JavaScript',
    referenceUrl: 'https://youtu.be/2WJL19wDH68?si=apDMpp5RGCX7pR2t',
    slangDefinition: `JavaScript engine (V8) na namma JS code-a machine-ku puriyara language-a convert pannudhu. Indha process-la multiple stages irukku. Namma code first AST (Abstract Syntax Tree)-a convert aagudhu — code-a tree structure-a represent pannudhu. Aparam Ignition interpreter adha Bytecode-a convert pannudhu — fast-a execute aagra intermediate format. TurboFan compiler hot code (frequently run aagra code)-a direct Machine Code-a convert pannudhu — super fast execution. Idhu JIT (Just In Time) compilation — runtime-la optimize pannudhu.`,
    interviewDefinition: `JavaScript is executed by engines like V8 (Chrome/Node.js), SpiderMonkey (Firefox), or JavaScriptCore (Safari). V8 follows this pipeline: Source Code is parsed into an AST (Abstract Syntax Tree) by the Parser. Ignition (interpreter) converts AST into Bytecode for fast startup. TurboFan (optimizing compiler) monitors hot code (frequently executed) and compiles it into optimized Machine Code using JIT (Just-In-Time) compilation. If assumptions made during optimization are wrong (deoptimization), it falls back to Bytecode. This two-tier system balances fast startup and high performance.`,
    example: `// ══════════════════════════════════════════════
// FULL PIPELINE:
// JS Code → Parser → AST → Ignition → Bytecode → TurboFan → Machine Code → Execution
// ══════════════════════════════════════════════


// ══════════════════════════════════════════════
// STAGE 1: SOURCE CODE
// ══════════════════════════════════════════════
// Namba write panna JS code — human readable

function addNumbers(a, b) {
  return a + b
}

console.log(addNumbers(5, 10)) // 15


// ══════════════════════════════════════════════
// STAGE 2: PARSER → AST (Abstract Syntax Tree)
// ══════════════════════════════════════════════
// Parser namma code-a read panni tree structure-a convert pannudhu
// Lexer → Tokens create pannudhu
// Parser → Tokens-a AST-a convert pannudhu

// Lexer — Code-a tokens-a split pannudhu:
 "function addNumbers(a, b) { return a + b }"
    ↓
 [
   { type: 'keyword',    value: 'function'    },
   { type: 'identifier', value: 'addNumbers'  },
   { type: 'punctuator', value: '('           },
   { type: 'identifier', value: 'a'           },
   { type: 'punctuator', value: ','           },
   { type: 'identifier', value: 'b'           },
   { type: 'punctuator', value: ')'           },
   { type: 'punctuator', value: '{'           },
   { type: 'keyword',    value: 'return'      },
   { type: 'identifier', value: 'a'           },
   { type: 'operator',   value: '+'           },
   { type: 'identifier', value: 'b'           },
   { type: 'punctuator', value: '}'           },
 ]

// Parser — Tokens-a AST-a convert pannudhu:
 {
   type: "FunctionDeclaration",
   id: {
     type: "Identifier",
     name: "addNumbers"
   },
   params: [
     { type: "Identifier", name: "a" },
     { type: "Identifier", name: "b" }
   ],
   body: {
     type: "BlockStatement",
     body: [{
       type: "ReturnStatement",
       argument: {
         type: "BinaryExpression",
         operator: "+",
         left:  { type: "Identifier", name: "a" },
         right: { type: "Identifier", name: "b" }
       }
     }]
   }
 }

// ✅ Real tool — AST Explorer: https://astexplorer.net
// Namma code paste panna — live AST kaatudhu


// ══════════════════════════════════════════════
// STAGE 3: IGNITION (Interpreter) → BYTECODE
// ══════════════════════════════════════════════
// Ignition na V8's interpreter
// AST-a Bytecode-a convert pannudhu
// Bytecode = machine code illai, JS illai — intermediate format
// Fast startup time — immediately execute panna mudiyudhu

// addNumbers function-ku Bytecode (simplified representation):

 LdaUndefined                    // Load undefined
 Star r0                         // Store in register r0
 CreateFunctionContext            // Create function scope
 Ldar a0                         // Load param 'a'
 Add a1, [0]                     // Add param 'b' to 'a'
 Return                          // Return result

// Idha direct execute panna mudiyudhu — fast startup ✅
// Aana machine code-a vida slow


// ══════════════════════════════════════════════
// STAGE 4: PROFILER — Hot Code Detection
// ══════════════════════════════════════════════
// Ignition execute pannum pothu — Profiler monitor pannudhu
// "Idha function aa resuse pannuvanga" — HOT function mark pannudhu
// Hot code = TurboFan-ku pass pannudhu for optimization

// Example: addNumbers 10000 times call aagudhunna — HOT! 🔥
for (let i = 0; i < 10000; i++) {
  addNumbers(i, i + 1)  // Called many times → HOT function 🔥
}

// Profiler observations:
// ✅ addNumbers always receives numbers (not strings)
// ✅ Same operation repeated — optimize panna worthy
// → TurboFan-ku send pannudhu!


// ══════════════════════════════════════════════
// STAGE 5: TURBOFAN (Compiler) → MACHINE CODE
// ══════════════════════════════════════════════
// TurboFan na V8's optimizing JIT compiler
// Hot bytecode-a highly optimized machine code-a convert pannudhu
// Type assumptions based-a optimize pannudhu

// TurboFan optimization assumptions for addNumbers:
 Assumption 1: 'a' and 'b' are always numbers ✅
 Assumption 2: Result is always a number ✅
 Based on these → super optimized machine code generate pannudhu

// Optimized Machine Code (x64 — simplified):
 mov rax, [rbp-8]      // Load 'a' from stack
 add rax, [rbp-16]     // Add 'b' directly (no type check needed!)
 ret                   // Return result

// Type checks illa — direct CPU instructions — blazing fast! 🚀


// ══════════════════════════════════════════════
// STAGE 6: DEOPTIMIZATION — When assumptions fail
// ══════════════════════════════════════════════
 TurboFan's assumptions wrong-a prove aagudhunna
 Optimized code discard pannudhu — Bytecode-ku fallback pannudhu

// ❌ Deoptimization trigger
addNumbers(5, 10)          // number + number ✅ (assumption holds)
addNumbers(3, 7)           // number + number ✅ (assumption holds)
addNumbers('Hello', ' World') // string + string ❌ ASSUMPTION FAILED!
// TurboFan: "Naan number expect panninen, string vanthuchu!"
// → Deoptimize → Bytecode fallback → Re-profile → Maybe re-optimize

// ✅ How to avoid deoptimization — consistent types use pannanum!
function addNumbersOptimized(a: number, b: number): number {
  return a + b  // Always numbers → TurboFan happy → stays optimized ✅
}


// ══════════════════════════════════════════════
// FULL PIPELINE VISUAL
// ══════════════════════════════════════════════

 ┌─────────────────────────────────────────────────────┐
 │              V8 ENGINE PIPELINE                     │
 └─────────────────────────────────────────────────────┘

//  📝 JS SOURCE CODE
//       function addNumbers(a, b) { return a + b }
//       ↓
//  🔍 PARSER (Lexer + Parser)
//       Tokens → AST (Abstract Syntax Tree)
//       ↓
//  ⚡ IGNITION (Interpreter)
//       AST → Bytecode
//       Fast startup, moderate speed
//       ↓
//  🔬 PROFILER
//       Monitor execution → detect HOT code 🔥
//       ↓              ↓
//  📊 BYTECODE      🚀 TURBOfan (JIT Compiler)
//  (cold code)         HOT Bytecode → Optimized Machine Code
//  moderate speed      Blazing fast execution
//       ↓              ↓
//  ⚠️ DEOPTIMIZE ←── Type assumption failed?
//       ↓              ↓
//       └──────────────┘
//            ↓
//  💻 MACHINE CODE EXECUTION


// ══════════════════════════════════════════════
// REAL WORLD PERFORMANCE TIPS
// ══════════════════════════════════════════════

// ✅ TIP 1: Consistent types — TurboFan optimize pannatum
function multiply(a: number, b: number) {
  return a * b  // Always number → stays optimized ✅
}

// ❌ BAD — Mixed types — deoptimization trigger pannudhu
function mixedAdd(a: any, b: any) {
  return a + b  // number, string, object — unpredictable ❌
}

// ✅ TIP 2: Same object shape use pannanum (Hidden Classes)
 V8 internally hidden classes create pannudhu for objects
 Same shape = same hidden class = faster property access

// ✅ GOOD — Same shape
const user1 = { name: 'Anjali', age: 26 }  // Shape: {name, age}
const user2 = { name: 'Rohit',  age: 30 }  // Shape: {name, age} — same! ✅
// V8 reuses hidden class — faster access ✅

// ❌ BAD — Different shape (dynamic property add)
const obj1 = { name: 'Anjali' }
obj1.age = 26              // Property add pannrom — shape change ❌
obj1.city = 'Chennai'      // Again shape change ❌
// V8 new hidden class create pannanum — slower ❌

// ✅ TIP 3: Array — same type elements
const numArray = [1, 2, 3, 4, 5]           // All numbers — optimized ✅
const mixedArray = [1, 'two', true, null]   // Mixed — deoptimized ❌

// ✅ TIP 4: Avoid delete operator
const person = { name: 'Kathir', age: 25 }
delete person.age   // ❌ Hidden class breaks — slower property access
// Instead: set to null/undefined
person.age = null   // ✅ Shape preserved


// ══════════════════════════════════════════════
// JIT vs AOT — Quick comparison
// ══════════════════════════════════════════════

// JIT (Just In Time) — V8 JavaScript style
 ✅ Runtime-la compile pannudhu
 ✅ Runtime behavior based-a optimize pannudhu
 ❌ Startup-la overhead irukku

// AOT (Ahead Of Time) — Angular build style
 ✅ Build time-la compile pannudhu
 ✅ No runtime compilation overhead
 ✅ Faster first load
 ❌ Runtime behavior based optimize panna mudiyathu


// 📌 Summary:
// Stage 1: JS Source Code     → Human readable code
// Stage 2: Parser → AST       → Tree structure of code
// Stage 3: Ignition → Bytecode → Intermediate, fast startup
// Stage 4: Profiler           → Hot code detect pannudhu 🔥
// Stage 5: TurboFan → Machine Code → Blazing fast execution 🚀
// Stage 6: Deoptimization     → Assumption fail → Bytecode fallback

// Performance Tips:
// Consistent types            → TurboFan optimization stays ✅
// Same object shape           → Hidden class reuse ✅
// Same type arrays            → Array optimization ✅
// Avoid delete operator       → Shape preserve pannanum ✅`
  },
];
