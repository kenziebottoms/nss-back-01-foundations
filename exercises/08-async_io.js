"use strict";

const { readFile } = require("fs");
const [,,file] = process.argv;

if (file) {
    readFile(file, (err, data) => {
        if (err) return console.log(err);
        console.log(new String(data));
    });
} else {
    console.log("Please pass in a filepath.");
    process.exit();
}