console.log(Number.MAX_SAFE_INTEGER + Number.MIN_SAFE_INTEGER);

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100


let num = 10;
console.log(Number((Number.isInteger(num))) + Number((Number.isInteger(num)))); // 2



let flt = 10.4;
console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.ceil(parseInt(flt))); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.floor(parseInt(flt)));


console.log(parseInt(2 + Math.random() * 5));