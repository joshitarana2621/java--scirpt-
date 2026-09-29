//singleton->if you make object using constructure it makes singleton
//in other ways it makes multipple instence[Declaing as literals]

//Object.create -> constructure method

//object literals

const mySym = Symbol("key1")
const User = {
    name : "tarana",
    "full name" : "tarana joshi",
    [mySym] : "key1", //must know
    age : 19,
    email: "joshitarana26@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["monday","Tuesday","wenesday"]
}

console.log(User.name);
console.log(User["email"]);
console.log(User["full name"]); //for accessing full name type values you need to use object["key"]
console.log(User[mySym]);
console.log(typeof mySym);

User.email = "joshitarana045@gmail.com"; //you can modify object propertize;
//Object.freeze(User);
User.email = "joshitarana35@gamil.com"; //you cant modify object after freezing
console.log(User.email);

User.greetings = function(){
    console.log("hello");
}

//console.log(User.greetings) ; //[Function (anonymous)]
console.log(User.greetings());
User.greetings1 = function(){
    console.log(`Hello user,${this.name}`);
}
console.log(User.greetings1());