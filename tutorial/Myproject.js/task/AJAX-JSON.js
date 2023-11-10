let myJsonArray = new XMLHttpRequest();
myJsonArray.open("GET", "AJAX-JSON.json", true);
myJsonArray.send();
// console.log(myJsonArray);

myJsonArray.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200)
        var myData = JSON.parse(this.responseText);
    for (let ele in myData) {
        myData[ele].username = "All";
        console.log(`${myData[ele]}\n`)
    }


}

myJsonArray.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myData = JSON.parse(this.responseText);
        let myContainer = document.createElement("div")
        myContainer.id = "Data";

        for (let ele in myData) {
            let myDiv = document.createElement("div");

            let myID = document.createElement("p");
            myID.appendChild(document.createTextNode(myData[ele].id))
            myDiv.appendChild(myID);

            let myUname = document.createElement("p");
            myUname.appendChild(document.createTextNode(myData[ele].username))
            myDiv.appendChild(myUname);

            let myType = document.createElement("p");
            myType.appendChild(document.createTextNode(myData[ele].type))
            myDiv.appendChild(myType);
            myContainer.appendChild(myDiv);
            // document.write("$$$$$$$$");
        }
        document.body.appendChild(myContainer);
    }
};





