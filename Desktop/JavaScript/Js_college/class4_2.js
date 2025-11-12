// Function that returns a Promise (simulates delay)
const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success"); // fulfilled
            // reject("Failed"); // uncomment to test rejection
        }, ms);
    });
};

// Basic demonstration
console.log("Start");
setTimeout(() => console.log("Middle"), 1000); // runs after 1 sec
console.log("End");

// Using async/await (blocking)
const promiseBlock = async () => {
    try {
        const res = await delay(2000); // waits 2 sec
        console.log(res); // prints "Success"
    } catch (err) {
        console.log(err);
    }

    // Using .then() / .catch() (non-blocking)
    delay(2000)
        .then(msg => console.log(msg))
        .catch(err => console.log(err));

    console.log("End of the file");
};

promiseBlock();

// Sequential async/await
const sequentialPromises = async () => {
    console.log("Sequential Start");
    const res1 = await delay(1000);
    console.log("After 1 sec:", res1);
    const res2 = await delay(2000);
    console.log("After 2 sec:", res2);
    const res3 = await delay(3000);
    console.log("After 3 sec:", res3);
    console.log("Sequential End");
};

sequentialPromises();

// Parallel async/await
const parallelPromises = async () => {
    console.log("Parallel Start");
    const [res1, res2, res3] = await Promise.all([
        delay(1000),
        delay(2000),
        delay(3000)
    ]);
    console.log("After all:", res1, res2, res3); // total time: 3 sec
    console.log("Parallel End");
};

parallelPromises();

// Simple nested .then() example
delay(100)
    .then(() => {
        console.log("First");
        return delay(200);
    })
    .then(() => {
        console.log("Non-blocking sequential done");
    });

// Another delay with condition (even/odd)
const delay2 = (ms, num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 === 0) {
                resolve(`Resolved: ${num}`);
            } else {
                reject(`Rejected: ${num}`);
            }
        }, ms);
    });
};

// Running multiple delay2 in parallel
const runParallel = async () => {
    console.log("Conditional Parallel Start");
    try {
        const results = await Promise.all([
            delay2(1000, 2),
            delay2(1500, 4),
            delay2(2000, 6)
        ]);
        console.log("Conditional Parallel Results:", results);
    } catch (err) {
        console.log("Error:", err);
    }
};

runParallel();
