// Create new element and add it in the list:

function creatingItem(itemName) {
  const newElement = document.createElement("li");
  const newText = document.createTextNode(itemName);
  newElement.appendChild(newText);

  const btn = newButton("remove-item btn-link text-red");

  newElement.appendChild(btn);

  document.querySelector("ul").appendChild(newElement);
}

function newButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);
  return button;
}

creatingItem("Shakes");
creatingItem("Eggs");
creatingItem("Biscuits");
// ------------------/////////-------------------------

function adjacentElement() {
  const refElement1 = document.querySelector("li:nth-child(7)");

  const newElement1 = document.createElement("li");
  //   newElement1.textContent = "Hello g...";
  const newTextEle = document.createTextNode("Hello g...");
  newElement1.appendChild(newTextEle);

  refElement1.insertAdjacentElement("beforebegin", newElement1);

  //   console.log(newElement1);
}

adjacentElement();
// -------------///////-------------

// insertBefore :

function inserting() {
  const parent1 = document.querySelector("header");

  const h1 = document.querySelector("#app-title");

  const h2New = document.createElement("h3");
  h2New.innerText = "Shopping Cart :)";

  parent1.insertBefore(h2New, h1);

  //   console.log(h2New);
}
inserting();

// ---/////////-----------------

// insertBefore :
function insertAfter(refChild, newText) {
  const parentAgain = document.querySelector("header");
  parentAgain.insertBefore(newText, refChild.nextSibling);
}

const h1Again = document.querySelector("#app-title");

const newTextAgain = document.createElement("h3");
newTextAgain.textContent = "Shipping Cart :)";

insertAfter(h1Again, newTextAgain);
// ------/////////////////---------------------------------

// replacing elements:

function replaceFirstItem() {
  const firstLi = document.querySelector("li");

  const newLi1 = document.createElement("li");
  newLi1.innerText = "First replaced";

  firstLi.replaceWith(newLi1);
}

replaceFirstItem();
// -----//////////----------

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");
  secondItem.outerHTML = "<li>2nd replaced</li>";
}
replaceSecondItem();
// -------------//////--------------

// function replaceAllElements() {
//   const allEle = document.querySelectorAll("li");

//   allEle.forEach(
//     (item, index) =>
//       (item.outerHTML =
//         index === 2 ? "<li>3rd item</li>" : "<li>Replaced all</li>")
//   );
// }

// replaceAllElements();
// -//---------------------

// replace child element:

function replaceChildHeadings() {
  const parent2 = document.querySelector("header");

  const h1 = document.querySelector("h1");

  const h11 = document.createElement("h4");
  const h11Text = document.createTextNode("shoping Carts");
  h11.appendChild(h11Text);

  parent2.replaceChild(h11, h1);
}

replaceChildHeadings();
// ---------//////------------------------

// remove clear button;

function removeClearBtn() {
  const btn1 = document.querySelector("#clear");
  btn1.remove();
}
removeClearBtn();
// ==========/////////=================

// remove child of the parent :

function removeChildOfEle(itemNum) {
  //   console.log(itemNum - 1);
  const parent = document.querySelector("ul");

  const child = document.querySelectorAll("li")[itemNum - 1];

  parent.removeChild(child);

  console.log(child);
}

removeChildOfEle(8);
// ============-------/////==============
