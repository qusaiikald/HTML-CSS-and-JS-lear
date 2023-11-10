// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];


// console.log(n2.length * n2.concat(n1).length *); //210

// let mySet = new Set([10]);

// mySet.add(20);
// mySet.add(mySet.size);
// console.log(mySet);
// console.log(Array.from(mySet).pop());

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// let mySet = new Set(myFriends.sort());
// console.log(mySet)
// Needed Output
// (4)['Ahmed', 'Mahmoud', 'Osama', 'Sayed']




// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };

// let myMap = new Map();

// // Add the key-value pairs from the myInfo object to the Map
// Object.entries(myInfo).forEach(([key, value]) => {
//     myMap.set(key, value);
// });

// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("role"));
// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

// let theNumber = 100020003000;
// let mySet = new Set([...String(theNumber)].filter(char => char !== '0'));

// console.log(+[...mySet].join(''));
// Output: 123


// Output: Set { '1', '2', '3' }

// Needed Output
// 123

// let theName = "Elzero";



// let myArray = Object.assign([], theName);



// console.log(myArray);
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// function fun1(e) {
//     if (typeof e === "string")
//         ;
// };

// let result = chars.filter(fun1);

// console.log(result);

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let numsThree = [...numsOne, ...numsTwo];
numsThree = numsOne.concat(numsTwo);

// Needed Output
// [1, 2, 3, 4, 5, 6]