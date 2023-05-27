// Program to perform simple calculations
// Name = Indrajeet Mondal; Date = 27th April 2023
// SourceCode

//To run in browser we don't need prompt-sync, prompt-sync is used to take input from the console/terminal; prompt is sufficient to take input from the browser as a pop-up
const prompt = require("prompt-sync")();

let a = prompt("Enter a number:- ");
let b = prompt("Enter a number:- ");

let sum = a + b;
let product = a * b;
let diff = a - b;

// For running in the browser replace console.log() with alert
console.log("The sum of " + a + " and " + b + " is " + sum + ".");
console.log("The product of " + a + " and " + b + " is " + product + ".");
console.log("The diff of " + a + " and " + b + " is " + diff + ".");

if (b != 0) {
    let quotient = a / b;
    console.log("The quotient of " + a + " and " + b + " is " + quotient + ".");
}
else {
    console.log("Division by zero not possible");
}