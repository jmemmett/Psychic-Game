   
   // the array of possible letters used to play the game
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Initialize variables need to keep track of guesses and score
    var enteredLetter;
    var randomLetter;
    var wins = 0;
    var losses = 0;
    var remainingGuesses = 9;
    var previousGuesses = []; // setting this variable to an array so we can push letters as they are guessed into it
    var guessedLetters = []; // creating this empty array to contain all of the user guesses to display back to them on the HTML page
    
    
    // connect JS variables to IDs in the HTML and display their inital values on start of the game
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
   // Function definitions

    // generate a random letter from the letters array
    function letterToGuess() {
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
    }

    // when the user enters a keystroke
    
    document.onkeyup = function(event) {
        // place the lower case version of the letter entered into a variable named enteredLetter
        var enteredLetter = event.key.toLowerCase();
        guessedLetters.push(enteredLetter);
        console.log("Letter entered by the user: " + enteredLetter);
        // compare enteredLetter to the letters array and make sure that the value isn't -1. This will ensure that it was in fact one of the 26 letters in array
        if ( letters.indexOf(enteredLetter) !== -1 ) {
            // message confirming that the user entered a valid number to play the game
            alert("The letter you entered is valid!");
            console.log("Random Letter to guess: " + randomLetter);
            /* Now that the user has entered a valid guess, we can prompt the game to generate a random number that will be used to compare with the user guess */
            letterToGuess();
            // generate a random letter from the letters array and store it in a variable named randomLetter
            // letterToGuess();
            console.log("Random Letter to guess: " + randomLetter);
            document.getElementById("previousGuesses").innerHTML = guessedLetters; // how do I append each entered value to this and replace the innerHTML with the total guesses entered as the game moves along?
            
        } else {
            alert("Please enter a single letter (a - z) to continue playing the game.");
        }
        
        
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