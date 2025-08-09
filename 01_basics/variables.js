const accountId = "144553";
let accountEmail = "hitesh@gmail.com";
var accountPassword = "12345";
 accountCity = "Delhi";

// accountId=2; not allowed
accountEmail="hc@hc.com";
accountPassword="2121212";
accountCity="bengaluru";
/*
prefer not to use var beacuse of problem in block scope and function scope hence we dont use it anymore
*/
console.table([accountId,accountEmail,accountPassword,accountCity]);
let accountState; //by default undefined will be assigned to this variable