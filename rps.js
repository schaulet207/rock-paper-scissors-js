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

// Set individual round results and picks to 0
let roundresults = 0;
let roundpicks = 0;
let yourpick = 0;
let comppick = 0;
let img1 = document.createElement("img");
img1.src = "img/img1.jpg"
document.body.appendChild(img1);
document.querySelector(".player").appendChild(img1);
document.getElementById("rocksymbol1").appendChild(img1);
let img11 = document.createElement("img");
img11.src = "img/img11.jpg"
document.querySelector(".computer").appendChild(img11);
document.getElementById("rocksymbol2").appendChild(img11);
let img2 = document.createElement("img");
img2.src = "img/img2.jpg"
document.body.appendChild(img2);
document.querySelector(".player").appendChild(img2);
document.getElementById("papersymbol1").appendChild(img2);
let img22 = document.createElement("img");
img22.src = "img/img22.jpg"
document.querySelector(".computer").appendChild(img22);
document.getElementById("papersymbol2").appendChild(img22);
let img3 = document.createElement("img");
img3.src = "img/img3.jpg"
document.body.appendChild(img3);
document.querySelector(".player").appendChild(img3);
document.getElementById("scissorssymbol1").appendChild(img3);
let img33 = document.createElement("img");
img33.src = "img/img33.jpg"
document.querySelector(".computer").appendChild(img33);
document.getElementById("scissorssymbol2").appendChild(img33);

// Play five rounds of RPS and declare a winner
function game(wins, losses) {
    if (wins === 5) {
            document.getElementById("winner").innerHTML = "You Win!";
            openEndgameModal();
    }
    else if (losses === 5) {
            document.getElementById("winner").innerHTML = "Computer Wins!";
            openEndgameModal();
        }
    }

// Play a single round of RPS
    function playRound() {
        getComputerChoice();
        var rockSymbolElement = document.getElementById("rocksymbol1");
        var paperSymbolElement = document.getElementById("papersymbol1");
        var scissorsSymbolElement = document.getElementById("scissorssymbol1");
        rockSymbolElement.classList.add("hidden");
        paperSymbolElement.classList.add("hidden");
        scissorsSymbolElement.classList.add("hidden");
        var rockSymbolElement2 = document.getElementById("rocksymbol2");
        var paperSymbolElement2 = document.getElementById("papersymbol2");
        var scissorsSymbolElement2 = document.getElementById("scissorssymbol2");
        rockSymbolElement2.classList.add("hidden");
        paperSymbolElement2.classList.add("hidden");
        scissorsSymbolElement2.classList.add("hidden");
        if (playerSelection === 'Rock' && computerChoice === 'Rock') {
            ties++;
            document.getElementById("roundresults").innerHTML = "It's a tie!";
            document.getElementById("roundpicks").innerHTML = "You both picked Rock!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            rockSymbolElement.classList.remove("hidden");
            rockSymbolElement2.classList.remove("hidden");
        } else if (playerSelection === 'Paper' && computerChoice === 'Paper') {
            ties++;
            document.getElementById("roundresults").innerHTML = "It's a tie!";
            document.getElementById("roundpicks").innerHTML = "You both picked Paper!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            paperSymbolElement.classList.remove("hidden");
            paperSymbolElement2.classList.remove("hidden");
        } else if (playerSelection === 'Scissors' && computerChoice === 'Scissors') {
            ties++;
            document.getElementById("roundresults").innerHTML = "It's a tie!";
            document.getElementById("roundpicks").innerHTML = "You both picked Scissors!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            scissorsSymbolElement.classList.remove("hidden");
            scissorsSymbolElement2.classList.remove("hidden");
        } else if (playerSelection === 'Rock' && computerChoice === 'Scissors') {
            wins++;
            document.getElementById("roundresults").innerHTML = "You won!";
            document.getElementById("roundpicks").innerHTML = "Rock beats scissors!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            rockSymbolElement.classList.remove("hidden");
            scissorsSymbolElement2.classList.remove("hidden");
        } else if (playerSelection === 'Paper' && computerChoice === 'Rock') {
            wins++;
            document.getElementById("roundresults").innerHTML = "You won!";
            document.getElementById("roundpicks").innerHTML = "Paper beats Rock!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            paperSymbolElement.classList.remove("hidden");
            rockSymbolElement2.classList.remove("hidden");
        } else if (playerSelection === 'Scissors' && computerChoice === 'Paper') {
            wins++;
            document.getElementById("roundresults").innerHTML = "You won!";
            document.getElementById("roundpicks").innerHTML = "Scissors beats Paper!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            scissorsSymbolElement.classList.remove("hidden");
            paperSymbolElement2.classList.remove("hidden");
        } else if (playerSelection === 'Rock' && computerChoice === 'Paper') {
            losses++;
            document.getElementById("roundresults").innerHTML = "You lost!";
            document.getElementById("roundpicks").innerHTML = "Paper beats Rock!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            rockSymbolElement.classList.remove("hidden");
            paperSymbolElement2.classList.remove("hidden");
        } else if (playerSelection === 'Paper' && computerChoice === 'Scissors') {
            losses++;
            document.getElementById("roundresults").innerHTML = "You lost!";
            document.getElementById("roundpicks").innerHTML = "Scissors beats Paper!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            paperSymbolElement.classList.remove("hidden");
            scissorsSymbolElement2.classList.remove("hidden");
        } else if (playerSelection === 'Scissors' && computerChoice === 'Rock') {
            losses++;
            document.getElementById("roundresults").innerHTML = "You lost!";
            document.getElementById("roundpicks").innerHTML = "Rock beats Scissors!";
            document.getElementById("yourpick").innerHTML = "Player:";
            document.getElementById("comppick").innerHTML = "Computer:";
            scissorsSymbolElement.classList.remove("hidden");
            rockSymbolElement2.classList.remove("hidden");
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
    game(wins, losses);
  });

