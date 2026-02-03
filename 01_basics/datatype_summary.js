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