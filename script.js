function getComputerChoice() {
    let x = Math.random();
    if (x <= 0.33) {
        return "Rock"
    }
    else if (x <= 0.66) {
        return "Paper"
    }
    else if (x <= 1) {
        return "Scissors"
    }
}

function rockPaperScissors(playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection == "Rock") {
        switch(computerSelection) {
            case "Rock":
                return "Two Rocks, it's a tie!";
            case "Paper":
                return "Paper beats Rock, You Lose!";
            case "Scissors":
                return "Rock beats Scissors, You Win!";
        }
    }
    else if (playerSelection == "Paper") {
        switch(computerSelection) {
            case "Rock":
                return "Paper beats Rock, You Win!";
            case "Paper":
                return "Two Papers, it's a tie!";
            case "Scissors":
                return "Scissors beats Paper, You Lose!";
        }
    }
    else if (playerSelection == "Scissors") {
        switch(computerSelection) {
            case "Rock":
                return "Rock beats Scissors, You Lose!";
            case "Paper":
                return "Scissors beats Paper, You Win!";
            case "Scissors":
                return "Two Scissors, it's a tie!";
        }
    }
    else {
        return "Please only enter Rock, Paper, or Scissors";
    }
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const playerscore = document.querySelector('.playerscore');
const computerscore = document.querySelector('.computerscore');
const winner = document.querySelector('.winner');
let scoreNumber = 0;
let computerscoreNumber = 0;
buttons.forEach(btn => btn.addEventListener('click', function(e) {
    let round = rockPaperScissors(e.target.firstChild.data)
    results.textContent = round;
    if (round.includes("You Win!")) {
        scoreNumber++;
    }
    else if (round.includes("You Lose!")) {
        computerscoreNumber++;
    }
    playerscore.textContent = scoreNumber;
    computerscore.textContent = computerscoreNumber;
    if (scoreNumber == 5) {
        winner.textContent = "You Win!";
    }
    else if (computerscoreNumber == 5) {
        winner.textContent = "You Lose!";
    }
}));