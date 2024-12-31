//Part 3: Object Methods
/*
Task NO 1: 
Count Nested Keys
Write a function countNestedKeys() that counts all keys, including keys inside nested objects.
 */
function countNestedKeys(data) {
  let details = data.Adress.area;
  console.log(details);
}
let data = {
  "id no ": 33301856993,
  name: "Syed Khizar",
  Adress: {
    city: "Gojra",
    area: "Hafeez Parak",
  },
};
// countNestedKeys(data);

/*
TASK NO 2: 
Combine Object Arrays
Write a function combineObjectArrays() that combines two arrays of objects into one, merging objects with the same key.
*/
function combineObjectArrays(arr1, arr2, key) {
  let result = [];
  //added array 1 into result
  arr1.forEach((obj1) => {
    result.push(obj1);
  });

  arr2.forEach((obj2) => {
    let found = false;
    for (let i = 0; i < arr2.length; i++) {
      if (result[i][key] === obj2[key]) {
        result[i] = { ...result[i], ...obj2 };
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(obj2);
    }
  });
  console.log(result);
}

let arr1 = [
  { name: "khizar", class: "bs" },
  { name: "umar", class: "abc" },
];
let arr2 = [
  { age: "12", class: 12 },
  { name: "khizar", roll: 18 },
];

// combineObjectArrays(arr1, arr2, "name");

/*
TASK NO 3 : 
Bookstore Inventory
Create an object for a bookstore (books, inventory) with methods to:
Add a new book to inventory.
Check if a book is in stock.

 */
let bookStore = {
  inventory: [],

  addbook: function (title, author, quantity) {
    let book = {
      title: title,
      author: author,
      quantity: quantity,
    };
    this.inventory.push(book);
    console.log(`book has been added`);
  },

  isInsStock: function (title) {
    for (let book of this.inventory) {
      if (book.title === title && book.quantity > 0) {
        return true;
      }
      return false;
    }
  },
};

bookStore.addbook("power", "khizar", 8);
bookStore.addbook("games", "robert", 0);

console.log(bookStore.isInsStock("power"));
console.log(bookStore.isInsStock("games"));
