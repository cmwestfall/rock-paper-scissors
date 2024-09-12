const getHumanChoice = () => {
    let messagePrompt = prompt("Please choose rock, paper, or scissors");
    
    if (messagePrompt.toLowerCase() === 'rock' | messagePrompt.toLowerCase() === 'paper' | messagePrompt.toLowerCase() === 'scissors') {
        const humanChoice = messagePrompt.toLowerCase();
        console.log(humanChoice);
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

getHumanChoice();