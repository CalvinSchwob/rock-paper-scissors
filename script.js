let userScore = 0;
let computerScore = 0;
let rock = document.getElementById(`rock`);
let paper = document.getElementById(`paper`);
let scissors = document.getElementById(`scissors`);
let userScoreboard = document.getElementById("userScoreboard");
let computerScoreboard = document.getElementById("computerScoreboard")
let protocol = document.getElementById("protocol");
let userChoiceDisplay = document.getElementById("userChoiceDisplay");
let computerChoiceDisplay = document.getElementById("computerChoiceDisplay");

let userChoiceImage = document.createElement("img");
userChoiceImage.style.width = "50px";
userChoiceImage.style.height = "50px";
userChoiceImage.style.backgroundColor = "white";
userChoiceImage.style.borderRadius = "10px";
userChoiceImage.src = "images/user_8647311.png"
userChoiceDisplay.appendChild(userChoiceImage);

let computerChoiceImage = document.createElement("img");
computerChoiceImage.style.width = "50px";
computerChoiceImage.style.height = "50px";
computerChoiceImage.style.backgroundColor ="white";
computerChoiceImage.style.borderRadius = "10px";
computerChoiceImage.src = "images/cpu_911514.png";
computerChoiceDisplay.appendChild(computerChoiceImage);

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

    // make the game into a 5 round game with score etc.
    
    function playRound(userChoice) {
        //evaluate both userChoice and computerChoice and return winner
        let computerChoice = getComputerChoice();
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
            protocol.textContent = `You loose!`;
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

        //visual choice representation:

        if (userChoice === "rock") {
            userChoiceImage.src = "images/icons8-wütend-faust-96.png";
            userChoiceImage.alt = "Rock";
        }

        if (userChoice === "paper") {
            userChoiceImage.src = "images/icons8-ganze-hand-96.png"
            userChoice.alt = "Paper";
        }

        if (userChoice === "scissors") {
            userChoiceImage.src = "images/icons8-hand_-schere-96.png"
            userChoiceImage.alt = "Scissors";
        }

        if (computerChoice === "rock") {
            computerChoiceImage.src = "images/icons8-wütend-faust-96.png"
            computerChoiceImage.alt = "Rock";
        }

        if (computerChoice === "paper") {
            computerChoiceImage.src = "images/icons8-ganze-hand-96.png";
            computerChoiceImage.alt = "Paper";
        }

        if (computerChoice === "scissors") {
            computerChoiceImage.srg = "images/icons8-hand_-schere-96.png";
            computerChoiceImage.alt = "Scissors";
        }
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