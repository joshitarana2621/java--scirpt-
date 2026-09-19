// categaries based on how we store in memory and access
//js is dynamically type language where it types checked at runtime you dont need to define it 

//--------------------------------------------------------------------------------------------------------------------------------------------
//primitive[call by value] 

//7 types: 1 string , number , boolean , null , undefind , symbol[for making value unique], BigInt

const id = Symbol('123')

const anotherID = Symbol('123')

console.log(id == anotherID) //false ;

const bigNumber = 12345678910n // to declare bigInt number

//--------------------------------------------------------------------------------------------------------------------------------------------

//non-primitive[call by refrence]

//Array,objects,functions

const lang = ["c","java","python"]

 let myObj = {
    "name"   :"tarana",
     age     :  19,
    "course"  : "CE"
}

const myFunction = function()
{
    console.log("hello");
}

//-------------------------------------------------------------------------------------------------------------------------------

// Primitive Datatypes
//  1) Number => number
//2) String  => string
//3)   Boolean  => boolean
// 4) null  => object
// 5) undefined  =>  undefined
// 6) Symbol  =>  symbol
//  7) BigInt  =>  bigint

//for non-primitive
// array => object.
// object => object.
// function => function. // said as : (function object)
