# Command-line Arguments

## Introduction

[Command-line arguments][args] or parameters are pieces of information that a
user can submit to alter or add context to the operation of a command-line program.
In Node.js, we can access the command-line arguments in the
[`process.argv`][argv] array.

### `process.argv`

The first element of this array is the absolute pathname of the executable that
started the Node.js process. It should be a path ending with node i.e.
`/usr/local/bin/node`. This can also be found in the
[`process.execPath`][execpath] property.

The second element will be the path to the JavaScript file being executed.

The remaining elements will be any additional command line arguments. So, if you
want to access the command-line arguments, you need to start at the 3rd element
or index 2 of the `argv` array. Also, be aware that all elements in the `argv`
array are expressed as JavaScript `String`s. Depending on your use case, you may
need to coerce them to another data type.

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
