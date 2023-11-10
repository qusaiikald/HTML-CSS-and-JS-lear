// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";



// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// console.log(specialNames.match(regEx));

// ['Os10O', 'OsO', 'Os100O']

// let phone = "+(995)-123 (4567)";
// let regEx = /\+(\d{3})-\d{3}\s\(\d{4}\)/ig;
// console.log(phone.match(regEx));

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// http.s.://.(?:[-w].

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";



let re = /25(\/|\s|\s-\s)10(\/|\s|\s-\s)(19)?82/ig;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"