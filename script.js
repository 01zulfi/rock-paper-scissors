function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length );
    let randomChoice = options[randomIndex];
    return randomChoice
}

const button = document.querySelectorAll('button');
button.forEach(index => index.addEventListener('click', (event) => {
    game(); 
}));


function playRound(event) {
    let computerSelection = computerPlay();
    let playerSelection = event.target.id;
    switch (playerSelection ) {
        case "rock" : 
            if (computerSelection == "Rock") {
                outcome = "It is a Tie!";
            }
            else if (computerSelection == "Scissors") {
                outcome ="You Win! Rock beats Scissors" ;
            }
            else {
                outcome ="You Lose! Paper beats Rock" ;
            }
            break;
        case "scissors" :
            if (computerSelection == "Rock")  {
                outcome ="You Lose! Rock beats Scissors" ;
            }
            else if (computerSelection == "Paper")  {
                outcome ="You Win! Scissors beat Paper";
            }
            else {
                outcome ="It is a Tie!" ;
            }
            break;
        case "paper" :
            if (computerSelection == "Rock")  {
                outcome ="You Win! Paper beats Rock" ;
            }
            else if (computerSelection == "Paper")  {
                outcome ="It is a Tie!" ;
            }
            else {
                outcome ="You Lose! Scissors beat Paper" ;
            }
            break;
        default: 
            outcome = "Enter Valid Option.";
    }
    displayResults();
}

function displayResults() {
    if (document.querySelector('.roundResult')) {
        let divRemove = document.querySelector('.roundResult');
        divRemove.remove();
    }
    const roundResult = document.createElement('div');
    const body = document.querySelector('body');
    roundResult.style.cssText = 'color: white';
    roundResult.classList.add('roundResult');
    roundResult.textContent = outcome;
    body.appendChild(roundResult);
}

let playerScore = 0;
let computerScore = 0;
let noScore = 0;
function game() {
    playRound(event);
    if ( !(outcome.search("Win") == -1) ) {
        playerScore++ ;
    }
    else if ( !(outcome.search("Lose") == -1) ) {
        computerScore++ ;
    } 
    else if ( !(outcome.search("Tie")==-1)){
        let totalGames = playerScore + computerScore;
        if (totalGames % 5==0) {
            noScore = 1;
        }
    }
    roundScore();
    winOrLose();
}

function roundScore() {
    if (document.querySelector('.score')) {
       let scoreRemove = document.querySelector('.score');
       scoreRemove.remove();
    }
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.classList.add('score');
    const playerScoreP = document.createElement('p');
    const computerScoreP = document.createElement('p');
    playerScoreP.style.cssText = 'color: white';
    playerScoreP.textContent = `Your Score =  ${playerScore}`;
    computerScoreP.style.cssText = 'color: white';
    computerScoreP.textContent = `Computer Score = ${computerScore} `;
    div.appendChild(playerScoreP);
    div.appendChild(computerScoreP);
    body.appendChild(div);
}

function winOrLose() {
    totalGames = playerScore + computerScore;
    let gameResultDiv = document.querySelector('.gameResult');
    if (gameResultDiv) {
        gameResultDiv.remove();
    } 
    if ( totalGames % 5 == 0) {
        if ( !(noScore == 0)) {
            noScore = 0;
            return
        }
        const div = document.createElement('div');
        const body = document.querySelector('body');
        div.style.cssText = 'color: white';
        div.classList.add('gameResult');
        if (playerScore < computerScore) {
            playerScore = 0;
            computerScore = 0;
            div.textContent = 'You Lost! Computer Won...';
        } 
        else if (playerScore > computerScore){
            playerScore = 0;
            computerScore = 0;
            div.textContent = 'You Won! Congratulations';
        }
        body.appendChild(div);
    }
}