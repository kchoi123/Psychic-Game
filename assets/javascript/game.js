// word choices
var wordChoices = ["a", "b", "c", "d", 
    "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", 
    "z"];

// play results
var wins = 0;
var losses = 0;
var guessLeft = 0;

// computer chooses a letter in the array
var compChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// player input
document.onkeyup = function(event) {
    var userGuess = event.key;
    if (userGuess === compChoice) {
        wins++,
        alert("you win!");
    } else {
        
        alert("you bad...");
    }
}