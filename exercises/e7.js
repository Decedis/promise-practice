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

export function parsePromised(json) {
  // Your code goes here...
    //move return to try/catch block, if needed.
    return new Promise((resolve, reject) => {
        try{
            resolve(JSON.parse(json));
        } catch {
            reject(JSON.parse(json));
        }
    })
}

/**
 * @task
 * Create a function called `onReject` that follows the rules:
 * * Takes an error object as an argument
 * * logs the message property of the error object
 */

export function onReject(err) {
  // Your code goes here...
    return console.log(err.message);
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

export const handlePromise = (promise) => {
  // Your code goes here...
    return promise
        .then((val) => val)
        .catch((reason) => reason.message ? onReject(reason) : console.log(reason));
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
