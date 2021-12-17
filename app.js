let rockbutton = document.getElementById('rock');
let paperbutton = document.getElementById('paper');
let scissorbutton = document.getElementById('scissor');
let result = document.getElementById('result');
let buttons = document.querySelectorAll("buttons")
rockbutton.addEventListener('click',game)
paperbutton.addEventListener('click',game)
scissorbutton.addEventListener('click',game)





let workingGame = (e)=>{
    
}













let r = rockbutton;
let s = scissorbutton;
let p = paperbutton; 
let rPsGameArrey = [r, p, s];



let computerPlay =( )=>{
     
 return rPsGameArrey[Math.floor(Math.random()*rPsGameArrey.length)];
    
 }
//  let  computerSelection = computerPlay()

let  playRound = (button, computer)=> {

    
     (button === computer)? 
        console.log(`You entered ${button} the computer has entered ${computerSelection} draw!! `):
    
    //                            you win! 
    (button === r && computer === s)? 
        console.log(`You entered ${button}. the computer has entered ${computerSelection} you win!`):
      
      //                            you lose! 
   (button === p && computer === s)? 
        console.log(`You entered ${button} the computer has entered ${computerSelection} you lose! `):
        
    
      //                            you lose! 
    (button === r && computer === p) ?
        console.log(`You entered ${button} the computer has entered ${computerSelection} you lose! `):
        
    
      //                            you win! 
    (button === s && computer === p)?                console.log(`You entered ${button} the computer has entered ${computerSelection} you win! `):
        

      //                            you win! 
    (button === p && computer === r)? 
         console.log(`You entered ${button} the computer has entered ${computerSelection} you win! `):
        
    
      //                            you lose! 
   (button === s && computer === r)?
         console.log(`You entered ${button} the computer has entered ${computerSelection} you lose! `): 
         console.log("please click one of the buttons");
        

    //                              if you made a mistake
 }


// this is the repeater of our main function
function game (){
        for (let index = 0; index < 5; index++) {
        playRound(buttons, computerPlay);
        }
    }
game();
