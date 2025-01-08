//: Advanced String Methods

/*
TASK NO 1 : 
Remove Specific Characters Write a function removeSpecificCharacters() that:
Removes specific characters (e.g., vowels, punctuation) from a string.

*/

function removeSpecificCharacters() {
  //this is a regular expration for vowels and punctuations
  let vowels = /[aeiouAEIOU!,.?*:;'"()-_]/g;
  //this will removes the vowls and punctuatuins
  let result = ar1.replace(vowels, "");
  console.log(result);
}
let ar1 = "Syed khizar! you are a doctor? ";
// removeSpecificCharacters(ar1);

/*
TASK NO 2 : 
Shift String Write a function shiftString() that:
Shifts all characters in a string by a given number of positions (e.g., abc, shift 2 → cde).
*/

function shiftString(str, shift) {
  //try catch error to catch invalid error
  try {
    if (typeof str !== "string") {
      throw new Error("INVALID INPUT");
    }
  } catch (error) {
    console.log("ERROR : ", error.message);
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    //declared the char equal to sting's current index
    char = str[i];
    //if else-if structure to check wether char's value is between a and z
    if (char >= "a" && char <= "z") {
      //fromCharCode is a function that gets value and converts into character for lowercase
      //charCodeAt is the calculation to give the value.
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97
      );
      //now this is for uppercase letters
    } else if (char >= "A" && char <= "Z") {
      result += String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift) % 26) + 65
      );
    } else {
      result += char;
    }
  }

  console.log(result);
}

let str = "Hello";
// shiftString(str, 2);

/*
TASK NO 3 :
Find Anagrams Write a function findAnagrams() that:
Finds all anagrams of a word in an array of strings.
*/

function findAnagrams(word) {
  //we use condition so that if we have 1 word function stops here instead it will give infinite loops
  if (word.length === 1) {
    return word;
  }

  let anagrams = [];
  //loop through each chrachter in word
  for (let i = 0; i < word.length; i++) {
    //we have declared first charachter
    let firstChar = word[i];
    //now we will remvoe this first char from word so that we can find remaining chars
    let remainingChars = word.slice(0, i) + word.slice(i + 1);
    //now we will find the anagrams of remainingchars
    //and this will make anagrams of remainingChars
    let smallerAnagrams = findAnagrams(remainingChars);
    //now this will push first charachter we declared + each anagram that we created above
    for (let anagram of smallerAnagrams) {
      anagrams.push(firstChar + anagram);
    }
  }
  return anagrams;
}
console.log(findAnagrams("eat"));
