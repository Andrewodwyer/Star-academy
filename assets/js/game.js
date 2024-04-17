//HAMBURGER MENU
// hamburger influenced by youtube video as referenced in readme
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
let winner_h4 = document.querySelector(".announce-winner > h4"); //_h4 to show its in a h4
let playerMessage_p = document.querySelector(".player-message > p"); // >p because in a p inside an id element
let compMessage_p = document.querySelector(".comp-message > p");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let playerChoice_div = document.getElementById("players-hand"); // user in playerWins & computerWins & draw functions,
let computerChoice_div = document.getElementById("computers-hand"); // global variables
let playerHand_img = document.getElementById("player-hand");
let computerHand_img = document.getElementById("computer-hand");
let computerSelectedImage = document.getElementById("computerSelected_img");
let playerSelectedImage= document.getElementById("playerSelected_img");
let playerSelected = "Fox";
let computerSelected = "Wolf";
let popupBox = document.getElementById("pop-up-box"); //popupbox div for end of game
let popupBoxMessageName = document.getElementById("pop-up-message-name"); //name of winner in popup
let popupBoxResult = document.getElementById("pop-up-result"); // win/loose message in popup
let popupBoxCommandMessage = document.getElementById("pop-up-command-text"); // win/loose message in popup


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
 * function when the player wins, increase score, you win text, green light, setTimeOut after 500ms
 */
function playerWins(playerChoice, computerChoice){
    playersScore++;
    playersScore_div.innerHTML = playersScore;
    compScore_div.innerHTML = compScore;
    winner_h4.innerHTML = `YOU WIN`;
    playerChoice_div.classList.add("green-highlight");
    computerChoice_div.classList.add("red-highlight");
    setTimeout(function() { playerChoice_div.classList.remove("green-highlight")}, 500);
    setTimeout(function() { computerChoice_div.classList.remove("red-highlight")}, 500);
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
    setTimeout(function() { playerChoice_div.classList.remove("red-highlight")}, 500);
    setTimeout(function() { computerChoice_div.classList.remove("green-highlight")}, 500);
}

/**
 * function when the game is a draw, text draw, grey colour behind hand
 */
function draw(playerChoice, computerChoice){
    winner_h4.innerHTML = `IT'S A DRAW`;
    playerChoice_div.classList.add('grey-highlight');
    computerChoice_div.classList.add('grey-highlight');
    setTimeout(function() { playerChoice_div.classList.remove("grey-highlight")}, 500); // length of time 1 second
    setTimeout(function() { computerChoice_div.classList.remove("grey-highlight")}, 500);
}

/**
 * game function, to see what player selects and their result, gameEnd within function
 */
// game function was influenced by youtube video as referenced in readme but code is my own
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
        setTimeout(endGame, 300);
    }
}

/**
 * Function to open pop-up-box
 */
function openPopupBox(){
    popupBox.classList.add("open-popup-box");
}

/**
 * Function to close pop-up-box
 */
function closePopupBox(){
    popupBox.classList.remove("open-popup-box"); //removes the added class used to make popup-box visable
}

/**
 * Function to state when game ends, playerScore===winngingScore
 */
function endGame() {
    if (playersScore === winningScore) {
        //alert(`${codename.value} You Win!`);
        openPopupBox();
        popupBoxMessageName.innerHTML = `${codename.value}`;
        popupBoxResult.innerHTML = `You Win!`;
        popupBoxCommandMessage.innerHTML = `You'll lead the mission`;

    } else {
        //alert(`${codename.value} You loose!`);
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
computerSelectedImage.src = `assets/images/${computerSelected.toLowerCase()}_headshot.png`;
// places playerSelected inside image source name using ${}
playerSelectedImage.src = `assets/images/${playerSelected.toLowerCase()}_headshot.png`;

mainGame();