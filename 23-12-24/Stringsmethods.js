//Tasks on String Methods
/*
TASK NO 1: 
Input a sentence and:
Convert the sentence to all uppercase and all lowercase and display the results.
Count the total number of characters (including spaces).
Count how many times a specific character (e.g., 'a') appears in the string.
Extract the first word and the last word from a sentence and display them separately.

*/

let sentence = "my name is syed khizar";
//to upper case
let upperCase = sentence.toUpperCase();
console.log(upperCase);
//to lower case
let lowerCase = sentence.toLowerCase();
console.log(lowerCase);

//Count the total number of characters (including spaces).
let charNumbers = sentence.length;
console.log("total numbers in sentence is : " + charNumbers);

//Count how many times a specific character (e.g., 'a') appears in the string.

let charToCount = "h";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === charToCount) {
    count++;
  }
}

console.log(`the total number of ${charToCount} is : ${count}`);

//Extract the first word and the last word from a sentence and display them separately.
//split the sentence into words
let word = sentence.split(" ");

let firstWord = word[0];
let lastWord = word[word.length - 1];

console.log(`the first word is ${firstWord} and last word is ${lastWord}`);

/*
TASK NO 2 : 
.Input a string and remove all the spaces. Display the modified string.
.Check if a string starts with a specific word or ends with a specific word (e.g., check if it starts with "Hello").
.Take a sentence, split it into an array of words, and display the array.
*/

//remvoe spaces from the string
let sentence1 = "syed khizar hussain shah";
let removeSpace = sentence1.replace(/\s+/g, "");

console.log(removeSpace);

//Check if a string starts with a specific word or ends with a specific word (e.g., check if it starts with "Hello").

let sentence2 = "Hello ! syed khizar";
let startsWith = sentence2.startsWith("Hello");
let endsWith = sentence2.endsWith("khizar");

console.log(`first word starts with "Hello" : ${startsWith}`);
console.log(`last word ends with "khizar" : ${endsWith}`);

//.Take a sentence, split it into an array of words, and display the array.

let sentence3 = "i am a developer";
let arrayOfSentence = sentence3.split(" ");
console.log(arrayOfSentence);

/*
TASK NO 3: 
Input a long sentence or paragraph. Replace all instances of a specific word with another word and display the modified sentence. For example:
Replace "good" with "excellent".

*/

let longSentence = "His performance was good and he won the silver madol.";

let wordToReplace = "good ";
let ReplacementWord = "excellent";
//replaces all words matched
let modifiedlongSentence = longSentence.replace(
  new RegExp(wordToReplace, "g"),
  ReplacementWord
);


console.log(modifiedlongSentence);
