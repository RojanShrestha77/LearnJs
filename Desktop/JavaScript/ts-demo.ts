let message: String = "Hello";
console.log(message);
// message = tru;

// pimitive types
let booleanVar: boolean = true;
let numberVar: number = 42;
let symbolVar: symbol = Symbol("unique");
let nullVar: null = null;
let undefiniedVar: undefined = undefined;
let bigintVar: bigint = 980719925464199n;
let anyVar: any = "Could be anything";
anyVar = anyVar + 100;

let unkownVar: unknown = "Unkown type";
// unkownVar = unkownVar +123;
// any can be anything, unkown nees to be asserted

// Array
let score: number[] = [100, 90, 95];
// tuples
let student: [string, number] = ["Alice", 20];

// Union type
// can be either string or a number
let id: string |  number;
id = "Helo"
console.log(id);
id = 1002;
console.log(id);
// id = false; //Error

// Functions
function add(num1: number, num2:number):  string {
    let sum: number  = num1+num2;
    return `sum is ${sum}`
}

let result: string = add(10,20);
console.log(result);

const greet = (name: string = "Guest"): void => {
    console.log(`Hello, ${name}`);

}
greet();

// Object definiton
// 1.  object Literal
let userDEtails: {name: string, age: number, desc?: string} = {
    name: "Bob",
    age: 25,
    // deas? string: optional property(the ?makes it optional)
    // desc: "A developer", //optional
    // isActive: false, //Error
}

// 2.Interfaces
interface Product {
    id: number;
    name: string | number;
    price: number | null;
    description?: string; // optional
    
}

let product1: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99, //price: null
};
console.log(product1)

// 3.Types Aliases
type Employee = {
    empId: number;
    empName: string;
    isPermanent?: boolean;
    product?: Product;


}
let employee1: Employee = {
    empId: 101,
    empName: "Charlie",
    isPermanent: true,
    product: product1,
};
console.log(employee1);

// Generics
function identity<T>(arg: T): T {
    return arg;
}

let output1: string = identity<string>("Generic String");
console.log(output1);
let output2: number = identity<number>(12345);
console.log(output2);

// Enums
enum Role{
    Admin,
    User,
    Guest,

}

let userRole: Role = Role.Admin;
console.log(userRole); //enum index
console.log(Role[userRole]); //enum value

let role: string = "Admin";
console.log(role == "admin");
console.log(Role.Admin == userRole)

interface User {
    id: number;
    name: string;
    role: Role;

}

let update: Partial<User> = {
    id: 101

}
console.log(update)

let readonlyUser: Readonly<User> = {
    id: 1,
    name: 'Readonly user',
    role: Role.User
}

// readonlyuser.id = 2; //large
console.log(readonlyUser)


enum car {
    Sudan,
    Suv,
    Truck,    Coupe,

}

enum carType {
    Sudan = "Sudan",
    Suv = "Suv",
    Truck = "Truck",
    Coupe = "Coupe",
}

interface sudan {
    Model: string;
    year: number;
    type: car;
    price: number;
    isElectric?: false;
    

}

let carDetails : car = car.Sudan;
console.log(carDetails);
console.log(car[carDetails])
// let userRole: Role = Role.Admin;
// console.log(userRole); //enum index
// console.log(Role[userRole]); //enum value

// let role: string = "Admin";
// console.log(role == "admin");
// console.log(Role.Admin == userRole)