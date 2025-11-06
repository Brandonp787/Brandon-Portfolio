window.alert("welcome to my site!"); 
function sendMail(){
    let parms = {
        name : document.getElementById("name").Value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_2omki7c","template_dlu2x6n",parms).then(alert("Email sent!!"))
}
// random number generator

let randomNum = Math.floor(Math.random() * 777) + 2;

console.log(randomNum);

// If statements = if a condition is true, execute some code
//                 if not, do something else

let age = 25;

if(age >= 18){
    console.log("You are old enough to be permitted into this site");

}
else{
    console.log("You must be 18 years or older to enter this site ");
}

// evenListener = listen for specific events to create interactive web pages
//                events: click, mouseover, mouseout
//                .addEventListener(event, callback);

const myBox = document.getElementById("myBox");

function changeColor(event){
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "You're Cool! 👍";
}

myBox.addEventListener("click", changeColor);

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "Yellow";
    event.target.textContent = "Go For It 😎";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "aqua";
    event.target.textContent = "Click Me 😁 ";
});

// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 documents.addEventListener(event, callback);
// arrowkeys and movement

const myBox2 = document.getElementById("myBox2");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y-= moveAmount;
                break;
            case "ArrowDown":
                y+= moveAmount;
                break;
            case "ArrowLeft":
                x-= moveAmount;
                break;
            case "ArrowRight":
                x+= moveAmount;
                break;
        }
        myBox2.style.top = `${y}px`;
        myBox2.style.left = `${x}px`;
    }
});

// ROCK PAPER SCISSORS

const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerchoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
             case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;   
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
}
