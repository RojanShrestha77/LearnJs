//promise on delay2 function add another program, ms, num
//if num%2 == 0, resolve after ms
//else reject after ms
// simulate (1000, 1500, 2000, 3000) num(20,25,30,35,40)

//num this both parallely and sequenciallly
//catch the erros in parallel execution with aprallel.allsettled
//make a new function
//log the resolved and rejected values seperately
//using non - blocking .then, run 1000, 2000, 3000 sequencially


const delay2 = (ms, num) => {
    return new Promise(
        (resolve, reject) => {
            if (num % 2 == 0){
                setTimeout(
                    () => {
                        resolve("success")
                    },
                ms )
            } else {
                reject("Number is rejected")
            }
        }
    )

}

const sequentialPromises = async () => {
    console.log("Squencial Start")
    const res1 = await delay(1000)
    console.log("After 1 sec", res1)
    const res2 = await delay(1500)
    console.log("After 1.5 sec", res2)
    const res3 = await delay(2000)
    console.log("After 2 sec", res3)
    const res4 = await delay(3000)
    console.log("After 3 sec", res4)
    console.log("Squential End")

}

sequentialPromises()
const parallelPromises = async() => {
    console.log("Parallel Start")
    const[res1, res2, res3, res4] = await Promise.all([
        delay(1000),
        delay(1500),
        delay(2000),
        delay(3000),
    ])
    
}

const parallelPromises = async () => {
    console.log("Parallel Start");
}