const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answerButton");
const nextBtn = document.getElementById("next-btn");

const quizContainer = document.querySelector(".quiz");
const scoreDisplay = document.getElementById("score-display");
const scoreText = document.getElementById("score-text");
const playAgainBtn = document.getElementById("play-again-btn");


const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High-level Text Machine Language", correct: false },
            { text: "Hyperlink and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
        ]
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answers: [
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "background", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Float", correct: true },
            { text: "Object", correct: false },
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    
    quizContainer.style.display = "block";
    scoreDisplay.style.display = "none";
    showQuestion();
}

function showQuestion() {
    nextBtn.style.display = "none";
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


function showScore() {
    quizContainer.style.display = "none";
    scoreDisplay.style.display = "flex"; 

    scoreText.innerHTML = `You scored ${score} out of ${questions.length}!`;
}



nextBtn.addEventListener("click", handleNextButton);


playAgainBtn.addEventListener("click", startQuiz);

startQuiz();