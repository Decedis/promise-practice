/**
 * TO RESOLVE OR TO REJECT
 * Please, make sure to read the following files in exercise-info folder before you start:
 * * "07 To-reject-or-to-resolve.md"
 * * "07 Error-handling.md"
 */

/**
 * @task
 * Create a function called `parsePromised` that follows the rules:
 * * Takes a JSON string as an argument
 * * Synchronously returns a promise declared with a constructor
 * * * performs `JSON.parse(json_string)` in a `try`/`catch` block
 * * * fulfills with a successfully parsed JSON string
 * * * rejects with the reason of the error thrown
 * * The function must be exported
 * Example: export function parsePromised(json) {
 *            <Promise constructor return code>
 *          }
 */

export function parsePromised() {
  // Your code goes here...
}

/**
 * @task
 * Create a function called `onReject` that follows the rules:
 * * Takes an error object as an argument
 * * logs the message property of the error object
 */

export function onReject() {
  // Your code goes here...
}

/**
 * @task
 * Create handlePromise() function that follows the steps::
 * * Takes a promise as an argument. The promise can either reject with a reason or resolves with a value
 * * The promise returns the promise value when resolved
 * * Catches the reason and follows the logic:
 * * * if the reason has a message property returns the onReject function call with the error passed as an argument if the promise rejects
 * * * else return the reason
 * The handlePromise() function must be exported
 * Example: export const promiseHandler = () => return <your code>
 */

export const handlePromise = () => {
  // Your code goes here...
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
