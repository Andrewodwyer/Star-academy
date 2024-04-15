//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", navBar() {
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", navBar() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

/**
 * Text in the input field shows in div with id="codename"
 */
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
 * randomly generates computer choice
 * @returns a string from an array of choices
 */
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']; // an arrey with the 3 options
    let randomNumber = Math.floor(Math.random() * 3); // round down (math.floor) as array starts at 0 
    return choices[randomNumber]; // random number links to the array
}

/**
 * function when the player wins, increase score, you win text, green light, setTimeOut after 1s
 */
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

/**
 * function when the computer wins
 */
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

/**
 * function when the game is a draw, text draw, grey colour behind hand
 */
function draw(playerChoice, computerChoice){
    winner_h4.innerHTML = `IT'S A DRAW`;
    playerChoice_div.classList.add('grey-highlight');
    computerChoice_div.classList.add('grey-highlight');
    setTimeout(function() { playerChoice_div.classList.remove("grey-highlight")}, 1000); // length of time 1 second
    setTimeout(function() { computerChoice_div.classList.remove("grey-highlight")}, 1000);
    console.log("draw");
}

/**
 * game function, to see what player selects and their result, gameEnd within function
 */
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
        setTimeout(endGame, 100);
    }
}

/**
 * Function to state when game ends, playerScore===winngingScore
 */
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

/**
 * mainGame() player chooses rock, paper, scissor from images and their result for the game()
 */
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

// saves the playerSelected to the session storage
playerSelected = sessionStorage.getItem('playerSelectedKey');

// saves the random computerSelected to the session storage
computerSelected = sessionStorage.getItem('computerSelectedKey');

// places computerSelected inside image source name using ${}
computerSelectedImage.src = `assets/images/${computerSelected}_headshot.png`;
// places playerSelected inside image source name using ${}
playerSelectedImage.src = `assets/images/${playerSelected}_headshot.png`;

//sessionStorage.removeItem('playerSelectedKey');
//sessionStorage.removeItem('computerSelectedKey');
mainGame();