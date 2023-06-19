# PROMISE CONSTRUCTOR

The **Promise()** constructor is primarily used to wrap functions that do not already support promises.

The Promise can be in 1 of 3 states

- **pending**: initial state, neither fulfilled nor rejected.
- **fulfilled**: meaning that the operation was completed successfully (resolved).
- **rejected**: meaning that the operation failed.

```JS
// Create a promise object
const promiseName = new Promise(executor);
```

The executor is a function to be executed by the constructor. It receives two functions as parameters (arguments): resolveFunc (onFulfilled) and rejectFunc(onRejected). Any errors thrown in the executor will cause the promise to be rejected, and the return value will be neglected.

## Executor: Resolving a Promise

```JS
const executor = (resolve, reject) => {
  // In some docs you will meet the 'fulfill' first argument name instead of 'resolve'
  // Let's resolve the promise with 'Yay!!' value.
  resolve('Yay!!');
}
```

## Executor: Rejecting a Promise

```JS
const executor = (resolve, reject) => {
  // Let's reject the promise with 'Something went wrong...' value.
  reject('Something went wrong...');
}
```

# PROMISE .then()

The then() method of a Promise object takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

#### The full syntax for a resolving Promise:

```JS
  // Declare/Initialize the promise
  var promise = new Promise((resolve, reject) => resolve('RESOLVED'));

  // The onFulfilled and onRejected callback function
  const onFulfilled = (data) => data;
  const onRejected = (reason) => reason;

  // Pass the callbacks as arguments into .then() method.
  promise
    .then(onFulfilled, onRejected)
```

The resolved promise will not change its state to be rejected and the rejected promise will never become resolved. In the case above you can see that both onFulfilled and onRejected callbacks were declared outside of the .then() arguments list. You can make it more simple writing the code of those callbacks inside the parentheses of the .then syntax.

#### The same solution with the callbacks' code inside .then():

```JS
  // Declare/Initialize the promise
  var promise = new Promise((resolve, reject) => resolve('RESOLVED'));

  // Pass the callbacks as arguments into .then() method.
  promise
    .then(
      (data) => data,
      (reason) => reason
      // The second argument will never be executed as the promise is resolved, so only the onFulfilled argument matters. It means that the .then() method syntax can be simplified to
      // .then((data) => data, null) or
      // .then((data) => data)
    )
```

#### The rejected promise with the callbacks' code inside .then():

```JS
  // Declare/Initialize the promise
  var promise = new Promise((resolve, reject) => reject('REJECTED'));

  // Pass the callbacks as arguments into .then() method.
  promise
    .then(
      null,
      // null can be used, as the first argument since the promise is rejected, so onFulfilled callback argument will never be executed.
      (reason) => reason
    )
```

Even though, the most often used way to catch the rejected reason is the .catch() shortcut method, we want you to know that you can pass the onRejected callback within the second argument of .then() method and to be able to use it.

In the e2.js exercise file you will be asked to get and log the rejected promise reason value using the .then() method, so .catch() method is not allowed.
