const myArr =[0,1,2,3,4,5,"true","alok"]; // in arrays elements can be of same or different types also in js arrays are resizeable
const myheroes = new Array(1,2,3,4);
// array methods
myArr.push(6); // it will push 6 in myArr
myArr.pop(); //it will remove the last element
myArr.unshift(6); // it will add 6 in the front of the array and will shift all other values

myArr.shift(); // it will remove the last added value by unshift
const newArr = myArr.join() // it will simply add the array to the new array and will convert it into string
 // slice vs splice
 const arr1 = myArr.slice(1,3); // slice will simply give a portion of the array from start to end excluding the end
 const arr2 = myArr.splice(1,3); // splice will move out the portion of array between start and end including both thereby making chances in the original array also
 console.log(arr1);
 console.log(arr2);