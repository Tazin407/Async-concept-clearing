# Async JavaScript Bootcamp

A hands-on learning repository covering asynchronous JavaScript concepts, from Promises to parallel execution.

## 📚 Concepts Covered

### 1. Promises
**File:** `promise-demo.js`

- Creating Promises with `new Promise()`
- Promise states: Pending, Fulfilled, Rejected
- Handling results with `.then()` and `.catch()`
- Understanding `resolve()` and `reject()`

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.3;
        success ? resolve('Success!') : reject('Failed');
    }, 1000);
});
```

**Key Takeaway:** Promises are JavaScript objects that represent the eventual result of an asynchronous operation.

---

### 2. Async/Await
**File:** `async-demo.js`

- Using `async` functions
- `await` keyword to unwrap Promises
- Error handling with `try/catch`
- Fetching data from APIs

```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Error", err);
    }
}
```

**Key Takeaway:** `await` extracts the actual value from a Promise. It can only be used inside `async` functions.

---

### 3. Parallel Execution
**File:** `parallel-demo.js`

- Running multiple async operations simultaneously
- `Promise.all()` for parallel execution
- Performance measurement with `console.time()` and `console.timeEnd()`
- Array methods (`map`) with Promises

```javascript
// Sequential: 900ms (slow)
const result1 = await fetch(url1);
const result2 = await fetch(url2);
const result3 = await fetch(url3);

// Parallel: 300ms (fast)
const [result1, result2, result3] = await Promise.all([
    fetch(url1),
    fetch(url2),
    fetch(url3)
]);
```

**Key Takeaway:** `Promise.all()` runs operations in parallel, dramatically improving performance when operations are independent.

---

### 4. File System Operations
**File:** `fs-demo.js`

- ES Modules (`import`/`export`) vs CommonJS (`require`)
- Async file operations with `fs/promises`
- Creating directories with `fs.mkdir()`
- Writing and appending to files
- Error handling for file operations

```javascript
import fs from 'fs/promises';

await fs.mkdir('demos', { recursive: true });
await fs.writeFile('demo.txt', 'Hello World');
await fs.appendFile('demo.txt', 'More content');
```

**Key Takeaway:** Modern Node.js uses ES modules and promise-based file operations for cleaner async code.

---

### 5. Advanced Promise Handling
**File:** `exercise.js`

- `Promise.allSettled()` vs `Promise.all()`
- Graceful failure handling
- Combining fetch + file operations
- Real-world async patterns

```javascript
// Promise.all - fails if ANY promise fails
await Promise.all([promise1, promise2, promise3]);

// Promise.allSettled - waits for all, regardless of success/failure
await Promise.allSettled([promise1, promise2, promise3]);
```

**Key Takeaway:** Use `Promise.allSettled()` when you want all operations to complete even if some fail.

---

## 🔑 Key Concepts

### Asynchronous vs Synchronous

| Synchronous | Asynchronous |
|-------------|--------------|
| Blocks execution | Non-blocking |
| Waits for each operation | Continues while waiting |
| `fs.writeFileSync()` | `await fs.writeFile()` |

### Sequential vs Parallel

```javascript
// Sequential - operations run one after another
await operation1();  // 100ms
await operation2();  // 100ms
await operation3();  // 100ms
// Total: 300ms

// Parallel - operations run simultaneously
await Promise.all([
    operation1(),  // 100ms
    operation2(),  // 100ms
    operation3()   // 100ms
]);
// Total: 100ms
```

### Promise vs Async Task

- **Async Task:** The actual work (network request, file read, timer)
- **Promise:** JavaScript object that tracks the async task and provides the result

### await Behavior

```javascript
// Without await - get Promise object
const promise = fetch(url);  // Promise { <pending> }

// With await - get actual data
const response = await fetch(url);  // Response object
```

---

## 🛠️ Tools & Methods

### Timing Operations
```javascript
console.time("label");
// ... code to measure ...
console.timeEnd("label");  // Prints: "label: 234ms"
```

### Array Methods for Async
```javascript
// map - transform each item
urls.map(url => fetch(url))

// filter - keep matching items
results.filter(r => r.status === 'fulfilled')

// forEach - DON'T use with async/await (doesn't wait)
```

### Promise Methods
```javascript
Promise.all([...])        // Fails if any fails
Promise.allSettled([...]) // Waits for all (success or failure)
Promise.race([...])       // Returns first to complete
Promise.any([...])        // Returns first to succeed
```

---

## 📦 Module Systems

### CommonJS (Old)
```javascript
const fs = require('fs');
module.exports = myFunction;
```

### ES Modules (Modern)
```javascript
import fs from 'fs/promises';
export default myFunction;
```

**To use ES modules:**
- Rename file to `.mjs`, OR
- Add `"type": "module"` to `package.json`

---

## 🚀 Running the Examples

```bash
# Run any demo file
node promise-demo.js
node async-demo.js
node parallel-demo.js

# For ES modules
node fs-demo.js
node exercise.js
```

---

## 💡 Best Practices

1. **Use `async/await`** over `.then()` chains for readability
2. **Use `Promise.all()`** when operations are independent
3. **Use sequential `await`** when operations depend on each other
4. **Always handle errors** with `try/catch` or `.catch()`
5. **Use `Promise.allSettled()`** when you need all results regardless of failures
6. **Measure performance** with `console.time()` to optimize
7. **Use ES modules** for new projects

---

## 🎯 Performance Tips

- **Parallel > Sequential** when possible
- Loop overhead is negligible compared to I/O operations
- `map` is cleaner than manual loops for transformations
- Create directories before writing files to nested paths

---

## 📖 Further Learning

- Event Loop and Call Stack
- Microtasks vs Macrotasks
- Async Iterators and Generators
- Worker Threads for CPU-intensive tasks
- Streams for large file operations

---

## 🤝 Summary

This bootcamp covers the fundamentals of asynchronous JavaScript:
- **Promises** wrap async operations
- **async/await** makes async code look synchronous
- **Promise.all()** enables parallel execution
- **Error handling** is crucial for robust async code
- **Performance matters** - measure and optimize

Master these concepts to write efficient, non-blocking JavaScript applications!
