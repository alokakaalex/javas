const myArr =[0,1,2,3,4,5,"true","alok"]; // in arrays elements can be of same or different types also in js arrays are resizeable
// const myheroes = new Array(1,2,3,4);
// // array methods
// myArr.push(6); // it will push 6 in myArr
// myArr.pop(); //it will remove the last element
// myArr.unshift(6); // it will add 6 in the front of the array and will shift all other values

// myArr.shift(); // it will remove the last added value by unshift
// const newArr = myArr.join() // it will simply add the array to the new array and will convert it into string
// console.log(typeof newArr);
// slice vs splice
// const arr1 = myArr.slice(1,3); // slice will simply give a portion of the array from start to end excluding the end
// console.log(myArr);
// console.log(arr1);
// const arr2 = myArr.splice(1,3); // splice will move out the portion of array between start and end including both thereby making chances in the original array also
// console.log(myArr);
// console.log(arr2);

// //  ++++++++++++++++++++++++++++++++++Arrays part2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const marvelHeroes=["thor","ironman","spiderman"];
// const dcHeroes=["superman","flash","batman"];

// //marvelHeroes.push(dcHeroes); // it will push the entire dcHeroes array to marvelHeroes
// //console.log(marvelHeroes);

// //another method
// const allHeroes = marvelHeroes.concat(dcHeroes); // it will add elements of both the arrays into a new array
// //console.log(allHeroes);

// //another method
// const all_heroes=[...marvelHeroes,...dcHeroes]; //... is callled as spread operator
// //console.log(all_heroes);

// const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_array= another_arr.flat(Infinity); // flat is used to give such complex array to a simpler form
// //console.log(real_array);

// console.log(Array.from("Alok")); //this method will convert anything to array
// console.log(Array.from({name:"hitesh"})); // here it will return empty array because we have to specify whether we want to convert key or valur to array

// let score1=100;
// let score2=200;
// let score3=300;
// console.log(Array.of(score1,score2,score3)); // it will make array of multiple different varibales

