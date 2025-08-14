//immediately invoked functions(IIFE)
//why are they needed => to immediately execute a function and to prevent our function from global pollution

// normal function call
// const chai= function(){
//     console.log("DB CONNECTED");
// }
// chai();

// iife calling()(), the first ( is used for function definition) and (second is used for execution)
(function chai(){ // named iife
    console.log("DB CONNECTED");
})(); // it is very important to end the iife function with semi-colon


// example of arrow function
(() =>{
    console.log("database connected");
})();

// example of paraemtrised function
((user) =>{
    console.log(`database connected for user ${user}`)
})("Jagdishwar Mishra");

