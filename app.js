const rpsChoices = Object.freeze({ROCK: "rock", PAPER: "paper", SCISSORS: "scissors"});

function getRandomProperty(obj) {
    const values = Object.values(obj);
    return values[Math.floor(Math.random() * values.length)];}

function getComputerChoice() {
    return getRandomProperty(rpsChoices)
}

function isValidRPSSelection(playerSelection) {
    if (playerSelection === null) {
        return false
    }
    const validSelections = Object.values(rpsChoices)
    return validSelections.includes(playerSelection.toLowerCase())
}

function playRound(playerSelection, computerSelection) {
    // Handle edge case
    if (isValidRPSSelection(playerSelection)) {
        // Paper Cases
        if (playerSelection.toLowerCase() == rpsChoices.PAPER && computerSelection.toLowerCase() == rpsChoices.PAPER) {
            return "It's a Draw! Both chose Paper"
        }
        
        else if (playerSelection.toLowerCase() == rpsChoices.PAPER && computerSelection.toLowerCase() == rpsChoices.ROCK) {
            return "You Win! Paper beats Rock"
        }

        else if (playerSelection.toLowerCase() == rpsChoices.PAPER && computerSelection.toLowerCase() == rpsChoices.SCISSORS) {
            return "You Lose! Paper losses to Scissors"
        }

        // Rock Cases
        else if (playerSelection.toLowerCase() == rpsChoices.ROCK && computerSelection.toLowerCase() == rpsChoices.ROCK) {
            return "It's a Draw! Both chose Rock"
        }
        else if (playerSelection.toLowerCase() == rpsChoices.ROCK && computerSelection.toLowerCase() == rpsChoices.SCISSORS) {
            return "You Win! Rock beats Scissors"
        }
        else if (playerSelection.toLowerCase() == rpsChoices.ROCK && computerSelection.toLowerCase() == rpsChoices.PAPER) {
            return "You Lose! Rock losses to Paper"
        }

        // Scissors Cases
        else if (playerSelection.toLowerCase() == rpsChoices.SCISSORS && computerSelection.toLowerCase() == rpsChoices.SCISSORS) {
            return "I'ts a Draw! Both chose Scissors"
        }
        else if (playerSelection.toLowerCase() == rpsChoices.SCISSORS && computerSelection.toLowerCase() == rpsChoices.PAPER) {
            return "You Win! Scissors beats Paper"
        }
        else if (playerSelection.toLowerCase() == rpsChoices.SCISSORS && computerSelection.toLowerCase() == rpsChoices.ROCK) {
            return "You Lose! Scissors loses to Rock"
        }
    }
    else {
        return `[${playerSelection}] is not a valid value.`
    }
}

function game(){
    let userInput;
    let userScore = 0;
    let computerScore = 0;

    while (userScore < 5 && computerScore < 5) {
        userInput = prompt("Choose: Rock, Paper or Scissors")
        let roundResult = playRound(userInput, getComputerChoice())

        if (roundResult.toLowerCase().includes("win!")) {
            userScore++
        }
        else if (roundResult.toLowerCase().includes("lose!")) {
            computerScore++
        }

        console.log(`${roundResult}, score is: (User) ${userScore}: (Computer) ${computerScore}`)
     }
     console.log(`Game Over! ${revealWinner(userScore, computerScore)} is the winner!`)
}

function revealWinner(userScore, computerScore) {
    if (userScore > computerScore) {
        return 'User'
    }
    else {
        return 'Computer'
    }
}

game()