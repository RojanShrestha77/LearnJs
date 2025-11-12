//Array/List/Object

const arr1 = [10,20,30,40,50]
const arr2 = [false, "Hello", 20.5, null]

//data type is not restricted in JS array
//array spread/union
const arr3= [arr1,100,300] //[[10,30,40,50]100,200]
const arr4 =[...arr1, 100,200]
console.log(arr3)
console.log(arr4)
const arr5 = [...arr1,...arr2,...[900,100]]
arr1.push(60) //adds element ar the end
const popped = arr1.pop()
arr1.shift()//removes first element
arr1.unshift(5)// adds element at the start
console.log(arr1)
console.log(arr5)
console.log(popped)

//Array access
console.log(arr1[0]) // first element
console.log(arr2[0]) //
arr1[0] = -10
console.log = (arr1.length);

//Looping in array
for(let i=0; i<arr1.length; i++){
    console.log("for loop array",arr1[i])
}


//for of(loop value)
for(let element of arr2){
    console.log("For Of Loop Array: ",element)


}

//for in (index loop)
for(let idx in arr2){
    console.log("For in Loop Array",arr2[idx])
}

const person1 = {
    name: "Hari",
    age: 30,
    "isStudent": false,
    hobbies: ["Reading", "Traveling", "Coding"],
    address: {
        street: "123 Main St",
        city: "Kathmandu",
        country: "Nepal"
    }
}

console.log(person1)
console.log(person1.name)
console.log(person1["name"])
person1.age = 31
console.log(person1.hobbies[0])
console.log(person1.address.street)
delete person1.hobbies //removes hobbies property
console.log(person1)

//NUllish Checking/ Optimal chaining
console.log(person1.address.continent) //undefined
console.log(person1.address?.continent.name) //error - cannot read property of undefined
console.log(person1.address?.continent?.name) //undefined
console.log(person1.address?.continent?.name.cordinates) //?


//Nullish coalesing with optional chaininh
console.log(person1.address?.continent?.name ?? "No Name") //No Name
console.log(person1.address?.continent?.name?.coordinates ?? [0,0]) //[0,0]
console.log(person1.gender.type?? "Not specified") //?
console.log(person1.address?.country ?? "Unknown") //?

//Iterator functions
//forEach, map, filter, reduce
arr1.forEach(
    (element, index) => {
        console.log(`forEach Index: ${index}, Element: ${element}`)
    }
)
//callback 3 args: element, index, array
arr1.forEach(elem => console.log(elem))
//forEach no return value

const mappedArr1 = arr1.map(
    (element, index) => {
        return element * 2 + index
    }
)

console.log("Mapped Array:", mappedArr1)
const mappedArr2 = arr1.map(elem => elem * elem)
//map return the new array with the same length, transformed element

//filter
const filteredArr = arr1.length(
    (element) => {
        return element > 20
    }
)

console.log("filtered Array", filteredArr)
console.log(arr1,filter(elem => elem%2 === 0 ))

//filter returns new array with elements that satisfy condition <= length
//reduce
const sumOfArr1 = arr1.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue,
    0 // intial value of accumulator


)

//accumulator is carried over access iterations
console.log("Sum", sumOfArr1)
//return single aggregated value

const cart = [
    {name: "Milk", category: "grocery",price:2.5,qty:2, inStock: true},
    {name: "Shampoo", category:"beauty",price:1.8,qty:3, inStock:false},
    {name: "Egg", category:"grocery", price:5.8,qty:1, inStock:true}

];

const inStockProducts = cart.filter(item => item.inStock == true
    && item.category === "grocery"
)

const mappedCart = inStockProducts.map(item => ({
    name:item.name,
    qty:item.qty,
    LineTotal: item.price * item.qty
}))

const grandTotal = mappedCart.reduce((acc, item) => acc + item.LineTotal, 0)

console.log(inStockProducts)