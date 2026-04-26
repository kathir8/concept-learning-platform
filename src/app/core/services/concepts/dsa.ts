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
        slangDefinition: `Queue na FIFO — First In First Out. What: Bank queue maari — first vandhaவன் first serve aaguvaan. Where: Task scheduling, print queue, API request queue, BFS traversal. When: Order maintain pannanum, first come first serve basis venum pothu. Why: Enqueue/dequeue O(1) — fast operations. How: Array use panna shift() O(n) aagidum — LinkedList use panna better, O(1) dequeue. Problem: Array-based queue-la dequeue O(n) — shift() ellathayum move pannanum. LinkedList use panna fix pannalaam.`,
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
        id: 'ds-hash-map',
        title: 'Hash Map (Hash Table)',
        category: 'DSA',
        slangDefinition: `Hash Map na key-value pairs store pannuvom — key use panni O(1)-la value access pannuvom. What: Dictionary maari — word (key) kuduttha meaning (value) kedaikkum. Where: Caching, frequency count, fast lookup, grouping. When: Key-based fast access venum pothu, duplicates check panna, count pannanum pothu. Why: Average O(1) get/set/delete — very fast. How: Key-a hash function-la pass pannа index kedaikkum — adha index-la value store pannuvom. Problem: Hash collision — two keys same index-la map aana chaining use pannuvom. JavaScript-la Map and Object as hash map use pannalaam.`,
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
    }
];
