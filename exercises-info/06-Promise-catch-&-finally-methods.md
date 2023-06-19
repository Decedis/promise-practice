# PROMISES .catch() && .finally() methods

In the previous exercises you've learned that the rejected promise reason can be handled by
the second argument of the `.then()` method:

```JS
  // Declare/Initialize the promise
  var promise = new Promise((resolve, reject) => reject('REJECTED'));

  // Pass the callbacks as arguments into .then() method.
  promise
    .then(
      null,
      // null can be used as the first argument, since the promise is rejected, so onFulfilled callback argument will not be executed.
      (reason) => reason
    )
  // output: Promise { 'REJECTED' }
```

The more common way to catch the reason value of a rejected promise is to use
the `.catch()` method as it is a shortcut for the second argument of `.then()`
method above.

The `catch()` method of a Promise object schedules a function to be called when
the promise is rejected. It immediately returns an equivalent Promise object, allowing
you to chain calls to other promise methods. It is a shortcut
for `Promise.prototype.then(undefined, onRejected)`, so basically the `.catch(cb)` method
makes a call for `.then(undefined, cb)` method when used.

```JS
  // Declare/Initialize the promise
  var promise = new Promise((resolve, reject) => reject('REJECTED'));

  // Pass the callbacks as arguments into .then() method.
  promise
    .catch((reason) => reason);
  // output: Promise { 'REJECTED' }
```

## .finally() method

The finally() method of a Promise object schedules a function to be called
when the promise is settled (either fulfilled or rejected). It immediately
returns an equivalent Promise object, allowing you to chain calls to other
promise methods.

This lets you avoid duplicating code in both the promise's then() and catch() handlers.

An important difference if the .finally() method from .then() and .catch()
is that it does NOT receive any argument. This method is used when you do NOT
care about the rejection reason of the fulfillment value.

```JS
let index = 0;

var promise = new Promise((resolve, reject) => {
  if (index === 0) resolve(2)
  else reject('rejected')
});

promise
  .then((data) => console.log(data + 2)) // logs 4 if index === 0
  .catch((err) => console.log(err)) // logs 'rejected' if index !== 0
  .finally(() => console.log('Promise was finished')) // happens in any case
```

## Sources

- [.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
- [.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
