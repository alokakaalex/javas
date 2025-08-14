const mydate = new Date(1995,7,14,9,28,40); // object like creation
// console.log(mydate);
// //console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());

// console.log(typeof mydate); // date is ot the object type
const newDate = new Date(2023,2,18); // while declaring date notice that months start from 0
console.log(newDate.toDateString());

// const date1= new Date("03-18-2023"); // usually we use this in india mm-dd-yyyy
// console.log(date1);

// let mytime= Date.now(); // it will give value in miliseconds from january 1970
// console.log(mytime);
// console.log(date1.getTime()); // in this way we can compare two given time usually we use this in hotel booking system
// to convert the time in sec we can divide it by 1000 to get result in seconds