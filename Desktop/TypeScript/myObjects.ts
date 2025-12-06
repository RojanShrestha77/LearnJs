// // const User = {
// //     name: "Rojan",
// //     email: "hitesh@lco.dev",
// //     isActive: true
// // }

// // function createUser({name,isPaid}:{name: string, isPaid: boolean}) {
// //     console.log(name,isPaid);
// // }

// // createUser({ name: "hritesh", isPaid: false})

// // function createCourse():{name:string, price: number}{
// //     return {name: "react", price: 399}
// // }
// // Type Aliases
// type User ={
//     name: string;
//     age: number;
//     email: string;
//     isActive: boolean;

// }

// // function createUser(user: User): User{
// //     return {name:"", email:"", age: 2, isActive: true}
// // }

// // createUser({name:"", age: 2 ,email:"", isActive:true})


// function greetUser(user: User): void {
//     if(user.isActive) {
//         console.log(`Hello ${user.name}, your email is ${user.email} and you are ${user.age} years old`)

//     } else {
//         console.log(`${user.name} is not Active`)
//     }
// }

// greetUser({
//         name: "Rojan",
//     age: 17,
//     email: "rojan@example.com",
//     isActive: true
// })