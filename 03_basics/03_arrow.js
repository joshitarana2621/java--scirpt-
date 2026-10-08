const user = {
    userName : "tarana",
    roll_no  : 13,

    welcomeMessage : function()
    {
        console.log(`${this.userName},welcome to code`); //this reffer to current context
        console.log(this);
    }
}

//user.welcomeMessage();
//user.userName = "tulsi";
//user.welcomeMessage();

//console.log(this);

// function chai()
// {
//     let  userName = "sugar";
//     console.log(this.userName); //you can't use this in function
// }

//const chai = function()
//{
    //let userName = "hitesh";
   // console.log(this.userName); you cant use this in function
// }

// const chai = () => {
//     let userName = "hitesh";
//     console.log(this);
// }

// chai();

// const addTwo=(num1,num2) =>
// {
//  return num1+num2;
// }//explicit
// console.log(addTwo(5,4));

//const addTwo = (num1,num2) => num1+num2;//implicit
const addTwo = (num1,num2) => (num1+num2); //num1+num2 if you write in {}-> this you need to write return otherwise not
console.log(addTwo(3,4));
const objectReturn = () => ({username:"tarana"}) //here while returning object you must need to write ({})-> this
console.log(objectReturn());