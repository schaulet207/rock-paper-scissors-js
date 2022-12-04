// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ for the variable computerChoice

let playerSelection = null;

function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 3);
    computerChoice = (randNum === 0) ? 'Rock' :
        (randNum === 1) ? 'Paper' :
        'Scissors';
}
getComputerChoice();

// Set wins, loss, tie and winner variables to 0
let wins = 0;
let losses = 0;
let ties = 0;

// Play five rounds of RPS and declare a winner
function game(wins, losses) {
    if (wins === 5) {
            document.getElementById("winner").innerHTML = "YOU WON!";
        }
    else if (losses === 5) {
            document.getElementById("winner").innerHTML = "YOU LOST!";
        }
    }

// Play a single round of RPS
    function playRound() {
        getComputerChoice();
        if (playerSelection === 'Rock' && computerChoice === 'Rock') {
            ties++;
        } else if (playerSelection === 'Paper' && computerChoice === 'Paper') {
            ties++;
        } else if (playerSelection === 'Scissors' && computerChoice === 'Scissors') {
            ties++;
        } else if (playerSelection === 'Rock' && computerChoice === 'Scissors') {
            wins++;
        } else if (playerSelection === 'Paper' && computerChoice === 'Rock') {
            wins++;
        } else if (playerSelection === 'Scissors' && computerChoice === 'Paper') {
            wins++;
        } else if (playerSelection === 'Rock' && computerChoice === 'Paper') {
            losses++;
        } else if (playerSelection === 'Paper' && computerChoice === 'Scissors') {
            losses++;
        } else if (playerSelection === 'Scissors' && computerChoice === 'Rock') {
            losses++;
        } else {
            alert('Invalid input');
        }
        console.log(computerChoice, playerSelection);
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("ties").innerHTML = ties;
}

rock.addEventListener('click', function() {
    console.log("Clicked Rock");
    playerSelection = "Rock";
    playRound("Rock");
    game(wins, losses)
  });

paper.addEventListener('click', function() {
    console.log("Clicked Paper");
    playerSelection = "Paper";
    playRound("Paper");
  });

scissors.addEventListener('click', function() {
    console.log("Clicked Scissors");
    playerSelection = "Scissors";
    playRound("Scissors");
  });

// Displays current score
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("ties").innerHTML = ties;
document.getElementById("winner").innerHTML = "Winner...";
