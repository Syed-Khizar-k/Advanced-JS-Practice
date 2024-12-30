//Part 1: Array Methods

/*
TASK NO 1: 
Subtract Index from Numbers
Write a function subtractIndex() that subtracts the index of each element from its value using map().
*/

function subtractIndex(arr) {
  let array2 = [5, 6, 7, 87, 16];
  let newArray = array2.map((value, index) => value - index);
  console.log(newArray);
}
// subtractIndex();

/*
TASK NO 2: 
Filter Non-Numeric Values
Write a function filterNonNumbers() that removes all non-numeric values from an array using filter().
*/

function filterNonNumbers() {
  let array1 = [1, 2, 3, "hello", true];
  let numbers = array1.filter((num) => typeof num === "number" || !isNaN(num));
  console.log(numbers);
}
// filterNonNumbers();

/*
TASK NO 3: 
Calculate Range
Write a function calculateRange() that calculates the range (difference between max and min) of numbers in an array using reduce(). Use try-catch for error handling.
*/

function calculateRange() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let maxNum = array.reduce(
    (acc, currVal) => (acc > currVal ? acc : currVal),
    -Infinity
  );
  let minNum = array.reduce(
    (acc, currVal) => (acc < currVal ? acc : currVal),
    Infinity
  );

  let range = maxNum - minNum;
  console.log(range);
}
// calculateRange();
