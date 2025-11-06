window.alert("welcome to my site!"); 
function sendMail() {
    const parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
   emailjs.send("service_2omki7c", "template_dlu2x6n", parms)
  .then(function(response) {
      alert("✅ Email sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
  }, function(error) {
      alert("❌ Failed to send email. Check the console for details.");
      console.error("FAILED...", error);
  });

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

function playGame(playerChoice){

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
// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){

    if(slides.length > 0){
         slides[slideIndex].classList.add("displaySlide");
         intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
fetchData();

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("not found in pokedex");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "4569b81b85b803439a38223d17568123";

weatherForm.addEventListener("submit", async event =>{

    event.preventDefault();

    const city = cityInput.value;

    if (city){
        try{
             const weatherData = await getWeatherData(city);
             displayWeatherinfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);

        }

    }
    else{
        displayError("please enter a city")
    }

} );

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    
    }
    return await response.json();
}

function displayWeatherinfo(data){

    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");


    cityDisplay.textContent = city;
    const fahrenheit = ((temp - 273.15) * 9/5 + 32).toFixed(1);
    tempDisplay.textContent = `${fahrenheit}°F`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji")

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){

     switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌨️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌁";  
        case (weatherId === 800):
            return "☀️";  
        case (weatherId >= 801 && weatherId < 810):
            return "🌥️";
        default:
            return "❓";
     }

}

function displayError(message){


    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
