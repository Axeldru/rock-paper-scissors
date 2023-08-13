  // Score //

let computerScore = 0
let playerScore = 0

    function playRound() {
           
        
        //My "choice"// 
        
            let Answer = prompt(`Do you choose Rock,Paper or Scissors ?`).toLowerCase();
                console.log(Answer);
                                    
        function computerPlay() {
         computerPlay = Math.floor(Math.random() * 3)
            
            if(computerPlay === 0) { 
                console.log("rock"); 
            } else if (computerPlay === 1) {
                console.log("paper"); 
            } else if (computerPlay === 2){
                console.log("scissors"); 
            }

        }   
    
         computerPlay()
    
            
            //The conditions for the game//
         
            if(Answer == "rock" && computerPlay === 0){
                console.log ("Draw");   
             } 
              else if(Answer == "rock" && computerPlay === 1 ){
                   computerScore += 1
                   console.log("You lost");
                    
                }
            
              else if(Answer == "rock" && computerPlay === 2){
                    playerScore += 1
                    console.log("You won");
                }
                
           if(Answer == "paper" && computerPlay === 0 ) {  
                playerScore += 1
                console.log("You Won!");   
              }
             else if(Answer == "paper" && computerPlay === 1) { 
                console.log("Draw");
            }
           else if (Answer == "paper" && computerPlay === 2) {
                computerScore += 1
                console.log("You Lost!");
                 
              }
            if(Answer == "scissors" && computerPlay === 0) { 
                    computerScore += 1
                    console.log("You Lost!")
             } 
              else if(Answer == "scissors" && computerPlay === 1) {
                    playerScore += 1
                    console.log("You Won!");
                   
                }
             else if(Answer == "scissors" && computerPlay === 2) { 
                console.log("Draw!");
                    
            }
            
    
           function winnerCheck() {
                if (computerScore === 5){
                  console.log("Player won!")
                }
                else if (playerScore === 5) {
                    console.log("Computer won!");
                }
               } 

               function check() {
                if(playerScore < 5 || computerScore < 5)
                playRound() 
                
                } 
        
               
                check()
                winnerCheck()
          
        }
            
        
               
            
            
        playRound() 
           
            
            
            
