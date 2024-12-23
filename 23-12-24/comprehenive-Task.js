//A MINI DATA BASE:

let students = [
  { name: "syed khizar", age: 19, subject: "maths" },
  { name: "umair", age: 17, subject: "english" },
  { name: "hamad", age: 20, subject: "physics" },
];
//1:Add a new object to the array.

let newStudent = { name: "usama", age: 22, subject: "english" };
students[students.length] = newStudent; //add at the end of array
console.log(students);

//2:Update one of the objects' properties.
for (let i = 0; i < students.length; i++) {
  if (students[i].name === "syed khizar") {
    students[i].grade = "A+";
    break;
  }
}

// 3: Delete an object from the array.

students[2] = students[3]; // Shift usama to hamad's position
students.length = 3;
// console.log(students);

//Display all the objects in the array with their properties.
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
