"use strict";

const  { readFileSync } = require("fs");

const [,,file] = process.argv;
if (file) {
    try {
        const data = readFileSync(file);
        console.log(data.toString());
    } catch(err) {
        console.log("Error", err);
    }
} else {
    console.log("Please pass in the name of a file to read.");
    process.exit();
}