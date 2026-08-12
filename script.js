function getComputerChoice() {
   let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1 : return "Rock";
        case 2 : return "Paper";
        case 3 : return "Scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter \"Rock\", \"Paper\", or \"Scissors\": ");
}


