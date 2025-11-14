// Promise - An object that manages asynchronous operations.
// wrap a promise object arount{asrychronous code}
//  "I promise to return a value"
//  PENDING -> RESOLVED or REJECTED
//  NEW pROMISE((RESOLVE, REJECT)) =>{asynhronous code}

function walkDog() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve("I am walking my dog🐶");
            } else {
                reject("You fat potato");
            }
    }, 2000);

    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanedkitchen = true;
            
            if(cleanedkitchen){
                resolve("I am cleaning the kitchen");
            } else {
                reject("you lazy fat piece of shit");
            }
            },
        1000);
    })
}

function takeOutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const taketrash = false;

            if(taketrash){
                resolve("i am taking the trashout");
            } else {
                reject("you fat donut");
            }
            
        }, 4000);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you have reached the end of the program")})
         .catch(error => console.error(error));