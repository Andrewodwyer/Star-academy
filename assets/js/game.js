// HAMBURGER MENU
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
    })
);

// GAME PAGE
// Global variables and getters
let codename = document.getElementById("codename"); // input id in form
let pilotCodename = document.getElementById("pilot-codename"); // id in game.html for codename
let playersScore = 0;
let compScore = 0;
const winningScore = 5;
let playersScore_div = document.getElementById("players-score"); //_div to show its in a div
let compScore_div = document.getElementById("comp-score");
let winner_h4 = document.querySelector(".announce-winner > h4"); //_h4 to show its in a h4
let playerMessage_p = document.querySelector(".player-message > p"); // >p because in a p inside an id element
let compMessage_p = document.querySelector(".comp-message > p");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let playerChoice_div = document.getElementById("players-hand");
let computerChoice_div = document.getElementById("computers-hand");
let playerHand_img = document.getElementById("player-hand");
let computerHand_img = document.getElementById("computer-hand");
let computerSelectedImage = document.getElementById("computerSelected_img");
let playerSelectedImage = document.getElementById("playerSelected_img");
let playerSelected = "Fox";
let computerSelected = "Wolf";
let popupBox = document.getElementById("pop-up-box");
let popupBoxMessageName = document.getElementById("pop-up-message-name");
let popupBoxResult = document.getElementById("pop-up-result");
let popupBoxCommandMessage = document.getElementById("pop-up-command-text");

let isGameActive = true; // This flag indicates if the game is active

/**
 * Updates the pilot-codename dynamically as the player types
 */
document.addEventListener("DOMContentLoaded", function() {
    // Update the paragraph text when the input value changes
    codename.addEventListener('input', function() {
        pilotCodename.textContent = codename.value;
    });

    // Set the initial text in the paragraph on load
    pilotCodename.textContent = codename.value;
});

/**
 * Randomly generates computer choice
 * @returns a string from an array of choices
 */
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

/**
 * Function when the player wins
 */
function playerWins(playerChoice, computerChoice) {
    playersScore++;
    playersScore_div.innerHTML = playersScore;
    compScore_div.innerHTML = compScore;
    winner_h4.innerHTML = `YOU WIN`;
    playerChoice_div.classList.add("green-highlight");
    computerChoice_div.classList.add("red-highlight");
    setTimeout(function() { playerChoice_div.classList.remove("green-highlight") }, 500);
    setTimeout(function() { computerChoice_div.classList.remove("red-highlight") }, 500);
}

/**
 * Function when the computer wins
 */
function computerWins(playerChoice, computerChoice) {
    compScore++;
    compScore_div.innerHTML = compScore;
    playersScore_div.innerHTML = playersScore;
    winner_h4.innerHTML = `YOU LOOSE`;
    playerChoice_div.classList.add('red-highlight');
    computerChoice_div.classList.add('green-highlight');
    setTimeout(function() { playerChoice_div.classList.remove("red-highlight") }, 500);
    setTimeout(function() { computerChoice_div.classList.remove("green-highlight") }, 500);
}

/**
 * Function when the game is a draw
 */
function draw(playerChoice, computerChoice) {
    winner_h4.innerHTML = `IT'S A DRAW`;
    playerChoice_div.classList.add('grey-highlight');
    computerChoice_div.classList.add('grey-highlight');
    setTimeout(function() { playerChoice_div.classList.remove("grey-highlight") }, 500);
    setTimeout(function() { computerChoice_div.classList.remove("grey-highlight") }, 500);
}

/**
 * Game function
 */
function game(playerChoice) {
    if (!isGameActive) return; // Do nothing if the game is inactive

    let computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            playerWins(playerChoice, computerChoice);
            break;
        case "paperscissors":
        case "rockpaper":
        case "scissorsrock":
            computerWins(playerChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerChoice, computerChoice);
            break;
    }

    playerMessage_p.textContent = `" I choose ${playerChoice}! "`;
    compMessage_p.textContent = `" I choose ${computerChoice}! "`;
    computerHand_img.src = `assets/images/circle_${computerChoice}_right.png`;
    pilotCodename.innerText = `${codename.value}`;

    if (playersScore === winningScore || compScore === winningScore) {
        isGameActive = false; // Mark the game as inactive when it ends
        setTimeout(endGame, 300);
    }
}

/**
 * Function to open pop-up-box
 */
function openPopupBox() {
    popupBox.classList.add("open-popup-box");
}

/**
 * Function to close pop-up-box
 */
function closePopupBox() {
    popupBox.classList.remove("open-popup-box");
    isGameActive = true; // Reactivate the game after closing the pop-up
}

/**
 * Function to handle end of game
 */
function endGame() {
    if (playersScore === winningScore) {
        openPopupBox();
        popupBoxMessageName.innerHTML = `${codename.value}`;
        popupBoxResult.innerHTML = `You Win!`;
        popupBoxCommandMessage.innerHTML = `You'll lead the mission`;
    } else {
        openPopupBox();
        popupBoxMessageName.innerHTML = `${codename.value}`;
        popupBoxResult.innerHTML = `You loose!`;
        popupBoxCommandMessage.innerHTML = `${computerSelected} takes command`;
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
 * Main game function
 */
function mainGame() {
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

// Load saved selections
playerSelected = sessionStorage.getItem('playerSelectedKey');
computerSelected = sessionStorage.getItem('computerSelectedKey');
computerSelectedImage.src = `assets/images/${computerSelected.toLowerCase()}_headshot.png`;
playerSelectedImage.src = `assets/images/${playerSelected.toLowerCase()}_headshot.png`;

mainGame();
