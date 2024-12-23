/*
SECTION 1: 
Create an array with at least 5 numbers and:
....Display the numbers: 
....Add a new number to the end of the array.
....Remove the first number from the array.
Create an array of 5 strings and:
...Display the strings.
...Sort the array alphabetically without using functions.
*/

//1:Create an array with at least 5 numbers and display numbers
let arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfNumbers);

//2:Add a new number to the end of the array.
arrayOfNumbers.push(6);
console.log(arrayOfNumbers);

//3:Remove the first number from the array.
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

//4:Create an array of 5 strings and display the strings

let arrayOfStrings = ["i", "am", "syed", "khizar", "hussain"];
console.log(arrayOfStrings);

//5:Sort the array alphabetically without using functions.
let anArray = ["banana", "apple", "cherry", "grape", "date"];

for (let i = 0; i < anArray.length - 1; i++) {
  for (let j = i + 1; j < anArray.length; j++) {
    if (anArray[i] > anArray[j]) {
      let temp = anArray[i];
      anArray[i] = anArray[j];
      anArray[j] = temp;
    }
  }
}
console.log(anArray);

/*
SECTION 2: 
..Create an array of numbers. Remove duplicate numbers from the array without using functions.
..Create an array of numbers and find the largest and smallest number manually.
..Reverse an array without using built-in functions (manually rearrange the elements).

*/

//6: Create an array of numbers. Remove duplicate numbers from the array without using functions.

let numbers = [1, 2, 3, 3, 4, 4, 5, 6];

