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
    playRound(event);    
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
}

function displayResults() {
    const div = document.createElement('div');
    const body = document.querySelector('body');
    div.style.cssText = 'color: white';
    div.textContent = outcome;
    body.appendChild(div);
}