const questions = [
    {
        question: "Which of the following best describes the concept of \"inflation\"?",
        answers: [
            { text: 'The increase in prices for goods and services over time, decreasing purchasing power', correct: true},
            { text: 'The interest rate banks charge each other for overnight loans', correct: false},
            { text: 'The rate at which new companies enter the market', correct: false},
            { text: 'The percentage of people in the workforce without jobs', correct: false},
        ]
    },
    {
        question: "What is \"time value of money\"?",
        answers: [
            { text: 'The principle that money available at the present time is worth more than the same amount in the future due to its potential earning capacity', correct: true},
            { text: 'The idea that money loses value over time due to inflation', correct: false},
            { text: 'The concept that money grows over time when placed under a mattress', correct: false},
            { text: 'The governmental policy on controlling the supply of money in an economy', correct: false},
        ]
    },
    {
        question: "Which investment vehicle is typically considered the highest risk?",
        answers: [
            { text: ' Savings accounts', correct: false},
            { text: 'Government bonds', correct: false},
            { text: 'Stock market investments', correct: true},
            { text: 'Certificates of Deposit (CDs)', correct: false},
        ]
    },
    {
        question: "What is meant by \"dollar-cost averaging\"?",
        answers: [
            { text: 'Investing exactly one dollar into the stock market every day', correct: false},
            { text: 'The practice of dividing up an investment amount among several stocks to reduce risk', correct: false},
            { text: 'The technique of buying a fixed dollar amount of a particular investment on a regular schedule, regardless of the share price', correct: true},
            { text: 'The method of converting all foreign investments back to dollar values for accounting purposes', correct: false},
        ]
    },
    {
        question: "What is a \"bear market\"?",
        answers: [
            { text: 'A market that exclusively deals with the trade of animal products', correct: false},
            { text: 'A market that is stable, neither rising nor falling', correct: false},
            { text: ' A market condition in which the prices of securities are rising, encouraging buying', correct: false},
            { text: ' A market condition in which the prices of securities are falling, encouraging selling', correct: true},
        ]
    },
    {
        question: "Which of these terms refers to the risk of not being able to sell an asset quickly without sacrificing value?",
        answers: [
            { text: 'Market risk', correct: false},
            { text: 'Liquidity risk', correct: true},
            { text: 'Inflation risk', correct: false},
            { text: 'Interest rate risk', correct: false},
        ]
    },
    {
        question: "What is \"net worth\"?",
        answers: [
            { text: 'The value of a person/s investment portfolio', correct: false},
            { text: 'The amount of money in a person/s bank account', correct: false},
            { text: 'The difference between total assets and total liabilities', correct: true},
            { text: 'The total value of all income earned over a lifetime', correct: false},
        ]
    },
    {
        question: "What does diversifying your investment portfolio help you to do?",
        answers: [
            { text: 'Guarantee a fixed return on all investments', correct: false},
            { text: 'Reduce risk by spreading investments across various financial instruments, industries, and other categories', correct: true},
            { text: 'Increase the potential return of your portfolio without increasing risk', correct: false},
            { text: ' Focus your investments on the technology sector', correct: false},
        ]
    },
    {
        question: "What is the primary advantage of a Roth IRA over a traditional IRA?",
        answers: [
            { text: 'Contributions are not taxable when withdrawn during retirement', correct: true},
            { text: 'It allows unlimited contributions annually', correct: false},
            { text: 'Investments are guaranteed by the government', correct: false},
            { text: 'It can be used without penalties at any age', correct: false},
        ]
    },
    {
        question: "What financial statement summarizes a company's performance in terms of revenue, expenses, and profit over a specific period?",
        answers: [
            { text: 'Balance sheet', correct: false},
            { text: 'Statement of retained earnings', correct: false},
            { text: 'Cash flow statement', correct: false},
            { text: 'Income statement', correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    NextButton.style.display = "none"
    while(answerButtons.firstChild){
       answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    NextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        NextButton.innerHTML = "Play Again";
        NextButton.style.display = "block";
}
    


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

NextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
})


StartQuiz();