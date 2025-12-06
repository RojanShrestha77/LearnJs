// class User {
//     name: string;
//     age: number;

//     constructor(name: string,age: number ) {
//         this.name = name;
//         this.age = age;
//     }

// }

// const rojan = new User("rojan", 

// function Generic <number>( value: number): number
// function Generic<T>(val: T): T {
//     return val;


// }

// const num =  Generic<string>("rojan")


// // narrowing
// function detectType(val: number | string) {
//     if(typeof val === "string") {
//         return val.toLowerCase()
//     }
//     return val + 3;
// }

// function detectType2(id: string|null) {
//     if(!id) {
//         console.log("Please enter the credentials")
//     }
//     return id?.toUpperCase()
// }
interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAcc(acc: User | Admin) {
    if("isAdmin" in acc){
        return acc.isAdmin

    }
}

// instaneof = used to check if an object is an instance of and constructor