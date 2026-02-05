let mydate = new Date();
// console.log(mydate)//2026-02-05T02:34:03.839Z
// console.log(mydate.toString())//Thu Feb 05 2026 02:34:37 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString())//Thu Feb 05 2026
// console.log(mydate.toISOString())//2026-02-05T02:36:06.837Z
// console.log(mydate.toJSON())//2026-02-05T02:37:07.211Z
// console.log(mydate.toLocaleDateString())//2/5/2026
// console.log(mydate.toLocaleString())//2/5/2026, 2:38:27 AM
// console.log(mydate.toLocaleTimeString())//2:39:01 AM
// console.log(mydate.toUTCString())//Thu, 05 Feb 2026 02:39:39 GMT
// console.log(mydate.toTimeString())//02:40:19 GMT+0000 (Coordinated Universal Time)

// let mynewdate = new Date(2023, 06, 22)
// console.log(mynewdate.toDateString())//Sat Jul 22 2023

// let mynewdate2 = new Date(2025, 03, 30, 07, 11)
// console.log(mynewdate2.toLocaleString())//4/30/2025, 7:11:00 AM

let mydate1 = Date.now();//It will show the date in mili second
console.log(mydate1)

console.log(Math.floor(Date.now()/1000))//1770263449 //It will show in second
console.log(Math.floor(mydate1/1000))//1770263486

let mydate2 = new Date();
console.log(mydate2.getDate())//5
console.log(mydate2.getHours())//3
console.log(mydate2.getDay())//4
console.log(mydate2.getMonth())//1