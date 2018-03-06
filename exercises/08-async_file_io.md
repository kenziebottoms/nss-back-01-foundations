# Asynchronous File IO

Create a JavaScript file to act as a Node.js program named `async.js`. This program should work exactly the same as the previous exercise. However you cannot use a synchronous method.

Optional: create a second file named `08.json` for your program to read.

Example:

```json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
```

Expected:

```bash
$ ./08.js 08.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}

```

Note: Make sure with `pwd` before executing that you are in the directory that file is in.

## Bonus

- [x] ES6 Object Destructuring
- [x] Avoid `.toString`. Callback with a String primitive rather than a Buffer object from `readFile`.