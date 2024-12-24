//Part 5: Comprehensive Tasks (Combine Concepts)

/*
Task 1: String Operations
Write a function stringOperations() that:
*/
function stringOperations(string) {
  //Converts a string to uppercase and lowercase.
  let upperCase = string.toUpperCase();
  console.log(upperCase);

  let lowerCase = string.toLowerCase();
  console.log(lowerCase);

  //Replaces a specific word with another word.

  let replace = string.replace("khizar", "hammad");
  console.log(replace);

  //Counts the total number of words and characters.
  let count = 0;
  words = 0;
  for (let char of string.replace(/\s+/g, "")) {
    count++;
  }
  console.log(count);
}
// stringOperations("hello khizar");

/*
Task 2: Array Operations
Write a function arrayOperations() that:
*/
function arrayOperations(numbers) {
  //Removes duplicates from an array.
  let newArray = [...new Set(numbers)];
  console.log(newArray);

  //Finds the largest and smallest numbers.
  let largest = Math.max(...numbers);
  console.log(largest);
  let smallest = Math.min(...numbers);
  console.log(smallest);
  //Sorts the array manually without using built-in functions.
  let n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  console.log(numbers);
}
arrayOperations([5, 2, 4, 3, 4, 1, 5]);
