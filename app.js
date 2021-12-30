// const rpsGameArray = ["Rock", "Paper", "Scissor"];
// function computerPlay() {
//   return rpsGameArray[~~(Math.random() * 3)].toLowerCase();
// }
// let newDiv = document.createElement("p");
// let buttons = document.querySelectorAll(".buttons");
// let result = document.getElementById("result");
// let playerCounter = 0;
// let computerCounter = 0;
// let outcome;
// let playerScore = document.getElementById('playerScore');
// let computerScore = document.getElementById('computerScore');
// let rstbtn = document.getElementById('rstbtn');
// rstbtn.addEventListener("click", refreshPage);
// playerScore.textContent = `Player: `
// computerScore.textContent = `Computer: `
// function refreshPage(){
//   window.location.reload();
// } 
// function playRound(player, computer) {
 
  
//   function displayScore() {
//     if (computerCounter === 5 || playerCounter === 5){
//       newDiv.textContent = `You ${outcome}`;
//       result.appendChild(newDiv);
//      playerCounter = 0;
//      computerCounter = 0;
//     }
//     playerScore.textContent = `Player: ${playerCounter}`
//     computerScore.textContent = `Computer: ${computerCounter}`
//   }
//   if (player === computer) {
//     outcome = "draw";
//     function displayDrawCounter() {
//       newDiv.className = "draw";
//       newDiv.textContent = `Its a Draw, Lets go again`;
//       result.appendChild(newDiv);
//     }
//     displayDrawCounter();
//   } else if (
//     (player === "scissor" && computer === "rock") ||
//     (player === "paper" && computer === "scissor") ||
//     (player === "rock" && computer === "paper")
//   ) {
//     computerCounter++;
//     outcome = "lose";
//     function displayLoseCounter() {
//       newDiv.textContent = `${computer} beats ${player} You Lose!`;
//       newDiv.className = "lose";
//       result.appendChild(newDiv);
//     }
//     displayLoseCounter();
//   } else {
//     playerCounter++;
//     outcome = "win"
//     function displayWinCounter() {
//       newDiv.textContent = `${player} beats ${computer}, You Win`;
//       newDiv.className = "win";
//       result.appendChild(newDiv);
//     }
//     displayWinCounter();
//   }
//   displayScore();
// }
// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     let img = btn.querySelector("img");
//     let playerSelection = img.id;;
//     let computerResult = computerPlay();
//     playRound(playerSelection, computerResult);
//   });
// });
