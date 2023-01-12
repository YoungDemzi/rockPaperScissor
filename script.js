let computerScore=0;
let playerScore=0;

let getComputerChoice = () =>{
    let computerChoice=['Rock','Paper','Scissors'];
    let random = Math.floor(Math.random()*computerChoice.length);
    let upperComp=computerChoice[random];
    return upperComp.toUpperCase();
    
}
let playRound = (playerSelection,computerSelection) =>{
    /* DRAW CONDITION */
    if(playerSelection === computerSelection){
        console.log(playerSelection,computerSelection);
    return outcome =`Draw!: ${playerSelection} is same as ${computerSelection}`;
    } 
     /* WIN CONDITION */
    else if((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||(playerSelection === 'PAPER' && computerSelection === 'ROCK')){
        playerScore+=1;
        console.log(playerSelection,computerSelection);
        return outcome = `Player won! Player's: ${playerSelection} beats Computers': ${computerSelection}`;
    }
     /* LOSE CONDITION */
    else{
        computerScore+=1;
        console.log(playerSelection,computerSelection);
        return outcome = `You Lose! Computer's: ${computerSelection} beats Player's: ${playerSelection}`;
    }
}
let game = () =>
{
    for(let i=0;i<5;i++)
    {
        let getPlayerChoice = prompt('Choose between Rock, Paper, Scissors and write it in the box');
        console.log(playRound(getPlayerChoice.toUpperCase(), getComputerChoice()));
    }
    let finalWinner;
    let winnerScore;
    if(computerScore>playerScore){
        finalWinner='COMPUTER';
        winnerScore=computerScore;
    } 
    else{
        finalWinner='PLAYER';
        winnerScore=playerScore;
    }
    console.log(`AND THE FINAL WINNER WITH SCORE OF ${winnerScore} IS ${finalWinner}`);

}
game();