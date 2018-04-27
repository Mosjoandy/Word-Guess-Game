
// var wins, current word, number of guesses left, guessed letters, 

var wins = 0;
var lives = 15;
var words = ["lannister", "stark", "greyjoy", "tyrell", "targaryen"];
var guesses = [];
var wordArray = [];
var hiddenArray = [];


// Press any key to start
// pick random word from array of "current word"
var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log("Random word is " + randomWord);

 
// replace letters with _ marks
for (var i=0; i < randomWord.length; i++) {
    wordArray[i] = " _ ";
    
}
// Splitting randomWord into an array
hiddenArray = randomWord.split("");
console.log(wordArray);


// set guesses left to 15
// set guessed letters to []
var resetGame = function() {
    lives = 15;
    guesses= [];
    wordArray= [];
}

// function showMyLives()  {
//     document.getElementById("showLives").textContent = (lives);
// }

// showMyLives();

// user presses keys
// record key presses into guesses[]
// display guesses on screen
document.onkeyup = function(letterGuess) {
    guesses.push(letterGuess.key);
    theLetter = letterGuess.key;
    console.log("You pressed: " + guesses);
    document.getElementById("showGuesses").textContent = guesses;

    
if (lives === 0) {
    alert("you lose");
    resetGame();
}

else {
    for (var i = 0; i < wordArray.length; i++) {
        if (theLetter === hiddenArray[i]) {
            wordArray[i] = theLetter;
            document.getElementById("currentWord").textContent = wordArray;
        } 
        
    }
    
    if (theLetter != hiddenArray[i]) {
        lives = (lives - 1);
        document.getElementById("showLives").textContent = lives;
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