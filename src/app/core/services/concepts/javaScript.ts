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
];
