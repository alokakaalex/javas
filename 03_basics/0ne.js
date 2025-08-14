// if statement
//truthy and falsy value

//falsy value
// false, 0, -0, BigInt 0n, "",null, undefined, NaN

//truthy values
//eveyrthing which are not falsy are truthy
// "0",'false', " ", [], {}, function(){}
const userEmail= [];
if(userEmail.length ==0){
    console.log("Array is empty"); // this is how e check empty array
}

// how to check empty objects
const emptyobj={};
if(Object.keys(emptyobj).length == 0){
    console.log("object is empty");
}


//Nullish coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;

console.log(val1);

//terniary operator

//condition ? true:false;

const iceTea_Price=200;
iceTea_Price>100 ? console.log("Bohot Mehengi"): console.log("Sasti hai");