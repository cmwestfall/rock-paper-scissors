const rockButton = document.getElementById('rock');
const scissorsButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');
const choiceButtons = document.querySelectorAll('button.choices');

let humanScore = 0;
let computerScore = 0;

const getHumanChoice = () => {};

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

const playRound = () => {};

choiceButtons.addEventListener('click', () => {
    playRound()
};);
