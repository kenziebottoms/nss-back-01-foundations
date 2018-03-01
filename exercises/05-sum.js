#!/usr/bin/env node

"use strict";

const [,,...input] = process.argv;

let numbers = [0];

for (let item of input) {
    // if !NaN
    if (+item == +item) {
        numbers.push(+item);
    }
}

let numberPrims = numbers.map(x => new Number(x));

let sum = +numberPrims.reduce((head,tail) => head+tail);
console.log(sum);