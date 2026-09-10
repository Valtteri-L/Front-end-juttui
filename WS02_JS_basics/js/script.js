// Exercise 2 – Variables
const nimi = "Billy";
let age = 99;
const favouriteAnimal = "Albanian Wild Boar";

console.log(`Hello, my name is ${nimi} and my favorite animal is ${favouriteAnimal}`);

// Exercise 3 – User Input
const who = prompt('Give me your name');

console.log(`Hello ${who}! Welcome to somewhere.`);

// Exercise 4 – Conditionals
const howOld = prompt('How old are ya');

if (howOld >= 18) {
    console.log('You are an adult.');
}
else {
    console.log('You are under 18.');
}

// Exercise 5 – Functions
function greetUser(name) {
    console.log(`Hello ${name}!`)
}

greetUser("Joe Schmoe");

// Bonus – Connect JavaScript to the Page

function haha() {
    document.getElementById('moi').innerHTML = 'BOOOOOOOOOOOOOOOOOOO!!!!!!!!!'
    document.body.animate([
        { backgroundColor: 'red' },
        { backgroundColor: 'rgb(156, 7, 7)' }
    ], {
        duration: 1000,
        iterations: Infinity,
        direction: 'alternate'
    });
    alert("You did this");
}