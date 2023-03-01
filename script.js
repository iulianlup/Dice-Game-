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
    // if number is different from 1 ==>
    player0RoundScore = player0RoundScore + randomNumber; // start calculating round score
    score0El.textContent = player0RoundScore; // display round score
  } else {
    player0RoundScore = 0; // if number is == 1 then reset round score and lose all point
    score0El.textContent = player0RoundScore; // display 0 as new round score
    document.querySelector('.player--0').classList.remove('player--active'); // make player 0 inactive
    document.querySelector('.player--1').classList.add('player--active'); // make player 1 active
  }
});

btnHold.addEventListener('click', function () {
  // if hold button is pressed then ==>
  player0CurrentScore = player0CurrentScore + player0RoundScore; // add round score to current score
  currentScore0.textContent = player0CurrentScore; // display current score
  player0RoundScore = 0; // reset round score to 0
  score0El.textContent = player0RoundScore; // display round score
  if (player0CurrentScore >= 100) {
    // check if player 0 score is over 100
    console.log('Player 1 wins!'); // wins if TRUE
  } else {
    // if false switch to player 1
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  }
});
