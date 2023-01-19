let computerScore=0;
let playerScore=0;
let playercChoice='';
const choiceBtns = document.querySelectorAll("button");
const roundResult = document.querySelector(".round-result");
const playerIcon = document.querySelector(".playerIcon");
const computerIcon = document.querySelector(".computerIcon");
const playerHealth = document.querySelectorAll(".pla-hb");
const computerHealh = document.querySelectorAll(".com-hb");

const getComputerChoice = () =>{
    let computerChoice=['ROCK','PAPER','SCISSORS'];
    let random = Math.floor(Math.random()*computerChoice.length);
    return computerChoice[random];
    
}
choiceBtns.forEach(button => button.addEventListener("click",()=>{
    playercChoice=button.className;
    playRound(playercChoice,getComputerChoice());
    if(computerScore == 5 || playerScore == 5){
        game();
        playerScore=0;
        computerScore=0;
    }
}));
const playRound = (playerSelection,computerSelection) =>{
    /* DRAW CONDITION */
    if(playerSelection === computerSelection){
        roundResult.textContent="DRAW!";
        roundResult.style.color= "orange";

        if(playerSelection === "SCISSORS"){
            playerIcon.src =`https://youngdemzi.github.io/rockPaperScissor/icons/${playercChoice.toLowerCase()}Lose.png`;
            playerIcon.style.transform= "rotate(180deg)";
        }
        else{
            playerIcon.src =`https://youngdemzi.github.io/rockPaperScissor/icons/${playercChoice.toLowerCase()}Lose.png`;
            playerIcon.style.transform= "rotate(0deg)";
            }
            computerIcon.src =`https://youngdemzi.github.io/rockPaperScissor/icons/${computerSelection.toLowerCase()}Lose.png`; 
    } 
     /* WIN CONDITION */
    else if((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||(playerSelection === 'PAPER' && computerSelection === 'ROCK')){

        computerHealh[4-playerScore].textContent= "\u2620";
        computerHealh[4-playerScore].style.color="black";
        playerScore+=1;
        roundResult.textContent="YOU WON!";
        roundResult.style.color= "green";
        
        if(playerSelection === "SCISSORS"){
            playerIcon.src =`https://youngdemzi.github.io/rockPaperScissor/icons/${playercChoice.toLowerCase()}Win.png`;
            playerIcon.style.transform= "rotate(180deg)";
        }
        else{
            playerIcon.src =`https://youngdemzi.github.io/rockPaperScissor/icons/${playercChoice.toLowerCase()}Win.png`;
            playerIcon.style.transform= "rotate(0deg)";
            }
            computerIcon.src =`https://youngdemzi.github.io/rockPaperScissor/icons/${computerSelection.toLowerCase()}Lose.png`; 
         
    }
     /* LOSE CONDITION */
    else{
        playerHealth[4-computerScore].textContent= "\u2620";
        playerHealth[4-computerScore].style.color="black";
        computerScore+=1;
        roundResult.textContent="YOU LOST!";
        roundResult.style.color= "brown";
        
        if(playerSelection === "SCISSORS"){
            playerIcon.src =`./icons/${playercChoice.toLowerCase()}Lose.png`;
            playerIcon.style.transform= "rotate(180deg)";
        }
        else{
            playerIcon.src =`./icons/${playercChoice.toLowerCase()}Lose.png`;
            playerIcon.style.transform= "rotate(0deg)";
            }
            computerIcon.src =`./icons/${computerSelection.toLowerCase()}Win.png`; 
    }
}
const game = () =>
{
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

