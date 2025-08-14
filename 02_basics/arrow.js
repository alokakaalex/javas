const user={
    username: "hitesh",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);// here 'this' is used to refer to the current context
        console.log(this);
    }
}

//  user.welcomeMessage();
//  user.username ="jolly";
//  user.welcomeMessage();

// console.log(this); // this will give empty object in node environment but if we run it on chrome it gives windows as the global object

// function chai(){
//     let username="hitesh"
//     console.log(this);// here in node we can access the current context in this manner but we can not use this.username
// }

// chai();


const chai =() =>{ // here we have removed function keyword and used => instead hence called arrow function
    let username ="hitesh"
    console.log(this);
}

chai()

// arrow functions
//explicit way of declaring arrow functions
const addtwo=(num1,num2)=>{
    return num1+num2
}

// or another way to declare(implicit way)
const add_two=(num1,num2)=>(num1+num2) // if we are using {}  then we have to use return keyword but if we are not using {} then we dont write return keyword
