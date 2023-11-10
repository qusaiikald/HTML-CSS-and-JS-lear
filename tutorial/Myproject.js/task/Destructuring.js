// let myNumbers = [1, 2, 3, 4, 5];

// let [a, , , , e] = myNumbers;

// console.log(a * e); // 5


// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a, b, c, [d, e, [f, g]]] = mySkills;


// Write Your Destructuring Assignment Here

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let array = arr1.concat(arr2.concat(arr3));

// let [c, , , b, , , , a] = array;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
// };

// let { age: a, working: w, country: c, hobbies: [h1, , h3] } = member;

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming






let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


let [a, b, c] = myFriends;

function fun(Object) {
    let { title: t, age: ag, available: av, skills: [, skill] } = Object;
    let availabllty = av ? "availabe" : "Not Available";
    console.log(`${t}\n${ag}\n${availabllty}\n${skill}`)
}



if (chosen === 1)
    fun(a);

else if (chosen === 2)
    fun(b);
else if (chosen === 3)
    fun(c);
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"