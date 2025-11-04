// closure = A function defined inside a function
//           the ineer function has access to the variables and scope of the outer function
//           and scope of the outer functions.
//           Allow for private variables and state maintanance
//           Used frequently in js frameworks: Reach, vUe , Angular
/*
function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`count increased to ${count}`);
    }

    function getCount(){
        console.log(`current count is ${count}`)
    }

    return {increment, getCount}
}

const counter = createCounter();

counter.increment();//1
counter.increment();//2
counter.increment();//3

counter.getCount();
counter.getCount();

*/

function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}`);

    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}`);
    }

    function getScore(){
        console.log(`the current score is ${score}`);

    }

    return{increaseScore,decreaseScore,getScore};

}

const game = createGame();
game.increaseScore(3);
game.increaseScore(13);
game.getScore();