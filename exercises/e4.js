/**
 * PROMISE AFTER PROMISE
 * Please, make sure to read the 04 Promise-after-promise.md file in exercise-info folder
 * This task will allow you to demonstrate an understanding how to chain promises
 * together using `then`.
 * The code beneath declares the function first() that returns a resolved promise of 3
 * and the second function that returns another resolved promise that resolves with a sum of
 * an argument and 7
 */

const first = () => Promise.resolve(3);
const second = (val) => {
  return Promise.resolve(val + 7);
};

/**
 * @task
 * The following code resolves both promises using intermediate variables to store every next promise
 * Refactor the following code to use two chained then() methods applied to the first() function
 * Make sure you don't delete the 'export const handlePromise'
 */

// Refactor the following code...
export const handlePromise = first();
const secondPromise = handlePromise.then((val) => val);
const final = secondPromise.then((res) => second(res));
final.then((val) => {
  console.log(val);
  return val;
});

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
