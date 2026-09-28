const id = [110,111,112,113,114,115];
const branch = [25,26,27,28,29];

//id.push(branch) //it will push whole array as one element and modify original array;
//console.log(id);
//console.log(id[6][1]);
const id_branch = id.concat(branch)//it will give you new array of two or more combined array without modifying original one
//console.log(id_branch);

const all_new_students = [...id,...branch]; //spreds all element of array and then combine
console.log(all_new_students);

const another_array = [1,2,3,[4,,5],6,[7,8,[9,10]]];

const real_another_array = another_array.flat(3);//here you can also give infinity
console.log(real_another_array);
//here flat do in one array if there is sub-array it merege all elements

console.log(Array.isArray("tarana"));//check if given input is array or not
console.log(Array.from("tarana"));//it converts in array
console.log(Array.from(name="tarana"));//when it cant convert in array it will give you empty set

let marks1 = 47;
let marks2 = 67;
let marks3 = 34;

console.log(Array.of(marks1,marks2,marks1));//Returns a new array from a set of elements.