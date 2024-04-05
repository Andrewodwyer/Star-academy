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

let playersScore = 0;
let compScore = 0;
const playersScore_div = document.getElementById("players-score"); //_div to show its in a div
const compScore_div = document.getElementById("comp-score");
const scoreBox_div = document.querySelector(".score-box");
let winner_h4 = document.querySelector(".announce-winner > h4"); //_h4 to show its in a h4
let playerMessage_p = document.querySelector(".player-message > p"); // >p because in a p inside an id element
let compMessage_p = document.querySelector(".comp-message > p");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']; // an arrey with the 3 options
    let randomNumber = Math.floor(Math.random() * 3); // round down (math.floor) as array starts at 0 
    return choices[randomNumber]; // random number links to the array
}
console.log(getComputerChoice()); // check to see if function getComputerChoice works

function playerWins(playerChoice, computerChoice){
    playersScore++;
    playersScore_div.innerHTML = playersScore;
    compScore_div.innerHTML = compScore;
    winner_h4.innerHTML = `WIN`;
    document.getElementById("players-hand").classList.add('green-highlight');
    document.getElementById("computers-hand").classList.add('red-highlight');
    //playerMessage_p.innerHTML = `I choose  ${(playerChoice)}`;
}

function computerWins(playerChoice, computerChoice){
    compScore++;
    compScore_div.innerHTML = compScore;
    playersScore_div.innerHTML = playersScore;
    winner_h4.innerHTML = `LOOSE`;
    document.getElementById("players-hand").classList.add('red-highlight');
    document.getElementById("computers-hand").classList.add('green-highlight');
    //compMessage_p.innerHTML = `I choose ${(computerChoice)}`;
}

function draw(playerChoice, computerChoice){
    winner_h4.innerHTML = `DRAW`;
    document.getElementById("players-hand").classList.add('gray-highlight');
    document.getElementById("computers-hand").classList.add('gray-highlight');
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
    playerMessage_p.innerHTML = `I choose  ${(playerChoice)} !`; // text to be added on R, P, S selection
    compMessage_p.innerHTML = `I choose ${(computerChoice)} !`;
}

game("p");



function main(){
    rock_button.addEventListener('click', function() {
        game("rock");
        //console.log("it works, you clicked rock");
    })

    paper_button.addEventListener('click', function() {
        game("paper");
        //console.log("it works, you clicked paper");
    })

    scissors_button.addEventListener('click', function() {
        game("scissors");
        //console.log("it works, you clicked scissors");
    })
}

main();