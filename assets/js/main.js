// main.js

let questions = 
[
    "A group of fish is called school. (True)",
    "Flamingos feed their young with their own blood. (False)",
    "The largest mountains in the world are the Himalayas. (True)",
    "Africa is a continent, not a country. (True)",
];
let answer = "";

function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * question.length);
        const questionData = data.results[0];

        document.getElementById("question").innerHTML = questions.question;
        answer = questions.correct_answer;
        document.getElementById("result").innerHTML = "";
    })
    .catch(error => {
        document.getElementById("question").innerHTML = "Error: Can't load question.";
    });
}
function checkAnswer(choice) {
    if (!answer) return;
    
    if (choice === answer) {
        document.getElementById("result").innerHTML = "Right!";
    } else {
        document.getElementById("result").innerHTML = "Wrong! Correct Answer: " + correctAnswer;
    }
    setTimeout(questions, 1500);
}
loadQuestion();

const dares = [
  "Do 30 jumping jacks.",
  "Hold a musical note for 1 minute.",
  "Do the chicken dance.",
   Act like a dog for 15 seconds.",
];

function loadDare() {
    const randomIndex = Math.floor(Math.random() * dares.length);
    document.getElementById("dare").innerText = dares[randomIndex];

    .catch(error => {
        document.getElementById("dare").innerText = "Error: Can't load dare.";
    });
    setTimeout(dares, 1500);
}
loadDare();


