'use strict';
// selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// starting conditions
let currentScore, activePlayer, scores, playing;
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0; /*Because it will be array [player1 score,player2 score] */
  scores = [0, 0];
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player-winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();

// function of switch to next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

}
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generate random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //// display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check for rolled dice is 1
    if (dice !== 1) {
      // currentScore = currentScore + dice;
      currentScore += dice;
      //    current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // switch to player 2
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0? 1: 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player's total score
    scores[activePlayer] += currentScore;
    // scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if player score is >=100 finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
    // else switch to next player
    else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click',init);
