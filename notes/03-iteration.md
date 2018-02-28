# Iteration

## `entries()`

Creates a non-iterable collection of 2-item lists, the index and the list item paired.

```js
const arr = ["a", "b", "c"];
const ents = arr.entries();
console.log(arr);   // ["a", "b", "c"]
console.log(ents);   // {}
```

||array|entries|
|-|-|-|
|`for...in`|`[0,1,2]`|`{}`|
|`for...of`|`["a", "b", "c"]`|`[0, "a"] [1, "b"] [2, "c"]`|

---

## `for (... in ...)`

```js
for (let item in arr) {
    console.log(item);  // [0, 1, 2] (indices)
}
```

```js
for (let ent in ents) {
    console.log(ent);   // nothing
}
```

## `for (... of ...)`

```js
for (let item of arr) {
    console.log(item);  // ["a", "b", "c"]
}
```

```js
for (let ent of ents) {
    console.log(ent);   // [0, "a"] [1, "b"] [2, "c"]
}
```