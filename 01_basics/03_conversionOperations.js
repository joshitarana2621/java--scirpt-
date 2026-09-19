let score = "33";

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33;
//"33abc" =>NaN(NOT AN NUMBER)
//string,undefined => NaN
//true =>1,false=> 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1   => true 0=>false;
//" "  =>false;
//"name" ="true";

let n = 33;
let stringNumber = String(n);
console.log(stringNumber);
console.log(typeof stringNumber);

//-------------------------  Operations  -------------------------------------------------------------

let value = 3;
let negValue = -value;
console.log(negValue); //here we are just changing value to negative 

//Arithmetic operations 

console.table([2+2,4-2,2*2,4/2,2**3,10%3]);
//for power use [**]

let str1 = "hello";
let str2 = "javaScript";

let str3 = str1 +" " + str2 ; // to add string [concatenations]
console.log(str3);

console.log("1" + 2 + 2); 
/*here when you add string first it 
convert whole part to string here 
output will be 122
*/
console.log(1+2+"2")
/*else first part will done as described and then it will consider string
output will be 32
*/
console.log(+true)//not advisable to write [1]
console.log(+"") //not advisable to write[0]

let cnt = 100;
cnt++;//suffix first assign value then increment
console.log(cnt);
++cnt;//prefix first increment and then assign value
console.log(cnt);

