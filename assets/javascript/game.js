

var usersGuess
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function randomLetter(array) {
    return array[Math.floor(array.length * Math.random())]
}


var computerChoice = randomLetter(letters)
console.log("Computer guess: " + computerChoice)


document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess !== computerChoice) {
        guessesLeft--;
        guesses--;
        console.log("guesses: " + guesses)
        $("#idguesses").html(guesses)

    } else if (userGuess == computerChoice){
        wins++
        console.log("wins: " + wins)
        $("#idwins").html(wins)
        alert("You got it dude!")
        reset() 

    }
    if (guesses == 0) {
        losses++
        console.log("losses: " + losses)
        $("#idlosses").html(losses)
        reset ()

    }
    function reset() {
        guesses = 9;
        guessesLeft = 9;
        var newChoice = randomLetter(letters)
        console.log (newChoice)

    }
    


}


// document.getElementById("idwins").innerHTML = String(wins);
// document.getElementById("idlosses").innerHTML = String(losses);
// document.getElementById("idguesses").innerHTML = String(guessesLeft);



// Computer needs to populate a random letter
// User needs to be able to enter in letter choice
// Computer decides if letter choice matches users input 
// Each guess user enters, 'guesses left' goes down by 1
// If users letter matches, wins go up by 1
// If users guesses incorrect letter, more than 9 times, losses go up by 1vvar wins = 0;



