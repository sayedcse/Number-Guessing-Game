'use strict';
// Number define
let mainNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
//Message Display function
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};
//Button Click func
const btnClicked = () => {
    const guessedNumber = Number(document.querySelector('.guess').value);
    // Empty input Warning
    if (!guessedNumber) {
        displayMessage('⛔ No Number Entered!');
    }
    // Player wins
    else if (guessedNumber == mainNumber) {
        document.querySelector('.number').textContent = mainNumber;
        displayMessage('🥳 Correct Number!');
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // Guessed Number High or Low
    else if (guessedNumber !== mainNumber) {
        if (score > 1) {
            displayMessage(
                guessedNumber > mainNumber ? '📈 Too High!' : '📉 Too Low!'
            );
            --score;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 Game Over!');
            document.querySelector('.score').textContent = 0;
        }
    }
};
document.querySelector('.check').addEventListener('click', btnClicked);
//Enter press func
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        btnClicked();
    }
});
// Again Button func
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    mainNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start guessing..');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
    // window.location.reload();
});
