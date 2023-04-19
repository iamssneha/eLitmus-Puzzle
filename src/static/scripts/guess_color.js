// Define array of colors and words to use
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const words = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "PURPLE"];
const hint_button = document.querySelector("#hint");
// Get reference to HTML elements
const wordDisplay = document.querySelector("#word-display");
const colorDisplay = document.querySelector("#color-display");
const startButton = document.querySelector("#start-button");
const responseForm = document.querySelector("#response-form");
const responseInput = document.querySelector("#response-input");
const messageDisplay = document.querySelector("#message-display");

// Define variables to keep track of the game state
let score = 0;
let round = 1;
let tries = 0;
let selectedColor = "";
responseForm.style.display = "none";
// Define function to start a new round
function startRound() {
  // Generate a random index for the color and word arrays
  const colorIndex = Math.floor(Math.random() * colors.length);
  const wordIndex = Math.floor(Math.random() * words.length);

  // Set the word and color displays
  wordDisplay.textContent = words[wordIndex];
  wordDisplay.style.color = colors[colorIndex];
  selectedColor = colors[colorIndex];

  // Enable the response form and input field
  responseForm.reset();
  responseInput.disabled = false;
  responseInput.focus();
}

// Add event listener to the start button
startButton.addEventListener("click", function () {
  // Hide the start button
  startButton.style.display = "none";

  // Show the word and color displays
  wordDisplay.style.display = "block";
  colorDisplay.style.display = "block";
  responseForm.style.display = "block";
  // Start the first round
  startRound();
});

// Add event listener to the response form
responseForm.addEventListener("submit", (e) => {
  // Prevent the default form submission)
  e.preventDefault();

  // Get the user's response and check if it is correct
  const userResponse = responseInput.value.toLowerCase();

  if (userResponse === selectedColor) {
    // Increment the score and display a success message
    score++;
    messageDisplay.textContent = "Correct!";
  } else {
    // Display an error message
    messageDisplay.textContent = "Incorrect.";
  }

  // Increment the round counter and start a new round
  round++;
  if (score >= 6) {
    responseInput.disabled = true;
    let formData = new FormData();
    formData.append("level1", 0);
    formData.append("level2", 0);
    formData.append("level4", 0);
    formData.append("level5", 0);
    tries += 1;
    formData.append("level3", tries);
    formData.append("curr_level", 3);
    alert("You cracked it");
    fetch("/update-data", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.data;
      })
      .then((data) => console.log(data));
    location.href = "/level4";
  } else if (score < 6 && round <= 10) {
    startRound();
  } else {
    // Display the final score and reset the game
    tries += 1;
    alert(
      `Game over! Your final score is ${score}. The map was lost forever. You could not figure it out`
    );
    wordDisplay.style.display = "none";
    colorDisplay.style.display = "none";
    responseForm.style.display = "none";
    messageDisplay.style.display = "none";
    startButton.style.display = "block";
    startButton.innerHTML = "Restart";
    score = 0;
    round = 1;
    responseInput.disabled = true;
  }
});

hint_button.addEventListener("click", () => {
  alert("Type the color of the text, not the word");
});
