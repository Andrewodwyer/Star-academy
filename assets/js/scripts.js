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

const playerScore = 0;
const compScore = 0;
const playerScore_div = document.getElementById("player-score"); //_div to show its in a div
const compScore_div = document.getElementById("comp-score");
const scoreBox_div = document.querySelector(".score-box");
const winner_h4 = document.getElementById("announce-winner");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

rock_button.addEventListener('click', function() {
    console.log("it works, you clicked rock");
})

paper_button.addEventListener('click', function() {
    console.log("it works, you clicked paper");
})

scissors_button.addEventListener('click', function() {
    console.log("it works, you clicked scissors");
})

