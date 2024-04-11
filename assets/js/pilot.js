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
//const foxButton = document.getElementById("Fox");
//const falcobutton = document.getElementById("Falco");
//const wolfButton = document.getElementById("Wolf");
//const peppyButton = document.getElementById("Peppy");
//const slippyButton = document.getElementById("Slippy");
let playersPilot_img = document.getElementById("players-pilot");
let pilotName = document.getElementById("pilot-name");
let computerPilot_img = document.getElementById("computer-pilot");
let computerPilotRandom = document.getElementById("computer-pilot-btn");
let computerPilotName = document.getElementById("computer-pilot-name");
let codenameForm = document.getElementById("codename-form");
let pilotDetails = document.getElementById("pilot-details");
let computerPilotDetails = document.getElementById("computer-pilot-details");


computerPilotRandom.addEventListener("click", function() {
    let pilotArray = ["Fox", "Falco", "Wolf", "Peppy", "Slippy"];
    let randomNumber =  Math.floor(Math.random() * 5);
    changePilot(pilotArray[randomNumber]);
});

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

codenameForm.addEventListener("submit", function(event){
  event.preventDefault(); // Prevent form submission
  
  // Get the codename input value
  let codename = document.getElementById("codename").value.trim();
  
  // Check if codename meets requirements
  if (codename.length > 4 && /^[a-zA-Z]+$/.test(codename)) {
    // Save codename to localStorage (optional)
    localStorage.setItem("codename", codename);
    
    // Redirect to game.html
    window.location.href = "game.html";
  } else {
    alert("Codename must be more than 4 letters and contain only letters!");
  }
});
function startGame() {
  console.log(playerSelected, computerSelected);
  const wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = `<h3>Player selected: ${playerSelected}</h3><h3>Computer selected: ${computerSelected}</h3>`;
}

//set localStorage.setItem(${playerSelected}, ${computerSelected});
// localStorage.setItem( ${computerSelected});
//get on R,P,S document.getElementById("player_img").innerHTML = localStorage.getItem("playerSelected");
//document.getElementById("computer_img").innerHTML = localStorage.getItem("computerSelected");
mainGame();