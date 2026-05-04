// main.js

let currentQuestion = null;
let correctAnswer = "";

function loadQuestion() {
    fetch("https://opentdb.com/api.php?amount=1&type=boolean")
    .then(res => res.json())
    .then(data => {
        const currentQuestion = data.results[0];

        const temp = document.createElement("textarea");
        temp.innerHTML = currentQuestion;

        document.getElementById("question").textContent = temp.value;
        correctAnswer = currentQuestion.correct_answer;
        document.getElementById("result").textContent = "";
    });
}
function checkAnswer(userChoice) {
    if (!correctAnswer) return;
    
    if (userChoice === correctAnswer) {
        document.getElementById("result").textContent = "Right!";
    } else {
        document.getElementById("result").textContent = "Wrong! Correct Answer: " + correctAnswer;
    }
    setTimeout(currentQuestion, 1500);
}
loadQuestion();

        

