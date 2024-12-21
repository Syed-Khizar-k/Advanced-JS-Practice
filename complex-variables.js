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

// console.log("Welcome! syed khizar ");
let fullName = "syed khizar";
let favouriteQuote = "Dont give the brush of your life to others !";

let message = fullName + " " + favouriteQuote;
console.log(message);

console.log(favouriteQuote.length);

//Part 2 Starts Here
/*
Task 1: 
Create 10 variables using different declarations (var, let, and const) to store numbers.
Calculate the SUM of all numbers and print the result.
Find the AVERAGE and print the result.
Multiply all numbers and print the PRODUCT.
Identify the largest and smallest numbers among them and print the results.
*/

let var1 = 10,
  va = 20,
  vb = 30,
  vc = 40;

var vd = 10,
  ve = 20,
  vf = 30;

const vg = 10,
  vh = 20,
  vi = 30;
//sum of all the nyumbers
let sum = var1 + va + vb + vc + vd + ve + vf + vg + vh + vi;
console.log(sum);
//average of all the numbers
let average = sum / 10;
console.log(average);
//product of all the numbers
let product = var1 * va * vb * vc * vd * ve * vf * vg * vh * vi;
console.log(product);
//identifying largest number
let largestNumber = Math.max(var1, va, vb, vc, vd, ve, vf, vg, vh, vi);
console.log(largestNumber);
//identifying Smallest number
let SmallestNumber = Math.min(var1, va, vb, vc, vd, ve, vf, vg, vh, vi);
console.log(SmallestNumber);

/*
Task 2: Perform complex arithmetic operations:
Add two numbers, multiply the result by a third number, and print the final result.
Subtract one number from another and raise it to the power of a third number.
Add three numbers together, divide by another number, and print the result.

*/
let arithmetic1 = (var1 + va) * vb;
console.log(arithmetic1);

let arithmetic2 = Math.pow(va - var1, 2);
console.log(arithmetic2);

let arithmetic3 = (var1 + va + vb) * var1;
console.log(arithmetic3);

