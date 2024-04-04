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