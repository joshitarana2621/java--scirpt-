//object using constructure-[non-singleton]

const user = new Object();

user.id = 1234;
user.name = "tj";
user.isLoggedIn = "false";

console.log(user);

//nested object 

 const regularUser = {
    user_id : 2536 ,
    password : 124421,
    basic_info :{
        name : "shreya",
        fullname : "shreya makwana",
        age : 34
    }
}
console.log(regularUser.basic_info.age);

//combine object 
const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
const obj3 = {5:"e",6:"f"};

//const obj4 = {obj1,obj2,obj3};//it will treat whole object as one element 
//console.log(obj4);
const obj4 = Object.assign({},obj1,obj2,obj3); //less used 
const obj5 = {...obj1,...obj2}; //mainly used spread operater
console.log(obj4);

//multiple objects 

const users =[
    {
        id:34,
        name : "tarana"
    },
    {
        id:45,
        name : "tanya"
    },
    {
        id:67,
        name :"jeel"
    }
]

console.log(users[1].name)
console.log(user);
console.log(Object.keys(user));//prints only keys from object
console.log(Object.values(user));//prints only values
console.log(Object.entries(user));//returns key and value each with it's own sub-array

console.log(user.hasOwnProperty('isLoggedIn')); // check it present or not and prevent from program crash

//object de-structure->rename any element to easily access

const student = {
    name: "tarana",
    student_id_number: "25fcn033",
    course: "btech -ce"
}
console.log(student.student_id_number);
const { student_id_number: SID } = student;
console.log(SID);

//An API(Application Programming Interface) is a set of rules that allows different software applications to talk to each other.
// It acts as a digital messenger that takes a request from one system, delivers it to another, and brings the response back.
//when we call api it returns value in array or in object

//json 
//{
// "name": "value",
//}
