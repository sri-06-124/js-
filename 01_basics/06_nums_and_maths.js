const score = 100;
console.log(score)//a00

const num = new Number(230);
console.log(num)//[Number: 230]

console.log(num.toString())//230
console.log(num.toFixed(1))//230.0      Purpose: Control the number of digits after the decimal point
                                        //Counts: Only decimal places
                                       // Returns: A string

const otherNum = 123.223
console.log(otherNum.toPrecision(4))//123.2
console.log(otherNum.toPrecision(2))//1.2e+2   Purpose: Control the total number of significant digits

                                                //Counts: Digits before + after the decimal
                                                //Returns: A string
                                                //May switch to scientific notation if need
const hundred = 1000000
console.log(hundred.toLocaleString())//1,000,000
console.log(hundred.toLocaleString("en-IN"))//10,00,000  to show in indian standards

//++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.random())//It will show the value between 0 and 1 always
console.log(Math.floor(23.89))//It will show only the decimal values
console.log((Math.random() * 10) + 1)//It will avoid to print the value 0 or 0.something, thats why we are adding 1 
console.log((Math.floor((Math.random() * 10) + 1)))//4


const min = 10
const max = 20
console.log(Math.floor((Math.random() * 10) + (max - min + 1)) + min) //here we are adding extra min to conform we will get the the no between 10 and 20 