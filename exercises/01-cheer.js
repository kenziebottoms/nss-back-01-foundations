const [,,...name] = process.argv;

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

let shout = letters => {
    for (let i in letters) {
        if (letters[i] != " ") {
            console.log(`Give me ${articleOf(letters[i])} ${letters[i]}!`);
        } else {
            console.log("");
        }
    }
    console.log("\nWhat does that spell?");
    letters.push("!");
    console.log(letters.join(""));
};

let articleOf = letter => {
    let an = ["A","E","F","H", "I","L","M","N","O","R","S","X"];
    if (an.indexOf(letter) == -1) {
        return "a";
    } else {
        return "an";
    }
};

let letters = list(name);
let capLetters = letters.map(l => l.toUpperCase());
shout(capLetters);