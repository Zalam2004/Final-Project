// main.js

let questionData = null;
let correctAnswer = "";

function loadQuestion() {
    fetch("https://opentdb.com/api.php?amount=1&type=boolean")
    .then(response => response.json())
    .then(data => {
        const questionData = data.results[0];

        document.getElementById("question").innerHTML = questionData.question;
        correctAnswer = questionData.correct_answer;
        document.getElementById("result").innerHTML = "";
    })
    .catch(error => {
        document.getElementById("question").innerHTML = "Error: Can't load question.";
    });
}
function checkAnswer(userChoice) {
    if (!correctAnswer) return;
    
    if (userChoice === correctAnswer) {
        document.getElementById("result").innerHTML = "Right!";
    } else {
        document.getElementById("result").innerHTML = "Wrong! Correct Answer: " + correctAnswer;
    }
    setTimeout(currentQuestion, 1500);
}
loadQuestion();

async function loadDares() {
    const url = ("");

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}
loadDares();
        

