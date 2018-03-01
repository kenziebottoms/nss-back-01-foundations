"use strict";

const { Transform } = require("stream");
let count = 0;

module.exports = () => Transform({
    transform(word, _, next) {
        count++;
        if (count <= 10) {
            next(null, word);
        } else {
            next(null, "limit reached");
        }
    }
});