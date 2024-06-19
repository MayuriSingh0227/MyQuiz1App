(function() {
    const myQuestions = [
         {
            question: "Q1) Who is considered as the father of nation(India)?",
            answers: {
                a: "Jawaharlal Nehru",
                b: "Mahatma Gandhi",
                c: "Dr. B.R. Ambedhkar"
            },
            correctAnswer: "b"
        },
        {
            question: "Q2) What is the capital of uttarpradesh?",
            answers: {
                a: "Lucknow",
                b: "kanpur",
                c: "bilaspur"
            },
            correctAnswer: "a"
        },

        {
            question: "Q3) Which day is celebrated as the father's day?",
            answers: {
                a: "16 june",
                b: "16 may",
                c: "16 july"
            },
            correctAnswer: "a"
        },
        {
            question: "Q4) What qualities should a person have as a good communicator?",
            answers: {
                a: "Good listener",
                b: "Good speaker",
                c: "should be good listener,writer,speakar simultaneously"
            },
            correctAnswer: "c"
        }
            
       
    ];

    function buildQuiz() {
        const output = [];
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;
        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });
        resultsContainer.innerHTML = `Congratulaions!!! Your total score is ${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    buildQuiz();
    submitButton.addEventListener('click', showResults);
})();
