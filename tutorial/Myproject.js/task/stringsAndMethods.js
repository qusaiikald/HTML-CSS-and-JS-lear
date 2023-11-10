let userName = "Elzero";

console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z", 0)); // True
console.log(word.startsWith("E", 0)); // True
console.log(word.endsWith("o", 6)); // True