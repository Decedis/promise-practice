# PROMISE SHORTCUTS

Promise shortcuts are used more often rather than the full-syntax expressions. The shortcuts are:

- Promise.resolve()
- Promise.reject()
- Promise.catch()

In the previous md files you have learned how to call the resolve/reject method in the executor function:

```JS
var resolvedPromise = new Promise((res, rej) => {
  res('resolved')
})

var rejectedPromise = new Promise((res, rej) => {
  rej('rejected')
})
```

Using the shortcut syntax you can write the same promises with much less code:

```JS
var resolvedPromise = Promise.resolve('resolved');

var rejectedPromise = Promise.reject('rejected');
```
