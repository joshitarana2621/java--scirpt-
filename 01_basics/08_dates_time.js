// date

let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());

console.log(typeof myDate);

let createdate = new Date(2026,8,24) //in js months starts from zero
console.log(createdate.toDateString());

let create1date = new Date("2026-09-24");//in string type YY-MM-DD month starts form 1
//same foe MM-DD-YY
console.log(create1date.toDateString());

let myTimeStamp =  Date.now();
console.log(myTimeStamp);
console.log(create1date.getTime()); // for comparistion always use milisecond

console.log(Math.floor(Date.now()/1000)); //this converts miliseconds to seconds

let newdate = new Date();
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

newdate.toLocaleString('default',{
    weekday:'long',
}) //here with tolocalestring you can fromat data and time declaration

