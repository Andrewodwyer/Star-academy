const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

const playerScore = 0;
const compScore = 0;
const playerScore_div = document.getElementById("player-score"); //_div to show its in a div
const compScore_div = document.getElementById("comp-score");
const scoreBox_div = document.querySelector(".score-box");
const winner_h4 = document.getElementById("announce-winner");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']; // an arrey with the 3 options
    let randomNumber = Math.floor(Math.random() * 3); // round down (math.floor) as array starts at 0 
    return choices[randomNumber]; // random number links to the array
}
console.log(getComputerChoice()); // check to see if function getComputerChoice works

function playerWins(){
    console.log("win");
}

function computerWins(){
    console.log("lose");
}

function draw(){
    console.log("draw");
}

// game function, to see what player selects and their result
function game(playerChoice) {
    let computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            playerWins();
            break;
        case "paperscissors":
        case "rockpaper":
        case "scissorsrock":
            computerWins();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }

}

game("c");

function main(){
    rock_button.addEventListener('click', function() {
        game("rock");
        console.log("it works, you clicked rock");
    })

    paper_button.addEventListener('click', function() {
        game("paper");
        console.log("it works, you clicked paper");
    })

    scissors_button.addEventListener('click', function() {
        game("scissors");
        console.log("it works, you clicked scissors");
    })
}

main();