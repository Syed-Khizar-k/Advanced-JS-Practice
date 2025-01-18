/*
TASK NO 1: 
Defines and uses basic data types (string, number, boolean, array, tuple).
*/

//defining the string data type
let userName: string = "syed khizar";
console.log(userName);
//defining the number data type
let userId: number = 230414905;
console.log(userId);
//defining the boolean data type
let isHolder: boolean = true;
console.log(isHolder);
//defining the array data type
//two types of delearation
let values: number[] = [1, 2, 3, 4];
let values1: Array<number> = [1, 2, 3, 4];

//A tuple is a fixed length array wich can have different values
//syntax :
let person: [number, string, boolean] = [25, "john", true];

//tuple with optional elements :

let person1: [string, number?] = ["albert"];

//tuple with rest elements :

let person2: [number, ...string[]] = [24, "str1", "str2"];

/*
TASK NO 2 :
Implements an interface for a Person object with fields for name, age, and an optional address.
*/

interface Person {
  name: string;
  age: number;
  address?: string;
}
let user: Person = {
  name: "syed khizar",
  age: 18,
};

/*
TASK No 3 : 
Uses a function with parameter type annotations and a return type.
Example: Create a function that takes a Person object and returns a greeting message.
*/

function greet(user: Person): string {
  return `hello ! ${user.name}`;
}
console.log(greet(user));

/*
Write examples to demonstrate:
1 : Type inference.
2: Union types (|) and intersection types (&).
3: Use of any and unknown types with explanations on when to use them.
*/

// /1 : Type inference.
//type inference : is the feature of typescript that automatically infered the values of parameters , arguments or return values

let user1 = "syed khizar"; //infered variable value as string
function alaa(a: string, b: string) {
  //infered return value as number
  return 2 + 2;
}
let obj1 = {
  name: "khizar", //infered as string
  number: 18, //inferaed as number
};

//2: Union types (|) and intersection types (&).

//this is union operator
let signIn: boolean | string = true;

interface data {
  name: string;
  age: number;
  email: string;
  //this is union
  userId: string | number;
}

//this is & operator examples which is used to combine multiple types into single type

interface coursename {
  name: string;
}
interface courseprice {
  price: number;
}

type courseDetails = coursename & courseprice;

let uploadCourse: courseDetails = {
  name: "react",
  price: 1900,
};

//3:Use of any and unknown types with explanations on when to use them.
/*
it is used where we dont care about the changing of values or where the variable could have different types in future 
*/
let classname: any;
classname = 13;
classname = "thirteen";
classname = true;

/*
unknown is more safer than any and we can use it where we have to use type checking to the value for example : 
*/
let metal: unknown;

metal = "iron";
metal = 786;
metal = true;

if (typeof metal === "string") {
  console.log(metal.toUpperCase());
}
