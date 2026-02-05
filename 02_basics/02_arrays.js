const marvel = ["iron", "cap", "spider"]

const dc = ["super", "flash", "bat"]
//1.concate
const newhero = marvel.concat(dc)
console.log(newhero)//[ 'iron', 'cap', 'spider', 'super', 'flash', 'bat' ]

//2.spread operator
const newhero1 = [...marvel, ...dc]
console.log(newhero1)//[ 'iron', 'cap', 'spider', 'super', 'flash', 'bat' ]

//3.flat
const nos = [1, [2, 5, 6], 5, 9, [2, 4,[7, 9]], 0]
console.log(nos)//[ 1, [ 2, 5, 6 ], 5, 9, [ 2, 4, [ 7, 9 ] ], 0 ]

const nos1 = nos.flat(Infinity)
console.log(nos1)
/*[
  1, 2, 5, 6, 5,
  9, 2, 4, 7, 9,
  0
]*/

//4.from - It will convert string into an array
console.log(Array.isArray("srikant"))//false
console.log(Array.from("srikant"))
/*
[
  's', 'r', 'i',
  'k', 'a', 'n',
  't'
]
*/

console.log(Array.from({name: "srikant"}))//[]

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3))//[ 100, 200, 300 ]
