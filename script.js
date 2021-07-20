function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length );
    let randomElement = options[randomIndex];
    return randomElement
}

function singleGame(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log(computerSelection);
    playerSelection = prompt("Select option: ");

    switch (playerSelection.toLowerCase() ) {
        case "rock" : 
            if (computerSelection == "Rock") {
                alert("It is a Tie!");
            }
            else if (computerSelection == "Scissors") {
                alert("You Win! Rock beats Scissors");
            }
            else {
                alert("You Lose! Paper beats Scissors");
            }
            break;
        case "scissors" :
            if (computerSelection == "Rock") {
                alert("You Lose! Rock beats Scissors")
            }
            else if (computerSelection == "Paper") {
                alert("You Win! Scissors beat Paper")
            }
            else {
                alert("It is a tie!")
            }
            break;
        case "paper" :
            if (computerSelection == "Rock") {
                alert("You Win! Paper beats Rock")
            }
            else if (computerSelection == "Paper") {
                alert("It is a tie!")
            }
            else {
                alert("You Lose! Scissors beat Paper")
            }
            break;
        default: 
            alert("Enter Valid Option."); 
    }
}