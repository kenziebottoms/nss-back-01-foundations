#!/usr/bin/env node

"use strict";

const chalk = require("chalk");

// prints a pixel of the given type
const pixel = type => {
    if (type == "B") {
        process.stdout.write(chalk.bgBlue(" "));
    } else if (type == "W") {
        process.stdout.write(chalk.bgWhite(" "));
    } else if (type == "R") {
        process.stdout.write(chalk.bgRed(" "));
    } else if (type == "S") {
        process.stdout.write(chalk.white.bgBlue("*"));
    } else if (type == "\n") {
        process.stdout.write("\n");
    }
}

// repeat(x, string) executes string*x the way Python does
let repeat = (x, string) => {
    let result = string;
    for (let i=1; i<x; i++) {
        result += string;
    }
    return result;
}

// all the business
let flag = () => {
    let halfRed = repeat(35, "R") + "\n";
    let halfWhite = repeat(35, "W") + "\n";
    let red = repeat(50, "R") + "\n";
    let white = repeat(50, "W") + "\n";
    let star7 = repeat(7, "BS")+`B${halfRed}`;
    let star6 = "B"+repeat(6, "BS")+`BB${halfWhite}`;

    let flag = repeat(3, star7+star6)+star7;
    flag += repeat(3, white+red);
    flag.split("").map(n => pixel(n));
}

flag();