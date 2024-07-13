let playerScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * choices.length);
    return choices[randomIdx]
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        ties++
        return "Tie";
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'You lose!';
    }
}

function updateScores() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('ties').textContent = ties;
}


function playGame(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);

    document.getElementById('result').textContent = `You chose ${playerChoice}, computer chose ${computerChoice}, ${result}`;

    updateScores();
}

document.getElementById('scissors').addEventListener('click', playGame)
document.getElementById('rock').addEventListener('click', playGame)
document.getElementById('paper').addEventListener('click', playGame)