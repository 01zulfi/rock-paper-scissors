function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length );
    let randomChoice = options[randomIndex];
    return randomChoice
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = "";
    playerSelection = prompt("Select option: ");

    switch (playerSelection.toLowerCase() ) {
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
                outcome ="You Lose! Paper beats Scissors" ;
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
                outcome ="It is a tie!" ;
                console.log(outcome);
            }
            break;
        case "paper" :
            if (computerSelection == "Rock")  {
                outcome ="You Win! Paper beats Rock" ;
                console.log(outcome);
            }
            else if (computerSelection == "Paper")  {
                outcome ="It is a tie!" ;
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
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let gameNumber = 0; gameNumber < 5; ) {
        playRound();
        if ( !(outcome.search("Win") == -1) ) {
            playerScore++ ;
            gameNumber++ ;
        }
        else if ( !(outcome.search("Lose") == -1) ) {
            computerScore++ ;
            gameNumber++ ;
        } 
        else if ( !(outcome.search("Tie") == -1 ) ) {
            gameNumber++ ;
        }
        console.log(`
            Your Score =  ${playerScore}
            Computer Score = ${computerScore}  
            `);
    }
    if ( playerScore > computerScore ) {
        console.log("Congratulations! You won the game!");
    }
    else {
        console.log("Woo, Computer WON!");
    }
}