// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }

// class Car{
//     constructor(name, model, price){
//         this.name=name;
//         this.model=model;
//         this.price=price;
//     }
//     run(){
//      console.log("Car is Running now")
//     }
//     stop(){
//         console.log("Car is stopped now")
//        }
// }

// let car1=new Car("qusai","2020","20000");


// console.log(`car one name is ${car1.name} and model is ${car1.model} and Price is ${car1.price}`);
// car1.run();
// Needed Output

//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"


// class Phone {
//     constructor(name, serial, price) {
//         this.name = name;
//         this.serial = serial;
//         this.price = price;
//     }
// }

// class Tablet extends Phone {

//     constructor(n, s, p, si) {
//         super(n, s, p);
//         this.size = si || "Unknown";
//     }
//     fullDetails() {
//         return `${this.name} Serial is ${this.serial} and the size is ${this.size}`;
//     }
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
//   // LG Serial is 250450650 And Size Is Unknown


// Edit The Class
// class User {
//     #c;
//     constructor(username, card) {
//         this.u = username;
//         this.#c = () => {
//             return card.toString().replace(/(.{4})(?!$)/g, "$1-")
//         };
//         this.showData = `Hello ${this.u} Your Credit Card Number Is ${this.#c()}`;
//     }



// }

// // Do Not Edit Anything Below
// let userTwo = new User("Ahmed", "1234567812345678");


// let userOne = new User("Osama", "1234-5678-1234-5678");

// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined


// Write Your Code Here


// String.prototype.addLove = function () {
//     return `I love ${this} web School`;
// };
// let myStr = "qusai";
// console.log(myStr.addLove()); // I Love Elzero Web School

// class User {
//     #c;

//     constructor(username, card) {
//         this.u = username;
//         this.#c = () => {
//             return card.replace(/(.{4})(?!$)/g, "$1-");
//         };
//         this.showData = `Hello ${this.u} Your Credit Card Number Is ${this.#c()}`;
//     }

//     // Define a getter method to access the formatted card number
//     getFormattedCard() {
//         return this.#c();
//     }
// }

function chekNum(num) {

}

let num = 1000;

// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };

// Object.defineProperty(myObj, "score", {
//     writable: false,
// });

// Object.defineProperty(myObj, "id", {
//     enumerable: false,
// });

// Object.defineProperty(myObj, "country", {
//     // configurable: false,
//     enumerable: false,
// });

// myObj.score = 500; // This line will not change the value of the score property due to the non-writable attribute.

// // Delete the 'country' property from the object
// delete myObj.country;

// // Don't change the code below
// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
// }

// console.log(myObj);



// let myBD = new Date("june 12, 2004");
// console.log(myBD);

// function* gen() {
//     let index = 1;
//     while (true) {
//         yield index *= 11;
//     }
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}


// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
// }
// function* genAll() {
//     yield* genNumbers();
//     yield* genLetters();
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}


