// // const arr = [1, 4, 6, 7]
// // console.log(arr);

// const newarr = new Array(1, 3, 5, 7, 9, 8);
// console.log(newarr);

// // // console.log(newarr.push(3))
// // // console.log(newarr);
// // // console.log(newarr.pop())
// // // console.log(newarr);
// // console.log(newarr.unshift(6))
// // console.log(newarr);
// // console.log(newarr.shift())
// // console.log(newarr);

// console.log(newarr.includes(3))
// console.log(newarr.indexOf(3))
// console.log(newarr)//[ 1, 3, 5, 7, 9, 8 ]
// const myarr = newarr.join()//It will print in the form of string
// console.log(myarr)//1,3,5,7,9,8
// console.log(typeof myarr)//string

//+++++++++++++++++ slice and splice ++++++++++++++++++++++++++++++++++++++++++++
const arr = new Array(1, 3, 5, 7, 9, 8);
console.log("A", arr)//A [ 1, 3, 5, 7, 9, 8 ]

const arr1 = arr.slice(1,3)
console.log(arr1)//[ 3, 5 ]

console.log("B", arr)//B [ 1, 3, 5, 7, 9, 8 ]
const arr2 = arr.splice(2,2)
console.log("C", arr)//C [ 1, 3, 9, 8 ]
console.log(arr2)//[ 5, 7 ]
/*
slice() 🧩 (non-destructive)
------------------------------------------
What it does:
Returns a new array with selected elements
👉 Does NOT change the original array
array.slice(start, end)
start → index to begin (included)

end → index to stop (not included)
*/
/*splice() ✂️ (destructive)
------------------------------------------
What it does:
Adds, removes, or replaces elements
👉 CHANGES the original array

Syntax
array.splice(start, deleteCount, item1, item2, ...)


start → index to start

deleteCount → how many elements to remove

item1, item2... → elements to add (optional)*/

