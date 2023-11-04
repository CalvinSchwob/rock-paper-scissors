let userScore = 0;
let computerScore = 0;
let rock = document.getElementById(`rock`);
let paper = document.getElementById(`paper`);
let scissors = document.getElementById(`scissors`);
let userScoreboard = document.getElementById("userScoreboard");
let computerScoreboard = document.getElementById("computerScoreboard")
let protocol = document.getElementById("protocol");


rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

    // make the game into a 5 round game with score etc.
    
    function playRound(userChoice) {
        //evaluate both userChoice and computerChoice and return winner
        computerChoice = getComputerChoice();
        // protocol.textContent = `UserChoice = ${userChoice}, ComputerChoice:${computerChoice}`;

        if (userChoice === computerChoice) {
            protocol.textContent = `Nobody wins`;
        }

        else if (userChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            protocol.textContent = `You loose!`;
        }

        else if (userChoice === "rock" && computerChoice === "scissors") {
            userScore++;
            protocol.textContent = `You win!`;
        }

        else if (userChoice === "paper" && computerChoice === "rock") {
            userScore++;
            protocol.textContent = `You win!`;
            
        }

        else if (userChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            protocol.textContent = `You loose! | Your Score: ${userScore} : Computers Score ${computerScore}`);
        }

        else if (userChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            console.log(`You loose! | Your Score: ${userScore} : Computers Score ${computerScore}`);
        }

        else {
            userScore++;
            console.log(`You win! | Your Score: ${userScore} : Computers Score ${computerScore}`);
        }
        userScoreboard.textContent = userScore;
        computerScoreboard.textContent = computerScore;
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