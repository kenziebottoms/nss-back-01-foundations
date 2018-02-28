const dog = {
    color: "multi",
    name: {firstName: "Murph"},
    breed: "Aussie mix",
    speak: () => "Woof"
};

// old school
// var color = dog.color;
// var name = dog.name.firstName
// var breed = dog.breed
// var speak = dog.speak
// console.log(color);

// hip
// const {color} = dog;
// console.log(color);
// const {name: {firstName}} = dog;
// console.log(firstName);

// hip AND concise
const { color, name: {firstName: dogFirstName}, breed, speak} = dog;
console.log(color, dogFirstName, breed, speak);