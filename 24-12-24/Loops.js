/*
Task 1: Print Numbers Using a Loop
Write a function printNumbers() that takes a number n as input and prints all numbers from 1 to n using a for loop.
*/
function printNumbers(n) {
  //this loop first print value of i then starts the loop to increment
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
// printNumbers(5);

/*
Task 2: Print Numbers in Reverse
Write a function printReverse() that takes a number n and prints numbers from n to 1 using a for loop.
*/
function printReverse(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

// printReverse(5);

/*
Task 3: Calculate the Factorial of a Number
Write a function factorial() that takes a number n and calculates its factorial using a for loop
*/
let result = 1;
function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

// console.log(factorial(5));

/*
Task 4: Fibonacci Sequence
Write a function fibonacci() that takes a number n and prints the first n terms of the Fibonacci sequence using a while loop.
*/
function fibonacci(n) {
  let a = 0;
  let b = 1;
  let count = 0;
  while (count < n) {
    //to log a , it print first 0
    console.log(a);
    //sum the last two numbers
    let addLastNums = a + b;
    //updating the value of a and b for next iteration count
    a = b; //a becomes b
    b = addLastNums; //b becomes the addition if a+b
    //for the iteration conditions
    count++;
  }
}

// fibonacci(5);

/*
Task 5: Nested Loops for Patterns
Write a function printPattern() that takes a number n and prints the following pattern using nested loops:
markdown
*
**
***
****
*****

*/

function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    //inner loop and make j<=i so that when when outer loop runs inner loop also runs
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

printPattern(5);
