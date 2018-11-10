//-----------------------------------
// Variable Declarations
//-----------------------------------
   
    // the array of possible letters used to play the game
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Initialize variables need to keep track of guesses and score
    var enteredLetter;
    var randomLetter;
    var randomAssigned = false;
    var wins = 0;
    var losses = 0;
    var remainingGuesses = 9;
    var guessedLetters = []; // creating this empty array to contain all of the user guesses to display back to them on the HTML page
    
    
    // connect JS variables to IDs in the HTML and display their inital values on start of the game
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

//-----------------------------------
// Function Definitions
//-----------------------------------

    // Generate a random letter
    function letterToGuess() {
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
    }

    // When the user presses a key
        document.onkeyup = function(event) {
        var enteredLetter = event.key.toLowerCase();
        remainingGuesses = remainingGuesses - 1;
        if ( remainingGuesses !== 0 ) {
            if ( letters.indexOf(enteredLetter) !== -1 ) {
                guessedLetters.push(enteredLetter);
                document.getElementById("previousGuesses").innerHTML = guessedLetters;
                /* This isn't working like I want it to. I'd like to separate the display of the array items with an extra space */
            } else {
                alert("Please enter a single letter (a - z) to continue playing the game.");
            }

            if ( enteredLetter === randomLetter) {

            } else {
                document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
            }

            // 
        } else {
            alert("Game over! You Lose!");
        }
    }

//-----------------------------------
// Program 
//-----------------------------------
    window.onload = function() {
        letterToGuess();
        console.log("Random letter to guess: " + randomLetter);
    }

    // compare the enteredLetter to randomLetter
    // if enteredLetter matches randomLetter:
        // increase wins by 1 and update the HTML document with updated wins score
        // reset remainingGuesses to 9 and update the HTML document with this information
        // remove any previously displayed previousGuesses from the HTML document (should now be blank)
    // if the random letter does not match the letter entered by the user
        // decrease remainingGuesses by 1 and update the HTML document with this information
        // add letter entered by the user to the previousGuesses array and display the contents of the array to the HTML document
        // if remainingGuesses < 1 (meaning zero) increase losses by 1 and update the HTML document with updated losses score
        //reset remaining guesses to 9 and update the HTML document with this information
        // remove any previously displayed previousGuesses from the HTML document (should now be blank)