
// var wins, current word, number of guesses left, guessed letters, 

var wins = 0;
var lives = 15;
var words = ["lannister", "stark", "greyjoy", "tyrell", "targaryen"];
var guesses = [];
var wordArray = [];
var hiddenArray = [];


// Press any key to start
// pick random word from array of "current word"
var randomizer = function() {
var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log("Random word is " + randomWord);

 
// replace letters with _ marks
for (var i=0; i < randomWord.length; i++) {
    wordArray[i] = " _ ";
    
}
// Splitting randomWord into an array
hiddenArray = randomWord.split("");
console.log(wordArray);

}
// set guesses left to 15
// set all arrays to empty
// display random word generated
var resetGame = function() {
    lives = 15;
    guesses= [];
    wordArray= [];
    hiddenArray= [];
    document.getElementById("currentWord").textContent = wordArray;
}

// displaying intial lives, wins, and randomized word
    randomizer();
    document.getElementById("showLives").textContent = lives;
    document.getElementById("showWins").textContent = wins;
    document.getElementById("currentWord").textContent = wordArray;

// user presses keys
// record key presses into guesses[]
document.onkeyup = function(letterGuess) {
    guesses.push(letterGuess.key);
    theLetter = letterGuess.key;
    console.log("You pressed: " + guesses);
    document.getElementById("showGuesses").textContent = guesses;

// if lives = 0, reset the game, generate new random word    
if (lives === 0) {
    resetGame();
    randomizer();
    }

// for loop to use key pressed (theLetter) to equal wordArray[i]
else {
    for (var i = 0; i < wordArray.length; i++) {
        if (theLetter === hiddenArray[i]) {
            wordArray[i] = theLetter;
            document.getElementById("currentWord").textContent = wordArray;
        } 
    }
// if the letter pressed didn't equal any letter in hiddenArray,
// subtract a live and update live counter
    if (theLetter != hiddenArray[i]) {
        lives = (lives - 1);
        document.getElementById("showLives").textContent = lives;

// if the wordArray becomes equal to hiddenArray
// add a win to wins counter, reset game, generate new random word
    } else if (wordArray === hiddenArray) {
        wins = (wins + 1);
        resetGame();
        randomizer();
    }
}
}

// if key press = not letter of word
// lose 1 life, update lives on screen

// if key press = letter in word
// Replace _ with guess in wordArray
  
// how to replace pressed key letter with letters in wordArray


    // 	if guesses left = 0
// 	pick random word from array of "current word"
// 	replace letters with _ marks
// 	increase guesses left = 15
// 	set "guessed letters[]" empty

    

// 		if key press = a letter of word
// 		then replace _ with appropriate letter
// guesses.indexOf(randomWord)

// 		if key press = not letter of word
// 		then place letter in "guessed letters[]" empty


	
// 	else
// 	user fills in all letters of word before guesses left = 0
// 	increase wins by 1
// 	pick random word from array of "current word"
// 	replace letters with _ marks
// 	increase guesses left = 15
// 	set "guessed letters[]" empty