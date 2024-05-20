function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getComputerChoice() {
    var randomNumber = getRandomInt(3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
