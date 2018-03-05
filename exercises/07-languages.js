"use strict";

const { readFileSync } = require("fs");
const [,,file] = process.argv;

if (file) {
    try {
        const data = readFileSync(file);
        console.log(new String(data));
    } catch(err) {
        console.log("Error", err);
    }
} else {
    console.log("Please pass in a filepath.");
    process.exit();
}