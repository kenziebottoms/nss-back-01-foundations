#!/usr/bin/env node

"use strict";

const [,,...input] = process.argv;

let sum = 0;

for (let item of input) {
    // if !NaN
    if (+item == +item) {
        sum += +item;
    }
}
console.log(sum);