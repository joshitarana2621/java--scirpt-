const name = "tarana"
const repoCount = 50

console.log(name + repoCount + " hello"); //not advisable in modern time

console.log(`my name is ${name} and my repo count is ${repoCount}`); //modern way

const greetings = new String('hello my name is tarana') //declaration

console.log(greetings[3]); // access string element

//--------------------comman methods of strings---------------------------------------
console.log(greetings.length); //24
console.log(greetings.toUpperCase()); //HELLO MY NAME IS TARANA 
console.log(greetings.charAt(7)); //y
console.log(greetings.indexOf('t')); //17

const substr = greetings.substring(0, 5); //not include last element of range 
console.log(substr); //hello
const anotherstr = greetings.slice(-8, -2); //allowed to give you reverse value and it starts from reverse
console.log(anotherstr); // start 8 from end and stops 2 from end

const str1 = "  hello";
console.log(str1);
console.log(str1.trim()); //remove extra space

const url = "https://hello.com/@2025";
console.log(url.replace('@2025', '@2026'));
console.log(url.includes('hello')); //to know it is prrsent in string or not
console.log(greetings.split(' '));

//------------------other methods---------------------------------

//toLowerCase(), trim()[trimStart() remove space from start,trimEnd() remove space frome end]
// startWith(), endWith(),lastIndexof()[find last occurance of char]
//concat() //join string
//split()[string -> array] join()[array->string]
// repeat()[ Repeat string ] padStart() [Add padding at beginning] ex.["5".padStart(3,"0") → "005" ]
// padEnd() [Add padding at end ] ex.["5".padEnd(3,"0") → "500"]



