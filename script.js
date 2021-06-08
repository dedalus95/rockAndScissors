const btnRock = document.querySelector('#btnRock');
    btnRock.addEventListener('click', () => {showResult.textContent = playRound('rock');
  
        });

    const btnPaper = document.querySelector('#btnPaper');
    btnPaper.addEventListener('click', () => {showResult.textContent = playRound('paper');
   
    
        });

    const btnScissors = document.querySelector('#btnScissors');
    btnScissors.addEventListener('click', () => {showResult.textContent = playRound('scissors');
    
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


function game() {


if (i === 4) {
    if (computerScore > playerScore) {
        alert('THE GAME IS OVER. YOU LOSE.') ;
    }
     else if (computerScore === playerScore)
    {
        alert('THE GAME IS OVER. TIE GAME.');
    } else
    {
        alert('THE GAME IS OVER. YOU WIN.') ;
    }
}

}

for (
    i = 0; i < 5; i++
)

{
    game();
}
