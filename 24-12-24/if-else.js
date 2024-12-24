/*
Task 1: Leap Year Checker
Write a function isLeapYear() that takes a year as input and checks if it is a leap year using if-else conditions.

*/
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("This is a Leap Year");
  } else {
    console.log("This is not a Leap Year");
  }
}
// isLeapYear(1900);

/*
Task 2: Positive, Negative, or Zero 
Write a function checkNumber() that takes a number as input and checks if it is positive, negative, or zero using if-else conditions.
*/

function checkNumber(number) {
  if (number > 0) {
    console.log("number is positive");
  } else if (number < 0) {
    console.log("number is negative");
  } else {
    console.log("this is zero");
  }
}
// checkNumber(-1);

/*
Task 3: Traffic Light Signal
Write a function trafficSignal() that takes a color ("red", "yellow", "green") as input and displays the appropriate message:
Red: "Stop."
Yellow: "Get Ready."
Green: "Go."

*/
function trafficSignal(color) {
  if (color === "red") {
    console.log("Stop.");
  } else if (color === "yellow") {
    console.log("Get Ready");
  } else if (color === "green") {
    console.log("GO");
  } else {
    console.log("Please Enter red,green or yellow");
  }
}
// trafficSignal("yellow");

/*
Task 9: Find the Largest of Three Numbers
Write a function findLargest() that takes three numbers as input and finds the largest using if-else conditions.

*/
function findLargest(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(`${n1} is Largest`);
  } else if (n2 > n1 && n2 > n3) {
    console.log(`${n2} is Largest`);
  } else {
    console.log(`${n3} is Largest`);
  }
}

// findLargest(1, 3, 2);

/*
Task 10: Check for Prime Number
Write a function isPrime() that takes a number as input and checks if it is a prime number using a for loop and if-else conditions.
*/
function isPrime(number) {
  if (number <= 1 || (number % 2 === 0 && number % 3 === 0)) {
    console.log("not prime");
  } else if (number % 5 !== 0 && number % 7 !== 0) {
    console.log("number is prime");
  } else {
    console.log("number is prime");
  }
}
isPrime(17);
