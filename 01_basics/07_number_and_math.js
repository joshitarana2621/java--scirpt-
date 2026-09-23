const number = 30 
console.log(number); //datatype automatically decided by js

const score = new Number(100.1254); //for giving specific dataType we store it as object
console.log(score);

//methods on number

//number to string 
console.log(score.toString());
console.log(score.toString().length); //after converting to string you can apply whole string method

console.log(score.toFixed(3)); //get round off untill provided number 100.126

console.log(score.toPrecision(3)) //Returns a string representing the number to a specified precision in fixed-point notation. range 1-21

const bigValue = 1000000
console.log(bigValue.toLocaleString('en-IN')); //10,00,000
//for indian numbering method en-IN
//you can also get min and max  value Number.MAX_VALUE and many more

//+++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-8)); //make only negative value to positive
console.log(Math.round(1.25)); //decimal to integer
console.log(Math.ceil(3.2)); // gives you nearest greatest or equal number 4
console.log(Math.floor(3.9)); //gives you nearest smallest or equal number 3
console.log(Math.min(3,7,8,0,1,5));
console.log(Math.max(4,5,1,8,2));

console.log(Math.random()); // always range between 0 to 1;
console.log((Math.random())+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)+min));