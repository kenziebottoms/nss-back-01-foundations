# Command-line Arguments

Create a JavaScript file to act as a Node.js program named `args.js`. This program
should accept at least one number as a command-line argument. The arguments
should be [summed up][sum] into a single value.

Don't worry about [floating point][floats] rounding errors.

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

-   Return 0 if no arguments are passed to the program
-   Use [Array.prototype.map][map] to change each argument into
    a proper `Number` primitive
-   Use [Array.prototype.filter][filter] to limit the arguments
    array to only the parts needed
-   Use [Array.prototype.reduce][reduce] to apply a summation
    function to each number
-   As an alternative to `.filter`, use
    [ES6 Array Destructuring][array_dest] to access only the
    values needed from the arguments array

## Additional Reading

-   [Command-line arguments][args]
-   [`process.argv`][argv]

[args]: https://en.wikipedia.org/wiki/Command-line_interface#Arguments
[argv]: https://nodejs.org/docs/latest/api/process.html#process_process_argv
[array_dest]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring
[execpath]: https://nodejs.org/docs/latest/api/process.html#process_process_execpath
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[floats]: https://en.wikipedia.org/wiki/Floating_point
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
[sum]: https://en.wikipedia.org/wiki/Summation
