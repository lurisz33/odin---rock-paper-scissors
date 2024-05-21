let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("No winner this round");
    } else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper"))  {
        humanScore += 1;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    } else {
        computerScore += 1;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
/*    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }*/
    if (humanScore === computerScore) {
        console.log(humanScore + " to " + computerScore + " you are equally strong!");
    } else if(humanScore > computerScore) {
        console.log(humanScore + " to " + computerScore + " you have beaten the machine!");
    } else {
        console.log(computerScore + " to " + humanScore + "You lost, the machines are taking over!");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Write your choice below").toLowerCase();
    while(!(humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper")) {
        humanChoice = prompt("Please enter a valid option below. Choose from (rock, paper, scissors)").toLowerCase();
    }
    return humanChoice;
}