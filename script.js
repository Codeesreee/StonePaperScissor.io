const choices = document.querySelectorAll('.choice');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const resultElem = document.querySelector('#result');
const playAgainBtn = document.querySelector('#play-again');
const computerChoiceElem = document.querySelector('#computer-choice');


const weapons = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;


function computerPlay(){
    const weaponsIndex = Math.floor(Math.random()*weapons.length);
    return weapons[weaponsIndex];
}

function updateScore(playerWeapon, computerWeapon){
    if(playerWeapon){
        computerChoiceElem.innerHTML =`Computer choose: ${computerWeapon}`;
        if(playerWeapon === computerWeapon){
            resultElem.innerHTML ="It's a tie!!!"
         }
         else if((playerWeapon=== 'rock' && computerWeapon=== 'scissors')||(playerWeapon=== 'paper' && computerWeapon=== 'rock')||(playerWeapon=== 'scissors' && computerWeapon=== 'paper')){
            resultElem.innerHTML = "you win!!!";
            playerScore++;
            playerScoreElem.innerHTML = `player : ${playerScore}`;
          }
        else{
            resultElem.innerHTML = "Computer Wins!";
            computerScore++;
            computerScoreElem.innerHTML =`Computer : ${computerScore}`;
           }
        }else{
        computerChoiceElem.innerHTML ="Game Over";
        resultElem.innerHTML = 'you did not make a choice! | you lose the game!'
        resultElem.computedStyleMap.color ='red';
        disableOptions();
        }

   

   if (playerScore === 5) {
    resultElem.textContent = 'You win the game!';
    resultElem.style.color = 'green';
    computerChoiceElem.innerHTML = 'Game Over';
    disableOptions();
   
  }

  if (computerScore === 5) {
    resultElem.textContent = 'You lose the game!';
    resultElem.style.color = 'red';
    computerChoiceElem.innerHTML = 'Game Over';
    disableOptions();
   
  }
}
  function selectWeapon() {
    
    const playerWeapon = this.id;
    const computerWeapon = computerPlay();
    updateScore(playerWeapon, computerWeapon);
  }
  
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElem.innerHTML = 'Player: 0';
    computerScoreElem.innerHTML = 'Computer: 0';
    resultElem.innerHTML = 'Choose your weapon!';
    resultElem.style.color = '#660033';
    computerChoiceElem.innerHTML = '';
    enableOptions();
    
  }
  
function disableOptions() {
    choices.forEach((choice) => {
      choice.style.pointerEvents = 'none';
    });
  }
  
  function enableOptions() {
    choices.forEach((choice) => {
      choice.style.pointerEvents = 'auto';
    });
  }
  choices.forEach((choice) => choice.addEventListener('click', selectWeapon));
  playAgainBtn.addEventListener('click', resetGame);
  
    



