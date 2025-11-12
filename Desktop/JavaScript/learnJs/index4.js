//error = an object thats is create to represent a problem that occurs ofthen with user inpurt or establishing a conncetion

// try {} = Encloses code that might potentially cause an error 
// catch {} = catch and handle any thrown Errors from try {}
// finally {} = (optional) Always executes. Used mostly for clean up 
//               ex.cles files, close conncetions, release resources

// finally always executs even if there is an error 
// catch help to catch the error 

// try{
//     console.log("Hello Mr.Rojan");
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("This always executes");
// }

try{
    const divident = Number(window.prompt("Enter a divident: "));
    const divisor = Number(window.prompt("Enter a divisor:"));

    if(divisor == 0){
        throw new Error("You can't divide by the zero!");

    }
    if(isNaN(divident) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = divident / divisor;
    console.loq
    g(result);
}

catch(error){
    console.error(error);
}

console.log("You have reached an end.")