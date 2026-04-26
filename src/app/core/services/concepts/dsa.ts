import { Concept } from "../../models/concept.model";

export const dsaConcepts: Concept[] = [
  {
    id: 'time-and-space-complexity',
    title: 'Time & Space Complexity (Big O)',
    category: 'DSA',
    referenceUrl: 'https://notebook.zoho.in/app/index.html#/shared/notecards/74tdof620b85a0c1f412aa7ffc03fce87b5ff',
    slangDefinition: `Time Complexity na "code epdi fast-a run aagudhu" nu measure pannuvom — input size perukum pothu execution time epdi grow aagudhu nu solvom. Space Complexity na "code epdi memory use pannudhu" nu measure pannuvom. Big O notation use panni worst case scenario express pannuvom. O(1) na input size matter pannaamal always same time — best. O(n) na input size-ku proportional — okay. O(n²) na nested loops — slow. Simple-a solla: "Input perukum pothu, code epdi behave pannudhu nu predict pannuvom" — adhu dhaan Big O.`,
    interviewDefinition: `Time Complexity measures how the execution time of an algorithm grows relative to input size. Space Complexity measures how much memory an algorithm uses relative to input size. Both are expressed using Big O notation which describes the worst-case growth rate. O(1) — constant, O(log n) — logarithmic, O(n) — linear, O(n log n) — linearithmic, O(n²) — quadratic, O(2ⁿ) — exponential. Big O ignores constants and lower-order terms — we care about how the algorithm scales, not exact milliseconds. Understanding complexity helps choose the right algorithm and data structure for a given problem.`,
    example: `
// ══════════════════════════════════════════════
// COMMON OPERATIONS — Quick Reference
// ══════════════════════════════════════════════

// Arrays:
const arr = [1, 2, 3, 4, 5]
arr[0]                            // O(1) — Index access ✅
arr.push(6)                       // O(1) — Add to end ✅
arr.pop()                         // O(1) — Remove from end ✅
arr.unshift(0)                    // O(n) — Add to start (shift all) ⚠️
arr.shift()                       // O(n) — Remove from start ⚠️
arr.indexOf(3)                    // O(n) — Search ⚠️
arr.includes(3)                   // O(n) — Search ⚠️
arr.slice(1, 3)                   // O(n) — Slice ⚠️
arr.sort()                        // O(n log n) — Sort ⚠️

// Objects:
const obj2 = { name: 'Kathir' }
obj2['name']                      // O(1) — Access ✅
obj2['age'] = 26                  // O(1) — Insert ✅
delete obj2['age']                // O(1) — Delete ✅
Object.keys(obj2)                 // O(n) — All keys ⚠️

// Map:
const map2 = new Map()
map2.set('key', 'val')            // O(1) — Insert ✅
map2.get('key')                   // O(1) — Access ✅
map2.has('key')                   // O(1) — Check ✅
map2.delete('key')                // O(1) — Delete ✅

// Set:
const set = new Set()
set.add(1)                        // O(1) — Add ✅
set.has(1)                        // O(1) — Check ✅
set.delete(1)                     // O(1) — Delete ✅


// ══════════════════════════════════════════════
// BIG O NOTATION — Growth Rate Chart
// ══════════════════════════════════════════════

// O(1)       → Constant    — Best  🚀 (array index, map get/set)
// O(log n)   → Log         — Great 🟢 (binary search)
// O(n)       → Linear      → Okay  🟡 (single loop, forEach)
// O(n log n) → Linearithmic— Fair  🟠 (merge sort, sort())
// O(n²)      → Quadratic   — Slow  🔴 (nested loops, bubble sort)
// O(2ⁿ)      → Exponential — Avoid ❌ (naive fibonacci, recursion)
// O(n!)     → Factorial   — Worst possible ☠️

// Speed: O(1) > O(log n) > O(n) > O(n log n) > O(n²) > O(2ⁿ)

// Space:
// O(1) → No extra memory (swap, sum)
// O(n) → New array/map same size as input
// O(n²)→ 2D matrix / grid

// Rules:
// Drop constants   → O(2n)    = O(n)
// Drop lower terms → O(n²+n)  = O(n²)
// Different inputs → O(a + b) not O(n)`,
  },

  {
    id: 'ds-array',
    title: 'Array',
    category: 'DSA',
    slangDefinition: `Array na ordered collection — index use panni elements access pannuvom. What: Oru box-la multiple values store pannuvom, index 0 la start aagudhu. Where: List of items store panna — patients list, product list, search results. When: Order should be same means, index-based access venum pothu use pannuvom. Why: Fast access O(1) — index therinjа direct jump pannuvom. How: Square brackets use panni create pannuvom, push/pop/slice methods use pannuvom. Problem: Middle-la insert/delete panna slow O(n) — ellathayum shift pannanum.`,
    interviewDefinition: `An Array is a linear data structure that stores elements in contiguous memory locations with zero-based indexing. It provides O(1) time for index-based access, O(1) for push/pop at end, but O(n) for insertion/deletion at beginning or middle due to shifting. Arrays are the most fundamental data structure used for storing ordered collections. JavaScript arrays are dynamic — they can grow/shrink and hold mixed types. Common operations include traversal, search, insertion, deletion, and sorting.`,
    example: `// ══════════════════════════════════════════
// WHAT — What is Array?
// ══════════════════════════════════════════
// Ordered collection, index-based access
const patients = ['Anjali', 'Rohit', 'Sara', 'Kathir', 'Priya']
//  index:           0         1       2        3         4

// Direct index access — O(1)
console.log(patients[0])   // 'Anjali' ✅
console.log(patients[3])   // 'Kathir' ✅
console.log(patients[99])  // undefined (no error)


// ══════════════════════════════════════════
// HOW — Create Array
// ══════════════════════════════════════════
const empty   = []                          // Empty array
const numbers = [1, 2, 3, 4, 5]            // Number array
const mixed   = [1, 'hello', true, null]    // Mixed types (JS allows)
const matrix  = [[1,2], [3,4], [5,6]]       // 2D array

// Array from range
const range = Array.from({ length: 5 }, (_, i) => i + 1)
console.log(range) // [1, 2, 3, 4, 5]

// Fill array
const zeros = new Array(5).fill(0)
console.log(zeros) // [0, 0, 0, 0, 0]


// ══════════════════════════════════════════
// BASIC OPERATIONS + TIME COMPLEXITY
// ══════════════════════════════════════════

const arr = [10, 20, 30, 40, 50]

// ✅ Access — O(1)
console.log(arr[2])          // 30 — direct jump ✅

// ✅ Push (add to end) — O(1)
arr.push(60)
console.log(arr)             // [10,20,30,40,50,60]

// ✅ Pop (remove from end) — O(1)
arr.pop()
console.log(arr)             // [10,20,30,40,50]

// ⚠️ Unshift (add to start) — O(n)
arr.unshift(0)               // All elements shift right ❌
console.log(arr)             // [0,10,20,30,40,50]

// ⚠️ Shift (remove from start) — O(n)
arr.shift()                  // All elements shift left ❌
console.log(arr)             // [10,20,30,40,50]

// ⚠️ Splice (insert/delete middle) — O(n)
arr.splice(2, 0, 25)         // Insert 25 at index 2
console.log(arr)             // [10,20,25,30,40,50]

arr.splice(2, 1)             // Remove 1 element at index 2
console.log(arr)             // [10,20,30,40,50]

// ⚠️ Search (indexOf) — O(n)
console.log(arr.indexOf(30)) // 2 — linear search
console.log(arr.includes(30)) // true

// ⚠️ Sort — O(n log n)
const unsorted = [5, 2, 8, 1, 9]
unsorted.sort((a, b) => a - b)
console.log(unsorted)        // [1,2,5,8,9]

// ⚠️ Slice — O(n)
const sliced = arr.slice(1, 3)
console.log(sliced)          // [20, 30]


// ══════════════════════════════════════════
// TRAVERSAL — O(n)
// ══════════════════════════════════════════
const scores = [85, 92, 78, 95, 88]

// For loop
for (let i = 0; i < scores.length; i++) {
  console.log(\`Index \${i}: \${scores[i]}\`)
}

// forEach
scores.forEach((score, index) => {
  console.log(\`Student \${index + 1}: \${score}\`)
})

// for...of
for (const score of scores) {
  console.log(score)
}


// ══════════════════════════════════════════
// SEARCHING — O(n) Linear Search
// ══════════════════════════════════════════
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i                 // Found — return index ✅
    }
  }
  return -1                    // Not found
}

const names = ['Anjali', 'Rohit', 'Sara', 'Kathir']
console.log(linearSearch(names, 'Sara'))   // 2 ✅
console.log(linearSearch(names, 'Kumar'))  // -1


// ══════════════════════════════════════════
// SEARCHING — O(log n) Binary Search
// (Only works on SORTED array)
// ══════════════════════════════════════════
function binarySearch(arr, target) {
  let left  = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) return mid       // Found ✅
    if (arr[mid] < target)   left  = mid + 1 // Search right
    else                     right = mid - 1 // Search left
  }
  return -1
}

const sorted = [10, 20, 30, 40, 50, 60, 70]
console.log(binarySearch(sorted, 40))  // 3 ✅
console.log(binarySearch(sorted, 25))  // -1


// ══════════════════════════════════════════
// COMMON ARRAY METHODS — O(n) each
// ══════════════════════════════════════════
const nums = [1, 2, 3, 4, 5]

// map — transform every element
const doubled = nums.map(n => n * 2)
console.log(doubled)           // [2,4,6,8,10]

// filter — keep matching elements
const evens = nums.filter(n => n % 2 === 0)
console.log(evens)             // [2,4]

// reduce — accumulate to single value
const sum = nums.reduce((acc, n) => acc + n, 0)
console.log(sum)               // 15

// find — first matching element
const found = nums.find(n => n > 3)
console.log(found)             // 4

// findIndex — index of first match
const idx = nums.findIndex(n => n > 3)
console.log(idx)               // 3

// some — any element matches?
console.log(nums.some(n => n > 4))   // true

// every — all elements match?
console.log(nums.every(n => n > 0))  // true

// flat — flatten nested arrays
const nested = [[1,2], [3,4], [5]]
console.log(nested.flat())     // [1,2,3,4,5]


// ══════════════════════════════════════════
// SPACE COMPLEXITY
// ══════════════════════════════════════════
// Original array     → O(n) space (n elements store pannuvom)
// map/filter/slice   → O(n) extra space (new array create aagudhu)
// forEach/reduce     → O(1) extra space (no new array)
// sort               → O(log n) extra space (call stack)
// In-place swap      → O(1) extra space ✅

function reverseInPlace(arr) {
  let left  = 0
  let right = arr.length - 1
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]] // Swap
    left++
    right--
  }
  return arr
}
console.log(reverseInPlace([1,2,3,4,5])) // [5,4,3,2,1] — O(1) space ✅


// 📌 Time Complexity Summary:
// Access    → O(1)       ✅ Best
// Push/Pop  → O(1)       ✅ Best
// Unshift   → O(n)       ⚠️ Slow
// Shift     → O(n)       ⚠️ Slow
// Search    → O(n)       ⚠️ Linear
// Binary Search → O(log n) ✅ (sorted only)
// Insert middle → O(n)  ⚠️ Shift needed
// Delete middle → O(n)  ⚠️ Shift needed
// Sort      → O(n log n) ⚠️


// Space Complexity:
// Storage   → O(n)
// Access/Push/Pop → O(1) extra
// Map/Filter → O(n) extra (new array)`
  },

  {
    id: 'ds-linked-list',
    title: 'Linked List',
    category: 'DSA',
    slangDefinition: `Linked List na nodes chain — oru node data + next pointer vachirukkum. What: Array maari illa — contiguous memory illa, each node next node-a point pannudhu. Where: Frequent insert/delete venum pothu, memory dynamic-a manage pannanum pothu. When: Index access vennam, insert/delete fast-a pannanum nu irukum pothu. Why: Insert/delete O(1) — middle-la shift pannanum illa. How: Node class create pannuvom, head pointer maintain pannuvom. Problem: Index access O(n) — traverse panna vendiyirukku, extra memory for pointers.`,
    interviewDefinition: `A Linked List is a linear data structure where each element (node) contains data and a reference (pointer) to the next node. Unlike arrays, linked list nodes are not stored in contiguous memory. This makes insertion and deletion at known positions O(1), but access by index is O(n) since traversal from head is required. There are three types — Singly Linked List (next pointer only), Doubly Linked List (next + prev pointers), and Circular Linked List (last node points to head). Linked Lists are the foundation for Stacks, Queues, and Hash Map chaining.`,
    example: `// ══════════════════════════════════════════
// WHAT — Node Structure
// ══════════════════════════════════════════
class Node {
  constructor(data) {
    this.data = data   // Value store pannuvom
    this.next = null   // Next node point pannuvom (initially null)
  }
}

// ══════════════════════════════════════════
// HOW — Singly Linked List Implementation
// ══════════════════════════════════════════
class LinkedList {
  constructor() {
    this.head = null   // First node
    this.size = 0
  }

  // ✅ Append (add to end) — O(n) traverse needed
  append(data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode    // First node — head set pannuvom
      this.size++
      return
    }

    let current = this.head
    while (current.next) {   // Last node find pannuvom
      current = current.next
    }
    current.next = newNode   // Last node's next = new node ✅
    this.size++
  }

  // ✅ Prepend (add to start) — O(1) ✅
  prepend(data) {
    const newNode = new Node(data)
    newNode.next = this.head  // New node → old head point pannuvom
    this.head = newNode       // Head update pannuvom
    this.size++
  }

  // ✅ Insert at index — O(n)
  insertAt(data, index) {
    if (index < 0 || index > this.size) return false

    if (index === 0) {
      this.prepend(data)
      return true
    }

    const newNode = new Node(data)
    let current = this.head
    let prev    = null
    let i       = 0

    while (i < index) {
      prev    = current
      current = current.next
      i++
    }

    newNode.next = current   // New node → current point pannuvom
    prev.next    = newNode   // Prev → new node point pannuvom ✅
    this.size++
    return true
  }

  // ✅ Delete by value — O(n)
  delete(data) {
    if (!this.head) return false

    // Head-a delete panna
    if (this.head.data === data) {
      this.head = this.head.next  // Head update pannuvom ✅
      this.size--
      return true
    }

    let current = this.head
    let prev    = null

    while (current) {
      if (current.data === data) {
        prev.next = current.next  // Skip current node ✅
        this.size--
        return true
      }
      prev    = current
      current = current.next
    }
    return false
  }

  // ✅ Search — O(n)
  search(data) {
    let current = this.head
    let index   = 0

    while (current) {
      if (current.data === data) {
        return index             // Found ✅
      }
      current = current.next
      index++
    }
    return -1                    // Not found
  }

  // ✅ Get by index — O(n)
  get(index) {
    if (index < 0 || index >= this.size) return null

    let current = this.head
    let i       = 0

    while (i < index) {
      current = current.next
      i++
    }
    return current.data
  }

  // ✅ Print all — O(n)
  print() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.data)
      current = current.next
    }
    console.log(result.join(' → '))
  }

  // ✅ Length — O(1) (maintained)
  length() {
    return this.size
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const list = new LinkedList()

list.append('Anjali')    // Anjali
list.append('Rohit')     // Anjali → Rohit
list.append('Sara')      // Anjali → Rohit → Sara
list.prepend('Kathir')   // Kathir → Anjali → Rohit → Sara

list.print()             // Kathir → Anjali → Rohit → Sara

console.log(list.search('Rohit'))  // 2 ✅
console.log(list.get(1))           // 'Anjali' ✅
console.log(list.length())         // 4

list.delete('Anjali')
list.print()             // Kathir → Rohit → Sara

list.insertAt('Priya', 1)
list.print()             // Kathir → Priya → Rohit → Sara


// ══════════════════════════════════════════
// SEARCHING THROUGH LINKED LIST — O(n)
// ══════════════════════════════════════════
function searchLinkedList(head, target) {
  let current = head
  let index   = 0

  while (current !== null) {
    if (current.data === target) {
      return { found: true, index }  // ✅
    }
    current = current.next
    index++
  }
  return { found: false, index: -1 }
}

// Array maari random access illa
// Start-la irunthu traverse pannanum — O(n) ⚠️


// ══════════════════════════════════════════
// DOUBLY LINKED LIST — Prev + Next pointer
// ══════════════════════════════════════════
class DoublyNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null   // Extra pointer — backward traverse ✅
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null   // Tail maintain pannuvom — append O(1) ✅
    this.size = 0
  }

  // ✅ Append — O(1) (tail pointer use pannuvom)
  append(data) {
    const newNode = new DoublyNode(data)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev   = this.tail
      this.tail.next = newNode
      this.tail      = newNode   // Tail update ✅
    }
    this.size++
  }

  // ✅ Delete tail — O(1) (tail pointer use pannuvom)
  deleteTail() {
    if (!this.tail) return null
    const data = this.tail.data

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail      = this.tail.prev
      this.tail.next = null
    }
    this.size--
    return data
  }
}

const dList = new DoublyLinkedList()
dList.append('A')   // A
dList.append('B')   // A ↔ B
dList.append('C')   // A ↔ B ↔ C
console.log(dList.deleteTail()) // 'C' — O(1) ✅


// 📌 Time Complexity Summary:
// Prepend (add start)  → O(1) ✅
// Append (add end)     → O(n) Singly / O(1) Doubly with tail
// Insert at index      → O(n) traverse needed
// Delete by value      → O(n) search needed
// Search               → O(n) traverse needed
// Access by index      → O(n) traverse needed ⚠️


// Space Complexity:
// Storage  → O(n)
// Each node → O(1) extra (next pointer)
// Doubly   → O(1) extra (next + prev pointers)
//
// Array vs Linked List:
// Access    → Array O(1) wins ✅
// Insert start → Linked List O(1) wins ✅
// Memory   → Array wins (no pointer overhead)`
  },

  {
    id: 'ds-stack',
    title: 'Stack',
    category: 'DSA',
    slangDefinition: `Stack na LIFO — Last In First Out. What: Plates stack maari — last add pannadhu first remove aagudhu. Where: Undo/redo, browser back button, function call stack, expression evaluation. When: Last added item first process pannanum pothu use pannuvom. Why: Push/pop O(1) — very fast. How: Array use panni implement pannalaam — push() end-la add pannudhu, pop() end-la irunthu remove pannudhu. Problem: Only top element access panna mudiyudhu — middle access vennam na wrong data structure.`,
    interviewDefinition: `A Stack is a linear data structure following LIFO (Last In, First Out) principle. Elements are added (push) and removed (pop) from the same end called the top. peek() returns the top element without removing it. All primary operations — push, pop, peek — are O(1). Stacks are used in function call stacks (execution context), undo/redo operations, expression evaluation (brackets matching), DFS traversal, and browser history. In JavaScript, arrays can be used as stacks using push() and pop().`,
    example: `// ══════════════════════════════════════════
// WHAT — Stack (LIFO)
// ══════════════════════════════════════════
// Plate stack analogy:
// Push: plate add pannuvom (top-la)
// Pop:  top plate remove pannuvom
// Peek: top plate paakuvom (remove pannuvom illa)

// ══════════════════════════════════════════
// HOW — Stack Implementation using Array
// ══════════════════════════════════════════
class Stack {
  constructor() {
    this.items = []    // Array as underlying storage
  }

  // ✅ Push — Add to top — O(1)
  push(element) {
    this.items.push(element)
    console.log(\`Pushed: \${element}\`)
  }

  // ✅ Pop — Remove from top — O(1)
  pop() {
    if (this.isEmpty()) {
      console.log('Stack is empty!')
      return null
    }
    const removed = this.items.pop()
    console.log(\`Popped: \${removed}\`)
    return removed
  }

  // ✅ Peek — View top without removing — O(1)
  peek() {
    if (this.isEmpty()) return null
    return this.items[this.items.length - 1]
  }

  // ✅ isEmpty — O(1)
  isEmpty() {
    return this.items.length === 0
  }

  // ✅ Size — O(1)
  size() {
    return this.items.length
  }

  // ✅ Print — O(n)
  print() {
    console.log([...this.items].reverse().join(' ← top'))
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const stack = new Stack()

stack.push(10)    // [10]
stack.push(20)    // [10, 20]
stack.push(30)    // [10, 20, 30]

console.log(stack.peek())   // 30 (top) ✅
console.log(stack.size())   // 3

stack.pop()       // 30 removed → [10, 20]
stack.pop()       // 20 removed → [10]

console.log(stack.peek())   // 10 ✅


// ══════════════════════════════════════════
// SEARCHING — O(n)
// (Stack-la direct search panna koodathu ideally)
// (Pop panni search pannuvom — destructive)
// ══════════════════════════════════════════
function searchStack(stack, target) {
  const temp  = new Stack()
  let found   = false
  let position = 0

  // Pop panni search pannuvom
  while (!stack.isEmpty()) {
    const item = stack.pop()
    position++

    if (item === target) {
      found = true
      temp.push(item)
      break
    }
    temp.push(item)
  }

  // Restore stack
  while (!temp.isEmpty()) {
    stack.push(temp.pop())
  }

  return found ? position : -1
}


// ══════════════════════════════════════════
// REAL WORLD USE CASE 1 — Undo/Redo
// ══════════════════════════════════════════
class TextEditor {
  constructor() {
    this.text       = ''
    this.undoStack  = new Stack()
    this.redoStack  = new Stack()
  }

  type(newText) {
    this.undoStack.push(this.text)  // Current state save pannuvom
    this.redoStack = new Stack()    // Redo clear pannuvom
    this.text += newText
    console.log('Text:', this.text)
  }

  undo() {
    if (this.undoStack.isEmpty()) return
    this.redoStack.push(this.text)    // Redo-ku save pannuvom
    this.text = this.undoStack.pop()  // Previous state restore ✅
    console.log('After undo:', this.text)
  }

  redo() {
    if (this.redoStack.isEmpty()) return
    this.undoStack.push(this.text)
    this.text = this.redoStack.pop()  // Redo state restore ✅
    console.log('After redo:', this.text)
  }
}

const editor = new TextEditor()
editor.type('Hello')      // Text: Hello
editor.type(' World')     // Text: Hello World
editor.undo()             // After undo: Hello
editor.undo()             // After undo: ''
editor.redo()             // After redo: Hello


// ══════════════════════════════════════════
// REAL WORLD USE CASE 2 — Bracket Matching
// ══════════════════════════════════════════
function isValidBrackets(str) {
  const stack = new Stack()
  const open  = '([{'
  const close = ')]}'
  const pairs = { ')': '(', ']': '[', '}': '{' }

  for (const char of str) {
    if (open.includes(char)) {
      stack.push(char)           // Opening bracket — push ✅
    } else if (close.includes(char)) {
      if (stack.isEmpty()) return false
      if (stack.pop() !== pairs[char]) return false // Mismatch ❌
    }
  }

  return stack.isEmpty()         // All matched? ✅
}

console.log(isValidBrackets('()[]{}'))     // true ✅
console.log(isValidBrackets('([{}])'))     // true ✅
console.log(isValidBrackets('(]'))         // false ❌
console.log(isValidBrackets('((())'))      // false ❌


// ══════════════════════════════════════════
// REAL WORLD USE CASE 3 — Browser History
// ══════════════════════════════════════════
class BrowserHistory {
  constructor() {
    this.backStack    = new Stack()
    this.forwardStack = new Stack()
    this.current      = null
  }

  visit(url) {
    if (this.current) this.backStack.push(this.current)
    this.current      = url
    this.forwardStack = new Stack()  // Forward clear pannuvom
    console.log('Visiting:', url)
  }

  back() {
    if (this.backStack.isEmpty()) return
    this.forwardStack.push(this.current)
    this.current = this.backStack.pop()
    console.log('Back to:', this.current)
  }

  forward() {
    if (this.forwardStack.isEmpty()) return
    this.backStack.push(this.current)
    this.current = this.forwardStack.pop()
    console.log('Forward to:', this.current)
  }
}

const browser = new BrowserHistory()
browser.visit('google.com')
browser.visit('angular.io')
browser.visit('github.com')
browser.back()      // Back to: angular.io
browser.back()      // Back to: google.com
browser.forward()   // Forward to: angular.io


// 📌 Time Complexity Summary:
// Push     → O(1) ✅
// Pop      → O(1) ✅
// Peek     → O(1) ✅
// isEmpty  → O(1) ✅
// Search   → O(n) ⚠️ (not ideal for search)


// Space Complexity:
// Storage  → O(n)
// Operations → O(1) extra space`
  },

  {
    id: 'ds-queue',
    title: 'Queue',
    category: 'DSA',
    slangDefinition: `Queue na FIFO — First In First Out. What: Bank queue maari — first come first serve. Where: Task scheduling, print queue, API request queue, BFS traversal. When: Order maintain pannanum, first come first serve basis venum pothu. Why: Enqueue/dequeue O(1) — fast operations. How: Array use panna shift() O(n) aagidum — LinkedList use panna better, O(1) dequeue. Problem: Array-based queue-la dequeue O(n) — shift() ellathayum move pannanum. LinkedList use panna fix pannalaam.`,
    interviewDefinition: `A Queue is a linear data structure following FIFO (First In, First Out) principle. Elements are added (enqueue) at the rear and removed (dequeue) from the front. peek() returns the front element without removing. Array-based queues have O(n) dequeue due to shift() — LinkedList-based queues achieve O(1) for both enqueue and dequeue. Queues are used in BFS graph traversal, task scheduling, print queues, message queues, and handling async operations. A Circular Queue optimizes space by reusing empty slots.`,
    example: `// ══════════════════════════════════════════
// WHAT — Queue (FIFO)
// ══════════════════════════════════════════
// Bank queue analogy:
// Enqueue: Person join pannuvaan (rear-la)
// Dequeue: Front person serve aaguvaan (front-la)
// Peek:    Front person paakuvom (remove pannuvom illa)


// ══════════════════════════════════════════
// HOW — Queue using Array (Simple but O(n) dequeue)
// ══════════════════════════════════════════
class QueueArray {
  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)   // Add to rear — O(1) ✅
  }

  dequeue() {
    if (this.isEmpty()) return null
    return this.items.shift()  // Remove from front — O(n) ⚠️
  }

  peek() {
    return this.items[0]       // Front element — O(1)
  }

  isEmpty() { return this.items.length === 0 }
  size()    { return this.items.length }
}


// ══════════════════════════════════════════
// HOW — Optimized Queue using LinkedList
// Enqueue O(1) + Dequeue O(1) ✅
// ══════════════════════════════════════════
class QueueNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null   // Dequeue from here
    this.rear  = null   // Enqueue from here
    this.size  = 0
  }

  // ✅ Enqueue — Add to rear — O(1)
  enqueue(data) {
    const newNode = new QueueNode(data)

    if (!this.rear) {
      this.front = newNode
      this.rear  = newNode
    } else {
      this.rear.next = newNode   // Rear's next = new node
      this.rear      = newNode   // Rear update ✅
    }
    this.size++
    console.log(\`Enqueued: \${data}\`)
  }

  // ✅ Dequeue — Remove from front — O(1)
  dequeue() {
    if (this.isEmpty()) return null

    const data     = this.front.data
    this.front     = this.front.next  // Front update ✅

    if (!this.front) this.rear = null  // Empty-a aana rear-um null

    this.size--
    console.log(\`Dequeued: \${data}\`)
    return data
  }

  // ✅ Peek — View front — O(1)
  peek() {
    return this.front ? this.front.data : null
  }

  isEmpty() { return this.size === 0 }
  getSize() { return this.size }

  print() {
    const result = []
    let current  = this.front
    while (current) {
      result.push(current.data)
      current = current.next
    }
    console.log('Front →', result.join(' → '), '← Rear')
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const queue = new Queue()

queue.enqueue('Patient 1')
queue.enqueue('Patient 2')
queue.enqueue('Patient 3')
queue.print()              // Front → Patient 1 → Patient 2 → Patient 3 ← Rear

console.log(queue.peek())  // Patient 1 (front) ✅

queue.dequeue()            // Patient 1 removed
queue.dequeue()            // Patient 2 removed
queue.print()              // Front → Patient 3 ← Rear


// ══════════════════════════════════════════
// SEARCHING — O(n)
// ══════════════════════════════════════════
function searchQueue(queue, target) {
  let current  = queue.front
  let position = 0

  while (current !== null) {
    if (current.data === target) {
      return { found: true, position }  // ✅
    }
    current = current.next
    position++
  }
  return { found: false, position: -1 }
}


// ══════════════════════════════════════════
// REAL WORLD USE CASE 1 — Task Queue
// ══════════════════════════════════════════
class TaskQueue {
  constructor() {
    this.queue      = new Queue()
    this.processing = false
  }

  addTask(task) {
    this.queue.enqueue(task)
    console.log(\`Task added: \${task.name}\`)
    this.processNext()
  }

  processNext() {
    if (this.processing || this.queue.isEmpty()) return

    this.processing   = true
    const task        = this.queue.dequeue()

    console.log(\`Processing: \${task.name}\`)
    setTimeout(() => {
      console.log(\`Completed: \${task.name}\`)
      this.processing = false
      this.processNext()         // Next task process pannuvom ✅
    }, task.duration)
  }
}

const taskQueue = new TaskQueue()
taskQueue.addTask({ name: 'Send Email',    duration: 1000 })
taskQueue.addTask({ name: 'Generate PDF',  duration: 2000 })
taskQueue.addTask({ name: 'Upload File',   duration: 500  })
// FIFO — Send Email first, then PDF, then Upload ✅


// ══════════════════════════════════════════
// REAL WORLD USE CASE 2 — BFS Traversal
// ══════════════════════════════════════════
function bfs(graph, start) {
  const queue   = new Queue()
  const visited = new Set()
  const result  = []

  queue.enqueue(start)
  visited.add(start)

  while (!queue.isEmpty()) {
    const node     = queue.dequeue()
    result.push(node)

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.enqueue(neighbor)   // Neighbors queue-la add pannuvom ✅
      }
    }
  }
  return result
}

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [], E: [], F: []
}
console.log(bfs(graph, 'A'))  // ['A', 'B', 'C', 'D', 'E', 'F'] ✅


// 📌 Time Complexity Summary:
// Enqueue  → O(1) ✅ (LinkedList based)
// Dequeue  → O(1) ✅ (LinkedList based)
// Peek     → O(1) ✅
// Search   → O(n) ⚠️
// Array-based dequeue → O(n) ❌ (use LinkedList!)


// Space Complexity:
// Storage     → O(n)
// Operations  → O(1) extra space`
  },

  {
    id: 'ds-circular-queue',
    title: 'Circular Queue',
    category: 'DSA',
    slangDefinition: `Circular Queue na normal queue-oda problem fix pannudhu. Normal array-based queue-la dequeue panna front move aagadhu — left side-la empty spaces waste aagudhu. Circular Queue-la last position-ku aparam first position-ku wrap around aagudhu — circle maari. What: Fixed size array-la front and rear pointers circle-a move pannuvom. Where: CPU scheduling, memory buffering, streaming data, printer queue. When: Fixed size buffer vennum pothu, memory waste avoid pannanum pothu. Why: Space reuse pannuvom — O(1) enqueue and dequeue. How: rear = (rear + 1) % size formula use panni wrap around pannuvom.`,
    interviewDefinition: `A Circular Queue (Ring Buffer) is a linear data structure that connects the last position back to the first position, forming a circle. It solves the space wastage problem of linear queues where dequeued slots cannot be reused. It uses front and rear pointers with modulo arithmetic — (index + 1) % capacity — to wrap around. All operations (enqueue, dequeue, peek) are O(1). It is full when (rear + 1) % capacity === front, and empty when front === rear. Used in CPU scheduling, network buffers, audio/video streaming, and producer-consumer problems.`,
    example: `// ══════════════════════════════════════════
// PROBLEM WITH NORMAL QUEUE
// ══════════════════════════════════════════
// Normal Queue — Array based
// [ _, _, _, 'D', 'E' ]   ← front = 3, rear = 5
//   ↑  ↑  ↑
// Wasted slots — can't reuse! ❌
// Even though space available, queue shows FULL ❌

// ✅ Circular Queue — Wrap around use pannuvom
// [ 'F', 'G', _, 'D', 'E' ]  ← rear wraps to index 0, 1
//                               Space reused! ✅


// ══════════════════════════════════════════
// HOW — Circular Queue Implementation
// ══════════════════════════════════════════
class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity + 1  // +1 trick — full/empty distinguish pannuvom
    this.queue    = new Array(this.capacity)
    this.front    = 0             // Dequeue from here
    this.rear     = 0             // Enqueue from here
  }

  // ✅ Enqueue — O(1)
  enqueue(data) {
    if (this.isFull()) {
      console.log('Queue is FULL! ❌')
      return false
    }

    this.queue[this.rear] = data
    this.rear = (this.rear + 1) % this.capacity  // Wrap around ✅
    console.log(\`Enqueued: \${data}\`)
    return true
  }

  // ✅ Dequeue — O(1)
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is EMPTY! ❌')
      return null
    }

    const data  = this.queue[this.front]
    this.queue[this.front] = undefined             // Clear slot ✅
    this.front  = (this.front + 1) % this.capacity // Wrap around ✅
    console.log(\`Dequeued: \${data}\`)
    return data
  }

  // ✅ Peek front — O(1)
  peek() {
    if (this.isEmpty()) return null
    return this.queue[this.front]
  }

  // ✅ isEmpty — O(1)
  isEmpty() {
    return this.front === this.rear  // front === rear means empty
  }

  // ✅ isFull — O(1)
  isFull() {
    return (this.rear + 1) % this.capacity === this.front
    // rear + 1 wraps to front means full ✅
  }

  // ✅ Size — O(1)
  size() {
    return (this.rear - this.front + this.capacity) % this.capacity
  }

  // ✅ Print — O(n)
  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty')
      return
    }

    const result = []
    let i = this.front

    while (i !== this.rear) {
      result.push(this.queue[i])
      i = (i + 1) % this.capacity  // Wrap around ✅
    }

    console.log(\`Front → [\${result.join(', ')}] ← Rear\`)
    console.log(\`Front: \${this.front}, Rear: \${this.rear}, Size: \${this.size()}\`)
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const cq = new CircularQueue(5)  // Capacity: 5

cq.enqueue('A')   // [A, _, _, _, _]
cq.enqueue('B')   // [A, B, _, _, _]
cq.enqueue('C')   // [A, B, C, _, _]
cq.enqueue('D')   // [A, B, C, D, _]
cq.enqueue('E')   // [A, B, C, D, E] — FULL ✅
cq.enqueue('F')   // Queue is FULL! ❌

cq.print()        // Front → [A, B, C, D, E] ← Rear

cq.dequeue()      // A removed → [_, B, C, D, E] front moves ✅
cq.dequeue()      // B removed → [_, _, C, D, E]

cq.print()        // Front → [C, D, E] ← Rear

// ✅ Space reuse — wrap around!
cq.enqueue('F')   // [F, _, C, D, E] — F goes to index 0! ✅
cq.enqueue('G')   // [F, G, C, D, E] — G goes to index 1! ✅

cq.print()        // Front → [C, D, E, F, G] ← Rear


// ══════════════════════════════════════════
// SEARCHING — O(n)
// ══════════════════════════════════════════
function searchCircularQueue(cq, target) {
  if (cq.isEmpty()) return -1

  let i        = cq.front
  let position = 0

  while (i !== cq.rear) {
    if (cq.queue[i] === target) {
      return position              // Found ✅
    }
    i = (i + 1) % cq.capacity     // Wrap around ✅
    position++
  }
  return -1                        // Not found
}

console.log(searchCircularQueue(cq, 'E'))  // 2 ✅
console.log(searchCircularQueue(cq, 'Z'))  // -1


// ══════════════════════════════════════════
// REAL WORLD — CPU Scheduling (Round Robin)
// ══════════════════════════════════════════
class RoundRobinScheduler {
  constructor(timeSlice) {
    this.queue     = new CircularQueue(10)
    this.timeSlice = timeSlice               // Each process time limit
  }

  addProcess(process) {
    this.queue.enqueue(process)
    console.log(\`Process added: \${process.name}\`)
  }

  run() {
    console.log('\\nScheduler Running...')
    let cycle = 0

    while (!this.queue.isEmpty() && cycle < 10) {
      const process = this.queue.dequeue()

      process.remaining -= this.timeSlice    // Execute for timeSlice
      console.log(\`Executing \${process.name} — Remaining: \${process.remaining}ms\`)

      if (process.remaining > 0) {
        this.queue.enqueue(process)          // Still work? Re-add to queue ✅
      } else {
        console.log(\`\${process.name} COMPLETED ✅\`)
      }
      cycle++
    }
  }
}

const scheduler = new RoundRobinScheduler(100)
scheduler.addProcess({ name: 'Process A', remaining: 250 })
scheduler.addProcess({ name: 'Process B', remaining: 150 })
scheduler.addProcess({ name: 'Process C', remaining: 100 })
scheduler.run()


// ══════════════════════════════════════════
// REAL WORLD — Streaming Buffer
// ══════════════════════════════════════════
class StreamBuffer {
  constructor(bufferSize) {
    this.buffer = new CircularQueue(bufferSize)
  }

  // Producer — data write pannuvom
  write(data) {
    if (this.buffer.isFull()) {
      // Oldest data overwrite pannuvom (buffer full case)
      this.buffer.dequeue()
    }
    this.buffer.enqueue(data)
  }

  // Consumer — data read pannuvom
  read() {
    return this.buffer.dequeue()
  }

  hasData() {
    return !this.buffer.isEmpty()
  }
}

const videoBuffer = new StreamBuffer(5)
videoBuffer.write('Frame 1')
videoBuffer.write('Frame 2')
videoBuffer.write('Frame 3')

console.log(videoBuffer.read())  // Frame 1 ✅
console.log(videoBuffer.read())  // Frame 2 ✅


// 📌 Time Complexity Summary:
// Enqueue  → O(1) ✅
// Dequeue  → O(1) ✅
// Peek     → O(1) ✅
// isEmpty  → O(1) ✅
// isFull   → O(1) ✅
// Search   → O(n) ⚠️
//
// Space Complexity:
// Storage  → O(n) — fixed capacity
// Operations → O(1) extra
//
// Normal Queue vs Circular Queue:
// Normal   → Wasted slots after dequeue ❌
// Circular → Slots reused — wrap around ✅
// Both     → O(1) enqueue/dequeue`
  },

  {
    id: 'ds-deque',
    title: 'Deque (Double Ended Queue)',
    category: 'DSA',
    slangDefinition: `Deque na Double Ended Queue — both ends-la insert and delete panna mudiyudhu. What: Queue + Stack combo — front and rear rendu-liyum push/pop panna mudiyudhu. Where: Browser history (back/forward), sliding window problems, undo/redo, palindrome check. When: Both ends-la fast insert/delete vennum pothu. Why: All operations O(1) — front and rear both-la work pannuvom. How: Doubly Linked List use panna best — prev + next pointers use panni both ends O(1). Normal queue = only rear-la add, front-la remove. Deque = anywhere add/remove.`,
    interviewDefinition: `A Deque (Double-Ended Queue) is a linear data structure that allows insertion and deletion from both front and rear ends. It generalizes both Stack and Queue. addFront, removeFront, addRear, removeRear are all O(1) when implemented using a Doubly Linked List. Array-based deque has O(n) for front operations. Deque is used in sliding window maximum/minimum problems, palindrome checking, browser history navigation, and task stealing algorithms. JavaScript arrays can simulate a deque using push/pop (rear) and unshift/shift (front) but front operations are O(n).`,
    example: `// ══════════════════════════════════════════
// WHAT — Deque
// ══════════════════════════════════════════
//  addFront  ←→  [ A, B, C, D, E ]  ←→  addRear
// removeFront                           removeRear
// Both ends-la add/remove pannalaam ✅


// ══════════════════════════════════════════
// HOW — Deque using Doubly Linked List
// ══════════════════════════════════════════
class DequeNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class Deque {
  constructor() {
    this.front = null   // Front pointer
    this.rear  = null   // Rear pointer
    this.size  = 0
  }

  // ✅ Add to Front — O(1)
  addFront(data) {
    const newNode = new DequeNode(data)

    if (this.isEmpty()) {
      this.front = newNode
      this.rear  = newNode
    } else {
      newNode.next    = this.front   // New → old front
      this.front.prev = newNode      // Old front ← new
      this.front      = newNode      // Update front ✅
    }
    this.size++
    console.log(\`Added to front: \${data}\`)
  }

  // ✅ Add to Rear — O(1)
  addRear(data) {
    const newNode = new DequeNode(data)

    if (this.isEmpty()) {
      this.front = newNode
      this.rear  = newNode
    } else {
      newNode.prev   = this.rear    // New ← old rear
      this.rear.next = newNode      // Old rear → new
      this.rear      = newNode      // Update rear ✅
    }
    this.size++
    console.log(\`Added to rear: \${data}\`)
  }

  // ✅ Remove from Front — O(1)
  removeFront() {
    if (this.isEmpty()) {
      console.log('Deque is empty!')
      return null
    }

    const data     = this.front.data
    this.front     = this.front.next   // Move front ✅

    if (this.front) {
      this.front.prev = null           // Remove back reference
    } else {
      this.rear = null                 // Empty aana rear-um null
    }

    this.size--
    console.log(\`Removed from front: \${data}\`)
    return data
  }

  // ✅ Remove from Rear — O(1)
  removeRear() {
    if (this.isEmpty()) {
      console.log('Deque is empty!')
      return null
    }

    const data   = this.rear.data
    this.rear    = this.rear.prev      // Move rear ✅

    if (this.rear) {
      this.rear.next = null            // Remove forward reference
    } else {
      this.front = null                // Empty aana front-um null
    }

    this.size--
    console.log(\`Removed from rear: \${data}\`)
    return data
  }

  // ✅ Peek Front — O(1)
  peekFront() {
    return this.front ? this.front.data : null
  }

  // ✅ Peek Rear — O(1)
  peekRear() {
    return this.rear ? this.rear.data : null
  }

  isEmpty() { return this.size === 0 }
  getSize() { return this.size }

  // ✅ Print — O(n)
  print() {
    const result = []
    let current  = this.front

    while (current) {
      result.push(current.data)
      current = current.next
    }
    console.log(\`Front → [\${result.join(' ↔ ')}] ← Rear\`)
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const deque = new Deque()

deque.addRear('B')    // [B]
deque.addRear('C')    // [B, C]
deque.addFront('A')   // [A, B, C]
deque.addRear('D')    // [A, B, C, D]
deque.addFront('Z')   // [Z, A, B, C, D]

deque.print()         // Front → [Z ↔ A ↔ B ↔ C ↔ D] ← Rear

console.log(deque.peekFront())  // Z ✅
console.log(deque.peekRear())   // D ✅

deque.removeFront()   // Z removed → [A, B, C, D]
deque.removeRear()    // D removed → [A, B, C]

deque.print()         // Front → [A ↔ B ↔ C] ← Rear


// ══════════════════════════════════════════
// SEARCHING — O(n)
// ══════════════════════════════════════════
function searchDeque(deque, target) {
  let current  = deque.front
  let position = 0

  while (current !== null) {
    if (current.data === target) {
      return { found: true, position }   // ✅
    }
    current = current.next
    position++
  }
  return { found: false, position: -1 }
}

console.log(searchDeque(deque, 'B'))  // { found: true, position: 1 } ✅
console.log(searchDeque(deque, 'X'))  // { found: false, position: -1 }


// ══════════════════════════════════════════
// REAL WORLD USE CASE 1 — Palindrome Check
// ══════════════════════════════════════════
function isPalindrome(str) {
  const deque = new Deque()

  for (const char of str.toLowerCase()) {
    deque.addRear(char)           // All chars add pannuvom
  }

  while (deque.getSize() > 1) {
    const front = deque.removeFront()  // Front char
    const rear  = deque.removeRear()   // Rear char

    if (front !== rear) return false   // Mismatch ❌
  }
  return true                          // Palindrome ✅
}

console.log(isPalindrome('racecar'))   // true ✅
console.log(isPalindrome('hello'))     // false ❌
console.log(isPalindrome('madam'))     // true ✅
console.log(isPalindrome('A'))         // true ✅


// ══════════════════════════════════════════
// REAL WORLD USE CASE 2 — Sliding Window Maximum
// "Window-la maximum value track pannuvom"
// ══════════════════════════════════════════
function slidingWindowMax(nums, k) {
  const deque  = new Deque()  // Store indices
  const result = []

  for (let i = 0; i < nums.length; i++) {

    // Window-ku outside-a irukka indices remove pannuvom
    while (!deque.isEmpty() && deque.peekFront() < i - k + 1) {
      deque.removeFront()
    }

    // Smaller elements remove pannuvom — useless aagudhu
    while (!deque.isEmpty() && nums[deque.peekRear()] < nums[i]) {
      deque.removeRear()
    }

    deque.addRear(i)                           // Current index add

    if (i >= k - 1) {
      result.push(nums[deque.peekFront()])     // Window max ✅
    }
  }
  return result
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(slidingWindowMax(nums, 3))
// [3, 3, 5, 5, 6, 7] ✅ — O(n) solution using deque


// ══════════════════════════════════════════
// REAL WORLD USE CASE 3 — Browser History
// ══════════════════════════════════════════
class BrowserHistory {
  constructor() {
    this.deque   = new Deque()
    this.current = null
  }

  visit(url) {
    if (this.current) {
      this.deque.addRear(this.current)  // History-la save pannuvom
    }
    this.current = url
    console.log(\`Visiting: \${url}\`)
  }

  back() {
    if (this.deque.isEmpty()) {
      console.log('No history!')
      return
    }
    this.current = this.deque.removeRear()  // Last visited ✅
    console.log(\`Back to: \${this.current}\`)
  }
}

const browser = new BrowserHistory()
browser.visit('google.com')
browser.visit('angular.io')
browser.visit('github.com')
browser.back()   // Back to: angular.io ✅
browser.back()   // Back to: google.com ✅


// 📌 Time Complexity Summary:
// addFront     → O(1) ✅
// addRear      → O(1) ✅
// removeFront  → O(1) ✅
// removeRear   → O(1) ✅
// peekFront    → O(1) ✅
// peekRear     → O(1) ✅
// Search       → O(n) ⚠️
//
// Space Complexity:
// Storage      → O(n)
// Operations   → O(1) extra
//
// Queue vs Stack vs Deque:
// Queue  → Add rear, remove front (FIFO)
// Stack  → Add top, remove top (LIFO)
// Deque  → Add/remove both ends ✅ (most flexible)`
  },

  {
    id: 'ds-max-heap',
    title: 'Max Heap',
    category: 'DSA',
    slangDefinition: `Max Heap na complete binary tree — parent always children-a vida perusa irukku. What: Root-la always maximum element irukku — "biggest boss on top". Where: Priority Queue, heap sort, find top K elements. When: Maximum element fast-a access vennum pothu, priority based processing vennum pothu. Why: Max element O(1) access, insert/delete O(log n). How: Array use panni represent pannuvom — parent index i-ku children 2i+1 and 2i+2. Insert panna bottom-la add panni bubble up pannuvom. Delete panna root remove panni last element root-la vachi bubble down pannuvom.`,
    interviewDefinition: `A Max Heap is a complete binary tree where every parent node is greater than or equal to its children. The maximum element is always at the root, accessible in O(1). It is stored as an array where for a node at index i, left child is at 2i+1, right child at 2i+2, and parent at Math.floor((i-1)/2). Insertion adds at the end and bubbles up (heapify up) — O(log n). Deletion removes the root, places the last element at root, and bubbles down (heapify down) — O(log n). Used in Priority Queues, heap sort, and finding K largest elements.`,
    example: `// ══════════════════════════════════════════
// WHAT — Max Heap Array Representation
// ══════════════════════════════════════════
//         100          ← Root (Maximum) ✅
//        /    \
//       90     80
//      /  \   /  \
//     70  60 50  40
//
// Array: [100, 90, 80, 70, 60, 50, 40]
//  idx:    0   1   2   3   4   5   6
//
// Parent of i    → Math.floor((i-1) / 2)
// Left child     → 2*i + 1
// Right child    → 2*i + 2


// ══════════════════════════════════════════
// HOW — Max Heap Implementation
// ══════════════════════════════════════════
class MaxHeap {
  constructor() {
    this.heap = []
  }

  // Helper: Parent index
  parentIndex(i)    { return Math.floor((i - 1) / 2) }

  // Helper: Left child index
  leftChildIndex(i) { return 2 * i + 1 }

  // Helper: Right child index
  rightChildIndex(i){ return 2 * i + 2 }

  // Helper: Swap two elements
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  // ✅ Get Max — O(1)
  getMax() {
    return this.heap[0] || null   // Root is always max ✅
  }

  size()    { return this.heap.length }
  isEmpty() { return this.heap.length === 0 }

  // ✅ Insert — O(log n)
  insert(value) {
    this.heap.push(value)         // End-la add pannuvom
    this.bubbleUp()               // Correct position-ku move pannuvom
    console.log(\`Inserted: \${value}\`)
  }

  // Bubble Up — child > parent? Swap pannuvom
  bubbleUp() {
    let index = this.heap.length - 1   // Last element

    while (index > 0) {
      const parent = this.parentIndex(index)

      if (this.heap[parent] < this.heap[index]) {
        this.swap(parent, index)   // Parent chinna-na swap ✅
        index = parent             // Move up
      } else {
        break                      // Correct position reached
      }
    }
  }

  // ✅ Extract Max (Remove Root) — O(log n)
  extractMax() {
    if (this.isEmpty()) return null

    const max  = this.heap[0]              // Root = max ✅
    const last = this.heap.pop()           // Last element remove

    if (!this.isEmpty()) {
      this.heap[0] = last                  // Last → root position
      this.bubbleDown(0)                   // Correct position-ku move
    }

    console.log(\`Extracted Max: \${max}\`)
    return max
  }

  // Bubble Down — parent < child? Swap pannuvom
  bubbleDown(index) {
    const size = this.heap.length

    while (true) {
      let largest = index
      const left  = this.leftChildIndex(index)
      const right = this.rightChildIndex(index)

      // Left child perusa-na?
      if (left < size && this.heap[left] > this.heap[largest]) {
        largest = left
      }

      // Right child perusa-na?
      if (right < size && this.heap[right] > this.heap[largest]) {
        largest = right
      }

      if (largest !== index) {
        this.swap(index, largest)   // Larger child-ku swap ✅
        index = largest             // Move down
      } else {
        break                       // Correct position reached
      }
    }
  }

  // ✅ Peek — O(1) — same as getMax
  peek() { return this.getMax() }

  // ✅ Print heap array
  print() {
    console.log('Heap:', this.heap)
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const maxHeap = new MaxHeap()

maxHeap.insert(40)
maxHeap.insert(100)
maxHeap.insert(80)
maxHeap.insert(70)
maxHeap.insert(90)
maxHeap.insert(50)

maxHeap.print()
// Heap: [100, 90, 80, 70, 40, 50] — 100 always root ✅

console.log(maxHeap.getMax())     // 100 — O(1) ✅
console.log(maxHeap.extractMax()) // 100 removed
console.log(maxHeap.getMax())     // 90 — new max ✅

maxHeap.print()
// Heap: [90, 70, 80, 50, 40] ✅


// ══════════════════════════════════════════
// SEARCHING — O(n)
// (Heap search-ku optimized illa — priority queue use case)
// ══════════════════════════════════════════
function searchHeap(heap, target) {
  for (let i = 0; i < heap.heap.length; i++) {
    if (heap.heap[i] === target) {
      return i    // Found at index ✅
    }
  }
  return -1       // Not found
}

console.log(searchHeap(maxHeap, 80))  // index ✅
console.log(searchHeap(maxHeap, 5))   // -1


// ══════════════════════════════════════════
// REAL WORLD USE CASE 1 — Priority Queue
// "High priority tasks first process pannuvom"
// ══════════════════════════════════════════
class PriorityQueue {
  constructor() {
    this.heap = new MaxHeap()
  }

  enqueue(task, priority) {
    // Priority as value use pannuvom
    this.heap.insert({ task, priority, value: priority })
    console.log(\`Task added: \${task} (priority: \${priority})\`)
  }

  dequeue() {
    const item = this.heap.extractMax()
    return item ? item.task : null
  }

  peek() {
    const item = this.heap.peek()
    return item ? item.task : null
  }
}

const pq = new PriorityQueue()
pq.enqueue('Send OTP', 1)
pq.enqueue('Emergency Alert', 10)    // Highest priority
pq.enqueue('Weekly Report', 3)
pq.enqueue('Critical Bug Fix', 8)

console.log(pq.dequeue())  // Emergency Alert (priority 10) ✅
console.log(pq.dequeue())  // Critical Bug Fix (priority 8) ✅
console.log(pq.dequeue())  // Weekly Report (priority 3) ✅


// ══════════════════════════════════════════
// REAL WORLD USE CASE 2 — K Largest Elements
// ══════════════════════════════════════════
function findKLargest(nums, k) {
  const heap = new MaxHeap()

  for (const num of nums) {
    heap.insert(num)            // All elements insert pannuvom
  }

  const result = []
  for (let i = 0; i < k; i++) {
    result.push(heap.extractMax()) // K times extract pannuvom ✅
  }
  return result
}

console.log(findKLargest([3, 1, 5, 12, 2, 11, 8], 3))
// [12, 11, 8] ✅ — O(n log n)


// 📌 Time Complexity Summary:
// getMax/peek   → O(1)      ✅ (root access)
// insert        → O(log n)  ✅ (bubble up)
// extractMax    → O(log n)  ✅ (bubble down)
// search        → O(n)      ⚠️ (no ordering guarantee)
// buildHeap     → O(n)      ✅ (heapify all)
//
// Space Complexity:
// Storage       → O(n)
// Operations    → O(log n) recursion stack`
  },

  {
    id: 'ds-min-heap',
    title: 'Min Heap',
    category: 'DSA',
    slangDefinition: `Min Heap na Max Heap opposite — parent always children-a vida small values. What: Root-la always minimum element irukku — "smallest boss on top". Where: Dijkstra shortest path, hospital triage (less wait time first), scheduling, K smallest elements find panna. When: Minimum element fast-a access vennum pothu. Why: Min element O(1) access. How: Max Heap-a vida comparison logic reverse pannuvom — parent > child aana swap pannuvom (max heap-la parent < child aana swap). Everything same logic, just comparison flip.`,
    interviewDefinition: `A Min Heap is a complete binary tree where every parent node is less than or equal to its children. The minimum element is always at the root, accessible in O(1). Implementation is identical to Max Heap with one change — comparison is reversed. During bubble up, swap if parent > child. During bubble down, swap with the smaller child. Min Heaps are used in Dijkstra's shortest path algorithm, Prim's MST, scheduling by earliest deadline, finding K smallest elements, and merge K sorted lists.`,
    example: `// ══════════════════════════════════════════
// WHAT — Min Heap Array Representation
// ══════════════════════════════════════════
//          10          ← Root (Minimum) ✅
//        /    \
//       20     30
//      /  \   /  \
//     40  50 60  70
//
// Array: [10, 20, 30, 40, 50, 60, 70]
// Parent of i    → Math.floor((i-1) / 2)
// Left child     → 2*i + 1
// Right child    → 2*i + 2


// ══════════════════════════════════════════
// HOW — Min Heap Implementation
// (Max Heap-a vida only comparison reverse pannuvom)
// ══════════════════════════════════════════
class MinHeap {
  constructor() {
    this.heap = []
  }

  parentIndex(i)     { return Math.floor((i - 1) / 2) }
  leftChildIndex(i)  { return 2 * i + 1 }
  rightChildIndex(i) { return 2 * i + 2 }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  // ✅ Get Min — O(1)
  getMin() {
    return this.heap[0] || null   // Root is always min ✅
  }

  size()    { return this.heap.length }
  isEmpty() { return this.heap.length === 0 }

  // ✅ Insert — O(log n)
  insert(value) {
    this.heap.push(value)
    this.bubbleUp()
    console.log(\`Inserted: \${value}\`)
  }

  // Bubble Up — child < parent? Swap pannuvom (MIN heap)
  bubbleUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      const parent = this.parentIndex(index)

      // ← Only difference from MaxHeap: < instead of >
      if (this.heap[parent] > this.heap[index]) {
        this.swap(parent, index)   // Parent perusa-na swap ✅
        index = parent
      } else {
        break
      }
    }
  }

  // ✅ Extract Min (Remove Root) — O(log n)
  extractMin() {
    if (this.isEmpty()) return null

    const min  = this.heap[0]
    const last = this.heap.pop()

    if (!this.isEmpty()) {
      this.heap[0] = last
      this.bubbleDown(0)
    }

    console.log(\`Extracted Min: \${min}\`)
    return min
  }

  // Bubble Down — parent > child? Swap with SMALLEST child (MIN heap)
  bubbleDown(index) {
    const size = this.heap.length

    while (true) {
      let smallest = index          // ← 'smallest' instead of 'largest'
      const left   = this.leftChildIndex(index)
      const right  = this.rightChildIndex(index)

      // Left child chinna-na?
      if (left < size && this.heap[left] < this.heap[smallest]) {
        smallest = left              // ← < instead of >
      }

      // Right child chinna-na?
      if (right < size && this.heap[right] < this.heap[smallest]) {
        smallest = right             // ← < instead of >
      }

      if (smallest !== index) {
        this.swap(index, smallest)   // Smaller child-ku swap ✅
        index = smallest
      } else {
        break
      }
    }
  }

  peek()  { return this.getMin() }

  print() {
    console.log('MinHeap:', this.heap)
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const minHeap = new MinHeap()

minHeap.insert(50)
minHeap.insert(10)
minHeap.insert(30)
minHeap.insert(5)
minHeap.insert(20)
minHeap.insert(40)

minHeap.print()
// MinHeap: [5, 10, 30, 50, 20, 40] — 5 always root ✅

console.log(minHeap.getMin())      // 5 — O(1) ✅
console.log(minHeap.extractMin())  // 5 removed
console.log(minHeap.getMin())      // 10 — new min ✅


// ══════════════════════════════════════════
// SEARCHING — O(n)
// ══════════════════════════════════════════
function searchMinHeap(heap, target) {
  for (let i = 0; i < heap.heap.length; i++) {
    if (heap.heap[i] === target) {
      return i     // Found at index ✅
    }
  }
  return -1
}


// ══════════════════════════════════════════
// MAX vs MIN — Side by Side Comparison
// ══════════════════════════════════════════
const maxH = new MaxHeap()
const minH = new MinHeap()

const values = [30, 10, 50, 20, 40]
values.forEach(v => { maxH.insert(v); minH.insert(v) })

console.log('MaxHeap root:', maxH.getMax())  // 50 ✅
console.log('MinHeap root:', minH.getMin())  // 10 ✅


// ══════════════════════════════════════════
// REAL WORLD USE CASE 1 — Hospital Triage
// "Less wait time patient first treat pannuvom"
// ══════════════════════════════════════════
class HospitalTriage {
  constructor() {
    this.heap = new MinHeap()
  }

  addPatient(patient) {
    // waitTime chinna-na first treat pannuvom
    this.heap.insert({ ...patient, value: patient.waitTime })
    console.log(\`Patient added: \${patient.name} (wait: \${patient.waitTime}min)\`)
  }

  treatNext() {
    const patient = this.heap.extractMin()
    if (patient) {
      console.log(\`Treating: \${patient.name} ✅\`)
    }
    return patient
  }
}

const triage = new HospitalTriage()
triage.addPatient({ name: 'Anjali', waitTime: 45 })
triage.addPatient({ name: 'Rohit',  waitTime: 10 })   // Less wait ✅
triage.addPatient({ name: 'Sara',   waitTime: 30 })

triage.treatNext()  // Rohit (10 min wait — least) ✅
triage.treatNext()  // Sara  (30 min wait) ✅
triage.treatNext()  // Anjali (45 min wait) ✅


// ══════════════════════════════════════════
// REAL WORLD USE CASE 2 — K Smallest Elements
// ══════════════════════════════════════════
function findKSmallest(nums, k) {
  const heap = new MinHeap()

  for (const num of nums) {
    heap.insert(num)
  }

  const result = []
  for (let i = 0; i < k; i++) {
    result.push(heap.extractMin())  // K times extract ✅
  }
  return result
}

console.log(findKSmallest([7, 2, 9, 1, 5, 3, 8], 3))
// [1, 2, 3] ✅


// ══════════════════════════════════════════
// REAL WORLD USE CASE 3 — Dijkstra (Min Heap)
// "Shortest path — minimum distance first process"
// ══════════════════════════════════════════
function dijkstraWithMinHeap(graph, start) {
  const minHeap   = new MinHeap()
  const distances = {}
  const visited   = new Set()

  // Initialize
  for (const vertex of Object.keys(graph)) {
    distances[vertex] = vertex === start ? 0 : Infinity
  }

  minHeap.insert({ node: start, dist: 0, value: 0 })

  while (!minHeap.isEmpty()) {
    const { node, dist } = minHeap.extractMin()

    if (visited.has(node)) continue
    visited.add(node)

    for (const [neighbor, weight] of Object.entries(graph[node] || {})) {
      const newDist = dist + weight

      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist
        minHeap.insert({ node: neighbor, dist: newDist, value: newDist })
      }
    }
  }

  return distances
}

const roadGraph = {
  A: { B: 4, C: 2 },
  B: { D: 3, C: 1 },
  C: { B: 1, D: 5 },
  D: {}
}

console.log(dijkstraWithMinHeap(roadGraph, 'A'))
// { A: 0, B: 3, C: 2, D: 6 } ✅


// ══════════════════════════════════════════
// MAX HEAP vs MIN HEAP — Quick Reference
// ══════════════════════════════════════════
// Feature          MaxHeap         MinHeap
// Root             Maximum ✅      Minimum ✅
// Bubble Up        child > parent  child < parent
// Bubble Down      swap larger     swap smaller
// Use case         K largest,      K smallest,
//                  Priority Queue  Dijkstra, Triage
// getMax/getMin    O(1) ✅         O(1) ✅
// insert           O(log n)        O(log n)
// extract          O(log n)        O(log n)
// search           O(n)            O(n)


// 📌 Time Complexity Summary:
// getMin/peek   → O(1)      ✅ (root access)
// insert        → O(log n)  ✅ (bubble up)
// extractMin    → O(log n)  ✅ (bubble down)
// search        → O(n)      ⚠️
// buildHeap     → O(n)      ✅
//
// Space Complexity:
// Storage       → O(n)
// Operations    → O(log n) recursion stack`
  },

  {
    id: 'ds-hash-map',
    title: 'Hash Map (Hash Table)',
    category: 'DSA',
    slangDefinition: `Hash Map na key-value pairs store pannuvom — key use panni O(1)-la value access pannuvom. What: Dictionary maari — word (key) kudutha meaning (value) kedaikkum. Where: Caching, frequency count, fast lookup, grouping. When: Key-based fast access venum pothu, duplicates check panna, count pannanum pothu. Why: Average O(1) get/set/delete — very fast. How: Key-a hash function-la pass pannа index kedaikkum — adha index-la value store pannuvom. Problem: Hash collision — two keys same index-la map aana chaining use pannuvom. JavaScript-la Map and Object as hash map use pannalaam.`,
    interviewDefinition: `A Hash Map (Hash Table) is a data structure that maps keys to values using a hash function. The hash function converts a key to an array index where the value is stored. Average time complexity for get, set, and delete operations is O(1). Worst case is O(n) due to hash collisions — when multiple keys map to the same index. Collisions are handled via chaining (linked list at each slot) or open addressing. JavaScript's Map object is a built-in hash map that maintains insertion order and allows any key type. Objects work as hash maps for string keys.`,
    example: `// ══════════════════════════════════════════
// WHAT — Hash Map
// ══════════════════════════════════════════
// Key → Hash Function → Index → Value stored

// ══════════════════════════════════════════
// HOW — Simple Hash Map Implementation
// ══════════════════════════════════════════
class HashMap {
  constructor(size = 53) {
    this.table = new Array(size)   // Fixed size array
    this.size  = size
  }

  // Hash function — key-a index-a convert pannuvom
  hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size
    }
    return hash
  }

  // ✅ Set — O(1) average
  set(key, value) {
    const index = this.hash(key)

    if (!this.table[index]) {
      this.table[index] = []        // Chaining for collision ✅
    }

    // Key already exists? Update pannuvom
    const existing = this.table[index].find(item => item[0] === key)
    if (existing) {
      existing[1] = value
    } else {
      this.table[index].push([key, value])
    }
  }

  // ✅ Get — O(1) average
  get(key) {
    const index = this.hash(key)

    if (!this.table[index]) return undefined

    const pair = this.table[index].find(item => item[0] === key)
    return pair ? pair[1] : undefined
  }

  // ✅ Delete — O(1) average
  delete(key) {
    const index = this.hash(key)

    if (!this.table[index]) return false

    const itemIndex = this.table[index].findIndex(item => item[0] === key)
    if (itemIndex === -1) return false

    this.table[index].splice(itemIndex, 1)
    return true
  }

  // ✅ Has — O(1) average
  has(key) {
    return this.get(key) !== undefined
  }

  // ✅ Keys — O(n)
  keys() {
    const keys = []
    for (const bucket of this.table) {
      if (bucket) {
        for (const [key] of bucket) {
          keys.push(key)
        }
      }
    }
    return keys
  }

  // ✅ Values — O(n)
  values() {
    const values = []
    for (const bucket of this.table) {
      if (bucket) {
        for (const [, value] of bucket) {
          values.push(value)
        }
      }
    }
    return values
  }
}

// ══════════════════════════════════════════
// USAGE
// ══════════════════════════════════════════
const map = new HashMap()

map.set('name', 'Anjali')
map.set('age',  26)
map.set('city', 'Chennai')

console.log(map.get('name'))   // 'Anjali' — O(1) ✅
console.log(map.get('age'))    // 26       — O(1) ✅
console.log(map.has('city'))   // true     — O(1) ✅

map.delete('age')
console.log(map.has('age'))    // false ✅


// ══════════════════════════════════════════
// JAVASCRIPT BUILT-IN — Map (Recommended)
// ══════════════════════════════════════════
const jsMap = new Map()

// ✅ Set — O(1)
jsMap.set('patient1', { name: 'Anjali', age: 26 })
jsMap.set('patient2', { name: 'Rohit',  age: 30 })
jsMap.set(123, 'numeric key works too!')  // Any key type ✅
jsMap.set({ id: 1 }, 'object key!')       // Object as key ✅

// ✅ Get — O(1)
console.log(jsMap.get('patient1'))   // { name: 'Anjali', age: 26 } ✅

// ✅ Has — O(1)
console.log(jsMap.has('patient2'))   // true ✅

// ✅ Delete — O(1)
jsMap.delete('patient2')

// ✅ Size — O(1)
console.log(jsMap.size)              // 3

// ✅ Iterate — O(n)
jsMap.forEach((value, key) => {
  console.log(\`\${key}: \${JSON.stringify(value)}\`)
})

for (const [key, value] of jsMap) {
  console.log(key, value)
}


// ══════════════════════════════════════════
// SEARCHING — O(1) average
// ══════════════════════════════════════════
const patientMap = new Map()
patientMap.set('P001', { name: 'Anjali', ward: 'ICU' })
patientMap.set('P002', { name: 'Rohit',  ward: 'General' })
patientMap.set('P003', { name: 'Sara',   ward: 'ICU' })

// ✅ Search by key — O(1)
function findPatient(id) {
  if (patientMap.has(id)) {
    return patientMap.get(id)   // O(1) ✅ — no loop needed!
  }
  return null
}

console.log(findPatient('P002'))  // { name: 'Rohit', ward: 'General' } ✅
console.log(findPatient('P999'))  // null


// ══════════════════════════════════════════
// REAL WORLD USE CASE 1 — Frequency Count
// ══════════════════════════════════════════
function countFrequency(arr) {
  const freq = new Map()

  for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1)  // O(1) per item
  }
  return freq
}

const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']
const freq  = countFrequency(words)
console.log(freq.get('apple'))   // 3 ✅
console.log(freq.get('banana'))  // 2 ✅


// ══════════════════════════════════════════
// REAL WORLD USE CASE 2 — Two Sum Problem
// ══════════════════════════════════════════
function twoSum(nums, target) {
  const seen = new Map()  // value → index map

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (seen.has(complement)) {
      return [seen.get(complement), i]  // O(1) lookup ✅
    }
    seen.set(nums[i], i)
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))   // [0, 1] ✅ (2+7=9)
console.log(twoSum([3, 2, 4], 6))         // [1, 2] ✅ (2+4=6)
// O(n) total — O(1) lookup use panni O(n²) → O(n) optimize pannuvom 🚀


// ══════════════════════════════════════════
// REAL WORLD USE CASE 3 — Caching (Memoization)
// ══════════════════════════════════════════
function memoize(fn) {
  const cache = new Map()

  return function(...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      console.log('Cache hit! ✅')
      return cache.get(key)    // O(1) cache lookup ✅
    }

    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}

const expensiveCalc = memoize((n) => {
  console.log('Computing...')
  return n * n
})

console.log(expensiveCalc(5))  // Computing... 25
console.log(expensiveCalc(5))  // Cache hit! 25 ✅ (no recompute)


// 📌 Time Complexity Summary:
// Set (insert) → O(1) average / O(n) worst (collision)
// Get (access) → O(1) average / O(n) worst ✅
// Delete       → O(1) average / O(n) worst
// Has (search) → O(1) average ✅
// Keys/Values  → O(n)
// Iterate      → O(n)


// Space Complexity:
// Storage      → O(n)
// Operations   → O(1) extra`
  },

  {
    id: 'ds-tree',
    title: 'Tree (Binary Search Tree)',
    category: 'DSA',
    slangDefinition: `Tree na hierarchical data structure — root irukku, root-la irunthu branches spread aagudhu. What: Family tree maari — parent → children relationship. Binary Tree na each node max 2 children. BST (Binary Search Tree) na left < root < right rule follow pannudhu — fast search possible. Where: File system, DOM, organization chart, database indexing. When: Hierarchical data, fast search venum pothu. Why: BST search O(log n) — balanced tree-la. How: Node class create pannuvom, insert left/right based on value. Problem: Unbalanced tree aana O(n) degrade aagudhu.`,
    interviewDefinition: `A Tree is a non-linear hierarchical data structure with a root node and subtrees of children. A Binary Tree has at most 2 children per node. A Binary Search Tree (BST) maintains the property: left subtree values < node value < right subtree values, enabling efficient search. Balanced BST operations (search, insert, delete) are O(log n). Tree traversals include Inorder (left-root-right, gives sorted output), Preorder (root-left-right), and Postorder (left-right-root). The height of a balanced tree is O(log n) — unbalanced trees degrade to O(n).`,
    example: `// ══════════════════════════════════════════
// WHAT — Tree Node
// ══════════════════════════════════════════
class TreeNode {
  constructor(value) {
    this.value = value
    this.left  = null   // Left child
    this.right = null   // Right child
  }
}

// ══════════════════════════════════════════
// HOW — Binary Search Tree
// Left < Root < Right ← BST Property
// ══════════════════════════════════════════
class BST {
  constructor() {
    this.root = null
  }

  // ✅ Insert — O(log n) balanced / O(n) worst
  insert(value) {
    const newNode = new TreeNode(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root

    while (true) {
      if (value === current.value) return  // Duplicate — skip

      if (value < current.value) {         // Left side
        if (!current.left) {
          current.left = newNode
          return
        }
        current = current.left
      } else {                             // Right side
        if (!current.right) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  // ✅ Search — O(log n) balanced / O(n) worst
  search(value) {
    let current = this.root

    while (current) {
      if (value === current.value) return true   // Found ✅
      if (value < current.value)                 // Go left
        current = current.left
      else                                       // Go right
        current = current.right
    }
    return false                                 // Not found
  }

  // ✅ Inorder Traversal — O(n) — gives SORTED output
  inorder(node = this.root, result = []) {
    if (node) {
      this.inorder(node.left, result)   // Left first
      result.push(node.value)           // Root
      this.inorder(node.right, result)  // Right last
    }
    return result
  }

  // ✅ Preorder Traversal — O(n)
  preorder(node = this.root, result = []) {
    if (node) {
      result.push(node.value)             // Root first
      this.preorder(node.left, result)
      this.preorder(node.right, result)
    }
    return result
  }

  // ✅ Postorder Traversal — O(n)
  postorder(node = this.root, result = []) {
    if (node) {
      this.postorder(node.left, result)
      this.postorder(node.right, result)
      result.push(node.value)             // Root last
    }
    return result
  }

  // ✅ Min value — O(log n) — leftmost node
  findMin() {
    if (!this.root) return null
    let current = this.root
    while (current.left) current = current.left
    return current.value
  }

  // ✅ Max value — O(log n) — rightmost node
  findMax() {
    if (!this.root) return null
    let current = this.root
    while (current.right) current = current.right
    return current.value
  }

  // ✅ Height — O(n)
  height(node = this.root) {
    if (!node) return -1
    return 1 + Math.max(
      this.height(node.left),
      this.height(node.right)
    )
  }

  // ✅ Delete — O(log n)
  delete(value, node = this.root, parent = null, isLeft = false) {
    if (!node) return false

    if (value < node.value) {
      return this.delete(value, node.left, node, true)
    } else if (value > node.value) {
      return this.delete(value, node.right, node, false)
    } else {
      // Found node to delete
      if (!node.left && !node.right) {
        // Case 1: Leaf node
        if (!parent) this.root = null
        else if (isLeft) parent.left  = null
        else             parent.right = null

      } else if (!node.left || !node.right) {
        // Case 2: One child
        const child = node.left || node.right
        if (!parent)         this.root = child
        else if (isLeft)     parent.left  = child
        else                 parent.right = child

      } else {
        // Case 3: Two children — inorder successor find pannuvom
        let successor       = node.right
        let successorParent = node
        while (successor.left) {
          successorParent = successor
          successor       = successor.left
        }
        node.value = successor.value   // Replace value
        this.delete(successor.value, node.right, node, false)
      }
      return true
    }
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const bst = new BST()

bst.insert(50)
bst.insert(30)
bst.insert(70)
bst.insert(20)
bst.insert(40)
bst.insert(60)
bst.insert(80)

//        50
//       /  \
//      30   70
//     / \  /  \
//    20 40 60  80

console.log(bst.inorder())   // [20,30,40,50,60,70,80] — Sorted! ✅
console.log(bst.preorder())  // [50,30,20,40,70,60,80]
console.log(bst.postorder()) // [20,40,30,60,80,70,50]

console.log(bst.findMin())   // 20 ✅
console.log(bst.findMax())   // 80 ✅
console.log(bst.height())    // 2 ✅


// ══════════════════════════════════════════
// SEARCHING — O(log n) in balanced BST
// ══════════════════════════════════════════
console.log(bst.search(40))  // true  — O(log n) ✅
console.log(bst.search(25))  // false — O(log n) ✅

// Search path for 40:
// 50 → 40 < 50 → go left → 30 → 40 > 30 → go right → 40 ✅
// Only 3 steps for 7 elements (log₂7 ≈ 3) 🚀


// ══════════════════════════════════════════
// REAL WORLD — BFS Level Order Traversal
// ══════════════════════════════════════════
function levelOrder(root) {
  if (!root) return []

  const queue  = [root]
  const result = []

  while (queue.length) {
    const levelSize = queue.length
    const level     = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      level.push(node.value)

      if (node.left)  queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(level)
  }
  return result
}

console.log(levelOrder(bst.root))
// [[50], [30,70], [20,40,60,80]] ✅


// 📌 Time Complexity Summary (Balanced BST):
// Insert   → O(log n) balanced / O(n) worst ✅
// Search   → O(log n) balanced / O(n) worst ✅
// Delete   → O(log n) balanced / O(n) worst ✅
// Min/Max  → O(log n) ✅
// Traversal→ O(n) (visit all nodes)
// Height   → O(n)


// Space Complexity:
// Storage     → O(n)
// Traversal   → O(h) recursion stack (h = height)
// Balanced    → O(log n) stack space
// Unbalanced  → O(n) stack space`
  },

  {
    id: 'ds-graph',
    title: 'Graph',
    category: 'DSA',
    slangDefinition: `Graph na nodes (vertices) and edges (connections) — real world relationships represent pannuvom. What: Social network maari — people = nodes, friendship = edges. Directed graph na oru direction mattum (A→B), undirected na both directions (A↔B). Weighted graph na edges-ku cost/distance irukku. Where: Google Maps (shortest path), social networks, dependency graphs. When: Relationships/connections represent pannanum pothu. How: Adjacency list use pannuvom — each node-oda neighbors store pannuvom. BFS = level by level, DFS = depth-first explore. Why: Real world complex relationships model panna most powerful data structure.`,
    interviewDefinition: `A Graph is a non-linear data structure consisting of vertices (nodes) and edges (connections). Graphs can be directed (edges have direction) or undirected (bidirectional). Weighted graphs have costs associated with edges. Graphs are represented using Adjacency Matrix (O(V²) space) or Adjacency List (O(V+E) space — preferred). BFS (Breadth First Search) uses a Queue and explores level by level — used for shortest path in unweighted graphs. DFS (Depth First Search) uses a Stack/recursion and explores as deep as possible — used for cycle detection, topological sort. Common algorithms: Dijkstra (shortest path), Kruskal/Prim (MST).`,
    example: `// ══════════════════════════════════════════
// WHAT — Graph Representations
// ══════════════════════════════════════════

// Adjacency Matrix — O(V²) space
//      A  B  C  D
//  A [ 0, 1, 0, 1 ]
//  B [ 1, 0, 1, 0 ]
//  C [ 0, 1, 0, 1 ]
//  D [ 1, 0, 1, 0 ]

// Adjacency List — O(V+E) space (preferred ✅)
//  A: [B, D]
//  B: [A, C]
//  C: [B, D]
//  D: [A, C]


// ══════════════════════════════════════════
// HOW — Graph using Adjacency List
// ══════════════════════════════════════════
class Graph {
  constructor(directed = false) {
    this.adjacencyList = new Map()
    this.directed      = directed
  }

  // ✅ Add vertex — O(1)
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, [])
    }
  }

  // ✅ Add edge — O(1)
  addEdge(vertex1, vertex2, weight = 1) {
    this.addVertex(vertex1)
    this.addVertex(vertex2)

    this.adjacencyList.get(vertex1).push({ node: vertex2, weight })

    if (!this.directed) {
      // Undirected — both directions add pannuvom
      this.adjacencyList.get(vertex2).push({ node: vertex1, weight })
    }
  }

  // ✅ Remove edge — O(E)
  removeEdge(vertex1, vertex2) {
    this.adjacencyList.set(
      vertex1,
      this.adjacencyList.get(vertex1).filter(e => e.node !== vertex2)
    )
    if (!this.directed) {
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2).filter(e => e.node !== vertex1)
      )
    }
  }

  // ✅ Remove vertex — O(V+E)
  removeVertex(vertex) {
    this.adjacencyList.delete(vertex)
    for (const [key, edges] of this.adjacencyList) {
      this.adjacencyList.set(
        key,
        edges.filter(e => e.node !== vertex)
      )
    }
  }

  // ✅ Get neighbors — O(1)
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || []
  }

  // ✅ Has vertex — O(1)
  hasVertex(vertex) {
    return this.adjacencyList.has(vertex)
  }

  // ✅ Print graph — O(V+E)
  print() {
    for (const [vertex, edges] of this.adjacencyList) {
      const connections = edges.map(e =>
        e.weight !== 1 ? \`\${e.node}(\${e.weight})\` : e.node
      ).join(', ')
      console.log(\`\${vertex} → [\${connections}]\`)
    }
  }
}

// ══════════════════════════════════════════
// USAGE EXAMPLE
// ══════════════════════════════════════════
const graph = new Graph()

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'D')
graph.addEdge('D', 'E')

graph.print()
// A → [B, C]
// B → [A, D]
// C → [A, D]
// D → [B, C, E]
// E → [D]


// ══════════════════════════════════════════
// SEARCHING — BFS — O(V+E)
// "Level by level explore pannuvom"
// ══════════════════════════════════════════
function bfs(graph, start) {
  const visited = new Set()
  const queue   = [start]
  const result  = []

  visited.add(start)

  while (queue.length) {
    const vertex    = queue.shift()       // Dequeue front
    result.push(vertex)

    for (const { node } of graph.getNeighbors(vertex)) {
      if (!visited.has(node)) {
        visited.add(node)
        queue.push(node)                  // Enqueue neighbors ✅
      }
    }
  }
  return result
}

console.log(bfs(graph, 'A'))  // ['A','B','C','D','E'] ✅


// ══════════════════════════════════════════
// SEARCHING — DFS — O(V+E)
// "Deep-a explore pannuvom"
// ══════════════════════════════════════════

// DFS Recursive
function dfsRecursive(graph, start, visited = new Set(), result = []) {
  visited.add(start)
  result.push(start)

  for (const { node } of graph.getNeighbors(start)) {
    if (!visited.has(node)) {
      dfsRecursive(graph, node, visited, result)
    }
  }
  return result
}

// DFS Iterative (using Stack)
function dfsIterative(graph, start) {
  const visited = new Set()
  const stack   = [start]
  const result  = []

  while (stack.length) {
    const vertex = stack.pop()   // Stack — pop from top

    if (!visited.has(vertex)) {
      visited.add(vertex)
      result.push(vertex)

      for (const { node } of graph.getNeighbors(vertex)) {
        if (!visited.has(node)) {
          stack.push(node)        // Push neighbors ✅
        }
      }
    }
  }
  return result
}

console.log(dfsRecursive(graph, 'A'))  // ['A','B','D','C','E'] ✅
console.log(dfsIterative(graph, 'A'))  // ['A','C','D','E','B'] ✅


// ══════════════════════════════════════════
// REAL WORLD — Shortest Path (BFS)
// Unweighted graph-la BFS shortest path guarantee pannudhu
// ══════════════════════════════════════════
function shortestPath(graph, start, end) {
  if (start === end) return [start]

  const visited = new Set()
  const queue   = [[start, [start]]]   // [node, path]

  visited.add(start)

  while (queue.length) {
    const [vertex, path] = queue.shift()

    for (const { node } of graph.getNeighbors(vertex)) {
      if (!visited.has(node)) {
        const newPath = [...path, node]

        if (node === end) {
          return newPath             // Shortest path found! ✅
        }

        visited.add(node)
        queue.push([node, newPath])
      }
    }
  }
  return null  // No path
}

console.log(shortestPath(graph, 'A', 'E'))
// ['A', 'B', 'D', 'E'] or ['A', 'C', 'D', 'E'] ✅


// ══════════════════════════════════════════
// REAL WORLD — Weighted Graph + Dijkstra
// "Shortest path with weights"
// ══════════════════════════════════════════
const weightedGraph = new Graph()
weightedGraph.addEdge('Chennai', 'Bangalore', 350)
weightedGraph.addEdge('Chennai', 'Hyderabad', 627)
weightedGraph.addEdge('Bangalore', 'Mumbai',  984)
weightedGraph.addEdge('Hyderabad', 'Mumbai',  711)
weightedGraph.addEdge('Mumbai',    'Delhi',   1415)

function dijkstra(graph, start) {
  const distances = {}
  const visited   = new Set()
  const previous  = {}

  // Initialize distances
  for (const vertex of graph.adjacencyList.keys()) {
    distances[vertex] = vertex === start ? 0 : Infinity
  }

  while (true) {
    // Unvisited vertex with minimum distance find pannuvom
    let current = null
    for (const vertex of graph.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        if (current === null || distances[vertex] < distances[current]) {
          current = vertex
        }
      }
    }

    if (current === null || distances[current] === Infinity) break
    visited.add(current)

    for (const { node, weight } of graph.getNeighbors(current)) {
      const newDist = distances[current] + weight
      if (newDist < distances[node]) {
        distances[node]  = newDist
        previous[node]   = current
      }
    }
  }

  return { distances, previous }
}

const { distances } = dijkstra(weightedGraph, 'Chennai')
console.log(distances)
// { Chennai: 0, Bangalore: 350, Hyderabad: 627,
//   Mumbai: 1334, Delhi: 2749 } ✅


// 📌 Time Complexity Summary:
// Add Vertex    → O(1) ✅
// Add Edge      → O(1) ✅
// Remove Edge   → O(E)
// Remove Vertex → O(V+E)
// BFS           → O(V+E) ✅
// DFS           → O(V+E) ✅
// Dijkstra      → O(V²) simple / O(E log V) with priority queue


// Space Complexity:
// Adjacency List   → O(V+E) ✅ (preferred)
// Adjacency Matrix → O(V²) ⚠️
// BFS/DFS          → O(V) visited set + queue/stack`
  },

  {
    id: 'ds-linear-search',
    title: 'Linear Search',
    category: 'DSA',
    slangDefinition: `Linear Search na array-la oru-oru element check pannuvom — target kedaikum varaikkum left to right traverse pannuvom. Unsorted array-la use pannalaam — sorting vendam, any data type-la work aagudhu. Pros: Simple implement panna, sorted vendam, any type work aagudhu. Cons: O(n) — large array-la slow, every element check pannanum. Use pannuvom: Small datasets, unsorted arrays, one-time search, object array-la specific field search panna.`,
    interviewDefinition: `Linear Search is a sequential searching algorithm that checks each element one by one from start to end until the target is found or the array ends. Time complexity is O(n) worst/average case, O(1) best case. Space complexity is O(1). Works on sorted and unsorted arrays. Pros: Simple to implement, no preprocessing needed, works with any data type including objects. Cons: Slow for large datasets, inefficient compared to Binary Search O(log n) for sorted arrays. Used when array is unsorted, dataset is small, or searching by object property.`,
    example: `// ══════════════════════════════════════════
// BASIC LINEAR SEARCH
// ══════════════════════════════════════════

// Array: [10, 45, 23, 7, 89, 34]
// Target: 7
//
// Step 1: 10 === 7? No  → move
// Step 2: 45 === 7? No  → move
// Step 3: 23 === 7? No  → move
// Step 4: 7  === 7? YES → return index 3 ✅

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i          // Found — index return pannuvom ✅
    }
  }
  return -1             // Not found
}

const numbers = [10, 45, 23, 7, 89, 34]

console.log(linearSearch(numbers, 7))    // 3  ✅
console.log(linearSearch(numbers, 10))   // 0  ✅ best case  — O(1)
console.log(linearSearch(numbers, 34))   // 5  ✅ worst case — O(n) last element
console.log(linearSearch(numbers, 99))   // -1 not found


// ══════════════════════════════════════════
// STRING ARRAY SEARCH
// ══════════════════════════════════════════

const names = ['Anjali', 'Rohit', 'Sara', 'Kathir', 'Priya']

function searchByName(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === name.toLowerCase()) {
      return i             // Case-insensitive search ✅
    }
  }
  return -1
}

console.log(searchByName(names, 'Sara'))    // 2 ✅
console.log(searchByName(names, 'ROHIT'))   // 1 ✅
console.log(searchByName(names, 'Kumar'))   // -1


// ══════════════════════════════════════════
// OBJECT ARRAY SEARCH — Most Common Real Use
// ══════════════════════════════════════════

const patients = [
  { id: 'P001', name: 'Anjali', ward: 'ICU',     age: 26 },
  { id: 'P002', name: 'Rohit',  ward: 'General', age: 30 },
  { id: 'P003', name: 'Sara',   ward: 'ICU',     age: 28 },
  { id: 'P004', name: 'Kathir', ward: 'General', age: 35 },
  { id: 'P005', name: 'Priya',  ward: 'ICU',     age: 22 },
]

// ✅ Find first match by ID
function findPatientById(patients, id) {
  for (let i = 0; i < patients.length; i++) {
    if (patients[i].id === id) {
      return patients[i]       // Full object return pannuvom ✅
    }
  }
  return null
}

console.log(findPatientById(patients, 'P003'))
// { id: 'P003', name: 'Sara', ward: 'ICU', age: 28 } ✅

console.log(findPatientById(patients, 'P999'))
// null


// ✅ Find all matching — not just first
function findAllByWard(patients, ward) {
  const result = []
  for (const patient of patients) {
    if (patient.ward === ward) {
      result.push(patient)       // All matches collect pannuvom ✅
    }
  }
  return result
}

console.log(findAllByWard(patients, 'ICU'))
// [Anjali, Sara, Priya] — 3 patients ✅


// ══════════════════════════════════════════
// VARIATIONS
// ══════════════════════════════════════════

// ✅ Find last occurrence
function findLast(arr, target) {
  let lastIndex = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      lastIndex = i              // Keep updating — last one wins ✅
    }
  }
  return lastIndex
}

const dupes = [1, 3, 5, 3, 7, 3, 9]
console.log(findLast(dupes, 3))  // 5 ✅ (last occurrence index)


// ✅ Find all occurrences with index
function findAllOccurrences(arr, target) {
  const indices = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i)            // All indices collect pannuvom ✅
    }
  }
  return indices
}

console.log(findAllOccurrences(dupes, 3))  // [1, 3, 5] ✅


// ✅ Search with condition (predicate)
function findWhere(arr, condition) {
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      return arr[i]              // First match return pannuvom ✅
    }
  }
  return null
}

console.log(findWhere(patients, p => p.age > 28))
// { id: 'P002', name: 'Rohit', age: 30 } ✅

console.log(findWhere(patients, p => p.ward === 'ICU' && p.age < 25))
// { id: 'P005', name: 'Priya', ward: 'ICU', age: 22 } ✅


// ✅ Count occurrences
function countOccurrences(arr, target) {
  let count = 0
  for (const item of arr) {
    if (item === target) count++
  }
  return count
}

console.log(countOccurrences(dupes, 3))  // 3 ✅


// ══════════════════════════════════════════
// PROS AND CONS
// ══════════════════════════════════════════

// ✅ PROS:
// 1. Simple implement panna — few lines of code
// 2. Unsorted array-la work aagudhu — sorting vendam
// 3. Any data type — numbers, strings, objects
// 4. Extra memory vendam — O(1) space
// 5. Small datasets-la perfectly fine
// 6. Object property-based search panna easy
// 7. Multiple matches find panna simple

// ❌ CONS:
// 1. O(n) time — large arrays-la slow
// 2. 1 million elements-la 1 million checks pannum ❌
// 3. Sorted array-la binary search much better O(log n)
// 4. Repeated searches-la inefficient — no optimization


// ══════════════════════════════════════════
// WHERE IT IS USED
// ══════════════════════════════════════════

// ✅ 1. Small datasets (< 100 elements)
const config = ['debug', 'verbose', 'production']
console.log(config.indexOf('verbose'))     // 1 ✅ — linear search internally

// ✅ 2. Unsorted data — no choice
const recentSearches = ['angular', 'rxjs', 'typescript', 'javascript']
console.log(recentSearches.includes('rxjs'))  // true ✅

// ✅ 3. Object array — search by property
const concepts = [
  { id: 'closures',   category: 'JavaScript' },
  { id: 'event-loop', category: 'JavaScript' },
  { id: 'testbed',    category: 'Angular'    },
]

const found = concepts.find(c => c.id === 'testbed')
console.log(found) // { id: 'testbed', category: 'Angular' } ✅
// Array.find() uses linear search internally ✅

// ✅ 4. One-time search — not repeated
function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true   // Linear search nested ✅
    }
  }
  return false
}

// ✅ 5. Angular — find item in list
const todoList = [
  { id: 1, task: 'Learn RxJS',    done: false },
  { id: 2, task: 'Write Tests',   done: true  },
  { id: 3, task: 'Build Feature', done: false },
]

function findTodo(id) {
  return todoList.find(todo => todo.id === id)  // Linear search ✅
}

console.log(findTodo(2))
// { id: 2, task: 'Write Tests', done: true } ✅


// ✅ 6. Built-in JS methods — all use linear search
const arr = [5, 3, 8, 1, 9]
arr.indexOf(8)           // Linear search ✅
arr.includes(8)          // Linear search ✅
arr.find(x => x > 7)     // Linear search ✅
arr.findIndex(x => x > 7)// Linear search ✅
arr.filter(x => x > 5)   // Linear search ✅
arr.some(x => x > 8)     // Linear search ✅
arr.every(x => x > 0)    // Linear search ✅


// ══════════════════════════════════════════
// LINEAR vs BINARY — Quick Comparison
// ══════════════════════════════════════════

// Linear Search:
// Sorted needed?    → No  ✅
// Time complexity   → O(n)
// Space complexity  → O(1)
// Best case         → O(1) — first element
// Worst case        → O(n) — last element / not found
// Works on          → Any array, any type

// Binary Search:
// Sorted needed?    → Yes ❌ (must sort first)
// Time complexity   → O(log n) 🚀
// Space complexity  → O(1) iterative
// Best case         → O(1) — middle element
// Worst case        → O(log n)
// Works on          → Sorted arrays only

// n = 1000 elements:
// Linear  → max 1000 comparisons ⚠️
// Binary  → max 10 comparisons   🚀 (log₂1000 ≈ 10)

// n = 1,000,000 elements:
// Linear  → max 1,000,000 comparisons ❌
// Binary  → max 20 comparisons        🚀


// 📌 Summary:
// Algorithm    → Check one by one, left to right
// Time         → O(n) worst/avg, O(1) best
// Space        → O(1)
// Sorted need  → No ✅
// Best for     → Small data, unsorted, object search
// Avoid when   → Large sorted data (use binary search)
// JS built-ins → find, filter, includes — all use linear search internally`
  },

  {
    id: 'ds-binary-search',
    title: 'Binary Search',
    category: 'DSA',
    slangDefinition: `Binary Search na sorted array-la search panna use pannuvom — every step-la search space half aagudhu. Array middle-a check pannuvom, target middle-a vida chinna-na left half search pannuvom, perusa-na right half search pannuvom. 1000 elements-la max 10 steps mattum — romba fast. Pros: O(log n) — very fast, large datasets-ku perfect. Cons: Sorted array mandatory — unsorted-la work aagaathu, sorting cost O(n log n) extra. Use pannuvom: Large sorted datasets, database indexing, dictionary search, version control bisect.`,
    interviewDefinition: `Binary Search is a divide-and-conquer searching algorithm that works on sorted arrays. It repeatedly divides the search space in half by comparing the target with the middle element. If target equals middle — found. If target is less — search left half. If target is greater — search right half. Time complexity is O(log n) — each iteration eliminates half the remaining elements. Space complexity is O(1) iterative, O(log n) recursive (call stack). Prerequisite is a sorted array. Used in database indexing, dictionary lookups, finding boundaries (first/last occurrence), and any ordered collection search.`,
    example: `// ══════════════════════════════════════════
  // BASIC BINARY SEARCH
  // ══════════════════════════════════════════

  // Sorted Array: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  // Target: 40
  //
  // Step 1: left=0, right=9, mid=4 → arr[4]=50 → 40 < 50 → go left
  // Step 2: left=0, right=3, mid=1 → arr[1]=20 → 40 > 20 → go right
  // Step 3: left=2, right=3, mid=2 → arr[2]=30 → 40 > 30 → go right
  // Step 4: left=3, right=3, mid=3 → arr[3]=40 → FOUND ✅ — 4 steps only!
  // Linear would take 4 steps too here, but for 1M elements — binary wins 🚀


  // ✅ Version 1 — Iterative (O(1) space — preferred)
  function binarySearch(arr, target) {
    let left  = 0
    let right = arr.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (arr[mid] === target) {
        return mid              // Found ✅
      } else if (arr[mid] < target) {
        left = mid + 1          // Target right side-la irukku
      } else {
        right = mid - 1         // Target left side-la irukku
      }
    }
    return -1                   // Not found
  }

  const sorted = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  console.log(binarySearch(sorted, 40))   // 3  ✅
  console.log(binarySearch(sorted, 10))   // 0  ✅ (first element)
  console.log(binarySearch(sorted, 100))  // 9  ✅ (last element)
  console.log(binarySearch(sorted, 55))   // -1 (not found)


  // ✅ Version 2 — Recursive (O(log n) space — call stack)
  function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1     // Base case — not found

    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) return mid           // Found ✅
    if (arr[mid] < target)
      return binarySearchRecursive(arr, target, mid + 1, right)  // Right half
    return binarySearchRecursive(arr, target, left, mid - 1)     // Left half
  }

  console.log(binarySearchRecursive(sorted, 70))  // 6 ✅
  console.log(binarySearchRecursive(sorted, 45))  // -1


  // ══════════════════════════════════════════
  // VARIATIONS — Very Important for Interviews
  // ══════════════════════════════════════════

  // ✅ Find FIRST occurrence (duplicates array)
  function findFirst(arr, target) {
    let left   = 0
    let right  = arr.length - 1
    let result = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (arr[mid] === target) {
        result = mid          // Found — but keep searching LEFT ✅
        right  = mid - 1      // Don't stop — check if earlier occurrence
      } else if (arr[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return result
  }

  const dupes = [10, 20, 20, 20, 30, 40, 40, 50]
  console.log(findFirst(dupes, 20))  // 1 ✅ (first 20 at index 1)
  console.log(findFirst(dupes, 40))  // 5 ✅ (first 40 at index 5)


  // ✅ Find LAST occurrence
  function findLast(arr, target) {
    let left   = 0
    let right  = arr.length - 1
    let result = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (arr[mid] === target) {
        result = mid          // Found — but keep searching RIGHT ✅
        left   = mid + 1      // Don't stop — check if later occurrence
      } else if (arr[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return result
  }

  console.log(findLast(dupes, 20))  // 3 ✅ (last 20 at index 3)
  console.log(findLast(dupes, 40))  // 6 ✅ (last 40 at index 6)


  // ✅ Count occurrences using binary search
  function countOccurrences(arr, target) {
    const first = findFirst(arr, target)
    if (first === -1) return 0

    const last = findLast(arr, target)
    return last - first + 1            // Count = last - first + 1 ✅
  }

  console.log(countOccurrences(dupes, 20))  // 3 ✅ (indices 1,2,3)
  console.log(countOccurrences(dupes, 40))  // 2 ✅ (indices 5,6)
  console.log(countOccurrences(dupes, 99))  // 0


  // ✅ Find closest element
  function findClosest(arr, target) {
    if (target <= arr[0])               return arr[0]
    if (target >= arr[arr.length - 1])  return arr[arr.length - 1]

    let left  = 0
    let right = arr.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (arr[mid] === target) return arr[mid]   // Exact match ✅

      if (arr[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    // left and right crossed — closest between arr[right] and arr[left]
    const diffLeft  = Math.abs(arr[left]  - target)
    const diffRight = Math.abs(arr[right] - target)
    return diffLeft < diffRight ? arr[left] : arr[right]
  }

  console.log(findClosest(sorted, 45))  // 40 or 50 ✅
  console.log(findClosest(sorted, 43))  // 40 ✅
  console.log(findClosest(sorted, 47))  // 50 ✅


  // ✅ Find insert position (sorted insert)
  function findInsertPosition(arr, target) {
    let left  = 0
    let right = arr.length

    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] < target) left  = mid + 1
      else                   right = mid
    }
    return left                    // Position where target should be inserted ✅
  }

  console.log(findInsertPosition(sorted, 45))  // 4 ✅ (between 40 and 50)
  console.log(findInsertPosition(sorted, 5))   // 0 ✅ (before 10)
  console.log(findInsertPosition(sorted, 105)) // 10 ✅ (after 100)


  // ══════════════════════════════════════════
  // OBJECT ARRAY — Binary Search by property
  // (Array must be sorted by that property)
  // ══════════════════════════════════════════
  const patients = [
    { id: 'P001', name: 'Anjali', age: 22 },
    { id: 'P002', name: 'Kathir', age: 26 },
    { id: 'P003', name: 'Priya',  age: 28 },
    { id: 'P004', name: 'Rohit',  age: 30 },
    { id: 'P005', name: 'Sara',   age: 35 },
  ]
  // Sorted by age ✅

  function binarySearchByAge(patients, targetAge) {
    let left  = 0
    let right = patients.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (patients[mid].age === targetAge) {
        return patients[mid]               // Found ✅
      } else if (patients[mid].age < targetAge) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return null
  }

  console.log(binarySearchByAge(patients, 28))
  // { id: 'P003', name: 'Priya', age: 28 } ✅

  console.log(binarySearchByAge(patients, 25))
  // null


  // ══════════════════════════════════════════
  // PROS AND CONS
  // ══════════════════════════════════════════

  // ✅ PROS:
  // 1. O(log n) — extremely fast for large data
  // 2. 1 billion elements → only 30 steps! 🚀
  // 3. Predictable performance — always O(log n)
  // 4. Works great with large sorted datasets
  // 5. Foundation for many advanced algorithms

  // ❌ CONS:
  // 1. Sorted array mandatory — unsorted-la fail ❌
  // 2. Sorting cost extra — O(n log n) one time
  // 3. Array random access needed — linked list-la work aagaathu
  // 4. Small datasets-la linear search-a vida overhead


  // ══════════════════════════════════════════
  // WHERE IT IS USED
  // ══════════════════════════════════════════

  // ✅ 1. Database indexing — sorted indexes fast lookup
  // ✅ 2. Dictionary / phonebook search
  // ✅ 3. Git bisect — find which commit introduced a bug
  // ✅ 4. TypeScript compiler — symbol table lookup
  // ✅ 5. Search features with sorted data
  // ✅ 6. Finding boundaries — first/last occurrence
  // ✅ 7. Square root, power calculations

  // ✅ Real World — Version finder (Git bisect style)
  function findBuggyVersion(versions, isBuggy) {
    let left  = 0
    let right = versions.length - 1
    let result = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (isBuggy(versions[mid])) {
        result = mid         // Buggy version found — but check earlier ✅
        right  = mid - 1
      } else {
        left = mid + 1
      }
    }
    return result !== -1 ? versions[result] : null
  }

  const versions = ['v1.0', 'v1.1', 'v1.2', 'v1.3', 'v1.4', 'v1.5']
  const isBuggy  = (v) => v >= 'v1.3'  // Bug introduced at v1.3

  console.log(findBuggyVersion(versions, isBuggy))  // 'v1.3' ✅


  // 📌 Summary:
  // Algorithm    → Divide and conquer, halve search space each step
  // Time         → O(log n) all cases (best O(1) if mid = target)
  // Space        → O(1) iterative, O(log n) recursive
  // Sorted need  → YES — mandatory ❌
  // Best for     → Large sorted data, repeated searches
  // Avoid when   → Unsorted data, small datasets, linked lists
  // n=1B elements → only 30 steps 🚀`
  },

  {
    id: 'ds-exponential-search',
    title: 'Exponential Search',
    category: 'DSA',
    slangDefinition: `Exponential Search na rendu phase-la work pannudhu. Phase 1: Target irukka range find pannuvom — index 1, 2, 4, 8, 16, 32 maari exponentially jump pannuvom, arr[i] >= target aana stop pannuvom. Phase 2: Adha range-la binary search pannuvom. Unbounded/infinite array-la romba useful — full array size theriyathu pothu. Pros: O(log n), small arrays-la binary search-a vida fast — early elements-la target irundha quick find pannuvom. Cons: Sorted mandatory, binary search-a vida complex, bounded arrays-la direct binary search better. Use pannuvom: Unbounded arrays, streaming data, target array start-la irukka chance perusa pothu.`,
    interviewDefinition: `Exponential Search combines exponential range finding with Binary Search. Phase 1 finds a range where the target might exist by starting at index 1 and doubling — 1, 2, 4, 8, 16 — until arr[i] >= target or end of array. Phase 2 runs Binary Search in that range [i/2, i]. Time complexity is O(log n) — O(log i) where i is the position of target. Space complexity is O(1) iterative. It outperforms Binary Search when the target is near the beginning of the array. Ideal for unbounded or infinite sorted arrays where size is unknown. Also called Doubling Search or Galloping Search.`,
    example: `// ══════════════════════════════════════════
  // HOW IT WORKS — Step by Step
  // ══════════════════════════════════════════

  // Sorted Array: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  // Target: 40
  //
  // Phase 1 — Find Range (Exponential jumps):
  // index = 1 → arr[1] = 20 < 40 → double
  // index = 2 → arr[2] = 30 < 40 → double
  // index = 4 → arr[4] = 50 >= 40 → STOP! Range found: [2, 4]
  //
  // Phase 2 — Binary Search in range [2, 4]:
  // left=2, right=4, mid=3 → arr[3]=40 === 40 → FOUND ✅


  // ✅ Binary Search helper (used inside exponential search)
  function binarySearchInRange(arr, target, left, right) {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (arr[mid] === target)      return mid
      else if (arr[mid] < target)   left  = mid + 1
      else                          right = mid - 1
    }
    return -1
  }


  // ✅ Exponential Search
  function exponentialSearch(arr, target) {
    const n = arr.length

    if (n === 0) return -1

    // ✅ First element check — O(1)
    if (arr[0] === target) return 0

    // ✅ Phase 1 — Find range exponentially
    let i = 1
    while (i < n && arr[i] <= target) {
      i = i * 2    // Exponentially double — 1, 2, 4, 8, 16... ✅
    }

    // ✅ Phase 2 — Binary search in found range
    const left  = Math.floor(i / 2)   // Previous position
    const right = Math.min(i, n - 1)  // Don't exceed array bounds

    return binarySearchInRange(arr, target, left, right)
  }

  const sorted = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  console.log(exponentialSearch(sorted, 40))   // 3  ✅
  console.log(exponentialSearch(sorted, 10))   // 0  ✅ (first element — O(1))
  console.log(exponentialSearch(sorted, 100))  // 9  ✅ (last element)
  console.log(exponentialSearch(sorted, 55))   // -1 (not found)


  // ══════════════════════════════════════════
  // STEP BY STEP TRACE — Visualization
  // ══════════════════════════════════════════
  function exponentialSearchVerbose(arr, target) {
    const n = arr.length
    if (n === 0) return -1

    if (arr[0] === target) {
      console.log('Found at index 0 — O(1) ✅')
      return 0
    }

    // Phase 1
    let i = 1
    console.log('\nPhase 1 — Exponential Range Finding:')
    while (i < n && arr[i] <= target) {
      console.log(\`  index=\${i}, arr[\${i}]=\${arr[i]} <= \${target} → double to \${i*2}\`)
      i = i * 2
    }
    console.log(\`  Stopped at index=\${i} (arr[\${Math.min(i,n-1)}]=\${arr[Math.min(i,n-1)]} >= \${target})\`)

    // Phase 2
    const left  = Math.floor(i / 2)
    const right = Math.min(i, n - 1)
    console.log(\`\nPhase 2 — Binary Search in range [\${left}, \${right}]:\`)

    return binarySearchInRange(arr, target, left, right)
  }

  exponentialSearchVerbose(sorted, 40)
  // Phase 1 — Exponential Range Finding:
  //   index=1, arr[1]=20 <= 40 → double to 2
  //   index=2, arr[2]=30 <= 40 → double to 4
  //   Stopped at index=4 (arr[4]=50 >= 40)
  // Phase 2 — Binary Search in range [2, 4]


  // ══════════════════════════════════════════
  // OBJECT ARRAY — Exponential Search by property
  // ══════════════════════════════════════════
  const patients = [
    { id: 'P001', name: 'Anjali', score: 10 },
    { id: 'P002', name: 'Kathir', score: 25 },
    { id: 'P003', name: 'Priya',  score: 40 },
    { id: 'P004', name: 'Rohit',  score: 65 },
    { id: 'P005', name: 'Sara',   score: 80 },
    { id: 'P006', name: 'Kumar',  score: 90 },
  ]

  function exponentialSearchByScore(patients, targetScore) {
    const n = patients.length
    if (n === 0) return null

    if (patients[0].score === targetScore) return patients[0]

    // Phase 1 — Find range
    let i = 1
    while (i < n && patients[i].score <= targetScore) {
      i = i * 2
    }

    // Phase 2 — Binary search in range
    let left  = Math.floor(i / 2)
    let right = Math.min(i, n - 1)

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (patients[mid].score === targetScore)      return patients[mid]
      else if (patients[mid].score < targetScore)   left  = mid + 1
      else                                          right = mid - 1
    }
    return null
  }

  console.log(exponentialSearchByScore(patients, 40))
  // { id: 'P003', name: 'Priya', score: 40 } ✅

  console.log(exponentialSearchByScore(patients, 99))
  // null


  // ══════════════════════════════════════════
  // UNBOUNDED ARRAY — Where Exponential Shines
  // ══════════════════════════════════════════

  // ✅ Unbounded search — size theriyathu pothu
  function unboundedSearch(getElement, target) {
    // Size theriyathu — exponential-a range find pannuvom
    let i = 1

    // Range find pannuvom — out of bounds check panna try/catch
    while (true) {
      try {
        const val = getElement(i)
        if (val === undefined || val > target) break
        if (val === target) return i    // Lucky find ✅
        i = i * 2
      } catch {
        break
      }
    }

    // Binary search in [i/2, i]
    let left  = Math.floor(i / 2)
    let right = i

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const val = getElement(mid)

      if (val === undefined)     { right = mid - 1; continue }
      if (val === target)        return mid   // Found ✅
      if (val < target)          left  = mid + 1
      else                       right = mid - 1
    }
    return -1
  }

  // Simulate infinite sorted array
  const infiniteArray = (i) => i * 10   // 0, 10, 20, 30, 40...

  console.log(unboundedSearch(infiniteArray, 150))  // 15 ✅
  console.log(unboundedSearch(infiniteArray, 300))  // 30 ✅


  // ══════════════════════════════════════════
  // PROS AND CONS
  // ══════════════════════════════════════════

  // ✅ PROS:
  // 1. O(log n) — same as binary search
  // 2. Target array start-la irundha binary-a vida FASTER ✅
  //    (Only searches relevant range, not full array)
  // 3. Unbounded/infinite array-la work aagudhu — binary search can't! ✅
  // 4. Size unknown arrays-la perfect
  // 5. Streaming data search-ku useful

  // ❌ CONS:
  // 1. Sorted array mandatory — unsorted-la fail ❌
  // 2. Binary search-a vida implementation complex
  // 3. Bounded sorted arrays-la direct binary search simpler
  // 4. Target array end-la irundha binary search-a vida slower


  // ══════════════════════════════════════════
  // WHERE IT IS USED
  // ══════════════════════════════════════════

  // ✅ 1. Unbounded/infinite sorted arrays
  // ✅ 2. Streaming sorted data — size unknown pothu
  // ✅ 3. Target likely near beginning of array
  // ✅ 4. External storage — disk-based sorted data
  // ✅ 5. Real-time sorted log search
  // ✅ 6. Database cursor-based search (unknown total count)


  // ══════════════════════════════════════════
  // COMPARISON — All Three Search Algorithms
  // ══════════════════════════════════════════

  // Feature           Linear      Binary       Exponential
  // Time complexity   O(n)        O(log n)     O(log n)
  // Space complexity  O(1)        O(1)         O(1)
  // Sorted needed     No ✅       Yes ❌       Yes ❌
  // Unsorted works    Yes ✅      No ❌        No ❌
  // Unbounded array   Yes         No ❌        Yes ✅
  // Small dataset     Good ✅     Overhead ⚠️  Overhead ⚠️
  // Large dataset     Slow ❌     Fast ✅      Fast ✅
  // Target at start   O(1) lucky  O(log n)     O(log i) faster ✅
  // Implementation    Simple ✅   Medium       Complex ❌

  // n = 1,000,000:
  // Linear      → 1,000,000 steps worst ❌
  // Binary      → 20 steps           🚀
  // Exponential → ~20 steps          🚀 (faster if target near start)


  // 📌 Summary:
  // Algorithm    → Phase 1: Exponential range find (1,2,4,8,16...)
  //                Phase 2: Binary search in that range
  // Time         → O(log n) / O(log i) where i = target position
  // Space        → O(1)
  // Sorted need  → YES — mandatory
  // Best for     → Unbounded arrays, target near beginning
  // Avoid when   → Unsorted data, small arrays, bounded arrays
  //                (use binary search for bounded sorted arrays)`
  },

  {
    id: 'ds-bubble-sort',
    title: 'Bubble Sort',
    category: 'DSA',
    slangDefinition: `Bubble Sort na adjacent elements compare pannuvom — value perusu-na swap pannuvom. Every pass-la largest element end-ku "bubble up" aagudhu — adhanala bubble sort. Simple-a solla numna: Heavy bubble water-la top-ku varadhu maari — large elements array end-ku move aagudhu. Pros: Simple implement panna, small arrays-ku okay, already sorted array-la O(n) — best case. Cons: O(n²) worst case — large arrays-la very slow, practical use-la almost never used. Used for educational purpose, very small datasets, nearly sorted data.`,
    interviewDefinition: `Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order. Each pass bubbles the largest unsorted element to its correct position at the end. Time complexity is O(n²) worst/average case, O(n) best case with optimization flag for already sorted arrays. Space complexity is O(1) — in-place sorting. It is stable — equal elements maintain their relative order. Rarely used in production due to poor performance but important conceptually.`,
    example: `// ══════════════════════════════════════════
// HOW IT WORKS
// ══════════════════════════════════════════
// Array: [64, 34, 25, 12, 22, 11, 90]
//
// Pass 1: [34,25,12,22,11,64,90] ← 90 bubbled to end ✅
// Pass 2: [25,12,22,11,34,64,90] ← 64 in place ✅
// Pass 3: [12,22,11,25,34,64,90] ← 34 in place ✅
// ...continues until sorted


// ✅ Basic Bubble Sort
function bubbleSort(arr) {
  const n    = arr.length
  const nums = [...arr]          // Original array mutate pannuvom illa

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {  // n-i-1 — sorted part skip ✅
      if (nums[j] > nums[j + 1]) {
        // Swap adjacent elements
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]))
// [11, 12, 22, 25, 34, 64, 90] ✅


// ✅ Optimized Bubble Sort — Early exit if already sorted
function bubbleSortOptimized(arr) {
  const n    = arr.length
  const nums = [...arr]

  for (let i = 0; i < n - 1; i++) {
    let swapped = false              // Swap aachaa nu track pannuvom

    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        swapped = true
      }
    }

    if (!swapped) break              // No swap = already sorted — O(n) ✅
  }
  return nums
}

// Already sorted — O(n) best case
console.log(bubbleSortOptimized([1, 2, 3, 4, 5]))  // [1,2,3,4,5] — 1 pass ✅


// ✅ Verbose — show each pass
function bubbleSortVerbose(arr) {
  const nums = [...arr]
  const n    = nums.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        swapped = true
      }
    }
    console.log(\`Pass \${i + 1}:\`, [...nums])
    if (!swapped) break
  }
  return nums
}

bubbleSortVerbose([64, 34, 25, 12])
// Pass 1: [34, 25, 12, 64]
// Pass 2: [25, 12, 34, 64]
// Pass 3: [12, 25, 34, 64]


// ✅ Sort Objects by property
function bubbleSortByAge(patients) {
  const arr = [...patients]
  const n   = arr.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].age > arr[j + 1].age) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const patients = [
  { name: 'Anjali', age: 26 },
  { name: 'Rohit',  age: 30 },
  { name: 'Sara',   age: 22 },
  { name: 'Kathir', age: 28 }
]
console.log(bubbleSortByAge(patients).map(p => p.name))
// ['Sara', 'Anjali', 'Kathir', 'Rohit'] ✅


// ══════════════════════════════════════════
// PROS AND CONS
// ══════════════════════════════════════════
// ✅ PROS:
// Simple implement panna
// In-place — O(1) space
// Stable sort — equal elements order maintain pannudhu
// Already sorted-la O(n) — best case with optimization

// ❌ CONS:
// O(n²) worst/average — large data-la extremely slow
// n=10,000 → 100 million operations 😱
// Production-la never use pannuvom


// 📌 Time Complexity:
// Best    → O(n)   (already sorted + optimization flag)
// Average → O(n²)
// Worst   → O(n²)
// Space   → O(1) in-place ✅
// Stable  → Yes ✅`
  },

  {
    id: 'ds-selection-sort',
    title: 'Selection Sort',
    category: 'DSA',
    slangDefinition: `Selection Sort na unsorted part-la minimum element find pannuvom — adha correct position-la place pannuvom. Every pass-la minimum element select panni front-ku move pannuvom — adhanala selection sort. Simple-a solla numna: Exam marks list-la minimum mark find panni first position-la vachhu, aparam remaining-la minimum find panni second position-la vachhu — sort panra maadiri. Pros: Simple, in-place O(1) space, swap count minimum — O(n) swaps only. Cons: O(n²) always — best case-um O(n²), already sorted-um same performance. Used on: Swap cost expensive pothu (memory write costly systems), small arrays.`,
    interviewDefinition: `Selection Sort divides the array into sorted and unsorted portions. In each pass, it finds the minimum element from the unsorted portion and swaps it with the first unsorted element. Unlike Bubble Sort, it performs at most O(n) swaps — making it useful when write operations are expensive. Time complexity is O(n²) in all cases — best, average, and worst. Space complexity is O(1). It is not stable — swapping may change relative order of equal elements. Simple to understand and implement but inefficient for large datasets.`,
    example: `// ══════════════════════════════════════════
// HOW IT WORKS
// ══════════════════════════════════════════
// Array: [64, 25, 12, 22, 11]
//
// Pass 1: min=11 (idx 4) → swap with idx 0 → [11, 25, 12, 22, 64]
// Pass 2: min=12 (idx 2) → swap with idx 1 → [11, 12, 25, 22, 64]
// Pass 3: min=22 (idx 3) → swap with idx 2 → [11, 12, 22, 25, 64]
// Pass 4: min=25 (idx 3) → swap with idx 3 → [11, 12, 22, 25, 64]
// Done ✅


// ✅ Selection Sort
function selectionSort(arr) {
  const nums = [...arr]
  const n    = nums.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i               // Assume current is minimum

    // Unsorted part-la minimum find pannuvom
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j               // New minimum found ✅
      }
    }

    // Minimum-a correct position-la place pannuvom
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]  // Swap ✅
    }
  }
  return nums
}

console.log(selectionSort([64, 25, 12, 22, 11]))
// [11, 12, 22, 25, 64] ✅

console.log(selectionSort([5, 3, 8, 1, 9, 2]))
// [1, 2, 3, 5, 8, 9] ✅


// ✅ Verbose — show each pass
function selectionSortVerbose(arr) {
  const nums = [...arr]
  const n    = nums.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) minIndex = j
    }

    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }

    console.log(\`Pass \${i + 1}: min=\${nums[i]} placed at idx \${i}\`, [...nums])
  }
  return nums
}

selectionSortVerbose([64, 25, 12, 22, 11])
// Pass 1: min=11 placed at idx 0 [11, 25, 12, 22, 64]
// Pass 2: min=12 placed at idx 1 [11, 12, 25, 22, 64]
// Pass 3: min=22 placed at idx 2 [11, 12, 22, 25, 64]
// Pass 4: min=25 placed at idx 3 [11, 12, 22, 25, 64]


// ✅ Sort objects by property
function selectionSortByScore(students) {
  const arr = [...students]
  const n   = arr.length

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i

    for (let j = i + 1; j < n; j++) {
      if (arr[j].score < arr[minIdx].score) minIdx = j
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
    }
  }
  return arr
}

const students = [
  { name: 'Anjali', score: 85 },
  { name: 'Rohit',  score: 92 },
  { name: 'Sara',   score: 78 },
  { name: 'Kathir', score: 95 }
]
console.log(selectionSortByScore(students).map(s => s.name))
// ['Sara', 'Anjali', 'Rohit', 'Kathir'] ✅


// ══════════════════════════════════════════
// PROS AND CONS
// ══════════════════════════════════════════
// ✅ PROS:
// Simple implement panna
// In-place — O(1) space
// Minimum swaps — O(n) swaps only (write operations minimize ✅)
// Small arrays-ku okay

// ❌ CONS:
// O(n²) ALL cases — best case-um O(n²) ❌
// Already sorted array-la-um same slow performance
// Not stable — equal elements order change aagalaam
// Large data-la impractical


// 📌 Time Complexity:
// Best    → O(n²) ❌ (no improvement even if sorted)
// Average → O(n²)
// Worst   → O(n²)
// Space   → O(1) in-place ✅
// Stable  → No ❌
// Swaps   → O(n) — minimum swaps ✅`
  },

  {
    id: 'ds-insertion-sort',
    title: 'Insertion Sort',
    category: 'DSA',
    slangDefinition: `Insertion Sort na playing cards sort panra maadiri — new card edutha correct position-la insert pannuvom. Left side always sorted, right side unsorted. Current element eduthu sorted part-la correct position find panni insert pannuvom. Pros: Nearly sorted array-la O(n) — excellent best case, online algorithm (new elements one by one add panna perfect), small arrays-la fast. Cons: O(n²) worst case — reverse sorted array-la very slow. Used on: Small arrays, nearly sorted data, real-time data insertion (streaming sorted data maintain panna), hybrid sort algorithms-la (TimSort uses insertion sort for small chunks).`,
    interviewDefinition: `Insertion Sort builds the sorted array one element at a time by inserting each element into its correct position in the already-sorted left portion. It is adaptive — O(n) for nearly sorted arrays. It is stable — equal elements maintain relative order. It is an online algorithm — can sort as elements arrive one by one. Time complexity O(n²) worst/average, O(n) best. Space O(1). Used in practice for small arrays (< 20 elements) and as the base case in hybrid algorithms like TimSort (Python/Java default sort) and IntroSort.`,
    example: `// ══════════════════════════════════════════
// HOW IT WORKS
// ══════════════════════════════════════════
// Array: [12, 11, 13, 5, 6]
//
// Pass 1: key=11 → compare with 12 → insert before 12 → [11,12,13,5,6]
// Pass 2: key=13 → 13>12 → no move → [11,12,13,5,6]
// Pass 3: key=5  → move 13,12,11 right → insert 5 → [5,11,12,13,6]
// Pass 4: key=6  → move 13,12,11 right → insert 6 → [5,6,11,12,13]
// Done ✅


// ✅ Insertion Sort
function insertionSort(arr) {
  const nums = [...arr]
  const n    = nums.length

  for (let i = 1; i < n; i++) {
    const key = nums[i]    // Current element — insert panna vendiyadhu
    let j     = i - 1

    // Sorted part-la key-a vida perusa elements-a right shift pannuvom
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j]   // Shift right ✅
      j--
    }

    nums[j + 1] = key          // Correct position-la insert pannuvom ✅
  }
  return nums
}

console.log(insertionSort([12, 11, 13, 5, 6]))
// [5, 6, 11, 12, 13] ✅

// Nearly sorted — almost O(n)
console.log(insertionSort([1, 2, 3, 4, 6, 5]))
// [1, 2, 3, 4, 5, 6] ✅ — very fast!


// ✅ Verbose — show each pass
function insertionSortVerbose(arr) {
  const nums = [...arr]
  const n    = nums.length

  for (let i = 1; i < n; i++) {
    const key = nums[i]
    let j     = i - 1

    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j]
      j--
    }

    nums[j + 1] = key
    console.log(\`Pass \${i}: key=\${key} inserted at idx \${j+1}\`, [...nums])
  }
  return nums
}

insertionSortVerbose([12, 11, 13, 5])
// Pass 1: key=11 inserted at idx 0 [11, 12, 13, 5]
// Pass 2: key=13 inserted at idx 2 [11, 12, 13, 5]
// Pass 3: key=5  inserted at idx 0 [5, 11, 12, 13]


// ✅ Online sorting — elements one by one arrive panna
function onlineInsertionSort() {
  const sorted = []

  return {
    insert(value) {
      let i = sorted.length - 1

      // Correct position find pannuvom
      while (i >= 0 && sorted[i] > value) {
        sorted[i + 1] = sorted[i]   // Shift right
        i--
      }
      sorted[i + 1] = value         // Insert ✅
      return [...sorted]
    },
    getSorted() { return sorted }
  }
}

const sorter = onlineInsertionSort()
console.log(sorter.insert(5))    // [5]
console.log(sorter.insert(2))    // [2, 5]
console.log(sorter.insert(8))    // [2, 5, 8]
console.log(sorter.insert(1))    // [1, 2, 5, 8] ✅ — real-time sorted!


// ✅ Sort objects by property
function insertionSortByName(items) {
  const arr = [...items]
  const n   = arr.length

  for (let i = 1; i < n; i++) {
    const key = arr[i]
    let j     = i - 1

    while (j >= 0 && arr[j].name > key.name) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}

const names = [
  { name: 'Rohit',  age: 30 },
  { name: 'Anjali', age: 26 },
  { name: 'Sara',   age: 28 },
  { name: 'Kathir', age: 35 }
]
console.log(insertionSortByName(names).map(p => p.name))
// ['Anjali', 'Kathir', 'Rohit', 'Sara'] ✅


// ══════════════════════════════════════════
// PROS AND CONS
// ══════════════════════════════════════════
// ✅ PROS:
// Nearly sorted-la O(n) — excellent ✅
// Online algorithm — real-time elements handle pannalaam ✅
// Stable sort ✅
// In-place O(1) space ✅
// Small arrays-la very fast (< 20 elements)
// TimSort-la (Python default) small chunks-ku use pannuvom

// ❌ CONS:
// O(n²) worst case — reverse sorted-la very slow
// Large datasets-la inefficient


// 📌 Time Complexity:
// Best    → O(n)   (nearly/already sorted) ✅
// Average → O(n²)
// Worst   → O(n²)  (reverse sorted)
// Space   → O(1) in-place ✅
// Stable  → Yes ✅
// Online  → Yes ✅`
  },

  {
    id: 'ds-merge-sort',
    title: 'Merge Sort',
    category: 'DSA',
    slangDefinition: `Merge Sort na divide and conquer — array-a half pannuvom, each half sort pannuvom, merge pannuvom. Recursively array-a single elements vara varaikkum split pannuvom — single element always sorted. Aparam sorted arrays-a merge panna compare panni sorted order-la combine pannuvom. Pros: Always O(n log n) — best worst average same, stable sort, large data-ku reliable. Cons: O(n) extra space — new arrays create pannuvom (in-place illa). Used on: Large datasets, stable sort vennum pothu, external sorting (disk-based), linked list sorting (no extra space needed!).`,
    interviewDefinition: `Merge Sort is a divide-and-conquer algorithm that recursively splits the array into halves until single elements remain, then merges them back in sorted order. Time complexity is O(n log n) in all cases — best, average, and worst. Space complexity is O(n) for the auxiliary array used during merging. It is stable — equal elements maintain relative order. Preferred over Quick Sort when stability is required or worst-case O(n log n) is needed. Used in Java's Arrays.sort() for objects, Python's TimSort, and external sorting of large files.`,
    example: `// ══════════════════════════════════════════
// HOW IT WORKS
// ══════════════════════════════════════════
// Array: [38, 27, 43, 3, 9, 82, 10]
//
// Split:
// [38,27,43,3] | [9,82,10]
// [38,27] [43,3] | [9,82] [10]
// [38][27] [43][3] | [9][82] [10]
//
// Merge:
// [27,38] [3,43] | [9,82] [10]
// [3,27,38,43]   | [9,10,82]
// [3,9,10,27,38,43,82] ✅


// ✅ Merge helper — two sorted arrays merge pannuvom
function merge(left, right) {
  const result = []
  let i        = 0
  let j        = 0

  // Both arrays compare panni smaller element result-la push pannuvom
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {   // <= for stability ✅
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  // Remaining elements add pannuvom
  while (i < left.length)  result.push(left[i++])
  while (j < right.length) result.push(right[j++])

  return result
}

// ✅ Merge Sort — Recursive
function mergeSort(arr) {
  if (arr.length <= 1) return arr     // Base case — single element sorted ✅

  const mid   = Math.floor(arr.length / 2)
  const left  = mergeSort(arr.slice(0, mid))   // Left half sort
  const right = mergeSort(arr.slice(mid))       // Right half sort

  return merge(left, right)           // Merge sorted halves ✅
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]))
// [3, 9, 10, 27, 38, 43, 82] ✅

console.log(mergeSort([5, 2, 8, 1, 9, 3]))
// [1, 2, 3, 5, 8, 9] ✅


// ✅ Verbose merge sort
function mergeSortVerbose(arr, depth = 0) {
  const indent = '  '.repeat(depth)
  console.log(\`\${indent}Split: [\${arr}]\`)

  if (arr.length <= 1) return arr

  const mid   = Math.floor(arr.length / 2)
  const left  = mergeSortVerbose(arr.slice(0, mid), depth + 1)
  const right = mergeSortVerbose(arr.slice(mid), depth + 1)
  const result = merge(left, right)

  console.log(\`\${indent}Merged: [\${result}]\`)
  return result
}

mergeSortVerbose([38, 27, 43, 3])


// ✅ Sort objects — stable sort important pothu
function mergeSortByScore(arr) {
  if (arr.length <= 1) return arr

  const mid   = Math.floor(arr.length / 2)
  const left  = mergeSortByScore(arr.slice(0, mid))
  const right = mergeSortByScore(arr.slice(mid))

  return mergeObjects(left, right)
}

function mergeObjects(left, right) {
  const result = []
  let i = 0, j = 0

  while (i < left.length && j < right.length) {
    if (left[i].score <= right[j].score) {  // <= stability maintain ✅
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)]
}

const students = [
  { name: 'Anjali', score: 85 },
  { name: 'Rohit',  score: 92 },
  { name: 'Sara',   score: 85 },   // Same score as Anjali
  { name: 'Kathir', score: 78 }
]
console.log(mergeSortByScore(students).map(s => s.name))
// ['Kathir', 'Anjali', 'Sara', 'Rohit']
// Anjali before Sara — stability maintained ✅ (both score 85)


// ✅ Count inversions using merge sort
// "How many swaps needed to sort?" — useful metric
function countInversions(arr) {
  let count = 0

  function mergeCount(left, right) {
    const result = []
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i++])
      } else {
        count += left.length - i    // All remaining left elements > right[j] ✅
        result.push(right[j++])
      }
    }
    return [...result, ...left.slice(i), ...right.slice(j)]
  }

  function sortCount(arr) {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left  = sortCount(arr.slice(0, mid))
    const right = sortCount(arr.slice(mid))
    return mergeCount(left, right)
  }

  sortCount(arr)
  return count
}

console.log(countInversions([2, 4, 1, 3, 5]))  // 3 inversions ✅
console.log(countInversions([5, 4, 3, 2, 1]))  // 10 inversions (reverse sorted)


// ══════════════════════════════════════════
// PROS AND CONS
// ══════════════════════════════════════════
// ✅ PROS:
// O(n log n) guaranteed — all cases ✅
// Stable sort ✅
// Large datasets-ku reliable
// Linked list sorting-ku perfect — no random access needed
// External sorting (files) — disk-based data sort panna ✅

// ❌ CONS:
// O(n) extra space — new arrays create pannuvom
// Small arrays-la insertion sort faster
// Recursive overhead — function call stack


// 📌 Time Complexity:
// Best    → O(n log n) ✅
// Average → O(n log n) ✅
// Worst   → O(n log n) ✅ (consistent!)
// Space   → O(n) extra ⚠️
// Stable  → Yes ✅`
  },

  {
    id: 'ds-quick-sort',
    title: 'Quick Sort',
    category: 'DSA',
    slangDefinition: `Quick Sort na pivot element choose pannuvom — pivot-a vida chinna elements left, perusa elements right-la place pannuvom (partition). Each side recursively sort pannuvom. Average case O(n log n) — merge sort-a vida practical-a faster (cache friendly, in-place). Pros: In-place O(log n) space, cache friendly — real world fastest sort, average O(n log n). Cons: Worst case O(n²) — already sorted array-la bad pivot choose panna, not stable. Used on: General purpose sorting, JavaScript Array.sort() internally use pannuvom, most standard library sorts.`,
    interviewDefinition: `Quick Sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array into two parts — elements less than pivot on the left and greater on the right. Then recursively sorts both parts. Average time complexity is O(n log n), worst case O(n²) when pivot is always the smallest or largest (already sorted). Space complexity is O(log n) for the call stack. Not stable. In practice faster than Merge Sort due to better cache performance and in-place sorting. Used in most standard library sort implementations.`,
    example: `// ══════════════════════════════════════════
// HOW IT WORKS
// ══════════════════════════════════════════
// Array: [10, 7, 8, 9, 1, 5]  pivot = 5 (last)
//
// Partition:
// [1] 5 [10, 7, 8, 9]      ← pivot 5 correct position ✅
//
// Recursively:
// [1] sorted                ← single element
// [7, 8, 9, 10] → pivot=10 → [7, 8, 9] 10 → ... sorted
//
// Final: [1, 5, 7, 8, 9, 10] ✅


// ✅ Partition function — core of quick sort
function partition(arr, low, high) {
  const pivot = arr[high]   // Last element as pivot
  let i       = low - 1     // Smaller elements boundary

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++                                            // Boundary extend
      [arr[i], arr[j]] = [arr[j], arr[i]]            // Swap ✅
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]] // Pivot correct position
  return i + 1                                       // Pivot index return
}

// ✅ Quick Sort — In-place
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high)     // Partition ✅

    quickSort(arr, low, pivotIndex - 1)              // Left side sort
    quickSort(arr, pivotIndex + 1, high)             // Right side sort
  }
  return arr
}

const arr1 = [10, 7, 8, 9, 1, 5]
console.log(quickSort([...arr1]))   // [1, 5, 7, 8, 9, 10] ✅

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]))
// [1, 1, 2, 3, 6, 8, 10] ✅


// ✅ Random pivot — avoid worst case
function partitionRandom(arr, low, high) {
  // Random pivot choose pannuvom — O(n²) worst case avoid ✅
  const randomIndex = low + Math.floor(Math.random() * (high - low + 1))
  ;[arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]]  // Swap to last
  return partition(arr, low, high)
}

function quickSortRandom(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partitionRandom(arr, low, high)
    quickSortRandom(arr, low, pivotIndex - 1)
    quickSortRandom(arr, pivotIndex + 1, high)
  }
  return arr
}

const arr2 = [64, 25, 12, 22, 11]
console.log(quickSortRandom([...arr2]))  // [11, 12, 22, 25, 64] ✅


// ✅ Median of three pivot — better pivot selection
function medianOfThree(arr, low, high) {
  const mid = Math.floor((low + high) / 2)

  // Sort low, mid, high — pick median as pivot
  if (arr[low] > arr[mid])   [arr[low], arr[mid]]  = [arr[mid],  arr[low]]
  if (arr[low] > arr[high])  [arr[low], arr[high]] = [arr[high], arr[low]]
  if (arr[mid] > arr[high])  [arr[mid], arr[high]] = [arr[high], arr[mid]]

  [arr[mid], arr[high - 1]] = [arr[high - 1], arr[mid]]  // Median → second last
  return arr[high - 1]
}


// ✅ Non-recursive Quick Sort using Stack
function quickSortIterative(arr) {
  const nums  = [...arr]
  const stack = []
  let low     = 0
  let high    = nums.length - 1

  stack.push(low)
  stack.push(high)

  while (stack.length > 0) {
    high = stack.pop()
    low  = stack.pop()

    if (low < high) {
      const pivotIndex = partition(nums, low, high)

      // Left subarray
      if (pivotIndex - 1 > low) {
        stack.push(low)
        stack.push(pivotIndex - 1)
      }

      // Right subarray
      if (pivotIndex + 1 < high) {
        stack.push(pivotIndex + 1)
        stack.push(high)
      }
    }
  }
  return nums
}

console.log(quickSortIterative([3, 6, 8, 10, 1, 2]))
// [1, 2, 3, 6, 8, 10] ✅


// ✅ Sort objects — quick sort by property
function quickSortByAge(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivot = arr[high].age
    let i       = low - 1

    for (let j = low; j < high; j++) {
      if (arr[j].age <= pivot) {
        i++
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    const pivotIdx = i + 1

    quickSortByAge(arr, low, pivotIdx - 1)
    quickSortByAge(arr, pivotIdx + 1, high)
  }
  return arr
}

const people = [
  { name: 'Anjali', age: 26 },
  { name: 'Rohit',  age: 30 },
  { name: 'Sara',   age: 22 },
  { name: 'Kathir', age: 35 },
  { name: 'Priya',  age: 28 }
]
console.log(quickSortByAge([...people]).map(p => p.name))
// ['Sara', 'Anjali', 'Priya', 'Rohit', 'Kathir'] ✅


// ══════════════════════════════════════════
// PROS AND CONS
// ══════════════════════════════════════════
// ✅ PROS:
// In-place — O(log n) space only ✅
// Cache friendly — real world fastest
// Average O(n log n) — practical performance excellent
// No extra array needed (unlike merge sort)

// ❌ CONS:
// Worst case O(n²) — sorted array + bad pivot ❌
// Not stable — equal elements order change aagalaam
// Recursive — stack overflow very large arrays pothu


// ══════════════════════════════════════════
// ALL 5 SORTS COMPARISON
// ══════════════════════════════════════════
// Algorithm    Best      Average   Worst     Space   Stable
// Bubble       O(n)      O(n²)     O(n²)     O(1)    Yes ✅
// Selection    O(n²)     O(n²)     O(n²)     O(1)    No ❌
// Insertion    O(n)      O(n²)     O(n²)     O(1)    Yes ✅
// Merge        O(nlogn)  O(nlogn)  O(nlogn)  O(n)    Yes ✅
// Quick        O(nlogn)  O(nlogn)  O(n²)     O(logn) No ❌
//
// When to use:
// Bubble    → Learning, tiny data
// Selection → Minimum swaps needed
// Insertion → Nearly sorted, small data, online/streaming
// Merge     → Stable sort, large data, linked lists, external sort
// Quick     → General purpose, large data, in-place needed


// 📌 Time Complexity:
// Best    → O(n log n) average pivot
// Average → O(n log n) ✅
// Worst   → O(n²) bad pivot (use random pivot to avoid)
// Space   → O(log n) call stack ✅
// Stable  → No ❌`
  },
];
