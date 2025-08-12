function saymyname() {
    console.log("Alok");

}

saymyname() // to call or execute a function

// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }

//addNumbers(5,'4');

// function addNumbers(num1,num2){
//     const result= num1+num2;
//     return result;
// }

// console.log(typeof addNumbers(4,5));

// function loginUser(username){
//     return `${username} just logged in`
// }

//console.log(loginUser("alok")); // if we dont pass any parameter then by defualt undeffined is assigned
function loginUser(username="Jagdishwar Mishra"){
    return `${username} just logged in`
}

console.log(loginUser()); // we can even set default value of the parameters of the functions and when someone enter some othr parameter then it will get overwritten
