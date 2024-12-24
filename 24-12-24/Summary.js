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

// menuDrivenProgram();

/*
Task 4: Generate a Pattern
Write a function generatePattern() that prints the following pattern:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

function generatePattern(num) {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    console.log(pattern);
  }
}
// generatePattern(5);

/*
Task 5: Number Guessing Game
Write a function guessNumber() that generates a random number between 1 and 100 and allows the user to guess it. Provide feedback (too high/too low) until the user guesses correctly.

*/

function guessNumber() {
  //for random numbers
  let randomNum = Math.floor(Math.random() * 100) + 6;
  let guess = 0;

  console.log("Enter Your Guess(1-100) !");
  while (guess !== randomNum) {
    guess = parseInt(prompt(`Enter Your Guess : `));

    if (guess > randomNum) {
      console.log("too high");
    } else if (guess < randomNum) {
      console.log("too low");
    } else {
      console.log(`congrats You win! the number was : ${randomNum}`);
      break;
    }
  }
}

// guessNumber();

/*
Task 25: Mini Database
Create an array of objects to represent a database of books (title, author, genre, availability). Write functions to:
Add a new book.
Search for a book by title or author.
List all available books.
Update the availability of a book.
*/
let booksData = [
  { title: "Power", author: "syed khizar", availablity: "available" },
  { title: "Magic", author: "umar", availablity: "available" },
  { title: "Law", author: "usama", availablity: "available" },
  { title: "Power", author: "john", availablity: "available" },
  { title: "Worse", author: "summi", availablity: "out of stock" },
  { title: "Mern", author: "ali", availablity: "available" },
];
//Search for a book by title or author.
function searchBook() {
  title = prompt("Enter the title of Book : ");
  author = prompt("Who is the author of Book");
  for (let i = 0; i < booksData.length; i++) {
    if (title === booksData[i].title || author === booksData[i].author) {
      console.log(booksData[i]);
    } else {
      console.log("Book is not available");
    }
  }
}
searchBook();

//List all available books.
function availableBooks() {
  console.log(booksData);
}
availableBooks();

//Add a new book.
function addBook() {
  let title, author, availablity;
  let newBook = {
    title: title,
    author: author,
    availablity: availablity,
  };
  newBook.title = prompt("Enter Title Of Book: ");
  newBook.author = prompt("Enter Author name Of Book: ");
  newBook.availablity = prompt("Availability Status: ");

  booksData.push(newBook);
}
addBook();

//Update the availability of a book.
function update() {
  availability = prompt("Enter the Status to update ");
}
