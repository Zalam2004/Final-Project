// main.js

let correctAnswer = "";

function loadQuestion() {
    fetch("https://opentdb.com/api.php?amount=50");
    .then(res => res.json())
    .then(data => {
        const q = data.results[0];

        const temp = document.createElement("textarea");
        temp.innerHTML = q.question;

        document.getElementById("question").innerText = temp.value;
        correctAnswer = q.correct_answer;
        document.getElementById("feedback").innerText = "";
    });
}
function checkAnswer(answer) {
    if (answer === correctAnswer) {
        document.getElementById("feedback").innerText = "Correct!";
} else {
    document.getElementById("feedback").innerText = "Wrong!";
}
setTimeout(loadQuestion, 50);
}
loadQuestion();