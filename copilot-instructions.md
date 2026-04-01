# ✅ Clean, Structured AI Prompt

I want to build a **production-level full-stack learning project** using the following tech stack:

* Angular (latest stable version)
* Angular Material (latest)
* Bootstrap (latest)
* SCSS
* Node.js (latest LTS)
* Angular Server-Side Rendering (Angular Universal / @angular/ssr)
* MongoDB (Atlas compatible)

---

## 🎯 Project Goal

This project is a **concept-learning platform**.

For every technical concept I learn (Angular, JavaScript, Node, etc.), the application should store and display:

1. Talking Slang Definition (simple, casual explanation)
2. Interview Definition (formal, professional explanation)
3. Practical Example (code example or real-world example)

---

## 📌 Functional Requirements

### 1️⃣ Concept Display Structure

Each concept page must have:

* Two tabs:

  * "Talking Slang Definition"
  * "Interview Definition"

* Below the tab content:

  * A dedicated section for "Example"

The example should always be visible under whichever definition is selected.

---

### 2️⃣ Global Definition Toggle (Header Control)

In the application header:

* Add a toggle switch
* It controls which definition type (Slang / Interview) is shown by default for all concepts
* User can switch anytime
* Preference should persist (using localStorage or similar modern approach)
* Must work correctly with SSR (no window errors)

---

### 3️⃣ Dark Mode & Light Mode

* Full application must support:

  * Light mode
  * Dark mode
* Toggle should be in header
* Mode preference should persist
* Must use modern Angular theming approach (Angular Material theming best practices)
* Should not break SSR

---

### 4️⃣ Responsive Design

The project must:

* Work perfectly on:

  * Mobile
  * Tablet
  * Desktop
* Use:

  * Angular Material components
  * Bootstrap grid system
* Follow responsive-first approach
* Avoid layout shifts

---

### 5️⃣ Technical Standards (Very Important)

The project must:

* Use latest Angular syntax (standalone components preferred)
* No deprecated APIs
* Use Angular signals where appropriate (if applicable)
* Use strict mode
* Use OnPush change detection
* Optimized performance
* Lazy loading for feature modules
* Proper folder structure (scalable architecture)
* Clean separation of concerns
* Proper error handling
* Secure MongoDB integration
* Environment-based configuration
* Production-ready build configuration
* SSR compatible code (no direct window/document usage)

---

### 6️⃣ Backend Requirements (Node + MongoDB)

Backend should:

* Use Node.js (latest LTS)
* Express or Fastify (modern approach)
* REST API architecture
* Connect to MongoDB Atlas
* Proper validation
* Proper error handling
* Clean layered structure (controller, service, model)
* Secure environment variable usage
* Ready for deployment

---

### 7️⃣ Server-Side Rendering

* Angular SSR must be enabled
* Pages should render on server
* SEO-friendly meta tags
* Hydration enabled
* Proper handling of browser-only APIs

---

### 8️⃣ Code Quality Expectations

Code must be:

* Production-grade
* Clean and readable
* Scalable architecture
* Performance optimized
* Follow best practices
* No unnecessary re-renders
* Proper typing (strict TypeScript)
* Reusable components

---

## 📦 Deliverables Expected from AI

When generating code:

* Provide folder structure
* Provide key configuration files
* Provide explanation of architecture
* Ensure compatibility with SSR
* Ensure deploy-ready setup
