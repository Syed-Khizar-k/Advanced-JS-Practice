//Part 2: String Methods
/*
TASK NO 1: 
Replace Vowels with a Character
Write a function replaceVowels() that replaces all vowels in a string with a specific character.
*/

function replaceVowels() {
  let string = "Hello World";
  //regular expression to match vowels in upper and lower case
  let vowels = /[aeiouAEIOU]/g;
  let chr = "*";
  let ne = string.replace(vowels, chr);
  console.log(ne);
}
replaceVowels();

/*
TASK NO 2: 
Reverse Each Word
Write a function reverseEachWord() that reverses each word in a string using split() and map().
*/
function reverseEachWord() {
  let string = "My Name Is Syed Khizar";
  let reversed = string
    .split(" ")
    .map((num) => num.split("").reverse().join(""))
    .join(" ");

  console.log(reversed);
}
reverseEachWord();

/*
TASK NO 3 : 
Count Unique Characters
Write a function countUniqueCharacters() that counts the number of unique characters in a string.
*/
function countUniqueCharacters(string) {
  //set unique characters
  let uniqueChar = new Set(string);
  return uniqueChar.size;
}
let string = "Hello";
console.log(countUniqueCharacters(string));
