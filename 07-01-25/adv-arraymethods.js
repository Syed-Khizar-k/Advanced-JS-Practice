/*
TASK NO 1:
Find Local Maxima Write a function findLocalMaxima() that:
Finds all local maxima in an array (values greater than their neighbors).
*/

function findLocalMaxima(arr) {
  //empty array used to store maxima values
  let maxima = [];
  //this loops through each array element that skips first and last index as they dont have their right or left value and we can not find their maxima
  for (let i = 1; i < arr.length - 1; i++) {
    //this will checks that if current element is greater than its left and right element
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      maxima.push(arr[i]);
    }
  }
  console.log(maxima);
}
let arr = [1, 3, 2, 8, 1];
findLocalMaxima(arr);

/*
TASK NO 2: 
Replace Values by Frequency Write a function replaceByFrequency() that:
Replaces each element in an array with its frequency in the array.
*/

function replaceByFrequency(array) {
  //created an object to store keys and values
  let frequency = {};
  //loops through every value
  array.forEach((num) => {
    // checks if current value is available
    if (frequency[num]) {
      //if availanle then increment the value in object
      frequency[num]++;
    } else {
      //if not available then assign the value to 1
      frequency[num] = 1;
    }
  });
  console.log(frequency);
}
let array = [1, 2, 2, 2, 3, 3, 4];
replaceByFrequency(array);

/*
TASK NO 3 : 
Chunk Array Write a function chunkArray() that:
Splits an array into subarrays of a specified size.

*/

function chunkArray(arra1) {
  //this slice method splits the array from starting index to ending index as given in the parameters of splice. it does not affect the original array.
  let splited = arra1.slice(2, 7);
  console.log(splited);
}
let arra1 = [1, 2, 3, 4, 5, 6, 7, 8];
chunkArray(arra1);
