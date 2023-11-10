// let start = 10;
// let end = 0;
// let stop = 3;
// console.log(start)
// for (let i = --start; i >= end; i--) {
//     console.log("0" + i)
//     if (i === stop) {
//         break
//     }
// }


// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let i = start; i <= end; i++) {
//     console.log(i + "\n");
//     for (let j = breaker; j < end; j += breaker) {
//         console.log(`-- ${j}\n`)
//     }
// }
let start = 0;
let swappedName = "elZerO";


for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i].toUpperCase() === swappedName[i])
        swappedName[i] = swappedName[i].toUpperCase();
    else {
        swappedName[i] = swappedName[i].toLowerCase();
    }
}
let a = ["qusai", , "ahmed"
]

console.log(swappedName)