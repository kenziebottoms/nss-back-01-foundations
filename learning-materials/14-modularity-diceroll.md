# Modularity

Modularlity is very important in programming and that is no different for
Node.js apps. The Node.js ecosystem encourages developers to create many very
tiny modules, sometimes with only a single exported function.

Example:

```js
// https://github.com/then/is-promise/blob/v2.1.0/index.js
module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
```

List of other ["awesome"](https://github.com/sindresorhus/awesome) tiny
Node.js modules: https://github.com/parro-it/awesome-micro-npm-packages