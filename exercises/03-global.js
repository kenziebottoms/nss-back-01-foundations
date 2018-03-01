#!/usr/bin/env node

"use strict";

let {version, versions: {v8}} = process;

console.log(`Node.js version: ${version}\nV8 version: ${v8}`);