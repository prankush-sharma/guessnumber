'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

 const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
 }


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').innerHTML = 'No number provided!';
     displayMessage('No number provided!');
    // when player wins the game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').innerHTML = 'correct number provided!';
    displayMessage('Correct number provided!');
    document.querySelector('.number').innerHTML = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    
   if(score > highscore){
    highscore = score;
    document.querySelector('.highscore').innerHTML = highscore;
   }
  } else if(score !== secretNumber){
    if(score > 1){
        // document.querySelector('.message').innerHTML = guess > secretNumber ? '📈  Too high!' : '📉 Too low!';
        displayMessage(guess > secretNumber ? '📈  Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').innerHTML = score;
    }else {
        // document.querySelector('.message').innerHTML = 'You lost the game!';
        displayMessage('You lost the game!');
        document.querySelector('.score').innerHTML = 0;
    }
  }
    // when guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').innerHTML = '📈  Too high!';
//       score--;
//       document.querySelector('.score').innerHTML = score;
//     } else {
//       document.querySelector('.message').innerHTML = 'You lost the game!';
//       document.querySelector('.score').innerHTML = 0;
//     }
//     // when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').innerHTML = '📉 Too low!';
//       score--;
//       document.querySelector('.score').innerHTML = score;
//     } else {
//       document.querySelector('.message').innerHTML = 'You lost the game!';
//     }
//   }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').innerHTML = 'Start guessing....!';
    displayMessage('Start guessing....!');
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });