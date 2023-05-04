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

function game() {
    let score = 0;
    for (i = 0; i < 5; i++) {
        playerSelection = prompt();
        let round = rockPaperScissors(playerSelection);
        console.log(round);
        if (round.includes("You Win!")) {
            score++;
        }
        else if (round.includes("You Lose!")) {
            score--;
        }
    }
    if (score > 0) {
        console.log("You Win!");
    }
    else if (score < 0) {
        console.log("You Lose!");
    }
    else {
        console.log("It's a Tie!");
    }
    

}