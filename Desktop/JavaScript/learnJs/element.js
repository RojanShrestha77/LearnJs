//element selectors = Methods used to target and manipulate HTML elements 
//                    They allow you to select one or multiple HTML elements from the DOM (Document Object Model)

 // document.getELementById()
//  document.getELementByClassNAme()
// document.getElementByTagNAme()
// document.querySelector()
// document.querySelectorAll()
// 2️⃣ querySelector() / querySelectorAll()
// Select elements using any CSS selector (class, id, tag, attribute, pseudo-classes).
// It works with <ul>, <ol>, <div>, <p>, <button> — any HTML element.

// DOM Navigator = The process of navigating through the structure of an HTMl document using Javascript.

//.firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// const ulElemens = document.querySelectorAll("ul");

// ulElemens.forEach(ulElement => {
//     const firstChild  = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "red"
// })

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

// block -> element is visible and takes up the full width
// inline -> element is visible but only takes as much width as its content
// none -> element is completely hidden, takes no space.

myButton.addEventListener("click",event => {
    if(myImg.style.visibility === "hidden"){
            myImg.style.visibility = "visible";
            myButton.textContent = "Hide";

        
    } else {
        myImg.style.visibility = "hidden";
        myButton.textContent = "show";
    }

})