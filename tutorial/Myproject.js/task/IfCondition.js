// let num = 990;

// if (num < 10) {
//     console.log("00" + num)
// }

// else if (10 <= num <= 99) {
//     console.log("0" + num);
// }
// else {
//     console.log(num);
// }



// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 !== str) {
//     console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }
// if (num1 == str) {
//     console.log("{num1} Is The Same Value As {str}");
// }
// if (num1 != str2) {
//     console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// }
// if (str !== str2) {
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }


// let num11 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num11 && num3 !== num2)
//     console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");

// if (num3 > num11 && num3 == num2)
//     console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");

// if (num3 !== num11 && num3 !== num2)
//     console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");




// let num1 = 10;
// let num2 = 10;
// let num3 = "10";
// let num4 = 20;


// if (num4 > num2) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 2

// if (num4 > num2 && num1 < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 3

// if (num4 > num2 && num1 === num2) {
//     console.log("True");
// } else {
//     console.log("False");
// }



// if ((num1 + num2) < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 5

// if ((num1 + num2) < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//     console.log("True");
// } else {
//     console.log("False");
// }

let day = "Monday";

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointemnts Available");
        break;
    case "Thursday":
    case "Monday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday": console.log("From 10:00 AM To 6:00 PM"); break;
    case "Wednesday": console.log("From 10:00 AM To 7:00 PM"); break;

    default: console.log("Its Not A Valid Day"); break;

}







