//HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", function() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))



// GAME PAGE

let playersScore = 0;
let compScore = 0;
const winningScore = 5;
let playersScore_div = document.getElementById("players-score"); //_div to show its in a div
let compScore_div = document.getElementById("comp-score");
const scoreBox_div = document.querySelector(".score-box");
let winner_h4 = document.querySelector(".announce-winner > h4"); //_h4 to show its in a h4
let playerMessage_p = document.querySelector(".player-message > p"); // >p because in a p inside an id element
let compMessage_p = document.querySelector(".comp-message > p");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
let playerChoice_div = document.getElementById("players-hand"); // user in playerWins & computerWins & draw functions,
let computerChoice_div = document.getElementById("computers-hand"); // global variables
let computerChoice = getComputerChoice();
let playerHand_img = document.getElementById("player-hand");
let computerHand_img = document.getElementById("computer-hand");


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

    playerMessage_p.textContent = `" I choose  ${playerChoice} ! "`; // text to be added on R, P, S selection
    compMessage_p.textContent = `" I choose ${computerChoice} ! "`;
    computerHand_img.src = `assets/images/circle_${computerChoice}_right.png`;

    if (playersScore === winningScore || compScore === winningScore) {
        endGame();
    }

}

function endGame() {
    if (playersScore === winningScore) {
        alert("You Win!");
    } else {
        alert("You loose!");
    }
    playersScore = 0;
    compScore = 0;
    playersScore_div.innerHTML = playersScore;
    compScore_div.innerHTML = compScore;
}


function mainGame(){
    rock_button.addEventListener('click', function() {
        playerHand_img.src = 'assets/images/circle_rock_left.png';
        game("rock");
    })

    paper_button.addEventListener('click', function() {
        game("paper");
        playerHand_img.src = 'assets/images/circle_paper_left.png';
        //console.log("it works, you clicked paper");
    })

    scissors_button.addEventListener('click', function() {
        playerHand_img.src = 'assets/images/circle_scissors_left.png';
        game("scissors");
        //console.log("it works, you clicked scissors");
    })
}

mainGame();


//Pilot Select

const Fox_button = document.getElementById("Fox");
const Falco_button = document.getElementById("Falco");
const Wolf_button = document.getElementById("Wolf");
const Peppy_button = document.getElementById("Peppy");
const Slippy_button = document.getElementById("Slippy");
let computerPilotChoice = getComputerPilotChoice();
let playersPilot_img = document.getElementById("players-pilot");
let computerPilot_img = document.getElementById("computer-pilot");
let computerPilot = document.getElementById("computer-pilot-btn");


function getComputerPilotChoice(){
    let pilots = document.querySelectorAll('pilot-btn'); // an arrey with the 5 options

    let randomPilotNumber = Math.floor(Math.random() * pilots.length); // round down (math.floor) as array starts at 0 

    //let computerPilot = pilots[randomPilotNumber];

    return pilot[randomPilotNumber];
}


computerPilot.addEventListener("click", function() {
    getComputerPilotChoice(); 
    computerPilot_img.src = `assets/images/${computerPilot}_full_length.png`;

})


function changePilot(pilot){

    switch(pilot){
        case "Fox":
            document.getElementById("players-pilot").src = "assets/images/Fox_full_length.png";
            document.getElementById("pilot-name").innerHTML = "Fox";
            break;
        case "Falco":
            document.getElementById("players-pilot").src = "assets/images/Falco_full_length1.png";
            document.getElementById("pilot-name").innerHTML = "Falco";
            break;
        case "Wolf":
            document.getElementById("players-pilot").src = "assets/images/Wolf_full_length.png";
            document.getElementById("pilot-name").innerHTML = "Wolf";
            break;
        case "Peppy":
            document.getElementById("players-pilot").src = "assets/images/Peppy_full_length.png";
            document.getElementById("pilot-name").innerHTML = "Peppy";
            break;
        case "Slippy":
            document.getElementById("players-pilot").src = "assets/images/Slippy_full_length.png";
            document.getElementById("pilot-name").innerHTML = "Slippy";
            break;
            
    }
}



document.getElementById("codenameForm").addEventListener("submit", function(event) {
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