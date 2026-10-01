// syntax:function function_name(parameters){} and

//function add(number1,number2)
//{
// console.log(number1+number2);
//}
//add(3,4); //problem : it will also accept and add non-number values

function add(number1, number2) {
    //let result  = number1+number2;
    //return result;
    return number1 + number2;
}
const result = add(2, 3);
//console.log("result:",result);

function userLogin(username) //here you can give default value if user dont add anything  like username = "sam"
{
    if (username === undefined) //here you can also write as (!username)=[undefined]
    {
        console.log("please enter username");
    }
    else {
        return `${username} just logged in`;
    }

}
console.log(userLogin()); //when you dont give value in function it will be undefined 

//here three dots are rest operator it allows to take multiple value and store it as array
function CalculateCartPrice(value1,value2,...num1) //value1 = 300 and value2 = 400 and rest will be stored as array
{
  return num1;
}

console.log(CalculateCartPrice(300,400,500,600,700)); //[300,400,500,600,700] output

//object and function

//1. first create object and then pass
//const user={
//  course: "Btech",
//   price : 999
//}

//function handleObject(anyObject){
//   console.log(`the course you have registerd is ${user.course} and it's price is ${user.price}`);
//}

//handleObject(user);

//2. create object in function para
function handleObject({ name = "rutvi", id = "25ec0111" } = {}) {
    console.log(`${name} you just logged in and your id is ${id}`);
}

//array & functions

//1.use can create array then pass it
const myNewArr = [10,20,30,40]
function returnSecondValue(myArr)
{
 return myArr[1];
}
console.log(returnSecondValue(myNewArr));

//2.create array in function 
function handleArray(userArray = ["rutvi", "25ec0111"]) {
    console.log(`${userArray[0]} you just logged in and your id is ${userArray[1]}`);
}

handleArray(); // rutvi you just logged in and your id is 25ec0111
handleArray(["Alex", "99"]); // Alex you just logged in and your id is 99