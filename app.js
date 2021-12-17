
let r = "rock"
let s = "scissors"
let p = "paper" 
let rPsGameArrey = [r, p, s];
let userInput ;


let computerPlay =( )=>{
     
 return rPsGameArrey[Math.floor(Math.random()*rPsGameArrey.length)];
    
 }
 let  computerSelection = computerPlay().toLowerCase();

let  whatHappens = (userInput, computer)=> {
    userInput = prompt(`please enter either paper, rock or scissor`,        ).toLowerCase()
    
    if (userInput === computer) {
        prompt(`You entered ${userInput} the computer has entered ${computerSelection} draw!! `)
    }
    //                            you win! 
    else if (userInput === r && computer === s) {
        prompt(`You entered ${userInput}. the computer has entered ${computerSelection} you win!`);
    }   
      //                            you lose! 
    else if (userInput === p && computer === s) {
        prompt(`You entered ${userInput} the computer has entered ${computerSelection} you lose! `);
        
    }
      //                            you lose! 
    else if (userInput === r && computer === p) {
        prompt(`You entered ${userInput} the computer has entered ${computerSelection} you lose! `);
        
    }
      //                            you win! 
    else if (userInput === s && computer === p) {
        prompt(`You entered ${userInput} the computer has entered ${computerSelection} you win! `);
        
    }
      //                            you win! 
    else if (userInput === p && computer === r) {
         prompt(`You entered ${userInput} the computer has entered ${computerSelection} you win! `);
        
    }
      //                            you lose! 
    else if (userInput === s && computer === r) {
         prompt(`You entered ${userInput} the computer has entered ${computerSelection} you lose! `);
        
    }
    //                              if you made a mistake
    else {prompt(`You entered ${userInput}  please check your spelling `);} 
}


// this is the repeater of our main function
// function game (){
//         for (let index = 0; index < 5; index++) {
//         whatHappens(userInput, computerSelection);
//         }
//     }
// game();
