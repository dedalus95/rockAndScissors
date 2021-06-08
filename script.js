    
    
    
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
    let array = ['ROCK', 'PAPER', 'SCISSORS'];
    let pickOneElement = array[Math.floor(Math.random()*array.length)];
        return pickOneElement;
}


//Write a function that plays a single round of Rock Paper Scissors for both Player and Computer




function playRound(playerSelection) {

const computerSelection = computerPlay();
let playerSelectionUpper = playerSelection.toUpperCase();
document.querySelector('#showResult');


 game();

    if ((playerSelectionUpper === 'ROCK' && computerSelection === 'ROCK') ||
        (playerSelectionUpper === 'SCISSORS' && computerSelection === 'SCISSORS')||
        (playerSelectionUpper === 'PAPER' && computerSelection === 'PAPER'))
    {
         return showResult.innerHTML = `TIE. YOU BOTH SELECTED ${playerSelectionUpper}.\r\nPLAYER SCORE IS ${playerScore}.\r\nCOMPUTER SCORE IS ${computerScore}.` ;
    } else if
         ((playerSelectionUpper === 'ROCK' && computerSelection === 'PAPER') ||
           (playerSelectionUpper === 'PAPER' && computerSelection === 'SCISSORS') ||
           (playerSelectionUpper === 'SCISSORS' && computerSelection === 'ROCK'))
           {
               
               return showResult.innerHTML = `LOSS. ${computerSelection} BEATS ${playerSelectionUpper}.\r\nPLAYER SCORE IS ${playerScore}.\r\nCOMPUTER SCORE IS ${++computerScore}.`;
           }
           else if 
           ((playerSelectionUpper === 'PAPER' && computerSelection === 'ROCK') ||
           (playerSelectionUpper === 'SCISSORS' && computerSelection === 'PAPER') ||
           (playerSelectionUpper === 'ROCK' && computerSelection === 'SCISSORS'))
           {
              
              return showResult.innerHTML = `WIN. ${playerSelectionUpper} BEATS ${computerSelection}.\r\nPLAYER SCORE IS ${++playerScore}.\r\nCOMPUTER SCORE IS ${computerScore}.`;
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

