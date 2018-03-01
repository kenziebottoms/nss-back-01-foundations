# Third party modules

Create a JavaScript file to act as a Node.js program named `flag.js`. This program print out a red, white, and blue American flag in the terminal. The stars should be white bold text with a blue background, the red stripes should be spaces with a red background, and the white stripes should be spaces with a white background.

Because of the limitations of the terminal, don't worry about getting all 50 stars exactly as they are on the official flag. However, make sure all 13 stripes are on the flag. Additionally make the flag 50 characters wide and have 1 space of padding before and after the stars.

Use the following format below.

Expected:

```bash
$ ./flag.js
```

![Terminal Flag](http://i.imgur.com/DOMxrXU.png)

## Bonus

- [ ] Use ES6 Object Destructuring to access specific colors needed from the
    module
- [ ] Use a Unicode or emoji star instead of an asterisk
- [ ] Use two variables names `STAR_MARGIN` and `STARS_PADDING` which define the separation character or characters between the stars and around the stars.
    - [ ] Use this variable to quickly change both the margin and the padding to two or three spaces.
- [ ] Make sure the output is still aligned and 50 characters wide.

## Additional Reading

- [ ] [ANSI escape code](https://en.wikipedia.org/wiki/ANSI_escape_code)
- [ ] [Node.js REPL](https://nodejs.org/api/repl.html)
- [ ] [Read Eval Print Loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)
- [ ] [What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)