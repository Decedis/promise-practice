# What happens when an error is thrown?

One of the tremendous strengths of promises is that they handle errors in a
manner similar to synchronous code. Unlike in traditional callback-based code,
you do not need to strictly handle all your errors at every step.

If an error is thrown inside a function, it can be captured.

If an error is thrown inside a function, it will be handled by the next
available _"rejection"_ handler. This allows you to write code that looks
remarkably like a `try`/`catch` block would in synchronous code.

```js
try {
  doSomethingRisky();
  doAnotherRiskyThing();
} catch (e) {
  console.log(e.message);
}
```

The equivalent "promisified" code might look like:

```js
doSomethingRisky()
  .then((res) => doAnotherRiskyThing(res))
  .catch((err) => console.log(err));
```

## Task for e7.js

Let's build exactly the system discussed above.

Some invalid JSON will be available in the `invalidJsonString` variable.

1. Build a function called `parsePromised` that creates a promise,
   performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejects
   the promise depending on whether an error is thrown.
   **Note:** your function should synchronously return the promise!
2. Build a sequence of steps like the ones shown above that catches
   any thrown errors and logs them to the console.
