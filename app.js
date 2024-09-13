const rockButton = document.getElementById('btn-rock');
const scissorsButton = document.getElementById('btn-scissors');
const paperButton = document.getElementById('btn-paper');
const humanScoreMsg = document.getElementById('player-score');
const computerScoreMsg = document.getElementById('computer-score');

const gameResult = document.querySelector('div.result-msg');

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random()*choiceArray.length);

    return choiceArray[computerChoice];
};

const playerWins = (player, computer) => {
    return (
        (player === 'rock' & computer === 'scissors') ||
        (player === 'scissors' & computer === 'paper') ||
        (player === 'paper' & computer === 'rock')
    );
};

const playRound = (humanChoice) => {
    const computerResult = getComputerChoice();

    if (playerWins(humanChoice, computerResult)) {
        humanScore++;
        humanScoreMsg.textContent = humanScore;
    } else if (humanChoice === computerResult) {
        console.log(`It's a tie!`);
    } else {
        computerScore++;
        computerScoreMsg.textContent = computerScore;
    }
};

if (humanScore === 5) {
    gameResult.textContent = 'You win!';
} else {
    gameResult.textContent = 'You lose!';
}


rockButton.addEventListener('click', () => playRound('rock'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
paperButton.addEventListener('click', () => playRound('paper'));