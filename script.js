'use strict';

// Sekecting element
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
dice.classList.add('hidden'); // hide dice image for initial page load & start of game
score0El.textContent = 0; // set score player 1 to 0
score1El.textContent = 0; // set score player 2 to 0
let player0RoundScore = Number(score0El.textContent);
let player1RoundScore = Number(score1El.textContent);
let player0CurrentScore = Number(currentScore0.textContent);
let player1CurrentScore = Number(currentScore1.textContent);
btnRollDice.addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6 + 1); // generate a random number between 1 and 6 if the button ROLL DICE is pressed
  console.log(randomNumber);
  for (let i = 1; i <= 6; i++) {
    if (i === randomNumber) {
      //  checks if i === randomNumber and displays the image of the dice value
      dice.classList.remove('hidden'); //  removes hidden class
      dice.src = `dice-${i}.png`; //  changes dice image based on number rolled
    }
  }
  if (randomNumber !== 1) {
    player0RoundScore = player0RoundScore + randomNumber;
    score0El.textContent = player0RoundScore;
  } else {
    player0RoundScore = 0;
    score0El.textContent = player0RoundScore;
    if (player0CurrentScore >= 100) {
      console.log('Player 1 wins!');
    } else {
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  player0CurrentScore = player0CurrentScore + player0RoundScore;
  currentScore0.textContent = player0CurrentScore;
  player0RoundScore = 0;
  score0El.textContent = player0RoundScore;
  if (player0CurrentScore >= 100) {
    console.log('Player 1 wins!');
  } else {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  }
});
