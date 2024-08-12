document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('start-quiz');
    const introScreen = document.getElementById('intro-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const questionCards = document.querySelectorAll('.question-card');
    const nextButton = document.getElementById('next-question');
    let currentQuestion = 0;

    startButton.addEventListener('click', function() {
        introScreen.style.opacity = 0;
        loadingScreen.classList.remove('hidden');

        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            questionCards[currentQuestion].classList.add('active');
        }, 1000); // Atraso para simular o carregamento
    });

    nextButton.addEventListener('click', function() {
        if (currentQuestion < questionCards.length - 1) {
            questionCards[currentQuestion].classList.remove('active');
            questionCards[currentQuestion].classList.add('hidden');
            currentQuestion++;
            questionCards[currentQuestion].classList.remove('hidden');
            questionCards[currentQuestion].classList.add('active');
        } else {
            submitQuiz();
        }
    });
});

function submitQuiz() {
    const correctAnswers = {
        q1: 'd',
        q2: 'a',
        q3: 'a',
        q4: 'b',
        q5: 'd',
        q6: 'c'
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    for (const [question, answer] of Object.entries(correctAnswers)) {
        if (formData.get(question) === answer) {
            score++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = `Você acertou ${score} de ${totalQuestions} questões.`;
    result.style.color = '#3498db'; // Cor para o resultado
    result.classList.remove('hidden');
}
