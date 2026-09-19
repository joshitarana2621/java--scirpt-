//--------------- Basic comparison ---------------------------------
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2 == 1);
console.log(2!=1);

//---------------- diffrent dataTypes -----------------------------
//when you compare to data both data_types should be generally same is advisable
console.log("2">1);
console.log("02">1);
//here convert string to number

//----- ignore this type of comparison --------------------------
console.log(null >0);
console.log(null == 0);
console.log(null >=0)
//here when we compare it convert null into number[0]

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

//when you want to check values data_types too
//[===] it compares strictly it checks value's data type too
console.log("2" === 2);
