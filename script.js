let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*10000) % 3; //High enough number that the probability of each is around 33.3%
    if (randomNumber === 1){
        return `rock`;
    }
    else if (randomNumber === 2){
        return `paper`;
    }
    else{
        return `scissors`;
    }
}

function getHumanChoice(){
    return prompt(`Choose Rock (R), Paper (P) or Scissors (S): `);
}

function playRound(computerChoice, humanChoice){
    if (computerChoice === `rock` && humanChoice === `paper`){
        console.log(`You win! Paper beats Rock!`);
        humanScore++;
    }
    else if (computerChoice === `rock` && humanChoice === `rock`){
        console.log(`It's a tie! Rock huh.`);
    }
    else if (computerChoice === `rock` && humanChoice === `scissors`){
        console.log(`Computer wins! Rock beats scissors!`);
        computerScore++;
    }
    else if (computerChoice === `paper` && humanChoice === `rock`){
        console.log(`Computer wins! Paper beats rock!`);
        computerScore++;
    }
    else if (computerChoice === `paper` && humanChoice === `paper`){
        console.log(`It's a tie! Paper huh.`);
    }
    else if (computerChoice === `paper` && humanChoice === `scissors`){
        console.log(`You win! Scissors beats paper!`);
        humanScore++;
    }
    else if (computerChoice === `scissors` && humanChoice === `rock`){
        console.log(`You win! Rock beats scissors!`);
        humanScore++;
    }
    else if (computerChoice === `scissors` && humanChoice === `paper`){
        console.log(`Computer wins! Scissors beats paper!`);
        computerScore++;
    }
    else if (computerChoice === `scissors` && humanChoice === `scissors`){
        console.log(`It's a tie! Scissors huh.`);
    }
}

function playGame(count){
    for (i=0; i < count; i++){
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Score is: You (${humanScore})   Computer (${computerScore})`);
    }
    
    if(humanScore == computerScore){
        console.log(`You fought well but it's a tie! You (${humanScore})   Computer (${computerScore})`)
    }
    else if(humanScore > computerScore){
        console.log(`You WON! You (${humanScore})   Computer (${computerScore})`)
    }
    else{
        console.log(`You Lost! You (${humanScore})   Computer (${computerScore})`)
    }
}

playGame(5);