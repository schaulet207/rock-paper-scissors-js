// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ for the variable computerChoice

function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 3);
    computerChoice = (randNum === 0) ? 'Rock' :
        (randNum === 1) ? 'Paper' :
        'Scissors';
}
getComputerChoice()

// Returns the string with only the first letter capitalized. 
function capitalize(playerSelection) {
    let lower = playerSelection.slice(0, 1).toUpperCase();
    let upper = playerSelection.slice(1).toLowerCase();
    playerSelectionCapitalized = (lower + upper);
}

// Set wins, loss and tie variables to 0
let wins = 0;
let losses = 0;
let ties = 0;

// Play a single round of RPS
    function playRound() {
        var playerSelection = prompt("Select One: Rock, Paper or Scissors?");
            playerSelection = playerSelection.toLowerCase();
            capitalize(playerSelection);
        if (playerSelectionCapitalized === 'Rock' && computerChoice === 'Rock') {
            ties++;
            return "It's a tie!";
        } else if (playerSelectionCapitalized === 'Paper' && computerChoice === 'Paper') {
            ties++;
            return "It's a tie!";
        } else if (playerSelectionCapitalized === 'Scissors' && computerChoice === 'Scissors') {
            ties++;
            return "It's a tie!";
        } else if (playerSelectionCapitalized === 'Rock' && computerChoice === 'Scissors') {
            wins++;
            return "You win! Rock beats Scissors!";
        } else if (playerSelectionCapitalized === 'Paper' && computerChoice === 'Rock') {
            wins++;
            return "You win! Paper beats Rock!";
        } else if (playerSelectionCapitalized === 'Scissors' && computerChoice === 'Paper') {
            wins++;
            return "You win! Scissors beats Paper!";
        } else if (playerSelectionCapitalized === 'Rock' && computerChoice === 'Paper') {
            losses++;
            return "You lost! Rock beats Paper!";
        } else if (playerSelectionCapitalized === 'Paper' && computerChoice === 'Scissors') {
            losses++;
            return "You lost! Paper beats Scissors!";
        } else if (playerSelectionCapitalized === 'Scissors' && computerChoice === 'Rock') {
            losses++;
            return "You lost! Scissors beats Rock!";
        } else {
            alert('Invalid input');
        }
}

// Play five rounds of RPS and declare a winner
function game() {
    for (let i = 0; i < 5; i++){
        playRound();
    } if (wins > losses) {
            alert('You won!');
        }
        else if (losses > wins) {
            alert('Computer won!');
        }
        else {
            alert("It's a tie!");
        }
    }

game();