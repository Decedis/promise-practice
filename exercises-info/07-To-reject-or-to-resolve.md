# What happens if we reject AND resolve a promise?

The **ES2015** spec states that a promise, once fulfilled or rejected, may
**not** change states for the rest of its lifetime. This is an important
feature of promises and it is also one of the things that differentiates it
from an `EventEmitter` (and other forms of repeatable callbacks).

Callback-style code usually requires a callback function to be invoked
somewhere in the body of the function that it was passed to. Many, if not
most times, that function is intended to be called only once. However, through
errors in logic, problems with syntax, or other simple mistakes it is
possible to call your callback multiple times and create vexing states in your
app or insidious bugs.

```js
/*
 * This code is bad, but nonetheless common and has the nasty result of
 * calling the supplied callback more than once (possibly destroying the
 * earth?). It is conventional to return the first invocation of callback
 * but it’s easy to overlook!
 */

function myFunc(user, callback) {
  if (user) {
    callback(null, user);
  }

  return callback("No user was found", null);
}
```
