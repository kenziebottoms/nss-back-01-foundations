## Reference before assignment

```js
console.log(name);  // undefined
var name = "Rey";
```

```js
console.log(name);
let name = "Finn";  // ReferenceError: name is not defined
```

## Redefinition and reassignment

| |`var`|`let`|`const`|
|-|-|-|-|
|Redefinition|:white_check_mark:|:x:|:x:|
|Reassignment|:white_check_mark:|:white_check_mark:|:x:|

### Redefinition

```js
var name = "Rey";
var name = "Finn";  // redefinition: no problem
```

```js
let name = "Rey";
let name = "Finn";  // SyntaxError: 'name' has already been declared
```

### Reassignment

```js
let name = "Rey";
name = "Finn";
console.log(name);  // Finn
```

```js
var name = "Rey";
name = "Finn";
console.log(name);  // Finn
```

```js
const name = "Rey";
name = "Finn";  // TypeError: Assignment to constant variable
```

## Block Scope

```js
var scope = "outer";
{
    var scope = "inner";
    console.log(scope); // inner;
}
console.log(scope); // inner
```

```js
let scope = "outer";
{
    let scope = "inner";
    console.log(scope); // inner;
}
console.log(scope); // outer
```