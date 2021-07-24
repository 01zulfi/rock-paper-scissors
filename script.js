let playerScore = 0;  
let computerScore = 0;
                      
function computerPlay(){   
    const options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length );
    let randomChoice = options[randomIndex];
    return randomChoice
}

function displayResults() {    
    if (document.querySelector('.roundResult')) {
        let divRemove = document.querySelector('.roundResult');
        divRemove.remove();
    }
    const roundResult = document.createElement('div');
    const body = document.querySelector('body');
    roundResult.classList.add('roundResult');
    roundResult.textContent = outcome;
    body.appendChild(roundResult);
}

function playRound(event) {     
    let computerSelection = computerPlay();
    let playerSelection = event.currentTarget.getAttribute('value');
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
    }
    displayResults();
}

function roundScore() {  
    if (document.querySelector('.score')) {
       let scoreRemove = document.querySelector('.score');
       scoreRemove.remove();
    }

    const body = document.querySelector('body');
    const div = document.createElement('div');
    const playerScoreText = document.createElement('p');
    const computerScoreText = document.createElement('p');
    const playerScoreNumber = document.createElement('p');
    const computerScoreNumber = document.createElement('p');
    
    div.classList.add('score');
    playerScoreText.classList.add('playerScoreText');
    playerScoreText.textContent = 'Your Score';
    computerScoreText.classList.add('computerScoreText')
    computerScoreText.textContent = 'Computer Score';
    playerScoreNumber.classList.add('playerScoreNumber');
    playerScoreNumber.textContent = playerScore;
    computerScoreNumber.classList.add('computerScoreNumber');
    computerScoreNumber.textContent = computerScore;

    div.appendChild(playerScoreText);
    div.appendChild(playerScoreNumber);
    div.appendChild(computerScoreText);
    div.appendChild(computerScoreNumber);
    body.appendChild(div);
}

function winOrLose() {         
    let gameResultDiv = document.querySelector('.gameResult');
    if (gameResultDiv) {
        gameResultDiv.remove();
    } 
    if ( playerScore==3 || computerScore==3 ) {
        const div = document.createElement('div');
        const body = document.querySelector('body');
        div.classList.add('gameResult');
        if (playerScore < computerScore) {
            playerScore = 0;
            computerScore = 0;
            div.textContent = 'A Computer Beat You...';
        } 
        else if (playerScore > computerScore){
            playerScore = 0;
            computerScore = 0;
            div.textContent = 'You Won! Congratulations';
        }
        let gameEnd = document.querySelector('.score');
        gameEnd.classList.add('gameEnd');      
        let roundResult = document.querySelector('.roundResult');
        roundResult.remove();
        let scoreNode = document.querySelector('.score');
        body.insertBefore(div, scoreNode);
    }
}

function game() {  
    playRound(event); 
    if ( !(outcome.search("Win") == -1) ) {
        playerScore++ ;
    }
    else if ( !(outcome.search("Lose") == -1) ) {
        computerScore++ ;
    } 
    roundScore();
    winOrLose();
}

const button = document.querySelectorAll('button');
button.forEach(index => index.addEventListener('click', (event) => { 
    game(); 
}));