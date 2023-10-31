let userScore = 0;
let computerScore = 0;
    // make the game into a 5 round game with score etc.
    function game() {
        for (let i = 0; i < 5; i++) {
            playRound();
        }

        if (userScore > computerScore) {
            return(`Congrats! You won this game`);
        }
        else {
            return(`You loose! Try again`);
        }
    }
    
        function playRound(userChoice, computerChoice) {
            //evaluate both userChoice and computerChoice and return winner
            userChoice = getUserChoice();
            computerChoice = getComputerChoice();
            console.log(`UserChoice = ${userChoice}, ComputerChoice:${computerChoice}`)

            if (userChoice === computerChoice) {
                userScore++;
                console.log(`Nobody wins | Your Score: ${userScore} : Computers Score ${computerScore}`);
            }
    
            else if (userChoice === "rock" && computerChoice === "paper") {
                computerScore++;
                console.log(`You loose! | Your Score: ${userScore} : Computers Score ${computerScore}`);
            }

            else if (userChoice === "rock" && computerChoice === "scissors") {
                userScore++;
                console.log(`You win! | Your Score: ${userScore} : Computers Score ${computerScore}`);
            }

            else if (userChoice === "paper" && computerChoice === "rock") {
                userScore++;
                console.log(`You win! | Your Score: ${userScore} : Computers Score ${computerScore}`)
                
            }

            else if (userChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
                console.log(`You loose! | Your Score: ${userScore} : Computers Score ${computerScore}`);
            }

            else if (userChoice === "scissors" && computerChoice === "rock") {
                computerScore++;
                console.log(`You loose! | Your Score: ${userScore} : Computers Score ${computerScore}`);
            }

            else {
                userScore++;
                console.log(`You win! | Your Score: ${userScore} : Computers Score ${computerScore}`);
            }
        }
        
    

    //get userChoice by prompt
    function getUserChoice() {
        let userChoice = prompt("What will it be? Rock, paper or Scissors?");
        userChoice = userChoice.toLowerCase();
        return(userChoice);
        console.log(`UserChoice after gathering function: ${userChoice}`);
    }
    
    //determine computerChoice based on random number
    function getComputerChoice() {
        let computerChoice = Math.random()*100;
        console.log(computerChoice);

        if (computerChoice < 33) {
            computerChoice = "rock"
        }

        else if (computerChoice > 66) {
            computerChoice = "scissors"
        }

        else {
            computerChoice = "paper";
        }
        return(computerChoice);
        console.log(`ComputerChoice after determination: ${computerChoice}`);
}