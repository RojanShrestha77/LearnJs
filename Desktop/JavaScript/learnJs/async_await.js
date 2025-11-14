// Async/Await:
// Async = makes a function return a promise
// Await = makes a async function wait for a promise

//  Allows you write asynchronous code in a synchronous manner
//  Async doesnt have resolve or reject parameters
// Everything after Await is placed in an event queu

// Promise - An object that manages asynchronous operations.
// wrap a promise object arount{asrychronous code}
//  "I promise to return a value"
//  PENDING -> RESOLVED or REJECTED
//  NEW pROMISE((RESOLVE, REJECT)) =>{asynhronous code}

function walkDog() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = false;

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

            const taketrash = true;

            if(taketrash){
                resolve("i am taking the trashout");
            } else {
                reject("you fat donut");
            }
            
        }, 4000);
    });
}
async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You have scuccesfully reached the end of an program")

    } catch(error) {
        console.error(error);
    }
    



}

doChores();