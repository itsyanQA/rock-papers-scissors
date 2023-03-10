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

function updateResult(roundResult) {
    const computerResult = document.querySelector(".computer-result");
    const playerResult = document.querySelector(".player-result");
    const roundTitle = document.querySelector(".round-title")

    if (roundResult === "win") {
        playerResult.innerText = +playerResult.textContent + 1;
        roundTitle.innerText = "You won the round!";
        roundTitle.style.color = "lightgreen";
    } 
    else if (roundResult === "lose") {
        computerResult.innerText = +computerResult.textContent + 1;
        roundTitle.innerText = "You lost the round!";
        roundTitle.style.color = "rgb(144, 52, 52)"
    }
    else {
        roundTitle.innerText = "It's a Draw!";
        roundTitle.style.color = "lightgrey";
    }
  }

function checkForWinner() {
    const playerResult = document.querySelector(".player-result");
    const computerResult = document.querySelector(".computer-result");
    const roundTitle = document.querySelector(".round-title")
    const expression = document.querySelector(".expression")
    const happyExpressions = ["😁", "😀", "😃", "😄", "😌"];
    const sadExpressions = ["😑", "😔", "😓", "😡", "😤"];
    let isGameFinished;

    if (playerResult.innerText === '5') {
        roundTitle.style.color = "green";
        roundTitle.style.fontWeight = "bold";
        roundTitle.innerText = "You Win! You beat the computer";
        expression.innerText = getRandomItem(happyExpressions);
        isGameFinished = true;
    } else if (computerResult.innerText === '5'){
        roundTitle.style.color = "red";
        roundTitle.style.fontWeight = "bold";
        roundTitle.innerText = "You Lose! the computer has beaten you!";
        expression.innerText = getRandomItem(sadExpressions);
        isGameFinished = true;
    }
    if (isGameFinished) {
        const playAgainButton = document.querySelector(".play-again");
        playAgainButton.style.display = "flex";
        const playButtons = document.querySelectorAll(".game-item");
        let btnArray = [...playButtons]
        btnArray.forEach(element => {element.style.pointerEvents = "none"});
        playAgainButton.addEventListener('click', refreshPage);
    }
}

function getRandomItem (list) {
    return list[Math.floor((Math.random()*list.length))];
  }

function refreshPage(){
    window.location.reload();
} 

function playRound(playerSelection, computerSelection) {
    let roundResult;
    // Handle edge case
    if (isValidRPSSelection(playerSelection)) {
        // Paper Cases
        if (playerSelection.toLowerCase() == rpsChoices.PAPER && computerSelection.toLowerCase() == rpsChoices.PAPER) {
            console.log("It's a Draw! Both chose Paper");
            roundResult = "draw";
        }
        
        else if (playerSelection.toLowerCase() == rpsChoices.PAPER && computerSelection.toLowerCase() == rpsChoices.ROCK) {
            console.log("You Win! Paper beats Rock");
            roundResult = "win";  
        }

        else if (playerSelection.toLowerCase() == rpsChoices.PAPER && computerSelection.toLowerCase() == rpsChoices.SCISSORS) {
            console.log("You Lose! Paper losses to Scissors");
            roundResult = "lose";
        }

        // Rock Cases
        else if (playerSelection.toLowerCase() == rpsChoices.ROCK && computerSelection.toLowerCase() == rpsChoices.ROCK) {
            console.log("It's a Draw! Both chose Rock");
            roundResult = "draw";
        }
        else if (playerSelection.toLowerCase() == rpsChoices.ROCK && computerSelection.toLowerCase() == rpsChoices.SCISSORS) {
            console.log("You Win! Rock beats Scissors");
            roundResult = "win";
        }
        else if (playerSelection.toLowerCase() == rpsChoices.ROCK && computerSelection.toLowerCase() == rpsChoices.PAPER) {
            console.log("You Lose! Rock losses to Paper");
            roundResult = "lose";
        }

        // Scissors Cases
        else if (playerSelection.toLowerCase() == rpsChoices.SCISSORS && computerSelection.toLowerCase() == rpsChoices.SCISSORS) {
            console.log("I'ts a Draw! Both chose Scissors");
            roundResult = "draw";
        }
        else if (playerSelection.toLowerCase() == rpsChoices.SCISSORS && computerSelection.toLowerCase() == rpsChoices.PAPER) {
            console.log("You Win! Scissors beats Paper");
            roundResult = "win";
        }
        else if (playerSelection.toLowerCase() == rpsChoices.SCISSORS && computerSelection.toLowerCase() == rpsChoices.ROCK) {
            console.log("You Lose! Scissors loses to Rock");
            roundResult = "lose";
        }
    }
    else {
        return `[${playerSelection}] is not a valid value.`
    }
    updateResult(roundResult);
    showRPSChoice(playerSelection, computerSelection);
    checkForWinner();
}

function showRPSChoice(playerSelection, computerSelection) {
    const playerChoice = document.querySelector(".player-choice");
    const computerChoice = document.querySelector(".computer-choice");
    playerChoice.style.backgroundColor = "darkorange";
    computerChoice.style.backgroundColor = "darkorange";

    if (playerSelection == rpsChoices.PAPER) {
        playerChoice.innerText = "✋";
    }
    else if (playerSelection == rpsChoices.ROCK) {
        playerChoice.innerText = "✊";
    }
    else if (playerSelection == rpsChoices.SCISSORS) {
        playerChoice.innerText = "✌"
    }

    if (computerSelection == rpsChoices.PAPER) {
        computerChoice.innerText = "✋";
    }
    else if (computerSelection == rpsChoices.ROCK) {
        computerChoice.innerText = "✊";
    }
    else if (computerSelection == rpsChoices.SCISSORS) {
        computerChoice.innerText = "✌"
    }
    return;
}


function revealWinner(userScore, computerScore) {
    if (userScore > computerScore) {
        return 'User'
    }
    else {
        return 'Computer'
    }
}
const result = document.querySelector(".result")
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")

rockButton.addEventListener('click', () => {
    playRound(rpsChoices.ROCK, getComputerChoice());
    console.log("User chose: Rock!")
})

paperButton.addEventListener('click', () => {
    playRound(rpsChoices.PAPER, getComputerChoice());
    console.log("User chose: Paper!")
})

scissorsButton.addEventListener('click', () => {
    playRound(rpsChoices.SCISSORS, getComputerChoice());
    console.log("User chose: Scissors!")
})