// let member = {
//     name: "Elzero",
//     age: "38",
//     country: "Egypt",
//     fullDetails: function () {
//         return `My Name Is ${this.name}, My  Is ${this.age}, I Live in ${member.country}`;
//     },
// };



// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// let objMethodOne = {
//     property: "prop1",
// }

// console.log(objMethodOne.property); // "Method One"

// let objMethodTwo = new Object({
//     property: "prop1",
// });

// console.log(objMethodTwo.property); // "Method Two"

// // let test = {
// //     property: "prop1",
// // }

// let objMethodThree = new Object;

// objMethodThree.property = "prop1";


// console.log(objMethodThree.property); // "Method Three"

// let objMethodFour = {};
// objMethodFour["property"] = "prop1";
// console.log(objMethodFour.property); // "Method Four"


// let a = 1;

// let threeNums = {
//     b: 2,
//     c: 3,
//     d: 4,
// };

// let twoNums = {
//     e: 5,
//     f: 6,
// };



// let finalObject = Object.assign(a, threeNums, twoNums);

// console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       price: 50,
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },

//     },
//     "YS": {
//       publisher: "Falcom",
//       price: 40,
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },

//     },
//   };

//   // Code One => How To Get Object Length ?
//   let objectLength = Object.keys(myFavGames).length;

//   for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${myFavGames[" "]}`);
//     console.log(`The Publisher Is ${myFavGames.publisher}`);
//     console.log(`The Price Is ${myFavGames.publisher.price}`);

//     // Check If Nested Object Has Property (bestThree)
//     // if (myFavGames.bestThree) {
//     //   console.log("- Game Has Releases");
//     //   console.log(`First => ${myFavGames.bestThree.one}`);
//     //   console.log(`Second =>${myFavGames.bestThree.two}`);
//     //   console.log(`Third => ${myFavGames.bestThree.three}`);
//     // }
//     console.log("#".repeat(20));
//   }

// Ouput

//   "The Game Name Is Trinity Universe"
//   "The Publisher Is NIS America"
//   "The Price Is 40"
//   "####################"
//   "The Game Name Is Titan Quest"
//   "The Publisher Is THQ"
//   "The Price Is 50"
//   "- Game Has Releases"
//   "First => Immortal Throne"
//   "Second => Ragnarök"
//   "Third => Atlantis"
//   "####################"
//   "The Game Name Is YS"
//   "The Publisher Is Falcom"
//   "The Price Is 40"
//   "- Game Has Releases"
//   "First => Oath in Felghana"
//   "Second => Ark Of Napishtim"
//   "Third => origin"
//   "####################"


// let myDiv=document.getElementById("elzero");
// let myDiv = document.getElementsByClassName("element");
// let myDiv = document.getElementsByName("js");
// let myDiv = document.getElementsByTagName("div");
// let myDiv = document.querySelector(".element");
// let myDiv = document.querySelector("#elzero");
// let myDiv = document.querySelector("[name=`js`]");
// let myDiv = document.querySelector("div");
// let myDiv = document.querySelectorAll("div");
// let myDiv = document.querySelectorAll(".element");
// let myDiv = document.querySelectorAll("[name=`js`]");
// let myDiv = document.querySelector("#elzero");


// for (let i = 0; i < 10; i++) {
//     let myElement = document.createElement("div");
//     let myImg = document.createElement("img");
//     let myDecoding = document.createAttribute("decoding",);
//     let mySrc = document.createAttribute("src");
//     let myAlt = document.createAttribute("alt");
//     myImg.setAttribute("decoding", "async");
//     myImg.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//     myImg.setAttributeNode(myAlt);
//     document.body.appendChild(myElement);
//     myElement.appendChild(myImg);

// }

// let inDollar = document.querySelector("[name='dollar']");
// let myDiv = document.getElementsByClassName("result")[0];


// Function to update the result
// function updateResult() {
//     let egPound = 10 * inDollar.value;
//     myDiv.innerHTML = `${inDollar.value} USD Dollar = ${egPound} Egyptian Pound`;
// }

// // Attach the updateResult function to the input event
// let i = inDollar.oninput;
// console.log(i);

// // Set initial value and update the result
// inDollar.value = 10;
// updateResult();

// for (let i = 0; i < 5; i++) {

//     let myImg = document.querySelectorAll("img")[i];

//     if (myImg.hasAttribute('alt'))
//         myImg.setAttribute("alt", "old");

//     else
//         myImg.setAttribute("alt", "Elzero New");
// }


// let myNumber = document.querySelector("[type='number']");
// let myText = document.querySelector("[type='text']");
// let result = document.getElementsByClassName("results")[0];
// let option1 = document.querySelector("[selected]");
// let clickButton = document.querySelector("[type='submit']");

// clickButton.onclick = function () {
//     event.preventDefault();
//     let num = parseInt(myNumber.value); // Convert the value to an integer
//     let text = myText.value;

//     result.innerHTML = "";

//     for (let i = 1; i <= num; i++) {
//         let myElement = document.createElement("div");
//         myElement.innerHTML = text;
//         myElement.setAttribute("id", `id-${i}`);
//         result.appendChild(myElement);

//     }
// };

// document.querySelector("p").remove();
// let myDiv = document.querySelector(".our-element");

// let firstDiv = document.createElement("div");
// let firstDivText = document.createTextNode("Start");
// firstDiv.appendChild(firstDivText);
// firstDiv.className = "start";
// firstDiv.setAttribute("title", "start Element");
// firstDiv.setAttribute("data-value", "start");

