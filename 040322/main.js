

// Rock Paper Scissors Lizard Spock
// Rock-Paper-Scissors Big Bang Style

// According to Sheldon Cooper the following is true:

//     Scissors cuts Paper
//     Paper covers Rock
//     Rock crushes Lizard
//     Lizard poisons Spock
//     Spock smashes Scissors
//     Scissors decapitates Lizard
//     Lizard eats Paper
//     Paper disproves Spock
//     Spock vaporizes Rock
//     ( and as it always has ) Rock crushes Scissors

// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".

// Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".



function rpsls(userDinner, computerDinner){
    if (userDinner === computerDinner){
          return 'Draw!';   
          }else if (
              (userDinner === 'rock'     && (computerDinner === 'scissors' || computerDinner === 'lizard'  ) ) ||  
              (userDinner === 'paper'    && (computerDinner === 'rock'     || computerDinner === 'spock'   ) ) || 
              (userDinner === 'scissors' && (computerDinner === 'paper'    || computerDinner === 'lizard'  ) ) || 
              (userDinner === 'lizard'   && (computerDinner === 'paper'    || computerDinner === 'spock'   ) ) || 
              (userDinner === 'spock'    && (computerDinner === 'rock'     || computerDinner === 'scissors') )
                ) {
              return 'Player 1 Won!'    
                }else { 
                  return `Player 2 Won!`;
                }
    }