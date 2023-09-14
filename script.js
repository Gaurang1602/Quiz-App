const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');


startBtn.onclick = () =>{
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () =>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = () =>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    

    showQuestions(0);
    questionCounter(1);
    headerScore();
}
tryAgainBtn.onclick = () =>{
   quizBox.classList.add('active');
   nextBtn.classList.add('active');
   resultBox.classList.remove('active');

   questionCount = 0;
    questionNumb = 1;
    userscore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}


goHomeBtn.onclick = () =>{
    quizSection.classList.remove('active');
    nextBtn.classList.add('active');
    resultBox.classList.remove('active');
 
    questionCount = 0;
     questionNumb = 1;
     userscore = 0;
     showQuestions(questionCount);
     questionCounter(questionNumb);
 
     headerScore();
 }

let questionCount = 0;
let questionNumb = 1;
let userscore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () =>{
    if (questionCount < questions.length -1){
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

console.log('remove');
        nextBtn.classList.remove('active');
    }
    else{
        // console.log('Question Completed');
        showResultBox();
    }
}

const optionList=document.querySelector('.option-list')

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent =`${questions[index].numb}. ${questions[index].question}`;


    // options
    let optionTag = `<div class="option">
    <span>${questions[index].options[0]}</span>
</div>
<div class="option">
    <span>${questions[index].options[1]}</span>
</div>
<div class="option">
    <span>${questions[index].options[2]}</span>
</div>
<div class="option">
    <span>${questions[index].options[3]}</span>
</div>`;

optionList.innerHTML=optionTag;


const option=document.querySelectorAll('.option');
for( let i = 0; i < option.length ;i++){
    option[i].setAttribute('onclick','optionSelected(this)');
 
   ;
}
}

function optionSelected(answer){
    console.log("clicked at option")
    let userAnswer =answer.textContent.trim();

  
    let correctAnswer = questions[questionCount].answer;
    let alloptions =optionList.children.length;
    console.log("correct answer -> ",correctAnswer.length
    );
    console.log("answer selected by user -> ",userAnswer.length);


    if(userAnswer == correctAnswer){
      
        answer.classList.add('correct');
        userscore+=1;
        headerScore();
    }
    else{
        answer.classList.add('incorrect');
      
// if answer is incorrect , auto selected correct answer
for( i=0; i< alloptions;i++){
  
    console.log("correct answer -> ",correctAnswer.length
    );
    console.log("answer selected by user -> ",userAnswer.length);
    if(optionList.children[i].textContent.trim() == correctAnswer){     
            
            optionList.children[i].classList.add('correct');
         
    }
}
    }
    
    // if user has selected option , disabled all options
    for( i=0; i< alloptions;i++){
        optionList.children[i].classList.add('disabled');
    }
    // ########
   
    nextBtn.classList.add('active');
    console.log("add");
}
function questionCounter(index){
    const questionTotal = document.querySelector('.questions-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userscore} / ${questions.length}`;
}

function showResultBox(){
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userscore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');

    let progressStartValue = -1;
    let progressEndValue = (userscore / questions.length)*100;
    let speed = 20;

    let progress = setInterval(()=>{
        progressStartValue++;
        // console.log(progressStartValue);
        progressValue.textContent = `${progressStartValue}%`;

        circularProgress.style.background =`conic-gradient(#c40094 ${progressStartValue *3.6}deg, rgba(255,255,255, .1) 0deg)`;
        if( progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    },speed)

}
// const resultBox = document.querySelector('.result-box');
// const tryAgainBtn = document.querySelector('.tryAgain-btn');
// const goHomeBtn = document.querySelector('.goHome-btn');