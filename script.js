function getComputerChoice() {
   let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1 : return "Rock";
        case 2 : return "Paper";
        case 3 : return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\": ");
    return (humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase());
}





function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice){
        console.log("Tie!")
    }
    else if ((humanChoice == "Rock") && (computerChoice == "Paper")) {
        console.log("You lose! Paper beats Rock!");
    return false}
    else if ((humanChoice == "Rock") && (computerChoice == "Scissors")){
        console.log("You Win! Rock beats Scissors!");
     return true}
    else if ((humanChoice == "Paper") && (computerChoice == "Rock")){
        console.log("You Win! Paper beats Rock!");
    return true}
    else if ((humanChoice == "Paper") && (computerChoice == "Scissors")){
        console.log("You LOSE! Scissors beats Paper!");
     return false}
    else if ((humanChoice == "Scissors") && (computerChoice == "Rock")){
        console.log("You LOSE! Rock beats Scissors!");
     return false}
    else if ((humanChoice == "Scissors") && (computerChoice == "Paper")){
        console.log("You WIN! Scissors beats paper!");
    return true}
}
    

function playGame() {
   let humanScore = 0;
   let computerScore = 0;
    for (let i = 0; i<5; ++i) {
      let returnVal =  playRound(getHumanChoice(),getComputerChoice());
        if (returnVal){
            ++humanScore;
            console.log(`Score is now, you: ${humanScore} vs computer: ${computerScore}`);
        }
        else {
           ++computerScore;
           console.log(`Score is now, you: ${humanScore} vs computer: ${computerScore}`);
        }
    }
    console.log(`FINAL SCORE!!!!! , you: ${humanScore} vs computer: ${computerScore}`)
}


playGame();