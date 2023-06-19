/**
 * PROMISE .resolve() and .reject() methods
 * Please, make sure to read the "08-Promise-shortcuts.md" file in exercise-info folder before you start!
 * In this task you need to refactor the resolved promise with a shortcut of Promise.resolve()
 * Then refactor the promise constructors with shortcuts.
 */

// === RESOLVED PROMISE
// Update the promiseResolved variable to use the shortcut syntax
export const promiseResolved = new Promise((resolve, reject) => {
  resolve("The PROMISE was RESOLVED");
}).then((data) => data);

// === REJECTED PROMISE
// Update the promiseResolved variable to use the shortcut syntax
export const promiseRejected = new Promise((resolve, reject) => {
  reject("The PROMISE was REJECTED");
}).catch((err) => err);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
