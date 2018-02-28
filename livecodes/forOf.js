const junk = [1, "Fred", true];
console.log(junk);  // [1, "Fred", true]

const entries = junk.entries();
console.log(entries);   // {}

console.log("\nfor of");
for (let entry of entries) {
    console.log(entry);  // [0, 1], [1, "Fred"], [2, true]
}

console.log("\nfor in");
for (let entry in entries) {
    console.log(entry);  // nothing!!!!
}

console.log("\nfor of @list");
for (let item of junk) {
    console.log(item);
}

console.log("\nfor in @list");
for (let item in junk) {
    console.log(item);
}