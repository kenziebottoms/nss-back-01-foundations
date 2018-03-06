"use strict";

const {
    createReadStream,
    createWriteStream,
    appendFile,
    writeFile
} = require("fs");
const {
    Transform,
    Writable
} = require("stream");

const shout = Transform();
const writeStream = Writable();

let {argv: [,,file]} = process;

if (file) {
    createReadStream("07-languages.json")
        .pipe(writeStream);
} else {
    console.log("Please enter a file to be transformed.");
    process.exit();
}

shout._transform = (buffer, _, callback) => {
    callback(null, buffer.toString().toUpperCase);
};

writeStream._write = (buffer, _, next) => {
    writeFile(file, buffer, err => {
        if (err) throw err;
        console.log("The data to write was added to the file.");
    });
    next();
};