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
let playerChoice_div = document.getElementById("players-hand"); // user in playerWins & computerWins & draw functions,
let computerChoice_div = document.getElementById("computers-hand"); // global variables
let computerChoice = getComputerChoice();

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
    playerChoice_div.classList.add("green-highlight");
    computerChoice_div.classList.add("red-highlight");
    setTimeout(function() { playerChoice_div.classList.remove("green-highlight")}, 1000);
    setTimeout(function() { computerChoice_div.classList.remove("red-highlight")}, 1000);
    //playerMessage_p.innerHTML = `I choose  ${(playerChoice)}`;
}

function computerWins(playerChoice, computerChoice){
    compScore++;
    compScore_div.innerHTML = compScore;
    playersScore_div.innerHTML = playersScore;
    winner_h4.innerHTML = `LOOSE`;
    playerChoice_div.classList.add('red-highlight');
    computerChoice_div.classList.add('green-highlight'); //global variable
    setTimeout(function() { playerChoice_div.classList.remove("red-highlight")}, 1000);
    setTimeout(function() { computerChoice_div.classList.remove("green-highlight")}, 1000);
    //compMessage_p.innerHTML = `I choose ${(computerChoice)}`;
}



function draw(playerChoice, computerChoice){
    winner_h4.innerHTML = `DRAW`;
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

    playerMessage_p.textContent = `I choose  ${playerChoice} !`; // text to be added on R, P, S selection
    compMessage_p.innerHTML = `I choose ${computerChoice} !`;
}

//game("...", "...");



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