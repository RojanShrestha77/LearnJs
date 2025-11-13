// DOM = DOCUMENT OBJECT MODEL
// Object{} that represent the page you see in the web browser and provide
// you with an API to interact with it.
// Web browser constructs the DOM when ti lads an HTMl document,
// and structure all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically
//Dynamically means something that can change while the program is running its not fixed
// / the live representation of your html which can be accessed by the javascript
const username = "Bro Code";
const WelcomeMsg = document.getElementById("welcome-msg");

WelcomeMsg.textContent += username ==="" ? `Guest` : username;

console.dir(document);