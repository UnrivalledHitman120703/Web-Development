// Program to make a keyless car
// Name = Indrajeet Modnal; Date = 27th May 2023
// SourceCode

const prompt = require("prompt-sync")();

let age = prompt("Enter your age:- ");

if (Number(age) < 18) {
    console.log("Sorry, you are too young to drive this car. Powering off");
}
else if (Number(age) == 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
}
else {
    console.log("Powering On. Enjoy the ride!");
}