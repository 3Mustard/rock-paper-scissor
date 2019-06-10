let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let results = document.querySelector('#result');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

let playerScoreValue = 0;
let computerScoreValue = 0;

rock.addEventListener('click', ()=> playGame('rock'));
paper.addEventListener('click', ()=> playGame('paper'));
scissor.addEventListener('click', ()=> playGame('scissor'));


function getComputerChoice(){
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0: return 'rock';
    case 1: return 'paper';
    case 2: return 'scissor';
  }
}

function playGame(userChoice){
  let computerChoice = getComputerChoice();
  if(userChoice === computerChoice) {
    result = 'This round was a tie.';
    //rock vs computer choice
  } if(userChoice === 'rock') {
    	if(computerChoice === 'paper') {
      	updateScore(0,1,'The computer has won this round.');
      }else{
        updateScore(1,0,'You have won this round!');
      }
    //paper vs computer choice
  } if(userChoice === 'paper') {
    	if(computerChoice === 'scissor') {
        updateScore(0,1,'The computer has won this round.');
      }else{
        updateScore(1,0,'You have won this round!');
      }
    //scissor vs computer choice
  } if(userChoice === 'scissor') {
    	if(computerChoice === 'rock') {
        updateScore(0,1,'The computer has won this round.');
      }else{
        updateScore(1,0,'You have won this round!');
      }
  }
}

function updateScore(user,computer,resultText){
  playerScoreValue += user;
  computerScoreValue += computer;
  playerScore.textContent = playerScoreValue;
  computerScore.textContent = computerScoreValue;
  results.textContent = resultText;
  if(playerScoreValue == 5){
    results.textContent = "You have won the game!";
    resetGame();
  }
  if(computerScoreValue == 5){
    results.textContent = "The computer has won the game.";
    resetGame();
  }
}

function resetGame(){
  playerScoreValue = 0;
  computerScoreValue = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}
