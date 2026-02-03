console.log(3 >= 3)
console.log(2 < 9)
console.log(4 == 2)

console.log("2" < 3)
console.log("02" >= 2)
console.log("02" == 2)
console.log("2" > 22)//true
console.log("02" === 2)//false
/*Operator	What JS does
< > <= >=	Converts strings → numbers
==	        Converts types
===	        No conversion (recommended)*/

console.log("2" > "22")//true
/* Both are strings
Compared lexicographically (dictionary order)
"2" comes after "22"*/

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

console.log(undefined == 0)
console.log(undefined < 0)
console.log(undefined <= 0)

console.log(true < 1)
console.log(true == 1)
console.log(true <= 1)