paper.addEventListener('click', function() {
    console.log("Clicked Paper");
    playerSelection = "Paper";
    playRound("Paper");
    game(wins, losses);
  });

scissors.addEventListener('click', function() {
    console.log("Clicked Scissors");
    playerSelection = "Scissors";
    playRound("Scissors");
    game(wins, losses);
  });


// Displays current score
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("ties").innerHTML = ties;
document.getElementById("winner").innerHTML = "Winner...";

// Create game over pop-up & document overlay
const endgameModal = document.getElementById('endgameModal')
const overlay = document.getElementById('overlay')

// Open game over pop-up
function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }

// Close game over pop-up
function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

  // Clicking anywhere outside of end game pop-up closes it
  overlay.addEventListener('click', closeEndgameModal)

  // Restarts game by clicking Play Again? button
  restartBtn.addEventListener('click', function() {
    closeEndgameModal();
    wins = 0;
    losses = 0;
    ties = 0;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("ties").innerHTML = ties;
    document.getElementById("roundresults").innerHTML = "";
    document.getElementById("roundpicks").innerHTML = "";
    document.getElementById("yourpick").innerHTML = "";
    document.getElementById("comppick").innerHTML = "";
    var rockSymbolElement = document.getElementById("rocksymbol1");
    var paperSymbolElement = document.getElementById("papersymbol1");
    var scissorsSymbolElement = document.getElementById("scissorssymbol1");
    rockSymbolElement.classList.add("hidden");
    paperSymbolElement.classList.add("hidden");
    scissorsSymbolElement.classList.add("hidden");
    var rockSymbolElement2 = document.getElementById("rocksymbol2");
    var paperSymbolElement2 = document.getElementById("papersymbol2");
    var scissorsSymbolElement2 = document.getElementById("scissorssymbol2");
    rockSymbolElement2.classList.add("hidden");
    paperSymbolElement2.classList.add("hidden");
    scissorsSymbolElement2.classList.add("hidden");
});

  