const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-answer-btn");
const outputDiv = document.querySelector("#output");

const correctAnswers = ["90°", "right angled", "obtuse triangle", "Pythagoras", "Isosceles Triangle", "hypotenuse", "5", "180°", "∠A = ∠C", "30°"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    console.log(formResults);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    console.log(score);
    outputDiv.innerText = "Your score is : " + score;
}

submitAnswerButton.addEventListener("click", calculateScore);