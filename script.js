const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is 7 multiplied by 3?",
        answers: [
            { text: "10", correct: false },
            { text: "21", correct: true },
            { text: "28", correct: false },
            { text: "17", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Methane", correct: false },
            { text: "Nitrogen", correct: false }
        ]
    },
    {
        question: "Who is the author of 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false }
        ]
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');
const scoreDisplay = document.getElementById('score');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    nextButton.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.textContent = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

function endGame() {
    questionContainer.textContent = 'Quiz Completed!';
    answerButtons.innerHTML = '';
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = score;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    startGame();
}

startGame();
