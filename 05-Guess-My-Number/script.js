'use strict';


console.log(document.querySelector('.message').
textContext);
document.querySelector('.message').textContext = 
'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;



document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);





const x = function () {
    console.log(23);
};

document.querySelector('.check').addEventListener
('click' , funtion() ,
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess) {

    }
)

;
                                         //** challenge - 1 ***//


    let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    let scroe = 20;
    let highscore = 0;

    document.querySelector('.check').aaddEventListener
    ('click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess , typeof guess);
    })
        //when there is no input 
        if (!guess){
            document.querySelector('.message').textContent =
            'No number!';

            //when player wins 
        } else if (guess === secretNumber){
            document.querySelector('.message').textContent =
            'Correct Number!';
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.
            backgroundColor = '#60b347';
            document.querySelector('.number').style.width = 
            '30rem';

            if(score > highscore) {
                highscore = score;
                document.querySelector('.highscore')
                textContent = highscore;

            }

            //when guess is wrong
              }  else if (guess !== secretNumber) {
                if (score > 1) {
                    document.querySelector('.message').textContent = 
                    guess > secretNumber ? ' Too high!' : ' Too low!';
                    score --;
                    document.querySelector('.score').textContent = score;
                }   else {
                    document.querySelector('.message').textContent
                        ='You lost the game!';
                    document.querySelector('.score').textContent =
                    0;
                }
              }






document.querySelector('.again').addEventListener
('click', function (){
    score = 20;
    sdecretNumber = Math.trunc(Math.random() * 20) + 1;


    //document.querySelector('.message')'textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent =
    score;

    document.querySelector('.number').textContent ='?'
    document.querySelector('.guess').value = '';


    document.querySelector('body').style.
    backgroundColor = '#222';
    document.querySelector('.number').style.width =
    '15rem';
});



  // Project - 1 Done //