// main.js

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

let grid = document.querySelectorAll(".grid-container");
let divs = document.querySelectorAll(".grid-container div");

function randomize() {
    console.log(divs.length, "randomize!");

    grid[0].style.transform = `rotate(${Math.random() * 180}deg)`;

    divs.forEach(function(div) {

    let scale = randomNumber(.5, 1.2);
    let translateX = randomNumber(0, 50);
    let translateY = randomNumber(0, 20);
    let rotate = randomNumber(0, 180);

    div.style.transform = `scale(${scale})translate(${translateX}%, ${translateY}%)rotate(${rotate}deg)`;
    })
    
}
document.addEventListener("click", randomize);

function optionYes() {
    document.getElementById("feedback").innerHTML = "Have a great day!";
}

function optionNo() {
    document.getElementById("feedback").innerHTML = "Better luck next time!";
}
    



