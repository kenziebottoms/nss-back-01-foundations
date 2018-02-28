// let name = process.argv[2];
const [,,first,last] = process.argv;

// these two are practically the same
// console.log(`Hello, ${first} ${last}!`);
process.stdout.write(`Hello, ${first} ${last}!\n`);


// listen for the exit event
process.on("exit", () => {
    console.log("Bye!");
});