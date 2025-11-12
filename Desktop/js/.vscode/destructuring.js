//destructuring = extract values from arrays and objects, then assign them to varibales in a convient way
//               [] = to perfrom array destructuring
//               {} = to perform object destructuring

const colors = ["Red", "green", "blue", "black", "orange"];

[colors[0], colors[3]] = [colors[1], colors[2]]

console.log(colors);