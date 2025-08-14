// function saymyname() { // defining a function
//     console.log("Alok");
// }

// saymyname(); // to call or execute a function

// function addNumbers(num1,num2){
//     console.log(num1+num2);
//  }

// addNumbers(5,'4');

// function addNumbers(num1,num2){
// //     const result= num1+num2;
// //     return result;
    
// // }

// // console.log(typeof addNumbers(5,4));

// function loginUser(username){
//      return `${username} just logged in`
//  }

// console.log(loginUser("alok")); // if we dont pass any parameter then by defualt undeffined is assigned
 function loginUser(username="Jagdishwar Mishra"){
     return `${username} just logged in`
}

console.log(loginUser("alok mishra")); // we can even set default value of the parameters of the functions and when someone enter some othr parameter then it will get overwritten


// case when we dont know how many parameters are going to come

function calculateKartPrice(...num1){ // here we have used ...rest operator to pass multiple values in functions
    return num1;

}

console.log(calculateKartPrice(200,300,400,500)); // it will give all these values inside an array

//functions with objects
// const user={
//     username: "hitesh",
//     price:199
// }

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// we can even add objects directly into the parameters
handleObject({
    username: 'hitesh',
    age:69
})

const myNewArray =[200,300,4400,500];

function returnSecondValue(getarray){
    return getarray[2];
}

console.log(returnSecondValue(myNewArray));