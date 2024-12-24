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
// arrayOperations([5, 2, 4, 3, 4, 1, 5]);

/*
Task 3: Menu-Driven Program
Create a menu-driven program with the following options:
1:Perform string operations.
2:Perform number operations (e.g., find GCD, check prime).
3:Perform array operations.
4:Perform arithmetic operations (calculator).
5:Exit the program.
...Use a switch statement for menu navigation and loops to keep the program running until the user exits.

*/

function menuDrivenProgram() {
  let choice;
  do {
    console.log("------Menu-----");
    console.log("1.Perform string operations");
    console.log("2:Perform number operations");
    console.log("3:Perform array operations");
    console.log("4:Perform arithmetic operations");
    console.log("5:Exit the program");

    choice = parseInt(prompt("Select option between (1-5)"));

    switch (choice) {
      case 1:
        stringOperations("hello khizar");
        break;

      case 2:
        arrayOperations([5, 2, 4, 3, 4, 1, 5]);
        break;

      case 3:
        arrayOperations([5, 2, 4, 3, 4, 1, 5]);
        break;

      case 4:
        arithematic(10, 12);
        break;

      case 5:
        console.log("Exited Successfully -----");

        break;

      default:
        console.log("please enter correct option");

        break;
    }
  } while (choice !== 5);

  function arithematic() {
    nm1 = parseInt(prompt("Enter first number : "));
    nm2 = parseInt(prompt("Enter second number : "));
    console.log(nm1 + nm2);
    console.log(nm1 - nm2);
    console.log(nm1 / nm2);
    console.log(nm1 % nm2);
  }
}

menuDrivenProgram();
