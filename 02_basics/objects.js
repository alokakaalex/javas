// singleton
//whenever we create object in constructor way, then singleton objects forms other wise in literals way singleton doesnt form
// object literals
const sym= Symbol("key1");
const Jsuser={
    name:"hitesh",
    [sym]:"key1", // if we want to use symbol, then we need to declare it using [], similarly for accessing the symbol we use []
    "full name":"alok mishra", // this can't be accessed through .method , only [] method will work here
    age:18,
    email:"hitesh@google.com",
    location:"jaipur",
    isloggedin: false,

};

console.log(Jsuser.email); // one way of accessing the object through .method
console.log(Jsuser["email"]); // another way of accessing the object through []method
// to freeeze any object so that no one can change its parameters in ftuture
//Object.freeze(Jsuser);

// we can even add functions to the objects
Jsuser.greetings = function(){
    console.log(`Hello ji JS user!, ${this.name}`);
}

console.log(Jsuser.greetings);
console.log(Jsuser.greetings());