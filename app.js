let humanScore = 0;
let computerScore = 0;

const getHumanChoice = () => {
    let messagePrompt = prompt("Please choose rock, paper, or scissors");
    
    if (messagePrompt.toLowerCase() === 'rock' | messagePrompt.toLowerCase() === 'paper' | messagePrompt.toLowerCase() === 'scissors') {
        const humanChoice = messagePrompt.toLowerCase();
        return humanChoice;
    } else {
        alert('Please enter a valid response.')
        getHumanChoice();
    }
};

const getComputerChoice = () => {
    let choiceArray = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random()*choiceArray.length);

    return choiceArray[computerChoice];
};

const playerWins = (player, computer) => {
    return (
        (player === 'rock' & computer === 'scissors') ||
        (player === 'scissors' & computer === 'paper') ||
        (player === 'paper' & computer === 'rock')
    );
};

const playRound = (humanChoice, computerChoice) => {
    if (playerWins(humanChoice, computerChoice)) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === computerChoice) {
        console.log(`It's a tie!`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
};


