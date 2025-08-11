const name ="hitesh";
const repoCount = 50;
console.log(name + repoCount + "value"); // not a good way of concatenation or older version of concatination
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // new version of string interpolation

// another way to declare string
const gameName = new String('hitesh');

console.log(gameName[0]);//it doesnt mean that string is stored in the form of an array, it is stored in the form of key value pair
console.log(name[1]);
// to access the prototype
console.log(gameName.__proto__);// it gives{} in result reperesnting the object

// using different methods and functions
 console.log(gameName.length); // it gives the length of the string
 console.log(gameName.toUpperCase); // it will change the string to upper case, but since string is primitve data type ,hence no change in original string
 
