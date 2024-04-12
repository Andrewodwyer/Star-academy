//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", function() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

// Codename to start on typing
document.addEventListener("DOMContentLoaded", function() {
    let codename = document.getElementById('codename');
    let pilotCodename = document.getElementById('pilot-codename');
    
    // Update the paragraph text when the input value changes
    codename.addEventListener('input', function() {
        pilotCodename.textContent = codename.value;
    });
    
    // Set the initial text in the paragraph on load
    pilotCodename.textContent = codename.value;
    });

// GAME PAGE
// getters
let codename = document.getElementById("codename"); //input id in form
let pilotCodename = document.getElementById("pilot-codename"); // id in game.html for codename
let playersScore = 0;
let compScore = 0;
const winningScore = 5;
let playersScore_div = document.getElementById("players-score"); //_div to show its in a div
let compScore_div = document.getElementById("comp-score");
const scoreBox_div = document.querySelector(".score-box");
let winner_h4 = document.querySelector(".announce-winner > h4"); //_h4 to show its in a h4
let playerMessage_p = document.querySelector(".player-message > p"); // >p because in a p inside an id element
let compMessage_p = document.querySelector(".comp-message > p");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let playerChoice_div = document.getElementById("players-hand"); // user in playerWins & computerWins & draw functions,
let computerChoice_div = document.getElementById("computers-hand"); // global variables
let computerChoice = getComputerChoice();
let playerHand_img = document.getElementById("player-hand");
let computerHand_img = document.getElementById("computer-hand");
let pilotDetails = document.getElementById("pilot-details");
let computerPilotDetails = document.getElementById("computer-pilot-details");
let computerSelectedImage = document.getElementById("computerSelected_img");
let playerSelectedImage= document.getElementById("playerSelected_img");
let playerSelected = "Fox";
let computerSelected = "Wolf";
/**
 * Dont forget your docstring...
 * @returns a string from an array of choices
 */
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
    winner_h4.innerHTML = `YOU WIN`;
    playerChoice_div.classList.add("green-highlight");
    computerChoice_div.classList.add("red-highlight");
    setTimeout(function() { playerChoice_div.classList.remove("green-highlight")}, 1000);
    setTimeout(function() { computerChoice_div.classList.remove("red-highlight")}, 1000);
}
function computerWins(playerChoice, computerChoice){
    compScore++;
    compScore_div.innerHTML = compScore;
    playersScore_div.innerHTML = playersScore;
    winner_h4.innerHTML = `YOU LOOSE`;
    playerChoice_div.classList.add('red-highlight');
    computerChoice_div.classList.add('green-highlight'); //global variable
    setTimeout(function() { playerChoice_div.classList.remove("red-highlight")}, 1000);
    setTimeout(function() { computerChoice_div.classList.remove("green-highlight")}, 1000);
}
function draw(playerChoice, computerChoice){
    winner_h4.innerHTML = `IT'S A DRAW`;
    playerChoice_div.classList.add('gray-highlight');
    computerChoice_div.classList.add('gray-highlight');
    setTimeout(function() { playerChoice_div.classList.remove("gray-highlight")}, 1000); // length of time 1 second
    setTimeout(function() { computerChoice_div.classList.remove("gray-highlight")}, 1000);
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
    playerMessage_p.textContent = `" I choose  ${playerChoice} ! "`; // text to be added on Rock, paper, Scissors selection
    compMessage_p.textContent = `" I choose ${computerChoice} ! "`;
    computerHand_img.src = `assets/images/circle_${computerChoice}_right.png`;
    pilotCodename.innerText = `${codename.value}`;
    
    if (playersScore === winningScore || compScore === winningScore) {
        endGame();
    }
}

function endGame() {
    if (playersScore === winningScore) {
        alert(`${codename.value} You Win!`);
    } else {
        alert(`${codename.value} You loose!`);
    }
    playersScore = 0;
    compScore = 0;
    playersScore_div.innerHTML = playersScore;
    compScore_div.innerHTML = compScore;
    winner_h4.innerHTML = `LET'S PLAY`;
    playerMessage_p.textContent = `" Are you ready ! "`;
    compMessage_p.textContent = `" Let's see what you got ! "`;
}
function mainGame(){
    rockButton.addEventListener("click", function() {
        playerHand_img.src = 'assets/images/circle_rock_left.png';
        game("rock");
    });
    paperButton.addEventListener("click", function() {
        game("paper");
        playerHand_img.src = 'assets/images/circle_paper_left.png';
    });
    scissorsButton.addEventListener("click", function() {
        playerHand_img.src = 'assets/images/circle_scissors_left.png';
        game("scissors");
    });
}

playerSelected = sessionStorage.getItem('playerSelectedKey');

computerSelected = sessionStorage.getItem('computerSelectedKey');

computerSelectedImage.src = `assets/images/${computerSelected}_headshot.png`;
playerSelectedImage.src = `assets/images/${playerSelected}_headshot.png`;
//sessionStorage.removeItem('playerSelectedKey');
//sessionStorage.removeItem('computerSelectedKey');
mainGame();