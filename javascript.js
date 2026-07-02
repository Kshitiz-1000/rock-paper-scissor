let humanScore = 0; // stores human score
let computerScore = 0; // stores computer score

function playRound(humanChoice, computerChoice) { // Decides who Won
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

    if(humanChoice === computerChoice) { // if both Human and Computer choose same option
        console.log("No one Won! Both choose same option");
    }
    else if(humanChoice === "Rock") { // if human choose Rock

        if(computerChoice === "Paper") { // if Computer choose Paper Human Lose
            computerScore++;
            console.log("You Lose! Paper beats Rock");
        }
        else { // if Computer choose Scissors Human Win
            humanScore++;
            console.log("You Won! Rock beats Scissors");
        }

    }
    else if(humanChoice === "Paper") { // if human choose Paper

        if(computerChoice === "Scissors") { // if Computer choose Scissors Human Lose
            computerScore++;
            console.log("You Lose! Scissors beats Paper");
        }
        else { // if Computer choose Rock Human Win
            humanScore++;
            console.log("You Won! Paper beats Rock");
        }

    }
    else if(humanChoice === "Scissors") { // if human choose Scissor

        if(computerChoice === "Rock") { // if Computer choose Rock Human Lose
            computerScore++;
            console.log("You Lose! Rock beats Scissors");
        }
        else { // if Computer choose Paper Human Win
            humanScore++;
            console.log("You Won! Scissor beats Paper");
        }

    }
}

function playGame() { // runs 5 rounds
    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore === computerScore)
        return "Its a Draw. No ne won the Match";
    else if(humanScore > computerScore)
        return "Human Won the Match";
    else
        return "Computer Won the Match";
}

function getComputerChoice() { // return either Rock, Paper, Scissors
    let choice = Math.floor(Math.random() * 3); // generates 0, 1, 2

    if(choice === 0) 
        return "Rock";
    else if(choice === 1)
        return "Paper";
    else
        return "Scissors";
}

function getHumanChoice() { // return Players Choice
    return prompt("Choose");
}

console.log(playGame());

