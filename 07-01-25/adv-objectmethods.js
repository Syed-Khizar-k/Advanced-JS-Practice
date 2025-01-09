//Part 3: Advanced Object Methods

/*
TASK NO 1: 
Inventory Summary Write a function generateInventorySummary() that:
Accepts an object of items with their quantities.
Returns a summary showing total quantity and distinct items.
*/
function generateInventorySummary(items) {
  let distinct = [];
  let totalQuantity = 0;
  //this for loop wiht in method used to get into items of objects
  for (let item in items) {
    totalQuantity += items[item];
    distinct.push(item);
  }

  summary = {
    quantity: totalQuantity,
    distinctItems: distinct,
  };

  return summary;
}

let items = {
  mango: 5,
  apples: 20,
  banans: 10,
  pear: 5,
};

console.log(generateInventorySummary(items));

/*
TASK NO 2:
Nested Object Flattener Write a function flattenObject() that:
Flattens a nested object into a single-level object with dot-separated keys.
*/
//NOT COMPLETED

/*
Task No 3: 
Library Manager Create an object library with:
books: An array of book objects (title, author, copies).
Methods to:
Add a book.
Lend a book (decrease copies).
Check availability of a book by title.
*/

let library = [
  { title: "power", author: "usama", copies: 5 },
  { title: "power1", author: "usama", copies: 5 },
  { title: "power2", author: "usama", copies: 5 },
];

function lendBook(library) {
  let selected = prompt(`Enter title of book : `);
  for (let i = 0; i < library.length; i++) {
    if (selected === library[i].title) {
      library[i].copies = library[i].copies - 1;
    }
  }
  console.log(library);
}

lendBook(library);

//check availability
function availability() {
  let title1 = prompt(`Enter Title Of Book : `);

  let isAvailable = library.filter((num) => {
    if (num.title === title1) {
      console.log("available");
    } else {
      console.log("not available");
    }
    
  });
  console.log(isAvailable);
}

availability();
//add book
function addBook() {
  let title = prompt(`Enter book title : `);
  let author = prompt(`Enter book author : `);
  let copies = parseInt(prompt(`Enter book copies : `));

  library.push({ title: title, author: author, copies: copies });
  console.log(library);
}
addBook();
