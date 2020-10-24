var goBack = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-scores");

goBack.addEventListener("click", restart);
function restart(){;
    document.location="index.html"
}

// get data from storage
var savedHighScores = JSON.parse(localStorage.getItem("data"));


clearScores.addEventListener("click", clearScore);
function clearScore() {
    localStorage.clear();
    savedHighScores = JSON.parse(localStorage.getItem("data"));
    renderScores();
}

//var getInfo = localStorage.getItem("data");

// put info on the screen
var savedUserScores = document.querySelector("#saved-highscores");

// savedHighScores.textContent = getInfo;
//console.log(getInfo);
console.log(savedHighScores);

function renderScores() {
    // Render a new p for each todo
    //check if data
    if (savedHighScores) {
        for (var i = 0; i < savedHighScores.length; i++) {
            var pText = savedHighScores[i].initial + " " + " " + savedHighScores[i].score;

            console.log(pText);
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

