if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website ="youtube"
        console.log(username + website);
    }
    console.log(website); // this will through an error
}

console.log(username); // this will through an error

// +++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++++++++++
addone(5);//this will work if we declare it before the function definition
function addone(value){ 
    return value+1;
}


addtwo(5);// this will not work and will through an error(concept of hoisting)
const addtwo = function(value){ //this is called expression
    return value+2
}
