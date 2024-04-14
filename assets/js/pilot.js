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

//Pilot Select
//getters

var playerSelected = 'Fox';
var computerSelected = 'Wolf';
let playersPilot_img = document.getElementById("players-pilot");
let pilotName = document.getElementById("pilot-name");
let computerPilot_img = document.getElementById("computer-pilot");
let computerPilotRandom = document.getElementById("computer-pilot-btn");
let computerPilotName = document.getElementById("computer-pilot-name");
let codenameForm = document.getElementById("codename-form");
let pilotDetails = document.getElementById("pilot-details");
let computerPilotDetails = document.getElementById("computer-pilot-details");


/**
 * randomly generates computer choice
 */
computerPilotRandom.addEventListener("click", function() {
    let pilotArray = ["Fox", "Falco", "Wolf", "Peppy", "Slippy"];
    let randomNumber =  Math.floor(Math.random() * 5);
    computerSelected = pilotArray[randomNumber]
    changePilot(computerSelected, false);
});

/**
 * function for playerSelected result
 * @param {} isPlayer - selected if the player is the pilot and a variable playerSelected
 * @param {} pilot - switch statement with pilot list eg "Fox"
 * else if the pilot is not, it is a variable computerSelected
 */
function changePilot(pilot, isPlayer) {
    if(isPlayer) {
      playerSelected = pilot;
    } else {
      computerSelected = pilot;
    }
    switch(pilot){
        case "Fox":
            if (isPlayer) {
                playersPilot_img.src = "assets/images/Fox_full_length.png";
                pilotName.innerHTML = "Fox";
                pilotDetails.innerHTML = `<p>Personality:</p><p>Self-confident,</p><p>Determined,</p><p>Loyal,</p>`;
                break;
            } else {
                computerPilot_img.src = "assets/images/Fox_full_length.png";
                computerPilotName.innerHTML = "Fox";
                computerPilotDetails.innerHTML = `<p>Personality:</p><p>Self-confident,</p><p>Determined,</p><p>Loyal,</p>`;
                break;
            }
        case "Falco":
            if (isPlayer) {
                playersPilot_img.src = "assets/images/Falco_full_length1.png";
                pilotName.innerHTML = "Falco";
                pilotDetails.innerHTML = `<p>Personality:</p><p>Arrogant,</p><p>Abrasive,</p><p>Sarcastic,</p>`;
                break;
            } else {
                computerPilot_img.src = "assets/images/Falco_full_length1.png";
                computerPilotName.innerHTML = "Falco";
                computerPilotDetails.innerHTML = `<p>Personality:</p><p>Arrogant,</p><p>Abrasive,</p><p>Sarcastic,</p>`;
                break;
            }
        case "Wolf":
            if (isPlayer) {
                playersPilot_img.src = "assets/images/Wolf_full_length.png";
                pilotName.innerHTML = "Wolf";
                pilotDetails.innerHTML = `<p>Personality:</p><p>Merciless,</p><p>Cunning,</p><p>Rebellious,</p>`;
                break;
            } else {
                computerPilot_img.src = "assets/images/Wolf_full_length.png";
                computerPilotName.innerHTML = "Wolf";
                computerPilotDetails.innerHTML = `<p>Personality:</p><p>Merciless,</p><p>Cunning,</p><p>Rebellious,</p>`;
                break;
            }
        case "Peppy":
            if (isPlayer) {
                playersPilot_img.src = "assets/images/Peppy_full_length.png";
                pilotName.innerHTML = "Peppy";
                pilotDetails.innerHTML = `<p>Personality</p><p>Wise,</p><p>High moral compass,</p><p>Level-headed,</p>`;
                break;
            } else {
                computerPilot_img.src = "assets/images/Peppy_full_length.png";
                computerPilotName.innerHTML = "Peppy";
                computerPilotDetails.innerHTML = `<p>Personality:</p><p>Wise,</p><p>High moral compass,</p><p>Level-headed,</p>`;
                break;
            }
        case "Slippy":
            if (isPlayer) {
                playersPilot_img.src = "assets/images/Slippy_full_length.png";
                pilotName.innerHTML = "Slippy";
                pilotDetails.innerHTML = `<p>Personality:</p><p>Intelligent,</p><p>Helpful,</p><p>Clumsy,</p>`;
                break;
            } else {
                computerPilot_img.src = "assets/images/Slippy_full_length.png";
                computerPilotName.innerHTML = "Slippy";
                computerPilotDetails.innerHTML = `<p>Personality:</p><p>Intelligent,</p><p>Helpful,</p><p>Clumsy,</p>`;
                break;
            }
    }
}


// sets the playerSelected variable to session storage
//sessionStorage.setItem('playerSelectedKey', playerSelected); // sets the playerSelected variable to session storage
//sessionStorage.setItem('computerSelectedKey', computerSelected); // sets the computerSelected variable to session storage

/**
 * function startGame sets the playerSelected & computerSelected variable to session storage
 */
function startGame() {
    sessionStorage.setItem('playerSelectedKey', playerSelected);
    sessionStorage.setItem('computerSelectedKey', computerSelected);
    window.location.href = "game.html";
}
