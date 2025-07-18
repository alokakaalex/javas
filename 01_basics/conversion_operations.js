let score = 33;

console.log(typeof score); // can be used normally
console.log(typeof(score)); // can be used as method as well

let number = "56";
let valueInNumber = Number(number); //it will convert anything to number
console.log(valueInNumber); 

// "33"=> 33
// "33abc" => will get convert but value will be NaN
// true=>1

// 1->true, 0=>false, ""=> false, "hitesh"=> true