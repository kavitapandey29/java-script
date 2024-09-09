// Create variables for game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// DOM elements
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const msg = document.getElementById("message");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

// Show display button function
function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

// Event listener for roll button
rollBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6

  if (player1Turn) {
    // Update player 1 score
    player1Score += randomNumber; // Add the random number to player 1's score
    player1Scoreboard.textContent = player1Score;

    // Update player 1 dice display
    player1Dice.textContent = randomNumber; // Show the rolled number on player 1's dice
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    msg.textContent = "player 2 turn";
  } else {
    // Update player 2 score
    player2Score += randomNumber; // Add the random number to player 2's score
    player2Scoreboard.textContent = player2Score;

    // Update player 2 dice display
    player2Dice.textContent = randomNumber; // Show the rolled number on player 2's dice
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    msg.textContent = "Your turn";
  }

  // Check if either player has won
  if (player1Score >= 20) {
    msg.textContent = "You won!";
    showDisplayButton();
  } else if (player2Score >= 20) {
    msg.textContent = "Opponent won!";
    showDisplayButton();
  }

  // Switch turns
  player1Turn = !player1Turn;
});

// Event listener for reset button
resetBtn.addEventListener("click", function(event) {
  event.preventDefault();
  reset();
});

// Reset function
function reset() {
  msg.textContent = "Player 1's turn";
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = '-';
  player2Dice.textContent = '-';
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}