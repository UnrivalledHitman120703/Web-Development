// Program to make a keyless car
// Name = Indrajeet Modnal; Date = 27th May 2023
// SourceCode

let age = prompt("Enter your age:- ");

if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
}
else if (Number(age) == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else {
    alert("Powering On. Enjoy the ride!");
}