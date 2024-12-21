//Part1 starts Here :

//1: Variable Declaration and Reassignment:
/*

Task 1 :
Declare three variables using let, const, and var.
Reassign values to the let and var variables to observe how they behave.
Try to reassign a const variable and note the error.

*/
let a = 12;
var b = 13;
const c = 14;

a = 20;
b = 30;
// console.log(a, b);

// c = 40;
// console.log(c);
//it gives me error as we can not change constant values.

//2: Identify Data Types:
/*

Task 2: Declare variables of different types (String, Number, Boolean, Object, Array).
Use the typeof operator to log their data types.

*/
let string = "syed khizar";
let numbers = 123;
let boolean = true;
let objects = {
  name: "syed khizar",
  phone: 923001268181,
};
let array = [1, 2, 3, 4];
// console.log(typeof string, numbers, boolean);
// console.log(typeof objects);
// console.log(typeof array);

//3: String Manipulation
/*
Task 3: 
Print a welcome message using your name stored in a variable.
Store your full name and favorite quote in variables. Combine them to print a meaningful message.
Calculate and print the total number of characters in your favorite quote.
*/

console.log("Welcome! syed khizar ");
let fullName = "syed khizar";
let favouriteQuote = "Dont give the brush of your life to others !";

let message = fullName + " " + favouriteQuote;
console.log(message);

console.log(favouriteQuote.length);
