/**
 * MULTIPLE PROMISES: .all(), .any(), .allSettled(), .race()
 * Please, make sure to read the "10 Multiple-promises.md" file in exercise-info folder before you start!
 * You can use each method only ONCE in this file (f.i. if you have used .any(), you can't use it again)
 * for the next task. The result4 is already using .race(), so you can't use it for result1, result2 or result3
 */

const promise1 = new Promise((res) => setTimeout(res, 4000, "RESOLVED AGAIN"));
const promise2 = Promise.reject("Promise 2 REJECTED");
const promise3 = Promise.resolve("Promise 3 RESOLVED");
const promise4 = new Promise((res) => setTimeout(res, 3000, "RESOLVED AGAIN"));
export const promiseArr = [promise1, promise2, promise3, promise4];

/**
 * @task
 * The handlePromise1 constant is expected to store the value of the reason of promise2 rejection
 * using the method to handle multiple promises.
 * The developer used a wrong multiple promises method of .any() to get the value
 * of the first rejected promise in the promiseArr array.
 * Please, refactor the code to use a proper method. You can use on of these:
 * * .all()
 * * .any()
 * * .allSettled()
 */

// Your code goes here...
export const handlePromise1 = Promise.any(promiseArr).catch((e) => e);

/**
 * @task
 * * Create the handlePromise2 function that follows:
 * * Takes an array of promises as an argument
 * * Returns a Promise that handles the array of promises (the argument) with one of the following methods:
 * * * .all()
 * * * .any()
 * * * .allSettled()
 * * to return the resolved value of promise3 if the promiseArr array was passed as the argument
 * * Don't forget to set the handlers that will return the resolved value or the rejection reason
 * * Make sure you don't use this method in other tasks of this exercise file!
 * !!! The function must be exported !!!
 */

// Your code goes here...

/**
 * @task
 * * Create the handlePromise3 function that follows:
 * * Takes an array of promises as an argument
 * * Returns a Promise that handles the array of promises (the argument) with one of the following methods:
 * * * .all()
 * * * .any()
 * * * .allSettled()
 * * to return an array of all promises statuses and values/reasons if the promiseArr array was passed as the argument
 * * Don't forget to set the handlers that will return the resolved value or the rejection reason
 * * Make sure you don't use this method in other tasks of this exercise file!
 * !!! The function must be exported !!!
 */

// Your code goes here...

/**
 * @task
 * Update the filter method callback to filter out any promise that will be settled before promise4
 * so that the handlePromise4 function returns the resolved value of promise4 ('RESOLVED AGAIN')
 * with the Promise.race() method, when the newPromiseArr is passes as the argument.
 * The value of newPromiseArr MUST have more than one promise in the array!
 */

export const newPromiseArr = promiseArr.filter(/* <Your code goes here>*/);

// Do NOT refactor or update handlePromise4 function, it's all set to work
export const handlePromise4 = (arr) => {
  return Promise.race(arr)
    .then((val) => val)
    .catch((e) => e);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
