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
let playersScore = 0;
let compScore = 0;
const winningScore = 5;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let popupBox = document.getElementById("pop-up-box");

// Disable game buttons function
function disableGameButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

// Enable game buttons function
function enableGameButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

// Function to open pop-up-box
function openPopupBox() {
    popupBox.classList.add("open-popup-box");
    disableGameButtons();  // Disable the game buttons when the pop-up opens
}

// Function to close pop-up-box
function closePopupBox() {
    popupBox.classList.remove("open-popup-box"); // Close the pop-up
    enableGameButtons();  // Re-enable the game buttons when the pop-up is closed
}

// End game function
function endGame() {
    openPopupBox();
    if (playersScore === winningScore) {
        popupBoxMessageName.innerHTML = `${codename.value}`;
        popupBoxResult.innerHTML = `You Win!`;
        popupBoxCommandMessage.innerHTML = `You'll lead the mission`;
    } else {
        popupBoxMessageName.innerHTML = `${codename.value}`;
        popupBoxResult.innerHTML = `You loose!`;
        popupBoxCommandMessage.innerHTML = `${computerSelected} takes command`;
    }

    // Reset scores after game ends
    playersScore = 0;
    compScore = 0;
    playersScore_div.innerHTML = playersScore;
    compScore_div.innerHTML = compScore;
    winner_h4.innerHTML = `LET'S PLAY`;
    playerMessage_p.textContent = `" Are you ready ! "`;
    compMessage_p.textContent = `" Let's see what you got ! "`;
}

// Call the game when player selects a choice
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

    // Update messages
    playerMessage_p.textContent = `" I choose  ${playerChoice} ! "`;
    compMessage_p.textContent = `" I choose ${computerChoice} ! "`;

    if (playersScore === winningScore || compScore === winningScore) {
        setTimeout(endGame, 300);  // End the game when a player reaches the winning score
    }
}

// Add event listeners to buttons
function mainGame() {
    rockButton.addEventListener("click", function() {
        playerHand_img.src = 'assets/images/circle_rock_left.png';
        game("rock");
    });
    paperButton.addEventListener("click", function() {
        playerHand_img.src = 'assets/images/circle_paper_left.png';
        game("paper");
    });
    scissorsButton.addEventListener("click", function() {
        playerHand_img.src = 'assets/images/circle_scissors_left.png';
        game("scissors");
    });
}

// Start the game logic
mainGame();