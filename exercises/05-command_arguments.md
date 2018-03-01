# Command-line Arguments

Create a JavaScript file to act as a Node.js program named `args.js`. This program should accept at least one number as a command-line argument. The arguments should be [summed up](https://en.wikipedia.org/wiki/Summation) into a single value.

Don't worry about [floating point](https://en.wikipedia.org/wiki/Floating_point) rounding errors.

Expected:

```bash
$ ./args.js 1
1
$ ./args.js -.42 0 3.14
2.72
$ ./args.js .1 .2
0.30000000000000004
```

## Bonus

- [x] Return 0 if no arguments are passed to the program
- [x] Use [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to change each argument into a proper `Number` primitive
- [ ] Use [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to limit the arguments array to only the parts needed
- [x] Use [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) to apply a summation function to each number
- [x] As an alternative to `.filter`, use [ES6 Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) to access only the values needed from the arguments array