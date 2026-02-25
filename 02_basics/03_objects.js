
const mys = Symbol("key")

const student = {
    name: "srikant",
    age: 19,
    roll: 4,
    //if we want to represent the symbol we have to keep the key inside the []//
    [mys]: "key",   
    email: "sriku124@gmail.com"
}

// console.log(student)
// console.log(student.email)
// console.log(student["name"])//we have to use this 
// student.email = "shradha23@gmail.com"

// //freeze
// Object.freeze(student)//We use freeze to stp cchanging the value
// student.email = "shra@gmail.com"
// console.log(student)

student.greeting = function(){
    console.log("hello srikant...");
}
console.log(student.greeting)//[Function (anonymous)] //you are logging the function itself, not calling it.
console.log(student.greeting())//hello srikant...
console.log(student)
/*{
  name: 'srikant',
  age: 19,
  roll: 4,
  email: 'sriku124@gmail.com',
  greeting: [Function (anonymous)],
  Symbol(key): 'key'
}*/
