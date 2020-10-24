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

btn1.addEventListener("click", answerCheck);
btn2.addEventListener("click", answerCheck);
btn3.addEventListener("click", answerCheck);
btn4.addEventListener("click", answerCheck);

var timeLeftDisplay = document.querySelector("#time-left");
var timeLeft = 75;
var trackQuestion = 0;

startBTN.addEventListener("click", startTime);

function startTime() {
    begin.classList.add("hide");
    main.classList.remove("hide");

    countDown();
    function countDown() {
        interval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(timeLeft = 0);
                scorePage();
            } else {
            timeLeftDisplay.innerHTML = timeLeft;
            timeLeft -= 1;
            }
        }, 1000)
    }
    showQuestion(questions[0]);
}

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
    }
}

function answerCheck() {
    var questionAnswered = this.getAttribute("data-index");
    if (questionAnswered != questions[trackQuestion-1].correct) {
        timeLeft -= 10;
        ansCheck.textContent = "Wrong!";
        ansCheck.setAttribute("style","display:block");
        setTimeout(function(){ansCheck.setAttribute("style","display:none")}, 800);
        showQuestion();
    }
    else {
        ansCheck.textContent = "Correct!";
        ansCheck.setAttribute("style","display:block");
        setTimeout(function(){ansCheck.setAttribute("style","display:none")}, 800);
        showQuestion();
    }
}

function scorePage() {
    main.classList.add("hide");
    endGame.classList.remove("hide");
    finalScore.textContent = timeLeft;
    // window.location.assign("./score.html");
}

var questions = [
    {
        question: "How much is 2+2",
        answers: [
            "4", "22", "7", "5"],
        correct: "4",
    },
    {
        question: "How much is 22+2",
        answers: [
            "4", "24", "7", "5"
        ],
        correct: "24",
    },
    {
        question: "How much is 2-2",
        answers: [
            "4", "22", "0", "5"
        ],
        correct: "0",
    },
    {
        question: "How much is 2+4",
        answers: [
            "6", "22", "7", "5"
        ],
        correct: "6",
    }
]