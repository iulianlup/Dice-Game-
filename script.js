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
let currentScore, playing, activePlayer, score;

const init = function () {
  dice.classList.add('hidden'); // hide dice image for initial page load & start of game
  playing = true;
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  score0El.textContent = 0; // set total score player 1 to 0
  score1El.textContent = 0; // set total score player 2 to 0
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner'); // remove winner color if game was reset from new game button
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active'); // player 0 is the default start of the game
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.querySelector('.player--0').classList.toggle('player--active'); // make player 0 inactive
  document.querySelector('.player--1').classList.toggle('player--active'); // make player 1 active
};

btnRollDice.addEventListener('click', function () {
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 6 + 1); // generate a random number between 1 and 6 if the button ROLL DICE is pressed
    dice.classList.remove('hidden'); //  removes hidden class
    dice.src = `dice-${randomNumber}.png`; //  changes dice image based on number rolled

    if (randomNumber !== 1) {
      // if number is different from 1 ==>
      currentScore += randomNumber; // start calculating round score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // display round score
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // if hold button is pressed then ==>
  if (playing) {
    score[activePlayer] += currentScore; // add round score to current score
    currentScore = 0; // reset round score to 0
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer]; // display round score
    if (score[activePlayer] >= 20) {
      // check if player 0 score is over 100
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);
