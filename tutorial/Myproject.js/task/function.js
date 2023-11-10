// function sayHello(theName, theGender) {
//     let name = theName;
//     if (!theGender) {
//         console.log(`Hello ${name}`);
//     }
//     else {
//         var thebrename = theGender === "Male" ? "Mr" : "Miss";


//         console.log(`Hello ${thebrename + " " + name} `);
//     }
// }


// sayHello("Osama", "Male");
// sayHello("Eman", "Female");
// sayHello("Sameh");

// function calculate(firstNum, secondNum, operation) {
//     let theResult = 0;

//     if (!secondNum) {
//         console.log("Second Number not found");
//     }
//     else {
//         switch (operation) {
//             case "add": theResult = firstNum + secondNum; break;
//             case "subtract": theResult = firstNum - secondNum; break;
//             case "multiply": theResult = firstNum * secondNum; break;
//             default: theResult = firstNum + secondNum; break;
//         }
//         console.log(theResult);
//     }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600


// function ageInTime(theAge) {
//     if (100 < theAge || 10 > theAge) {
//         console.log("Age out of oRange");
//     }
//     else {
//         let theyears = theAge;
//         let theMonths = theyears * 12;
//         let theWeeks = theMonths * 4;
//         let theDays = theWeeks * 7;
//         let theHours = theDays * 24;
//         let theMinutes = theHours * 60;


//         console.log(`your age in yours is ${theyears}`);
//         console.log(`your age in month is ${theMonths}`);
//         console.log(`your age in weeks is ${theWeeks}`);
//         console.log(`your age in days is ${theDays}`);
//         console.log(`your age in hours is ${theHours}`);
//         console.log(`your age in minuts is ${theMinutes}`);

//     }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`)
//     for (let i = startYear; i <= endYear; i++) {

//         document.write(`<option value=${i}>${i}</option>`)

//     }
//     document.write(`</select>`)
// }
// createSelectBox(2000, 2021);

// function multiply(...numbers) {
//     let result = 1;
//     for (let i = 0; i < numbers.length; i++) {
//         if (!(typeof numbers[i] === "string")) {
//             result = result * (parseInt(numbers[i]));
//         }
//     }
//     console.log(result);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//         let arrayName = zName.split(" ");
//         let name = arrayName[0] + " " + arrayName[1][0].toUpperCase();
//         return name;
//         // Osama Mohamed => Osama M.
//         // Ahmed ali => Ahmed A.
//     }
//     function ageWithMessage(zAge) {
//         let message = `Your Age Is ${zAge[0] + zAge[1]}`;
//         return message;
//     }
//     function countryTwoLetters(zCountry) {
//         let country = zCountry.charAt(0).toUpperCase() + zCountry.charAt(1).toUpperCase();
//         return country;
//         // Syria => You Live In SY
//     }
//     function fullDetails() {
//         console.log(`Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`);
//     }
//     return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   // Hello Ahmed A., Your Age Is 32, You Live In SY

// function itsMe() {
//     return `Iam A Normal Function`;
// }
// let i = () => `Iam A Normal Function`;
// console.log(i()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }

// let urlCreate = (protocol, web, tld) => {
//     return `${protocol}://www.${web}.${tld}`;

// }
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// function specialMix(...data) {

//     let result = 0;

//     for (let i = 0; i < data.length; i++) {
//         let result2 = 0;
//         if (typeof data[i] === "number") {
//             result += data[i];
//         }
//         else {
//             for (let j = 0; j < data[i].length; j++) {
//                 if (typeof data[i][j] === "number") {
//                     result2 = result2 + data[i][j];
//                 }

//             }
//             result += Number.parseInt(result2);
//         }

//     }

//     if (result === 0) {
//         console.log(`Its all String `);
//     }
//     else
//         console.log(result);

// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let editmix = mix.map(function (ele) {
//     return isNaN(ele) ? ele : "";
// }).reduce(function (first, current) {
//     return first + current;
// });
// console.log(editmix);

// let myString = "EElllzzzzzzzeroo";

// let myArray = myString.split("").filter(function (ele, index, array) {
//     return ele !== array[index + 1];
// }).join("");
// console.log(myArray);

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newArray = myArray.reduce(function (ele, current) {
//     return `${ele}${current}`;
// }).split("")
//     .filter(function (ele) {
//         return ele === "E" || ele === "l" || ele === "z" || ele === "r" || ele === "o";
//     }).join("");
// console.log(newArray);
// Elzero



// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let newArray = numsAndStrings.filter(function (ele) {
//     return !isNaN(ele);
// }).map(function (ele) {
//     return - ele;
// });
// console.log(newArray);
// [-1, -10, 10, 20, -5, -3]

// let nums = [2, 12, 11, 5, 10, 1, 99];
// let newArray = nums.reduce(function (acc, current) {
//     return current % 2 === 0 ? acc * current : acc + current
// }, 1)
// console.log(newArray);
// 500
