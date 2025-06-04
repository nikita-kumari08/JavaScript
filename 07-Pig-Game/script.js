'use strict';

// selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('dice');
const btnNew = document.querySelector.Selector('.btn--new');
const btnRoll = document.querySelector.Selector('.btn--roll');
const btnHold = document.querySelector.Selector('.btn--hold');

//Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceE1.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function() {


    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display dice 
diceEl,classList.remove('hidden');
diceE1.src = 'dice -${dice}.png';

    //3. Check for rolled 1
    if (dice !== 1) {

    // Add dice to current score
    currentScore += dice;
    } else {
        // Switch to next player
    }
});

         // project 3 done //
