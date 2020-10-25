// declaring variables and events for the buttons
var goBack = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-scores");
var savedUserScores = document.querySelector("#saved-highscores");

goBack.addEventListener("click", restart);
var savedHighScores = JSON.parse(localStorage.getItem("data"));

// putting data on the screen
function renderScores() {
      if (savedHighScores) {
        for (var i = 0; i < savedHighScores.length; i++) {
            var pText = savedHighScores[i].initial + " " + " " + savedHighScores[i].score;
            var highScoreItem = savedHighScores[i];
            var p = document.createElement("p");
            p.textContent = pText;
            savedUserScores.appendChild(p);
        }
    } else {
        savedUserScores.innerHTML = "";
    }
}

renderScores();

// restart the quiz
function restart(){;
    document.location="index.html"
}

// clear the scores
clearScores.addEventListener("click", clearScore);
function clearScore() {
    localStorage.clear();
    savedHighScores = JSON.parse(localStorage.getItem("data"));
    renderScores();
}
