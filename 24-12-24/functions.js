//Tasks on Functions

/*
Task 1: Palindrome Checker
Write a function isPalindrome() that takes a string as input and checks if it is a palindrome.
*/

function isPalindrome(string) {
  // string.split("") this split every word into array .reverse() this reverse the array .join("") this again join as string;
  if (string === string.split("").reverse().join("")) {
    console.log("yes this is a palindrome");
  } else {
    console.log("no it is not palindrome");
  }
}
isPalindrome("civic");

/*
Task 2: Count Vowels and Consonants
Write a function countVowelsConsonants() that takes a string as input and counts the number of vowels and consonants.
*/

function countVowelsConsonants(string) {
  let vowel = 0;
  let consonants = 0;
  //created a new vowelset to describe these are vowels
  let vowelSet = new Set(["a", "e", "i", "o", "u"]);
  //this line loops through each charachter.
  for (let char of string) {
    //this line check in vowelset wether it .has(char) in it.
    if (vowelSet.has(char)) {
      vowel++;
    } else {
      consonants++;
    }
  }
  console.log(`The number of vowel are : ${vowel}`);
  console.log(`The number of consonants are : ${consonants}`);
}
countVowelsConsonants("hello");

/*
Task 3: Find the GCD of Two Numbers
Write a function findGCD() that takes two numbers as input and calculates their greatest common divisor using a loop.
*/

function findGCD(nm1, nm2) {
  let divisorsOfnm1 = [];
  let divisorsOfnm2 = [];
  for (let i = 1; i <= nm1; i++) {
    if (nm1 % i === 0) {
      divisorsOfnm1.push(i);
    }
  }

  for (let j = 1; j <= nm1; j++) {
    if (nm2 % j === 0) {
      divisorsOfnm2.push(j);
    }
  }
  console.log(divisorsOfnm1);
  console.log(divisorsOfnm2);

  let common = divisorsOfnm1.filter((value) => divisorsOfnm2.includes(value));

  console.log(Math.max(...common));
}
findGCD(12, 18);

/*
 Task No 4: Reverse a String
Write a function reverseString() that takes a string as input and returns its reverse.
*/

function reverseString(string) {
  let reversed = string.split("").reverse().join("");

  console.log(reversed);
}
reverseString("hello");

/*
Task 5: Armstrong Number Checker
Write a function isArmstrong() that takes a number as input and checks if it is an Armstrong number.
*/

function isArmstrong(number) {
  let string = number.toString();

  let sum = 0;
  for (let char of string) {
    let mul = char ** string.length;
    sum += mul;
  }
  return sum === number;
}
console.log(isArmstrong(153));
