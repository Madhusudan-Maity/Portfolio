// game-script.js
let randomNumber;
let attempts = 0;

document.getElementById('startBtn').addEventListener('click', function() {
    const maxNumber = document.getElementById('maxNumber').value;
    if (maxNumber) {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        attempts = 0;
        document.getElementById('gameArea').style.display = 'block';
        document.getElementById('feedback').textContent = '';
        document.getElementById('attempts').textContent = '';
        document.getElementById('guessInput').value = '';
        alert(`Game started! Guess a number between 1 and ${maxNumber}`);
    } else {
        alert('Please enter a valid max number');
    }
});

document.getElementById('guessBtn').addEventListener('click', function() {
    const userGuess = document.getElementById('guessInput').value;
    attempts++;
    
    if (userGuess == randomNumber) {
        document.getElementById('feedback').textContent = 'Congratulations! You guessed the correct number!';
        document.getElementById('feedback').style.color = '#2ecc71';
        document.getElementById('attempts').textContent = `It took you ${attempts} attempts.`;
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
        document.getElementById('feedback').style.color = '#e74c3c';
    } else {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
        document.getElementById('feedback').style.color = '#e74c3c';
    }
});
