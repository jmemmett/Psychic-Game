//-----------------------------------
// Variable Declarations
//-----------------------------------
   
    // the array of possible letters used to play the game
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Initialize variables need to keep track of guesses and score
    var enteredLetter; // stores the letters as they are guessed by the user
    var randomLetter; // stores the letter randomly generated by the program
    var wins = 0; // stores the score for the number of rounds in which the user correctly guessed the random letter
    var losses = 0; // stores the score for the number of rounds in which the user incorrectly guesed the random letter
    var remainingGuesses = 9; // sets the initial number of tries to 9 and decreases by 1 each time the user makes a guess
    var guessedLetters = []; // empty array to store the users guesses as they make them
    
    // Connecting some of the variables above to the specific locations in the HTML document for display during the game
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

    // Update Wins
    function winnerChickenDinner() {
        wins++;
        document.getElementById("wins").innerHTML = wins;
    }

    // Update Losses
    function loser() {
        losses++;
        document.getElementById("losses").innerHTML = losses;
    }

    // Game over, reset stats
    function reset() {
        letterToGuess(); // generate a new random letter
        remainingGuesses = 9;
        guessedLetters = [];
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        document.getElementById("previousGuesses").innerHTML = guessedLetters;
    }

//-----------------------------------
// Program 
//-----------------------------------
    window.onload = function() {
        letterToGuess();
        console.log("Random letter to guess: " + randomLetter);
    }

    document.onkeyup = function(event) {
        var enteredLetter = event.key.toLowerCase();
        if (remainingGuesses !== 0 ) { // ensures that the user has a guess available
            if (letters.indexOf(enteredLetter) !== -1) { // ensures that the user entered a letter
                guessedLetters.push(enteredLetter); // adds each letter guessed by the user to the guessedLetters array
                document.getElementById("previousGuesses").innerHTML = guessedLetters // outputs the contents of the guessedLetters array to the HTML document
                if (enteredLetter === randomLetter) { // if the user made a correct guess
                    // display winning message
                        alert("You guessed the letter I was thinking of! YOU WIN!!!");
                    // update stats
                        winnerChickenDinner();
                        remainingGuesses = 9;
                    // reset game
                        reset();
                    // reset the random letter
                        letterToGuess();
                        console.log("Random letter to guess: " + randomLetter);
                } else { // if the user made an incorrect guess
                    remainingGuesses = remainingGuesses - 1;
                    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
                    if ( remainingGuesses === 0) {
                        // display losing message
                            alert("Game over! You lose this round!");
                        // update stats
                            loser();
                        // reset game
                            reset();
                        // reset the random letter
                            letterToGuess();
                            console.log("Random letter to guess: " + randomLetter);
                    }  // is it okay to do an IF loop without a corresponding ELSE condition?
                }
            } else {
                alert("Please enter a single letter (a-z) to continue playing the game.");
            }
        } else { // triggered when all guesses have been exhausted without a correct guess (remainingGuesses = 0)
            alert("Game over! You lose this round!");
    }
    }