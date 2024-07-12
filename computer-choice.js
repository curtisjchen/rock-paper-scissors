function getComputerChoice() {
    let val = Math.random();
    if (val <= 1/3) return "rock";
    if (val <= 2/3) return "paper";
    return "scissors"
}

function getUserChoice() {
    let val = prompt("enter your choice:");
    return val;
}

function playRound(humanChoice, computerChoice) {
    let humanlower = humanChoice.toLowerCase();
    if (humanlower !== computerChoice) {
        if (humanlower === "rock" && computerChoice === "scissors") {
            userScore++;
        }
        else if (humanlower === "scissors" && computerChoice === "paper") {
            userScore++;
        }
        else if (humanlower === "paper" && computerChoice === "rock") {
            userScore++;
        }
        else {
            computerScore++;
        }
    }
    else {
        console.log('tie')
    }
}