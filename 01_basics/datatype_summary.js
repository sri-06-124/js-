//Primitive

// 7 types : Strings, Number, Boolean, NUll, Undefined, Symbol, BigInt

const number = 100;
const no = 22.7;
const isLogedIn = false;
const outSideTemp = null;

console.log(typeof outSideTemp)//object
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 12442123456787712n; 
console.log(typeof bigNumber)//   bigint


// Non Primitive(reference) : Array, Objects, functions

let heros = ["spider", "super", "wander"];
console.log(typeof heros)//object

let myObj = {
    name : "srikant",
    age : 19
}
console.log(typeof myObj)//object

const myFunction = function(){
    console.log("Hello World...")
}
console.log(typeof myFunction)//function


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Stack(primitive) and heap memory(non primitive)

let myName = "Srikant";
let myNewName = myName;//a copy of the value is created
console.log(myNewName)//Srikant
myNewName = "Parmpara" ;
console.log(myName)//srikant
console.log(myNewName)//Parmpara

let userOne = {
    name : "rahul",          //here the name and age will store in the heap but 
    age : 23                      // the userOne is stored in the stack memory 
                                     
}
                                     
let userTwo = userOne;      /* here the userTwo will directly indicate/reference to the 
                             heap memory where the name and age is stored*/
                                                                                           
console.log(userOne.name)//rahul
userTwo.name = "ArghyaRupa";
console.log(userOne.name)//ArghyaRupa
console.log(userTwo.name)//ArghyaRupa