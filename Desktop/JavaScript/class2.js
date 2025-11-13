//function

function add(n1,n2,n3){
    console.log("Add logic")
    return a+b+b
}

//Arrow function 

const multiply = (x,y) => x*y

console.log(multiply(10,20))

//Arrow scoped
const division = (x,y) => {
    const rs = x/y
    return res
}

console.log(division(10,20))

function average1(n1,n2,m3) {
    return (n1,n2,m3)/3
}

const average2 = (n1 ,n2, n3) => (n1+n2+n3)/3
const average3 = (n1, n2, n3) => {
    let avg = (n1+n2+n3) / 3
    return avg
}

console.log(average1(10,20,30))
console.log(average2(10,20,30))
console.log(average(10,20,30))

//Higher order functions / callbacks

const calculate = (num1, num2, operation) => {
    let res = operation(num1, num2)
    console.log("From Function",res)
    return res
}

let num1=10
let num2=30
let sumFunction = (a,b) => a + b
let multuplyFuncton = (a,b) => a * b
let calculateSum = calculate(num1, num2, sumFunction)
console.log("After Function",calculateSum)

calculate(200, 300, (num1,num2) => num1 - num2)

calculate(230, 399, (num1,num2) => {
    return num1/num2

})


const userStatus = ( username,callback) => {
    let res = callback(username)
    console.log('Is ${username}: ${res}')
    return res

}

const isAdmin = (username) => username === "admin" 
const isGuest = (username) => username === "guest"

let scenario1 = userStatus("admin", isAdmin)
let scenario2 = userStatus("guest", isAdmin)
let scenario3 = userStatus("xyz", isGuest)
let scenario4 = userStatus("guest", isGuest)
console.log(scenario1, scenario2, scenario3, scenario4)

let scenario5 = userStatus("teacher", (usrname) => username == "teacher")
let scenario6 = userStatus("student", (username) => {
    return username !=="teacher"
})
console.log(scenario5, scenario6)


//closures
// a function that return functions with shared variables
const outerFunction = (outerVariables) => {
    console.log("From outer Function, outerVariable")
    return (innerVariable) => {
        console.log(`Outer Variables: ${outerVaraible}`)
        console.log(`Inner Variable: ${innerVariable}`)
        
    }
}

const newFunction = outerFunction("outside")
newFunction("inside")
newFunction("new inside")

const counter = (start) => {
    let count = start
    console.log("Starting counter with" + count)
    return () => { 
        count++
        return count

    }
}

const addCounter = counter(10)
console.log(addCounter()) //11
console.log(addcounter()) //12
console.log(addcounter()) //13


const countt  = (start) => {
    let count = start 
    console.log("Starting countt with" + count)      
      return(actions) => {
            if (actions == "decrement"){
                count--
            }
            if (actions ==="reset"){
                count = start
            }
            if (actions == "increment"){
                count ++
            }
            return count
        }
    
}

const countVar = countt(5)
console.log(countVar("increment"))
console.log(countVar("increment"))
console.log(countVar("decrement"))
console.log(countVar("reset"))

