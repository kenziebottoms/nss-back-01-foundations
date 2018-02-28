const [,,...name] = process.argv;

// reference: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
let sleep = x => {
    return new Promise(resolve => setTimeout(resolve, x));
};

// "hai mark" => ["h","a","i"," ","m","a","r","k"]
let list = phrase => {
    let letters = [];
    for (let word in phrase) {
        for (let letter in phrase[word]) {
            letters.push(phrase[word][letter]);
        }
        letters.push(" ");
    }
    letters.pop();
    return letters;
};

// does the cheer
async function cheer(phrase) {
    let letters = list(phrase);
    letters = letters.map(l => l.toUpperCase());
    for (let i in letters) {
        if (letters[i] != " ") {
            console.log(`Give me ${articleOf(letters[i])} ${letters[i]}!`);
            await sleep(1000);
        } else {
            console.log("");
        }
    }
    console.log("\nWhat does that spell?");
    await sleep(1000);
    letters.push("!");
    console.log(letters.join(""));
}

// returns "a" or "an" according to letter
let articleOf = letter => {
    let an = ["A","E","F","H", "I","L","M","N","O","R","S","X"];
    if (an.indexOf(letter) == -1) {
        return "a";
    } else {
        return "an";
    }
};

cheer(name);