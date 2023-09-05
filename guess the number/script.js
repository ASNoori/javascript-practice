'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(!guess);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number⛔'
  }
  // when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number😀';
    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // If guessed number is not correct
  else if (guess !== secretNumber) {
    if (score > 1) {
    //   document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!'); 
    score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is high
  // else if(guess > secretNumber){
  //     if(score > 1){
  //     document.querySelector('.message').textContent='Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     }else{
  //         document.querySelector('.message').textContent = 'You lost the game';
  //         document.querySelector('.score').textContent = 0;
  //     }
  // }
  // When guess is low
  // else if(guess < secretNumber){
  //     if(score > 1){
  //     document.querySelector('.message').textContent='Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     }else{
  //         document.querySelector('.message').textContent = 'You lost the game';
  //         document.querySelector('.score').textContent = 0;
  //     }
  // }
})

// again button event
document.querySelector('.again').addEventListener('click', function () {
  console.log('clicked');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = "green";
  document.querySelector('.number').style.width = '15rem';
})
