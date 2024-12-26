//Part 3: Object Methods

/*
TASK NO 1 : 
Print Object Keys and Values
Write a function printKeysAndValues() that prints all keys and their values from an object.
*/

function printKeysAndValues() {
  let ab = {
    name: "syed khizar",
    class: "BS",
  };
  console.log(Object.keys(ab));

  console.log(Object.values(ab));
}
// printKeysAndValues();

/*
TASK NO 2 : 
Clone an Object
Write a function cloneObject() that creates a shallow copy of an object using the spread operator.
*/
function cloneObject() {
  let abc = {
    name: "syed khizar",
    rollno: 12,
  };
  let shallowCopy = { ...abc };
  console.log(shallowCopy);
}
// cloneObject();

/*
TASK NO 3: 
Book Record
Create an object for a book (title, author, genre) with methods to:
Change the availability status.
Update the genre.

*/
let booksData = {
  title: "power",
  author: "khizar",
  genre: "brain skills",
  available: "yes",

  changeAvailable(status) {
    this.available = status;
    console.log(`status of availability is ${this.available}`);
  },

  updateGenre(name) {
    this.genre = name;
    console.log(`the genre of this book is ${this.genre}`);
  },
};
booksData.changeAvailable("yes");
booksData.updateGenre("Health skills");
