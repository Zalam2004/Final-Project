// main.js

let currentQuestion = null;

function loadQuestion() {
    fetch("https://opentdb.com/api.php?amount=1&type=boolean")
    .then(res => res.json())
    .then(data => {
        currentQuestion = data.results[0];

        const temp = document.createElement("textarea");
        temp.innerHTML = currentQuestion.question;

        document.getElementById("question").innerText = temp.value;
        document.getElementById("result").innerText = "";
    });
}

function answer(userChoice) {
    if (userChoice === currentQuestion.correct_answer) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong! Answer: " + currentQuestion.correct_answer;
    }
    setTimeout(loadQuestion, 1500);
}
loadQuestion();


