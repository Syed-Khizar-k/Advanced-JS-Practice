// Part 2: String Methods

/*
TASK NO 1: 
Find String Length
Write a function getStringLength() that returns the length of a string using length.
*/
function getStringLength() {
  let array3 = [1, 2, 3, 4, 5, 6];
  return array3.length;
}
// console.log(getStringLength());

/*
TASK NO 2: 
Split a Sentence
Write a function splitSentence() that splits a sentence into words using split().
*/

function splitSentence() {
  let sentence = "syed khizar hussain";
  let wordOfSentences = sentence.split(" ");
  console.log(wordOfSentences);
}
// splitSentence();

/*
TASK NO 3: 
Replace First Occurrence
Write a function replaceFirst() that replaces the first occurrence of a word in a string using replace()
*/
function replaceFirst(oldWord, newWord) {
  let string = "Aslam Likes Apples and Banans";
  let replaced = string.replace(oldWord, newWord);
  console.log(replaced);
}
replaceFirst("Aslam", "Khizar");
