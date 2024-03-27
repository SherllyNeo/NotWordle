const gameBoard = document.getElementById('gameBoard');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const lengthOfWord = 5;
const guesses = 6;
const inputs = [];
const results = [];

let solutionWord = '';

function GenerateSoluton() {
    solutionWord = "testy"
    solutionWord = solutionWord.toUpperCase();
}

// Check results of a word
function validate(word) {
    word = word.toUpperCase();
    solutionWord = solutionWord.toUpperCase();
    inputs.push(word);
    let result = ""
    for (let i = 0; i<lengthOfWord; i++) {
        if (word[i] == solutionWord[i]) {
            result += "+"
        }
        else if (solutionWord.includes(word[i])) {
            result += "x"
        }
        else {
            result += "-"
        }
    }
    results.push(result);
    guessInput.value = "";
    refreshGame();
    console.log(word,result,solutionWord);
}

// update game UI
function refreshGame() {
  const cells = gameBoard.getElementsByClassName('cell');
    for (let i = 0; i < lengthOfWord*guesses; i++) { // 6 attempts, 5 letters each
        let cell = cells[i];
        let y = Math.floor(i / lengthOfWord);
        let x = i - y * lengthOfWord;
      if(inputs.length > y && inputs[y][x]) {
        const result = results[y][x] === "+" ? "correct" : results[y][x] === "x" ? "semi-correct" : "incorrect";
        cell.textContent = inputs[y][x].toUpperCase();
        cell.classList.add(result);
      }
    }
}

// Initialize game
function initializeGame() {
    GenerateSoluton();
    for (let i = 0; i < lengthOfWord*guesses; i++) { // 6 attempts, 5 letters each
        let cell = document.createElement('div');
        cell.classList.add('cell');
        let y = Math.floor(i / lengthOfWord);
        let x = i - y * lengthOfWord;
      if(inputs.length > y && inputs[y][x]) {
        const result = results[y][x] === "+" ? "correct" : results[y][x] === "x" ? "semi-correct" : "incorrect";
        cell.textContent = inputs[y][x].toUpperCase();
        cell.classList.add(result);
      }
        gameBoard.appendChild(cell);
    }
}

// Event listener for the guess button
guessButton.addEventListener('click', function() {
    let guess = guessInput.value.toLowerCase();
    if (guess.length === lengthOfWord) {
        validate(guess)
    } else {
        alert(`Please enter a ${lengthOfWord}-letter word.`);
    }
    if (results[results.length - 1] == "+"*lengthOfWord) {
        alert('You won!');
    }
});

initializeGame();
