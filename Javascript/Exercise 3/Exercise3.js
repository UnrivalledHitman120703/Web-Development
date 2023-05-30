// Program to perform simple calculations
// Name = Indrajeet Mondal; Date = 27th May 2023
// SourceCode

let a = prompt("Enter a number:- ");
let b = prompt("Enter a number:- ");

let sum = a + b;
let product = a * b;
let diff = a - b;

// For running in the browser replace console.log() with alert
alert("The sum of " + a + " and " + b + " is " + sum + ".");
alert("The product of " + a + " and " + b + " is " + product + ".");
alert("The diff of " + a + " and " + b + " is " + diff + ".");

if (b != 0) {
    let quotient = a / b;
    alert("The quotient of " + a + " and " + b + " is " + quotient + ".");
}
else {
    alert("Division by zero not possible");
}