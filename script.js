    
    
    
    const btnRock = document.querySelector('#btnRock');

    btnRock.addEventListener('click', () => {
    showResult.textContent = playRound('rock');
    showFinalResult.textContent = game();

    if (showFinalResult.textContent) {
        btnScissors.disabled = true;
        btnPaper.disabled = true;
        btnRock.disabled = true;
    }
    
        });

    const btnPaper = document.querySelector('#btnPaper');

    btnPaper.addEventListener('click', () => {
    showResult.textContent = playRound('paper');
    showFinalResult.textContent = game();

    if (showFinalResult.textContent) {
        btnScissors.disabled = true;
        btnPaper.disabled = true;
        btnRock.disabled = true;
                                    }
                                              
    });

    const btnScissors = document.querySelector('#btnScissors');

    btnScissors.addEventListener('click', () => {
    showResult.textContent = playRound('scissors');
    showFinalResult.textContent = game();

    if (showFinalResult.textContent) {
        btnScissors.disabled = true;
        btnPaper.disabled = true;
        btnRock.disabled = true;
    }
    
    
        });

    showResult.setAttribute('style', 'white-space: pre;');

  

//Write a function that will randomly return "Rock", "Paper"  or "Scissors"
function computerPlay() {
    let array = ['Rock', 'Paper', 'Scissors'];
    let pickOneElement = array[Math.floor(Math.random()*array.length)];
        return pickOneElement;
}


//Write a function that plays a single round of Rock Paper Scissors for both Player and Computer




function playRound(playerSelection) {

const computerSelection = computerPlay();
let playerSelectionUpper = playerSelection.toUpperCase();
document.querySelector('#showResult');


 game();

    if ((playerSelectionUpper === 'ROCK' && computerSelection === 'Rock') ||
        (playerSelectionUpper === 'SCISSORS' && computerSelection === 'Scissors')||
        (playerSelectionUpper === 'PAPER' && computerSelection === 'Paper'))
    {
         return showResult.innerHTML = `It\'s a tie.\r\nPlayer score is ${playerScore}.\r\nComputer score is ${computerScore}.` ;
    } else if
         ((playerSelectionUpper === 'ROCK' && computerSelection === 'Paper') ||
           (playerSelectionUpper === 'PAPER' && computerSelection === 'Scissors') ||
           (playerSelectionUpper === 'SCISSORS' && computerSelection === 'Rock'))
           {
               
               return showResult.innerHTML = `You lose. ${computerSelection} beats ${playerSelectionUpper}.\r\nPlayer score is ${playerScore}.\r\nComputer score is ${++computerScore}.`;
           }
           else if 
           ((playerSelectionUpper === 'PAPER' && computerSelection === 'Rock') ||
           (playerSelectionUpper === 'SCISSORS' && computerSelection === 'Paper') ||
           (playerSelectionUpper === 'ROCK' && computerSelection === 'Scissors'))
           {
              
              return showResult.innerHTML = `You win. ${playerSelectionUpper} beats ${computerSelection}.\r\nPlayer score is ${++playerScore}.\r\nComputer score is ${computerScore}.`;
           }
           
    }

let computerScore = parseInt(0);
let playerScore = parseInt(0);

let showFinalResult = document.querySelector('#showFinalResult');

function game() {


if (computerScore === 5 && playerScore < computerScore) 
    {
        return showFinalResult.textContent = 'GAME OVER: YOU LOSE.' ;
    }
     else if (playerScore === 5 && playerScore > computerScore) 
    {
        return showFinalResult.textContent = 'GAME OVER: YOU WIN.';
    } 

}

