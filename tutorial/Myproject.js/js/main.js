
// let myAdmins = ["Ahmed", "Osama", "Sayed", "stop", "Samera"];
// let myEmployees = ["Amged", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samia"];

// let adminscount = 0;
// let employeeCounter = 0;

// for (var i = 0; i < myAdmins.length; i++) {
//     if (myAdmins[i] === "stop") break;
//     adminscount++;

// }

// document.writeln("<div> We Hava " + adminscount + "Admins </div>");

// for (let i = 0; i < adminscount; i++) {
//     document.write(`<div><br>  The Admin for team ${i + 1} is ${myAdmins[i]} </div>`);
//     document.write(`<h2>Team members :</h2>`);
//     for (let j = 0; j < myEmployees.length; j++) {
//         if (myEmployees[j][0] === myAdmins[i][0]) {
//             employeeCounter++;
//             document.write(`<div>- ${employeeCounter + " " + myEmployees[j]} </div > `);
//         }
//     }
//     document.write("<hr>")
// }



// function fun1(a, b, c) {
//     let name = typeof a === "string" ? a : (typeof b === "string" ? b : c);
//     let age = typeof a === "number" ? a : (typeof b === "number" ? b : c);
//     let bool = typeof a === "boolean" ? a : (typeof b === "boolean" ? b : c);
//     if (bool)
//         console.log(`Your name is ${name}, Your Age is ${age}, and you are available for hireing`);
//     else
//         console.log(`Your name is ${name}, Your Age is ${age}, and you are not available for hireing`);
// }

// fun1(12, "qusai", true);
