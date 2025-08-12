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

//console.log(Jsuser.email); // one way of accessing the object through .method
//console.log(Jsuser["email"]); // another way of accessing the object through []method
// to freeeze any object so that no one can change its parameters in ftuture
//Object.freeze(Jsuser);

// we can even add functions to the objects
Jsuser.greetings = function(){
    console.log(`Hello ji JS user!, ${this.name}`);
}

//console.log(Jsuser.greetings);
//console.log(Jsuser.greetings());

// +++++++++++++++++++++++++++++++++++++++objects continue++++++++++++++++++++++++++++++++++++
 //objects with the help of constructr
const tinderUser= new Object(); // singleton object
const tinder_User ={}; // non-singleton object
console.log(tinderUser);
tinderUser.id="123abc";
tinderUser.name="Jolly";
tinderUser.isLoggedIN= false;
//console.log(tinderUser);

const regularuser={
    email:"some@gmail.com",
    full_name: {
        userfullname:{
            // we can add as many nested object as we want
            firstname:"Jagdishwar",
            lastname:"Mishra"
        }

    }

}

console.log(regularuser.full_name);


// how to combine objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3= Object.assign({},obj1,obj2);
console.log(obj3);


const obj4={...obj1,...obj2}; // same as arrays using spread operator


const users=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {

    },
    {

    }
];

console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin')); // whether a particular property exists inside the object or not

// ++++++++++++++++++++++objects part 3++++++++++++++++++++++++
//destructuring of object
const course ={
    courseName: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor; one of the way to access parameters
const{courseInstructor: instructor} = course; // if we see{ } we can assume that destructuring is going to happen
console.log(instructor);