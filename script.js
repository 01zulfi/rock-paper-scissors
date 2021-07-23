function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length );
    let randomChoice = options[randomIndex];
    return randomChoice
}



const button = document.querySelectorAll('button');
console.log(button);
//buttonRock.addEventListener('click', playRound   )
button.forEach(index => index.addEventListener('click', (event) => {
    
    game();   
 
}
)
)


function playRound(event) {
    let computerSelection = computerPlay();
    //playerSelection = "";
    let playerSelection = event.target.id;
    switch (playerSelection ) {
        case "rock" : 
            if (computerSelection == "Rock") {
                outcome = "It is a Tie!";
                console.log(outcome);
            }
            else if (computerSelection == "Scissors") {
                outcome ="You Win! Rock beats Scissors" ;
                console.log(outcome);
            }
            else {
                outcome ="You Lose! Paper beats Rock" ;
                console.log(outcome);
            }
            break;
        case "scissors" :
            if (computerSelection == "Rock")  {
                outcome ="You Lose! Rock beats Scissors" ;
                console.log(outcome);
            }
            else if (computerSelection == "Paper")  {
                outcome ="You Win! Scissors beat Paper"; 
                console.log(outcome);
            }
            else {
                outcome ="It is a Tie!" ;
                console.log(outcome);
            }
            break;
        case "paper" :
            if (computerSelection == "Rock")  {
                outcome ="You Win! Paper beats Rock" ;
                console.log(outcome);
            }
            else if (computerSelection == "Paper")  {
                outcome ="It is a Tie!" ;
                console.log(outcome);
            }
            else {
                outcome ="You Lose! Scissors beat Paper" ;
                console.log(outcome);
            }
            break;
        default: 
            outcome = "Enter Valid Option.";
            console.log(outcome); 
    }
    displayResults();
    //game();
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

//function game() {
  //  let playerScore = 0;
    //let computerScore = 0;
    //let searchFrom = document.querySelector('p')
    //let gameResult = document.createElement('div');
    //for ( let gameNumber = 1; gameNumber <=5;) {
      //  if ( searchFrom.search() == 'win') {
        //    playerScore++
        //}


    //}
//}
let playerScore = 0;
let computerScore = 0;
function game() {

    playRound(event);
    if ( !(outcome.search("Win") == -1) ) {
        playerScore++ ;
        
    }
    else if ( !(outcome.search("Lose") == -1) ) {
        computerScore++ ;
        
    } 
    else if ( !(outcome.search("Tie") == -1 ) ) {
        
    }
    console.log(`
        Your Score =  ${playerScore}
        Computer Score = ${computerScore}  
        `);
    roundScore();
    winOrLose();
    //if ( playerScore > computerScore ) {
      //  console.log("Congratulations! You won the game!");
    //}
    //else {
      //  console.log("Woo, Computer WON!");
    //}
}

function roundScore() {
    if (document.querySelectorAll('p')) {
       let pRemove = document.querySelectorAll('p');
       pRemove.forEach( index => index.remove());
    }
    let gameResultDiv = document.querySelector('.gameResult');
    if (gameResultDiv) {
        gameResultDiv.remove();
    } 
    const body = document.querySelector('body');
    const div = document.createElement('div');
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
    if (playerScore + computerScore == 5) {
        const div = document.createElement('div');
        const body = document.querySelector('body');
        div.style.cssText = 'color: white';
        div.classList.add('gameResult');
        if (playerScore < computerScore) {
            div.textContent = 'You Lost! Computer Won...';
        } 
        else {
            div.textContent = 'You Won! Congratulations';
        }
        body.appendChild(div);

    }
}