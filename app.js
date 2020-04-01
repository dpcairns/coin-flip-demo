import { didWeWin } from './didWeWin.js';

const playButton = document.getElementById('play-button');
const winsDiv = document.getElementById('wins');
const totalDiv = document.getElementById('total');
const resetButton = document.getElementById('reset-button');

let wins = 0;
let total = 0;

playButton.addEventListener('click', () => {
    // go get WHATEVER RADIO BUTTON happens to be checked
    const selectedChoice = document.querySelector('input[type=radio]:checked');
    
    // figure out what player selected
    let userChoice = selectedChoice.value;
    
    let computerChoice = 'heads';
    
     // get a random throw for the coin
    if (Math.random() < .5) {
        computerChoice = 'tails';
    }


    // calculate if we won
    const weWon = didWeWin(userChoice, computerChoice);

    // change state based on the calculation
        // increment correct guesses if we're correct

    if (weWon === true) {
        wins++;
    }
        // increment guess total no matter what

    total++;
    // update the view
        // show user how man wins
        // show usse total games played
    
    winsDiv.textContent = wins;
    totalDiv.textContent = total;
});

resetButton.addEventListener('click', () => {
    // update state
    wins = 0;
    total = 0;

    // update view
    winsDiv.textContent = '';
    totalDiv.textContent = '';  
});