let humanScore = 0;
let computerScore = 0;
const resultContainer = document.getElementById("result-container");
const humanScorecontainer = document.getElementById("human-score");
const computerScoreContainer = document.getElementById("computer-score");

function playRound(humanChoice, computerChoice) {
    resultContainer.classList.remove('win', 'loss');
    if (humanChoice === computerChoice) {
        resultContainer.textContent = "Same choice, no winner this round";
    } else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper"))  {
        humanScore += 1;
        humanScorecontainer.textContent = humanScore;
        resultContainer.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    } else {
        computerScore += 1;
        computerScoreContainer.textContent = computerScore;
        resultContainer.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (humanScore === 5) {
        resultContainer.textContent = "You win the game! Congratulations!";
        resultContainer.classList.add('win');
    } else {
        resultContainer.textContent = "Computer wins the game! The machines are taking over!";
        resultContainer.classList.add('loss');
    }

    // Reset scores
    humanScore = 0;
    computerScore = 0;
    humanScorecontainer.textContent = humanScore;
    computerScoreContainer.textContent = computerScore;
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const playerChoice = this.getAttribute('data-choice');
            playRound(playerChoice, getComputerChoice());
        });
    });
});

/*function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === computerScore) {
        console.log(humanScore + " to " + computerScore + " you are equally strong!");
    } else if(humanScore > computerScore) {
        console.log(humanScore + " to " + computerScore + " you have beaten the machine!");
    } else {
        console.log(computerScore + " to " + humanScore + "You lost, the machines are taking over!");
    }
}*/

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