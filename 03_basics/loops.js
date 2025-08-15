//for of usually used for arrays

const arr=[1, 2, 3, 4,5];
for (const num of arr) {
    //console.log(num);
    
}

const greetings="hello world";
for (const greet of greetings) {
    //console.log(greet);
    
}

//  maps (stores unique values)

const map =new Map();
map.set('IN',"INDIA")
map.set('US',"USA")
//console.log(map);

for (const [key,value] of map) {
    //console.log(key,':-',value);
}

 const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
} // objects are not iteratable using for of loop
for (const key in myObject) {
    console.log(myObject[key]);
}
// we cant use for in loop for maps

//foreach loop
const coding =["js", "ruby","java", "python", "cpp"];

coding.forEach( function (val){
    console.log(val);
})

coding.forEach( (item) =>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach( printMe);

// how to access objects stored inside arrays

const myCoding=[
    {
        programmingLang:"javascript",
        programmingFile:"js"
    },
    {
        programmingLang:"python",
        programmingFile:"py"
    },
    {
        programmingLang:"c++",
        programmingFile:"cpp"
    }
]
 myCoding.forEach( (item)=>{
    console.log(item.programmingLang);

 })


