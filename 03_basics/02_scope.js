//when you open browser and then do inspect and do console in that code global scope  
//in coding enviroment[using node] global scope in both it is different

//var:->it has scope of whole code
//let:->it has bracket scope {}
//const :-> it has also bracket scope{}

// block scope

// const a = 10;
// let b = 20;
// var c = 30;
// var c = 300; 
//let a = 300;
if (true) {
    const a = 10;
    // let b = 20;
     var c = 30;
    // c = 30;
    //console.log("inner",a);
}
//console.log(a);
// console.log(b);
 //console.log(c);

//nested scope
function one()
{
    const username = "tarana";
    function two()
    {
        const website = "www.google.com"
        console.log(username);//inner function can accesses outer fucntion member
    }
    // console.log(website); outer function cant access inner function
    two();
}
one();

if(true)
{
    const userName = "tarana";
    if(userName == "tarana")
    {
      const webSite = "youtube";
      console.log(userName + webSite);
    }
    //console.log(webSite); cant access inner condition variables
}

//console.log(userName); cant access codition variables out of bracket

//+++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++++

console.log(addOne(5)); 
function addOne(num)
{
    return num+1;
} //here in that type of syntax of function you can access function before declaration 



const addTwo = function(num)
{
    return num+2;
} //in this type syntax you cant access function without declaration

addTwo(5);