 let score: number | string

 score = "ten"
 score = 20

type User2 = {
    name: string;
    id: number
}

type Admin = { 
    username: string;
    id: number
}

let hitesh: User2 | Admin = {name:"Rojan", id:334}

hitesh = {username:"RS", id:331}

function getId(id: string | number) {
    // id.toUpperCase()//not possible 
    if (typeof id === "string"){
        id.toLowerCase()
    }
}