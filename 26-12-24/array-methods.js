//Part 1: Array Methods

/*
TASK NO 1: 
Add 5 to Each Number
Write a function addFive() that adds 5 to each number in an array using map().
*/

function addFive(num1) {
  let array = [1, 2, 3, 4, 5, 6];
  let addArray = array.map((num) => num + num1);
  console.log(addArray);
}
// addFive(5);

/*
TAASK NO 2: 
Filter Numbers Greater than 10
Write a function filterGreaterThanTen() that filters numbers greater than 10 from an array using filter().
*/

function filterGreaterThanTen() {
  let array1 = [1, 3, 5, 10, 24, 12, 23];
  let newArray1 = array1.filter((num) => num > 10);
  console.log(newArray1);
}
// filterGreaterThanTen();

/*
TASK NO 3: 
Calculate Average
Write a function calculateAverage() that calculates the average of numbers in an array using reduce().
*/
function calculateAverage() {
  let array2 = [1, 2, 3, 45, 24];
  let newArray2 =
    array2.reduce((current, num) => current + num, 0) / array2.length;
  console.log(newArray2);
}
calculateAverage();
