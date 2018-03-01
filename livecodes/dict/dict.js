const { createReadStream } = require("fs");
const { Writable } = require("stream");
const { map, split } = require("event-stream");
// import our transform stream;

const input = process.argv[2] ? process.argv[2].toLowerCase() : null;

const writeStream = Writable();
const wordListStream = createReadStream("/usr/share/dict/words");
const LimitToTen = require("./transform-limit10.js");

writeStream._write = (word, _, next) => {
    if (word.toString() === "limit reached") {
        process.exit();
    }
    process.stdout.write(word);
    next();
};

if (!input) {
    console.log("Usage: readfile [search term]");
    process.exit();
}

wordListStream
    .pipe(split())
    .pipe(map((word, next) => {
        word.toString().toLowerCase().includes(input) ?
            next(null, `${word}\n`) :
            next();
    }))
    .pipe(LimitToTen())
    .pipe(writeStream);