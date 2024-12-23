//ARRAYS MANUPLATIONS WITHOUT FUNCTIONS

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

let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  let isDublicate = false;
  for (let j = 0; j < uniqueNumbers.length; j++) {
    if (numbers[i] === uniqueNumbers[j]) {
      isDublicate = true;
      break;
    }
  }

  if (!isDublicate) {
    uniqueNumbers[uniqueNumbers.length] = numbers[i];
  }
}
console.log(uniqueNumbers);

//7: Create an array of numbers and find the largest and smallest number manually.

let input = [3, 7, 2, 8, 5, 10, 1]; // Input array

// Initialize largest and smallest with the first element
let largest = input[0];
let smallest = input[0];

// Loop through the array to find largest and smallest numbers
for (let i = 1; i < input.length; i++) {
  if (input[i] > largest) {
    largest = input[i];
  }
  if (input[i] < smallest) {
    smallest = input[i];
  }
}

console.log(`Largest : ${largest}`);
console.log(`Smallest : ${smallest}`);

//8:Reverse an array without using built-in functions (manually rearrange the elements).

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

// reversing the array using a loop
for (let i = 0; i < n / 2; i++) {
  //swaping
  let temp = arr[i];
  arr[i] = arr[n - 1 - i];
  arr[n - 1 - i] = temp;
}

console.log(arr);

//9:Create two arrays of equal length. Combine them into a single array by alternately taking elements from each array
let array1 = [1, 2, 3, 4];
let array2 = ["a", "b", "c", "d"];

let mixed = [];
for (let i = 0; i < array1.length; i++) {
  mixed.push(array1[i]);
  mixed.push(array2[i]);
}
console.log(mixed);
