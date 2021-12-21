const rpsGameArray = ["Rock", "Paper", "Scissor"];
function computerPlay() {
return rpsGameArray[~~(Math.random() * 3)].toLowerCase();
}
let buttons = document.querySelectorAll('.buttons')
let result = document.getElementById('result');
let playerCounter  = 0;
let computerCounter = 0;
  function playRound (button, computer) {
    let newDiv = document.createElement('p')
    if (button === computer)
    {   newDiv.textContent = "Its a draw";
    newDiv.classList.add('draw');
    result.appendChild(newDiv)}  
    else if (button === "scissor" && computer === "rock" || button === "paper" && computer === "scissor" || button === "rock" && computer === "paper")
    {
    computerCounter++;
    newDiv.textContent = `computer ${computerCounter}, You ${playerCounter}`;
    if (computerCounter == 5) {
      alert('game over')
    }
    newDiv.classList.add('lose');
    result.appendChild(newDiv)} 
    else  {
    newDiv.textContent = `You entered ${button}, and the computer entered ${computer} you won!`;
    newDiv.classList.add('win');
    playerCounter++;
    if (playerCounter == 5) {
      alert('youve won')
    }
    result.appendChild(newDiv)} 
  }
buttons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    let img = btn.querySelector('img')
    let playerSelection = img.id;
    let computerResult = computerPlay();
  playRound(playerSelection, computerResult)
  })})

 