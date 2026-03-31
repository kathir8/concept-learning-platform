import { Concept } from "../../models/concept.model";

export const nodeConcepts: Concept[] = [
    {
        id: 'commonjs-vs-esmodule',
        title: 'CommonJS Module vs ES Module in Node.js',
        category: 'Node.js',
        slangDefinition: `Node.js-la originally CommonJS (require/module.exports) use pannuvanga — synchronous-a load aagum, runtime-la resolve aagum. ES Modules (import/export) na browser-la use pannra modern syntax — asynchronous, static analysis possible, tree shaking support pannudhu. CommonJS = old school Node.js style, ES Module = modern JavaScript standard. Package.json-la "type": "module" add pannа Node.js ES module-a treat pannudhu. CommonJS-la __dirname, __filename built-in-a kedaikkum, ES Module-la manually create pannanum — adhu oru gotcha.`,
        interviewDefinition: `CommonJS (CJS) is Node.js's original module system using require() and module.exports. It loads modules synchronously at runtime, meaning modules are resolved when the code executes. ES Modules (ESM) is the modern JavaScript standard using import/export syntax. ESM loads asynchronously, supports static analysis (tree shaking), and is the standard across both browsers and Node.js. Key differences: CJS uses require/module.exports, ESM uses import/export. CJS resolves at runtime, ESM resolves at parse time. CJS supports dynamic require(), ESM uses dynamic import(). Node.js supports both — .cjs extension for CommonJS, .mjs for ES Modules, or set "type" in package.json.`,
        example: `// ══════════════════════════════════════════════
// 1. FILE SETUP — How Node.js decides module type
// ══════════════════════════════════════════════

// package.json — Default (CommonJS)
{
  "name": "my-app",
  "version": "1.0.0"
  // No "type" field → CommonJS by default
}

// package.json — ES Module
{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module"    // All .js files treated as ESM ✅
}

// File extensions override package.json:
// .cjs → Always CommonJS
// .mjs → Always ES Module
// .js  → Depends on package.json "type" field


// ══════════════════════════════════════════════
// 2. COMMONJS — require / module.exports
// ══════════════════════════════════════════════

// math.js — Exporting (CommonJS)
function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

const PI = 3.14159

// Export multiple — using object
module.exports = { add, subtract, PI }

// OR export single default
module.exports = add

// OR export one by one
exports.add = add
exports.subtract = subtract


// app.js — Importing (CommonJS)

// Import whole module
const math = require('./math')
console.log(math.add(5, 3))       // 8
console.log(math.PI)              // 3.14159

// Destructured import
const { add, subtract } = require('./math')
console.log(add(10, 5))           // 15
console.log(subtract(10, 5))      // 5

// Import built-in modules
const fs = require('fs')
const path = require('path')
const http = require('http')

// Import npm package
const express = require('express')

// ✅ Dynamic require — runtime-la decide pannalaam
const moduleName = 'fs'
const dynamicModule = require(moduleName) // Works! ✅

// ✅ Conditional require
if (process.env.NODE_ENV === 'development') {
  const devTools = require('./dev-tools') // Load only in dev ✅
}

// ✅ CommonJS special variables (built-in)
console.log(__dirname)   // /home/user/project/src
console.log(__filename)  // /home/user/project/src/app.js


// ══════════════════════════════════════════════
// 3. ES MODULES — import / export
// ══════════════════════════════════════════════

// math.mjs (or math.js with "type":"module") — Exporting (ESM)

// Named exports
export function add(a, b) {
  return a + b
}

export function subtract(a, b) {
  return a - b
}

export const PI = 3.14159

// Default export
export default function multiply(a, b) {
  return a * b
}


// app.mjs — Importing (ESM)

// Named imports
import { add, subtract, PI } from './math.mjs'
console.log(add(5, 3))       // 8
console.log(PI)               // 3.14159

// Default import
import multiply from './math.mjs'
console.log(multiply(4, 5))  // 20

// Import all as namespace
import * as math from './math.mjs'
console.log(math.add(5, 3))  // 8
console.log(math.PI)          // 3.14159

// Rename on import
import { add as sum } from './math.mjs'
console.log(sum(5, 3))        // 8

// Import built-in modules (ESM style)
import fs from 'fs'
import path from 'path'
import { readFile, writeFile } from 'fs/promises' // ✅ specific import

// Import npm package
import express from 'express'

// ❌ __dirname not available in ESM — manual workaround needed
// console.log(__dirname) // ReferenceError ❌

// ✅ ESM fix for __dirname
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log(__dirname)  // ✅ Now works


// ══════════════════════════════════════════════
// 4. DYNAMIC IMPORT — ESM async loading
// ══════════════════════════════════════════════

// ✅ Dynamic import() — Load module on demand (lazy loading)
async function loadModule() {
  const math = await import('./math.mjs')  // Async! ✅
  console.log(math.add(5, 3))              // 8
}

// Conditional dynamic import
async function loadOnDemand(isDev) {
  if (isDev) {
    const { devLogger } = await import('./dev-logger.mjs') // ✅
    devLogger.log('Dev mode active')
  }
}

// ✅ CommonJS also supports dynamic import() in modern Node.js
// (But regular require() is synchronous)


// ══════════════════════════════════════════════
// 5. MIXING CJS AND ESM — Interoperability
// ══════════════════════════════════════════════

// ✅ ESM can import CJS module
import cjsModule from './legacy.cjs'  // Works ✅
console.log(cjsModule.add(1, 2))

// ❌ CJS cannot require() ESM module directly
// const esm = require('./modern.mjs') // ❌ Error!

// ✅ CJS can use dynamic import() to load ESM
async function loadESM() {
  const esm = await import('./modern.mjs') // ✅ Works with async
  console.log(esm.default)
}


// ══════════════════════════════════════════════
// 6. REAL WORLD — Express.js Example
// ══════════════════════════════════════════════

// ✅ CommonJS Style (Traditional Node.js)
// server.js
const express = require('express')
const { connectDB } = require('./db')
const userRoutes = require('./routes/users')

const app = express()
app.use('/users', userRoutes)
app.listen(3000)

// ✅ ES Module Style (Modern Node.js)
// server.mjs (or "type":"module" in package.json)
import express from 'express'
import { connectDB } from './db.mjs'
import userRoutes from './routes/users.mjs'

const app = express()
app.use('/users', userRoutes)
app.listen(3000)


// ══════════════════════════════════════════════
// 7. KEY DIFFERENCES AT A GLANCE
// ══════════════════════════════════════════════

// Feature          CommonJS              ES Module
// ─────────────────────────────────────────────────
// Syntax           require/exports       import/export
// Loading          Synchronous           Asynchronous
// Resolution       Runtime               Parse time (static)
// Tree Shaking     ❌ Not supported      ✅ Supported
// Top-level await  ❌ Not supported      ✅ Supported
// __dirname        ✅ Built-in           ❌ Manual workaround
// Dynamic load     require() sync        import() async
// Browser support  ❌ No                 ✅ Yes
// Default in Node  ✅ Yes                ❌ Need "type":"module"
// Circular deps    Partial support       Better handling

// ✅ Top-level await — ESM only!
// app.mjs
const data = await fetch('https://api.example.com/data')
const json = await data.json()
console.log(json) // Works at top level in ESM ✅
// CommonJS-la top-level await use pannа error varum ❌


// 📌 Summary:
// CommonJS  → require/module.exports, sync, Node.js default
// ES Module → import/export, async, modern standard
// .cjs      → force CommonJS
// .mjs      → force ES Module
// "type":"module" in package.json → all .js files = ESM
// __dirname → built-in CJS, manual workaround needed in ESM
// Tree shaking → only ESM supports (smaller bundle) ✅
// Dynamic import() → both support, but ESM preferred`
    },
]