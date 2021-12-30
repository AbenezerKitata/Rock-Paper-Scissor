const rpsGameArray = ["Rock", "Paper", "Scissor"];
function computerPlay() {
  return rpsGameArray[~~(Math.random() * 3)].toLowerCase();
}

let buttons = document.querySelectorAll(".buttons");
let result = document.getElementById("result");
let playerCounter = 0;
let computerCounter = 0;
let outcome;
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let rstbtn = document.getElementById('rstbtn');
let score = document.getElementById('score');
rstbtn.addEventListener("click", refreshPage);
playerScore.textContent = `You: `
computerScore.textContent = `Computer: `
function refreshPage(){
  window.location.reload();
} 
function playRound(player, computer) {
 
  
  function displayScore() {
    if (computerCounter === 5 || playerCounter === 5){
    score.textContent = `Score: You ${outcome}`;
     playerCounter = 0;
     computerCounter = 0;
    }
    playerScore.textContent = `Player: ${playerCounter}`
    computerScore.textContent = `Computer: ${computerCounter}`
  }
  if (player === computer) {
    outcome = "draw";
    function displayDrawCounter() {
      score.className = "draw";
      score.textContent = `Its a Draw, Lets go again`;
    }
    displayDrawCounter();
  } else if (
    (player === "scissor" && computer === "rock") ||
    (player === "paper" && computer === "scissor") ||
    (player === "rock" && computer === "paper")
  ) {
    computerCounter++;
    outcome = "lose";
    function displayLoseCounter() {
      score.textContent = `${computer} beats ${player} You Lose!`;
      score.className = "lose";
    }
    displayLoseCounter();
  } else {
    playerCounter++;
    outcome = "win"
    function displayWinCounter() {
      score.textContent = `${player} beats ${computer}, You Win`;
      score.className = "win";
    }
    displayWinCounter();
  }
  displayScore();
}
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let img = btn.querySelector("img");
    let playerSelection = img.id;;
    let computerResult = computerPlay();
    playRound(playerSelection, computerResult);
  });
});
