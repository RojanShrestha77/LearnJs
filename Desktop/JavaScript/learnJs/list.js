// NodeList = Static Collection of HTML element by(id,class,element)
//            can be created by ursing querySelectorAll()
//           similar to an array, but no (map,filter,reduce) for 
//           NodeList wont update to automatically reflect changes
// nodelist are the list we get after using the queryselector


//classList =  Element Property in Javascript used to interact 
//            with an elment's list of classes (css classes) 
//             Allows you to make reusable classes for many element acress your webpage

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");
myButton.classList.remove("enabled");