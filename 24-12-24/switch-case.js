/*
Task 1: Month Name
Write a function getMonthName() that takes a number from 1 to 12 and returns the corresponding month's name using a switch statement
*/
function getMonthName(number) {
  switch (number) {
    case 1:
      console.log("january");
      break;
    case 2:
      console.log("feburary");
      break;
    case 3:
      console.log("march");
      break;
    case 4:
      console.log("april");
      break;
    case 5:
      console.log("may");
      break;
    case 6:
      console.log("june");
      break;
    case 7:
      console.log("july");
      break;
    case 8:
      console.log("august");
      break;
    case 9:
      console.log("september");
      break;

    case 10:
      console.log("october");
      break;
    case 11:
      console.log("november");
      break;
    case 12:
      console.log("december");
      break;

    default:
      console.log("no matching with any month");

      break;
  }
}
// getMonthName(3);

/*
Task 12: Grade Converter
Write a function convertGrade() that takes marks as input and returns grades (A, B, C, etc.) using a switch statement.
*/
function convertGrade(marks) {
  let grade;
  switch (true) {
    case marks >= 90:
      grade = "A";
      break;
    case marks >= 80:
      grade = "B";
      break;
    case marks >= 70:
      grade = "C";
      break;
    case marks >= 60:
      grade = "D";
      break;
    case marks >= 50:
      grade = "E";
      break;
    default:
      grade = "F";
  }
  return grade;
}

console.log(convertGrade(85));

/*
Task 3: Arithmetic Operations
Write a function performOperation() that takes two numbers and an operator (+, -, *, /, %) as input and performs the operation using a switch statement.
*/
function performOperation(nm1, nm2, oper) {
  let sum;
  switch (true) {
    case oper === "+":
      sum = nm1 + nm2;
      break;
    case oper === "+":
      sum = nm1 + nm2;
      break;
    case oper === "+":
      sum = nm1 + nm2;
      break;
    case oper === "+":
      sum = nm1 + nm2;
      break;
    case oper === "+":
      sum = nm1 + nm2;
      break;

    default:
      break;
  }
}

/*
Task 4: Season Checker
Write a function getSeason() that takes a month number (1-12) and returns the corresponding season (Winter, Spring, Summer, Fall) using a switch statement.
*/
function getSeason(month) {
  let season;
  switch (true) {
    case month >= 10:
      season = "winter";
      break;
    case month >= 6:
      season = "summer";
      break;
    case month >= 4:
      season = "Spring";
      break;
    case month < 4:
      season = "fall";
      break;

    default:
      break;
  }
  console.log(season);
}
getSeason(2);
