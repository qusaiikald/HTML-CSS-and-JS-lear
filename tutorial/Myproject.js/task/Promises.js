


// const getData = function (link) {
//     return new Promise((res, rej) => {
//         let myData = new XMLHttpRequest();
//         myData.onload = function () {
//             if (this.readyState == 4 && this.status == 200)
//                 res(JSON.parse(this.responseText));
//             else { rej(Error("data not found")) }
//         }
//         myData.open("GET", link);
//         myData.send();
//     });

// }


// getData("AJAX-JSON.json").then((res) => {
//     res.length = 5;
//     return res;
// }).then(function fun1(myData) {
//     let myContainer = document.createElement("div")

//     for (let ele in myData) {
//         let myDiv = document.createElement("div");

//         let myID = document.createElement("p");
//         myID.appendChild(document.createTextNode(myData[ele].userId))
//         myDiv.appendChild(myID);

//         let myUname = document.createElement("p");
//         myUname.appendChild(document.createTextNode(myData[ele].title))
//         myDiv.appendChild(myUname);

//         let myType = document.createElement("p");
//         myType.appendChild(document.createTextNode(myData[ele].description))
//         myDiv.appendChild(myType);
//         myContainer.appendChild(myDiv);
//         // document.write("$$$$$$$$");
//     }
//     document.body.appendChild(myContainer);
// });

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
// }

// asyncCall();
// console.log("q");






function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
}

function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
}

async function sequentialStart() {
    console.log("==SEQUENTIAL START==");

    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. this runs 2 seconds after 1.

    const fast = await resolveAfter1Second();
    console.log(fast); // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
    console.log("==CONCURRENT START with await==");
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second(); // starts timer immediately

    // 1. Execution gets here almost instantly
    console.log(await slow); // 2. this runs 2 seconds after 1.
    console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
    console.log("==CONCURRENT START with Promise.all==");
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
        (messages) => {
            console.log(messages[0]); // slow
            console.log(messages[1]); // fast
        },
    );
}

async function parallel() {
    console.log("==PARALLEL with await Promise.all==");

    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))(),
    ]);
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart

// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
