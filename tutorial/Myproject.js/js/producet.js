let myHeader = document.createElement("header");
let logo = document.createElement("h2");
let myList = document.createElement("ul");

let logoText = document.createTextNode("Elzero");
let home = document.createTextNode("home");
let about = document.createTextNode("about");
let services = document.createTextNode("services");
let contact = document.createTextNode("contact");
logo.appendChild(logoText);

myHeader.className = "header";
logo.className = "logo";
myList.className = "list";

// Start list
let homeLi = document.createElement("li");
homeLi.appendChild(home);
homeLi.className = "navbar"; // Assign class name to homeLi
myList.appendChild(homeLi);

let aboutLi = document.createElement("li");
aboutLi.appendChild(about);
aboutLi.className = "navbar"; // Assign class name to aboutLi
myList.appendChild(aboutLi);

let servicesLi = document.createElement("li");
servicesLi.appendChild(services);
servicesLi.className = "navbar"; // Assign class name to servicesLi
myList.appendChild(servicesLi);

let contactLi = document.createElement("li");
contactLi.appendChild(contact);
contactLi.className = "navbar"; // Assign class name to contactLi
myList.appendChild(contactLi);
// End list

myHeader.appendChild(logo);
myHeader.appendChild(myList);
document.body.appendChild(myHeader);

// CSS style
myHeader.style.cssText = "display:flex;flex:1;justify-content:space-between;height:50px;flex-wrap:wrap";
myList.style.cssText = "display:flex;padding:10px;list-style:none";
let listItems = myList.getElementsByClassName("navbar"); // Get the list items with class "navbar"
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.cssText = "padding-left:20px;font-size:20px;font-weight:200";
}
logo.style.cssText = "color:green;font-size:30px;padding:0px";

// Start landing
let landing = document.createElement("div");
landing.className = "content";

for (let i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    product.className = `product ${i}`;
    product.id = `div-${i}`;
    let numbering = document.createElement("h2");
    numbering.textContent = i;

    let desc = document.createElement("p");
    desc.className = "description";
    desc.textContent = "product";

    product.appendChild(numbering);
    product.appendChild(desc);
    landing.appendChild(product);
    product.style.cssText = "text-align:center;margin:5px 5px 5px 0px;background-color:#CCC;flex-basis:23%;";
}
document.body.appendChild(landing);
// css style
landing.style.cssText = "; display:flex;flex-wrap:wrap;justify-content:space-between;align-content:center;"

let myFooter = document.createElement('footer');
let footDiv = document.createElement("div");
let footText = document.createTextNode("CobyRight 2021");
footDiv.appendChild(footText);
myFooter.appendChild(footDiv);
document.body.appendChild(myFooter);
myFooter.style.cssText = "background:green;text-align:center";