// let secondDiv = document.createElement("div");
// let secondDivText = document.createTextNode("End");
// secondDiv.appendChild(secondDivText);
// secondDiv.className = "end";
// secondDiv.setAttribute("title", "End Element");
// secondDiv.setAttribute("data-value", "end");

// myDiv.before(firstDiv);
// myDiv.after(secondDiv);

// let myDiv = document.querySelector("div");
// let myText = myDiv.lastChild;
// console.log(myText);

// Get all the elements
// const elements = document.querySelectorAll("div, span, p, article, section");

// // Function to handle the click event
// function handleClick(qusai) {
//   const elementType = qusai.target.tagName.toLowerCase();
//   console.log("Clicked element type:", elementType);
// }

// // Attach click event listener to each element
// elements.forEach((element) => {
//   element.addEventListener("click", handleClick);
// });

// let message = window.prompt("Print a number from-to"); // the input will be num-num
// let newMessage = message.split("-");
// console.log(newMessage);
// let num1 = parseInt(newMessage[0]);
// let num2 = parseInt(newMessage[1]);
// let min = Math.min(num1, num2);
// let max = Math.max(num1, num2);
// for (let i = min; i <= max; i++) {
//   console.log(i);
// }


// let popup = document.createElement("div");
// let mainHead = document.createElement("h2");
// let Head = document.createElement("h5");

// let mainHeadingText = document.createTextNode("Welcome");
// let headText = document.createTextNode("Welcome To Elzero Web School");
// mainHead.appendChild(mainHeadingText);
// Head.appendChild(headText);

// popup.appendChild(mainHead);
// popup.appendChild(Head);

// document.body.appendChild(popup);
// popup.style.cssText = "display:none; position:fixed; top:10px; left:25px; background:#ccc; padding:30px;";

// let btn = document.createElement("button");
// let ex = document.createTextNode("x");
// btn.appendChild(ex);
// popup.appendChild(btn);
// btn.style.cssText = "position:absolute; top:5px; right:5px;";

// setTimeout(function () {
//   popup.style.display = "inline";
//   popup.style.backgroundColor = "#ccc";
// }, 2000);
// btn.onclick = function () {
//   popup.remove();
// };
// let myDiv = document.createElement("div");
// let divText = document.createTextNode("10");
// myDiv.appendChild(divText);
// document.body.appendChild(myDiv);

// function fun1() {
//   myDiv.innerHTML = myDiv.innerHTML - 1;
//   if (parseInt(myDiv.innerHTML) === 5) {
//     window.open("https://Elzero.org", "_blank", "width=400,height=500")
//   }
//   if (parseInt(myDiv.innerHTML) === 0) {
//     clearInterval(counter);
//   }
// }

// let counter = setInterval(fun1, 1000);

// var fontSelector = document.getElementById('font-selector');

// fontSelector.addEventListener('change', (event) => {
//   var selectedFont = event.target.value;
//   document.body.style.fontFamily = window.localStorage.getItem(selectedFont);
// });

// window.localStorage.setItem("openSans", "Open Sans");
// window.localStorage.setItem("cairo", "cairo");
// window.localStorage.setItem("roboto", "roboto");

// // var fontSelector = document.getElementById('font-selector');
// var colorSelector = document.getElementById('color-selector');
// var options = document.querySelectorAll("option");

// fontSelector.addEventListener('change', function () {
//   var selectedFont = fontSelector.value;
//   colorSelector.style.display = selectedFont ? "block" : "none";
// });

// window.localStorage.setItem("red", "red");
// window.localStorage.setItem("green", "green");
// window.localStorage.setItem("blue", "blue");

// colorSelector.addEventListener('change', function (event) {
//   var selectedColor = colorSelector.value;
//   document.body.style.color = window.localStorage.getItem(selectedColor);
// });

// for (var i = 0; i < options.length; i++) {
//   options[i].addEventListener('click', function () {
//     colorSelector.style.display = "block";
//   });
// }



// let opts = document.querySelectorAll("option");
// let selec = document.createElement("select");
// let opt1 = document.createElement("option");
// opt1.value = "green";
// let opt2 = document.createElement("option");
// opt2.value = "red";
// let opt3 = document.createElement("option");
// opt3.value = "blue";

// selec.appendChild(opt1);
// selec.appendChild(opt2);
// selec.appendChild(opt3);
// opts.appendChild(selec);

// var textInput1 = document.querySelector("#text1");
// var textInput2 = document.querySelector("#text2");
// var textInput3 = document.querySelector("#text3");
// let selecOption = document.querySelector("#selected-option");

// selecOption.addEventListener('change', function () {
//   window.sessionStorage.setItem("select", selecOption.value);
// });

// textInput1.addEventListener('input', function () {
//   window.sessionStorage.setItem("text1", textInput1.value);
// });

// textInput2.addEventListener('input', function () {
//   window.sessionStorage.setItem("text2", textInput2.value);
// });

// textInput3.addEventListener('input', function () {
//   window.sessionStorage.setItem("text3", textInput3.value);
// });

// // Retrieve stored values on page load
// textInput1.value = window.sessionStorage.getItem("text1") || '';
// textInput2.value = window.sessionStorage.getItem("text2") || '';
// textInput3.value = window.sessionStorage.getItem("text3") || '';
// selecOption.value = window.sessionStorage.getItem("select") || '';


