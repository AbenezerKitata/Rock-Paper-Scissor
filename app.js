let r = document.getElementById('rock');
let p = document.getElementById('paper');
let s = document.getElementById('scissor');
let gameArray = document.querySelectorAll('buttons')
let parentResult = document.getElementById('result');
let buttons = document.querySelectorAll("buttons")
var result = document.createElement('result');
gameArray.forEach(button=>{
  button.addEventListener('click', playRound())
})

let computerPlay =( )=>{   
  return gameArray[Math.floor(Math.random()*gameArray.length)];   
  }
function playRound (gArray, computer) {
  let w = "win";
  let l = "lose"
  for (let index = 0; index < gArray.length; index++) {
    const button = gArray[index];
    if (button === computer){return "Draw"}  
    if (button === s && computer === r){
    var newDiv = document.createElement('p');
    newDiv.textContent = l;
    result.appendChild(newDiv)} 
    if (button === p && computer === s)
    {    var newDiv = document.createElement('p');
    newDiv.textContent = l;
    result.appendChild(newDiv)}
    if (button === r && computer === p)
    {    var newDiv = document.createElement('p');
    newDiv.textContent = l;
    result.appendChild(newDiv)}
    if (button === s && computer === p)
    {    var newDiv = document.createElement('p');
    newDiv.textContent = w;
    result.appendChild(newDiv)}
    if (button === r && computer === s)
    {    var newDiv = document.createElement('p');
    newDiv.textContent = w;
    result.appendChild(newDiv)} 
    if (button === p && computer === r)
    {    var newDiv = document.createElement('p');
    newDiv.textContent = w;
    result.appendChild(newDiv)}  
  }
       
}



buttons.forEach(btn=>{
  btn.addEventListener('click', playRound)
})

 


 let playfunction = playRound(gameArray, computerPlay());


// let win = ()=>{ result.textContent = 'You won'}
// let loss = ()=>{ result.textContent = 'You Lost'}



let howManyRounds = ()=>{
 document.write('How Many Rounds?')
}

// var newDiv = document.createElement('----text----');
// newDiv.classList.add('----text----');
// newDiv.classList.remove('----text----');
// newDiv.classList.contains('----text----');
// result.appendChild(newDiv)












// //  let  computerSelection = computerPlay()




// // this is the repeater of our main function
// function game (){
//         for (let index = 0; index < 5; index++) {
//         playRound(buttons, computerPlay);
//         }
//     }
// game();
