document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
// console.log("%cElzero %cWeb %cSchool", "color:red;font-size:20px", "color:green;font-size:20px", "color:white;background-color:blue;font-size:20px;");
console.log("%cgroup1", "fontSize:20px;");
console.group();
console.log("message one");
console.log("message two");
console.group();
console.log("%cchild group", "fontSize:20px;");
console.log("message one");
console.log("message two");
console.group();
console.log("%grand child group", "fontSize:20px;");
console.log("message one");
console.log("message two");
console.groupEnd(); console.groupEnd(); console.groupEnd();
console.log("%cgroup2", "fontSize:20px;");
console.group();
console.log("message one");
console.log("message two");
console.groupEnd();
console.table(["Elzero", "Ahmed", "qusai", "Sameh", "Aya"]);

// console.log("Iam In Console");
// document.write("Iam In Page");


