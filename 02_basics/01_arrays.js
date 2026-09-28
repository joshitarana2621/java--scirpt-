//array -> storing single value under single variable
//flexiable size and can also store multiple type var,indexing starts form 0
//in java array copy-operation create arrays shallow copy
//shallow copy-> shares same memroy refrence means changing in copy also make change in orignal
//deep copy-> shares diffrent memeroy means changing in copy dont make changw in orignal

const arr = [0,1,2,3,4,5];
const branches = ["CE","CSE","IT","chemical","ICT","MECHANICAL"];

const mynewarr = new Array(1,2,3,4,)

//access element

console.log(arr[0]);

//array methods
mynewarr.push(6);
mynewarr.push(7);
mynewarr.pop();
console.log(mynewarr);

mynewarr.unshift(0);//add value at index zero
console.log(mynewarr);
mynewarr.shift();
console.log(mynewarr);//remove value of index zero
console.log(mynewarr.includes(5));//check given value is present in array or not
console.log(mynewarr.indexOf(4)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const myarr=  mynewarr.join();//join all array element and convert into string
console.log(myarr);

//slice and splice

console.log("A",mynewarr);
const myn2 = mynewarr.slice(1,3);
//slice-> Returns a copy of a section of an array. 
//For both start and end, a negative index can be used to indicate an offset from the end of the array. 
//For example, -2 refers to the second to last element of the array.
 console.log(myn2);
 console.log("B" ,mynewarr);
 const myn3 = mynewarr.splice(1,3);
 console.log("C" ,mynewarr);
 console.log(myn3);

 //main diffrence between slice and splice here splice manipulate orignal array where slice make copy
 //splice include range where slice dont include range