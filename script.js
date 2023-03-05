'use strict';

// Selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnNewGame = document.querySelector('.btn--new');

dice.classList.add('hidden'); // hide dice image for initial page load & start of game
score0El.textContent = 0; // set score player 1 to 0
score1El.textContent = 0; // set score player 2 to 0
let player0RoundScore = Number(score0El.textContent);
let player1RoundScore = Number(score1El.textContent);
let player0CurrentScore = Number(currentScore0.textContent);
let player1CurrentScore = Number(currentScore1.textContent);

btnRollDice.addEventListener('click', function () {
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
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
      player0CurrentScore = player0CurrentScore + randomNumber; // start calculating round score
      currentScore0.textContent = player0CurrentScore; // display round score
    } else {
      player0CurrentScore = 0; // if number is == 1 then reset round score and lose all point
      currentScore0.textContent = player0CurrentScore; // display 0 as new round score
      document.querySelector('.player--0').classList.remove('player--active'); // make player 0 inactive
      document.querySelector('.player--1').classList.add('player--active'); // make player 1 active
    }
  } else {
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
      player1CurrentScore = player1CurrentScore + randomNumber; // start calculating round score
      currentScore1.textContent = player1CurrentScore; // display round score
    } else {
      player1CurrentScore = 0; // if number is == 1 then reset round score and lose all point
      currentScore1.textContent = player1CurrentScore; // display 0 as new round score
      document.querySelector('.player--1').classList.remove('player--active'); // make player 0 inactive
      document.querySelector('.player--0').classList.add('player--active'); // make player 1 active
    }
  }
});

btnHold.addEventListener('click', function () {
  // if hold button is pressed then ==>
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    player0RoundScore = player0RoundScore + player0CurrentScore; // add round score to current score
    score0El.textContent = player0RoundScore; // display current score
    player0CurrentScore = 0; // reset round score to 0
    currentScore0.textContent = player0CurrentScore; // display round score
    if (player0RoundScore >= 100) {
      // check if player 0 score is over 100
      console.log('Player 0 wins!'); // wins if TRUE
    } else {
      // if false switch to player 1
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    }
  } else {
    player1RoundScore = player1RoundScore + player1CurrentScore; // add round score to current score
    score1El.textContent = player1RoundScore; // display current score
    player1CurrentScore = 0; // reset round score to 0
    currentScore1.textContent = player1CurrentScore; // display round score
    if (player1RoundScore >= 100) {
      // check if player 1 score is over 100
      console.log('Player 1 wins!'); // wins if TRUE
    } else {
      // if false switch to player 0
      document.querySelector('.player--1').classList.remove('player--active');
      document.querySelector('.player--0').classList.add('player--active');
    }
  }
});

btnNewGame.addEventListener('click', function () {
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
});
