//synchronous = runs the code line by line
//              Executes line by line consecutively in a squential manner 
//              code that waits for an operation to complete

//asynchronnous = runs al at once without waiting
//                Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue  
//                (I/O operations, network requests, fetching data)
//                Handeled with: Callbacks, Promises, Async/Await

function func1(callback){
    setTimeout(() => {console.log("Task 1");callback()},3000)

}

function func2(){
    console.log("Hello");
    console.log("rojan");
}

func1(func2);