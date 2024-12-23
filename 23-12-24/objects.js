// OBJECTS TASKS:

/*
1: Create an object to represent a student with properties like:
Name, age, and class. Display each property on the console.
*/
let Student = {
  Name: "ALI",
  age: "19",
  class: "alpha-b",
};
console.log(Student);

//2: Add a new property (e.g., "grade") to the object and display it.
Student["grade"] = "A+";
console.log(Student);

//3: Create an object with details about a car (e.g., make, model, year, color). Change the value of one of the properties and display the updated object

let Car = {
  make: "honda",
  model: "yaris",
  year: 2024,
  color: "red",
};
Car.model = "turbo";

console.log(Car);

//4: Create multiple objects (e.g., students or products). Store them in an array and display the details of each object.

let array = [
  { name: "syed khizar", age: 19, grade: "A+" },
  { name: "syed Umair", age: 23, grade: "C-" },
  { name: "Hammad", age: 20, grade: "A" },
];

for (let i = 0; i < array.length; i++) {
  console.log("Name :" + array[i].name);
  console.log("Age :" + array[i].age);
  console.log("Grade :" + array[i].grade);
  console.log("-----------------");
}

//5: Create an object to represent a book in a library with properties like title, author, and availability. Update the availability status manually and display the updated object.

let Book = {
  title: "power",
  author: "khizar",
  availability: "yes",
};

Book.availability = "out of stock";
console.log(Book);
