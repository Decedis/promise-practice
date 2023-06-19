# Are promises always resolved asynchronously?

The ES2015 spec declares that promises **must not** fire their
resolution/rejection function on the same turn of the event loop that they are
created on. This is very important because it eliminates the possibility of
execution order varying and resulting in indeterminate outcomes.

You can expect that the functions passed to the `then` method of a
promise will be called on the **next** turn of the event loop.

## Task for e3.js

In the task for this lesson, you will prove that promises are always
asynchronous.

First, create an async function that wraps the following:

- A promise variable that stores a Promise constructor.

In the promise’s `executor`, immediately fulfill the promise with a value of
`'PROMISE VALUE'`.

After the creation of the promise, pass `console.log` as the success handler to
the promise.

Finally, print out “MAIN PROGRAM” with `console.log`.

Code sample:

```JS

export const result = () => {
  const promise =  // Promise constructor with the fulfill function>
  promise.then(/* log the promise resolved value */)
  console.log('MAIN PROGRAM');
}

```

## Hints

If the execution of promise is synchronous, the value of the promise is already
known after its construction. The `console.log` passed into `then` would then
be executed as soon as the `then` is called.

However, if your script is successful, you should see “MAIN PROGRAM” before
“PROMISE VALUE”.

This shows you that despite the promise being resolved synchronously, the
provided function is not executed until the next turn of the event loop.
