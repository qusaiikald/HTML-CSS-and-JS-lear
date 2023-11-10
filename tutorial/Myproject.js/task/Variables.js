let a = 10;
let b = 20;

console.log(a + "" + b); // Normal Concatenate => 1020
console.log(typeof (a + "" + b)); // Normal Concatenate => String
console.log(`${a}${b}`); // Template Literals Way => 1020
console.log(typeof `${a}${b}`); // Template Literals Way => String

console.log(a + "\n" + b);
console.log(`${a}` + "\n" + `${b}`);

let elzero = ["object"];
console.log(elzero.innerHTML);
console.log(typeof elzero);



let I = "I'm in";
let L = "love";
let W = "with";
let J = "JavaScript";

console.log(I + "\n" + L + "\n" + "++" + W + "++\n" + "\"\"" + J + "\"\"")




let x = 21;
let y = 20;

console.log(`_${x}_${y}${x}_${y}${x}_${y}${x}_${y}_`); // _21_2021_2021_2021_20_