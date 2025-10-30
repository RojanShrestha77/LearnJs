let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
  score = savedScore;
}

updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissor';
  }

  return computerMove;
}

function playGame(playermove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playermove === 'scissor') {
    if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you won';
    } else {
      result = 'Tie';
    }
  } else if (playermove === 'paper') {
    if (computerMove === 'rock') {
      result = 'you won';
    } else if (computerMove === 'scissor') {
      result = 'you lose';
    } else {
      result = 'Tie';
    }
  } else if (playermove === 'rock') {
    if (computerMove === 'paper') {
      result = 'you lose';
    } else if (computerMove === 'scissor') {
      result = 'you won';
    } else {
      result = 'Tie';
    }
  }

  // update score
  if (result === 'you won') {
    score.wins += 1;
  } else if (result === 'you lose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  // display moves
  const movesElement = document.querySelector('.js-moves-chosen');
  movesElement.innerHTML = `
    You
    <img src="${playermove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer
  `;

  updateScoreElement();
  localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();
  localStorage.removeItem('score');
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
