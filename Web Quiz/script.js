const questions = [
    {
        question:"Capital of India",
        answers : [
            {text:"Mumbai", correct:false},
            {text:"Delhi", correct:true},
            {text:"Kolkata", correct:false},
            {text:"Hyderabad", correct:false}
        ]
    },
    {
        question:"Capital of America",
        answers : [
            {text:"Washinton DC", correct:true},
            {text:"New York", correct:false},
            {text:"San Francisco", correct:false},
            {text:"California", correct:false}
        ]
    },
    {
        question:"Father of the nation",
        answers : [
            {text:"Gandhi", correct:true},
            {text:"Shashtri", correct:false},
            {text:"Nehru", correct:false},
            {text:"Bose", correct:false}
        ]
    }
];
const questoEl=document.getElementById("question");
const answerele=document.getElementById("answer");
const nextbt=document.getElementById("next-btn");

let currentQuestionInd=0;
let score=0;

function startQuiz(){
    currentQuestionInd=0;
    score=0;
    nextbt.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionInd];
    let qno = currentQuestionInd+1;
    questoEl.innerHTML=qno + ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerele.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectans);
    });
}

function resetState(){
    nextbt.style.display="none";
    while(answerele.firstChild){
        answerele.removeChild(answerele.firstChild);
    }
}

function selectans(e){
    const selectbt =e.target;
    const isCorrect = selectbt.dataset.correct;
    if(isCorrect){
        selectbt.classList.add("correct");
        score++;
    }else{
        selectbt.classList.add("incorrect");
    }
    Array.from(answerele.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbt.style.display="block";
}

nextbt.addEventListener("click",() => {
    if(currentQuestionInd<questions.length){
        handleNextBt();
    }else{
        startQuiz();
    }
})

function showScore(){
    resetState();
    questoEl.innerHTML=`You scored ${score} out of ${questions.length} !`;
    nextbt.innerHTML="Play Again"
    nextbt.style.display="block"
}

function handleNextBt(){
    currentQuestionInd++;
    if(currentQuestionInd<questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

startQuiz();