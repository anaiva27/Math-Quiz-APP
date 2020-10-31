// declaring global variables
var startBTN = document.querySelector("#start-button");
var main = document.querySelector("#question-container");
var endGame = document.querySelector("#end-game");
var begin = document.querySelector("#begin");
var finalScore = document.querySelector("#final-score");
var questionElement = document.querySelector("#question");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var ansCheck = document.querySelector("#answer-check");
var timeLeftDisplay = document.querySelector("#time-left");
var timeLeft = 75;
var trackQuestion = 0;

// actions for buttons
btn1.addEventListener("click", answerCheck);
btn2.addEventListener("click", answerCheck);
btn3.addEventListener("click", answerCheck);
btn4.addEventListener("click", answerCheck);
startBTN.addEventListener("click", startTime);

// starting quiz, removing and adding parameter display:none for certain containers
function startTime() {
    begin.classList.add("hide");
    main.classList.remove("hide");

    countDown();

    showQuestion(questions[0]);
}

// timer starts
var interval;
function countDown() {
    interval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(interval);
            scorePage();
        } else {
            timeLeftDisplay.innerHTML = timeLeft;
            timeLeft -= 1;
        }
    }, 1000)
}

// picking questions and answers from the array
function showQuestion() {
    if (trackQuestion == questions.length) {
        scorePage();
    } else {
        questionElement.textContent = questions[trackQuestion].question;
        btn1.textContent = questions[trackQuestion].answers[0];
        btn2.textContent = questions[trackQuestion].answers[1];
        btn3.textContent = questions[trackQuestion].answers[2];
        btn4.textContent = questions[trackQuestion].answers[3];
        trackQuestion++;
        console.log(trackQuestion);
    }
}

// compairing users answers to correct answers
function answerCheck() {
    var questionAnswered = this.getAttribute("data-index");
    console.log(this);
    if (questionAnswered != questions[trackQuestion - 1].correct) {
        timeLeft -= 10;
        ansCheck.textContent = "Wrong!";
        ansCheck.setAttribute("style", "display:block");
        setTimeout(function () { ansCheck.setAttribute("style", "display:none") }, 800);
        showQuestion();
    }
    else {
        ansCheck.textContent = "Correct!";
        ansCheck.setAttribute("style", "display:block");
        setTimeout(function () { ansCheck.setAttribute("style", "display:none") }, 800);
        showQuestion();
    }
}

// end of the quiz, adding the time left to the scoreboard
function scorePage() {
    main.classList.add("hide");
    endGame.classList.remove("hide");
    finalScore.textContent = timeLeft;
    clearInterval(interval);
}

// array of objects with questions and answers
var questions = [
    {
        question: "How much is 2+2",
        answers: [
            "4", "24", "0", "6"],
        correct: "1",
    },
    {
        question: "How much is 22+2",
        answers: [
            "4", "24", "0", "6"
        ],
        correct: "2",
    },
    {
        question: "How much is 2-2",
        answers: [
            "4", "24", "0", "6"
        ],
        correct: "3",
    },
    {
        question: "How much is 4+2",
        answers: [
            "4", "6", "0", "24"
        ],
        correct: "2",
    }
]

// saving initials and score
var saveScore = document.querySelector("#save");
saveScore.addEventListener("click", function (event) {
    event.preventDefault();
    saveHighScore();
});

// storig updated data to the local storage
function saveHighScore() {
    var userInitials = document.querySelector("#init").value.trim();
    if (userInitials !== "") {
        var localData = JSON.parse(window.localStorage.getItem("data")) || [];
        var userScore = finalScore.textContent;
        var newData = {
            initial: userInitials,
            score: userScore
        }
        localData.push(newData);
        window.localStorage.setItem("data", JSON.stringify(localData));

        //redirecting user
        window.location.href = "score.html"
    }

}