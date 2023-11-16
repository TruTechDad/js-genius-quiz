var startButton = document.getElementById('startButton');
var quizSection = document.getElementById('quiz');
var feedbackSection = document.getElementById('feedback');
var questionElement = document.getElementById('question');
var answerTextarea = document.getElementById('answer');
var submitButton = document.getElementById('submit');
var resultElement = document.getElementById('result');
var nextButton = document.getElementById('next');

var currentQuestion = 0;
var questions = [
    {
        question: 'What does JavaScript stand for? JustStyle, JavaStyle, JavaScript',
        answer: 'JavaScript',
    },
    {
        question: 'How do you declare a variable in JavaScript? v, varible, var',
        answer: 'var',
    },
    {
        question: 'How do you write a function in JavaScript? func, function, method' ,
        answer: 'function',
    },
    
    // Add more questions as needed
];

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);

function startQuiz() {
    startButton.style.display = 'none';
    quizSection.style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    answerTextarea.value = '';
}

function checkAnswer() {
    var userAnswer = answerTextarea.value.trim().toLowerCase();
    var correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = `Incorrect. The correct answer is: ${questions[currentQuestion].answer}`;
    }

    feedbackSection.style.display = 'block';
}

function nextQuestion() {
    feedbackSection.style.display = 'none';
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Quiz is finished
        questionElement.textContent = 'Quiz completed!';
        answerTextarea.style.display = 'none';
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
    }
}