
// word choices
var wordChoices = ["a", "b", "c", "d", 
    "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", 
    "z"];
var userChoice = [];

// play results
var wins = 0;
var losses = 0;
var guessLeftOver = 9;

// display variable
var userGuessText = document.getElementById("playerGuess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeft = document.getElementById("guessLeft-text");
var compChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
console.log(compChoice);

//guess count


// player input
document.onkeyup = function(event) {
    var userGuess = event.key;
    var userGuess;
    if (userGuess === compChoice) {
        compChoice.indexOf(userGuess) >= 0;
        alert("you win!");
        wins++;
        guessLeftOver = 9;
        compChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        userGuess = "";
        userChoice = [];
        console.log(compChoice);
    } else if ((userGuess !== compChoice) && (guessLeftOver > 1)) {
        compChoice.indexOf(userGuess) >= 0;
        guessLeftOver--; 
        userChoice.push(userGuess);
    } else {
        alert("You Lose");
        losses++;
        guessLeftOver = 9;
        compChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        userChoice = [];
        userGuess = "";
        console.log(compChoice);
    }

    // display
    userGuessText.textContent = "Your guess so far: " + userChoice;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeft.textContent = "Guesses Left: " + guessLeftOver;
    
}