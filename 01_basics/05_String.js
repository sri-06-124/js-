const name = "Srikant";
const age = 19;

console.log(`My name is ${name} and im ${age} years old.`) /*' ' → normal string, " " → normal string, ` ` → template string (allows ${}) */

const gameName = new String("Srikant23")
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newGame = gameName.substring(0, 4);//Srik
console.log(newGame);

const newGame1 = gameName.slice(3, 7);//kant
console.log(newGame1);