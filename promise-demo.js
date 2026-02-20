// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.3;
        // Call resolve() for success, reject() for failure
        success ? resolve('Promise resolved!') : reject('Promise failed');
    }, 1000);
});

// Handling the result
myPromise
    .then(result => console.log("Then", result))  // Runs if resolved
    .catch(err => console.log("Catch", err));     // Runs if rejected

// fetch() returns a Promise

