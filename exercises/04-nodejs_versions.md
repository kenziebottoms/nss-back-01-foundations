# Node.js versions

Create a JavaScript file to act as a Node.js program named `node-version.js`. The file
should be similar if not exactly the same as the previous exercise. However,
run `nvm use` and change the Node.js version and make sure it works correctly in
multiple versions.

Expected:

```bash
$ nvm use node
Now using node v6.3.1 (npm v3.10.5)
$ ./node-version.js
Node.js version: v6.3.1
V8 version: 5.0.71.57
$ nvm use v4
Now using node v4.4.7 (npm v3.10.5)
$ ./node-version.js
Node.js version: 4.4.7
V8 version: 4.5.103.36
```

## Bonus

-   Use [ES6 Destructuring][destructuring] to extract the two variables from the
    `versions` object
-   Destructuring is a SyntaxError in Node.js by default in versions earlier
    than v6. Manually enable destructuring inside the program. Hint: edit the
    shebang

## Additional Reading

-   [Node Version Manager][nvm]
-   [ES6 Destructuring Assignment][destructuring]

[nvm]: https://github.com/creationix/nvm
[destructuring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[lts]: https://github.com/nodejs/LTS
