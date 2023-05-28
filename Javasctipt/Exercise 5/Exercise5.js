// Program to make a keyless car even better 
// Name = Indrajeet Mondal; Date = 28th May 2023
// SourceCode

const prompt = require("prompt-sync")();

// Part 1:
function checkDriverAge(age) {
    let age = prompt("Enter your age:- ");
    if (Number(age) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) == 18) {
        console.log("Powering On. Enjoy the ride!");
    } else {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

// Part 2:
let checkDriverAge2 = function () {
    let age = prompt("Enter your age:- ");
    if (Number(age) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) == 18) {
        console.log("Powering On. Enjoy the ride!");
    } else {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

// Bonus:
function checkDriverAge(age) {
    if (Number(age) < 18) {
        return("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) == 18) {
        return("Powering On. Enjoy the ride!");
    } else {
        return("Congratulations on your first year of driving. Enjoy the ride!");
    }
}