const rpsGameArray = ["Rock", "Paper", "Scissor"];
function computerPlay() {
  return rpsGameArray[~~(Math.random() * 3)].toLowerCase();
}
let newDiv = document.createElement("p");
let buttons = document.querySelectorAll(".buttons");
let result = document.getElementById("result");
let playerCounter = 0;
let computerCounter = 0;
let outcome;
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let rstbtn = document.getElementById('rstbtn');
rstbtn.addEventListener("click", refreshPage)

function refreshPage(){
  window.location.reload();
} 
function playRound(player, computer) {
  function displayScore() {
    if (computerCounter === 6 || playerCounter === 6){
      refreshPage()
    }
    if ( computerCounter === 5){
      newDiv.textContent = `game over, please hit reset to play again`;
      result.appendChild(newDiv);
    }
    if (playerScore === 5) {
      newDiv.textContent = `You've won, Please hit reset to play again`;
      result.appendChild(newDiv);
    }
    playerScore.textContent = `Player: ${playerCounter}`
    computerScore.textContent = `Computer: ${computerCounter}`
  }
  if (player === computer) {
    outcome = "draw";
    function displayDrawCounter() {
      newDiv.className = "draw";
      newDiv.textContent = `Its a Draw, Lets go again`;
      result.appendChild(newDiv);
      setTimeout(() => newDiv.remove(), 1000);
    }
    displayDrawCounter();
  } else if (
    (player === "scissor" && computer === "rock") ||
    (player === "paper" && computer === "scissor") ||
    (player === "rock" && computer === "paper")
  ) {
    outcome = "lose";
    function displayLoseCounter() {
      newDiv.textContent = `${computer} beats ${player} You Lose!`;
      newDiv.className = "lose";
      result.appendChild(newDiv);
      setTimeout(() => newDiv.remove(), 1000);
    }
    computerCounter++;
    displayLoseCounter();
    result.appendChild(newDiv);
  } else {
    outcome = "win"
    function displayWinCounter() {
      newDiv.textContent = `${player} beats ${computer}, You Win`;
      newDiv.className = "win";
      result.appendChild(newDiv);
      setTimeout(() => newDiv.remove(), 1000);
    }
    playerCounter++;
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
