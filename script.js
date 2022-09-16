const startBtn = document.getElementById('btn_start');
const questionContainer = document.getElementById('main_block');
const answerBtnBlock = document.getElementById('answer_btn_block'); 
const questioELement = document.getElementById('question_bl');
const nextButton = document.getElementById('btn_next');


let shuffleQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
   currentQuestionIndex++;
   setNextQuestion();
})


function startGame(){
   startBtn.classList.add('hide');
   shuffleQuestions = questions.sort(() => Math.random() - .5);
   currentQuestionIndex = 0;
   questionContainer.classList.remove('hide');
   setNextQuestion();
}


function setNextQuestion(){
   resetState();
   showQuestions(shuffleQuestions[currentQuestionIndex])
}


function showQuestions(question){
   questioELement.innerText = question.question;
   question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.classList.add('button');
      button.innerText = answer.text;
      if(answer.correct){
         button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerBtnBlock.appendChild(button);

   })
}


function resetState() {
   clearStatusClass(document.body)
   nextButton.classList.add('hide');
   while (answerBtnBlock.firstChild){
      answerBtnBlock.removeChild(answerBtnBlock.firstChild)
   }
}



function selectAnswer(e){    
   const selectedButton = e.target;
   const correct = selectedButton.dataset.correct;
   setStatusClass(document.body, correct);
   Array.from(answerBtnBlock.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
   })
   if (shuffleQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide'); 
   }else{
      startBtn.innerText = 'Restart';
      startBtn.classList.remove('hide');
   }
}


function setStatusClass(element, correct){
   clearStatusClass(element)
   if(correct){
      element.classList.add('correct');
   }else{
      element.classList.add('wrong');
   }
}

function clearStatusClass(element){
   element.classList.remove('correct');
   element.classList.remove('wrong');
}
const questions = [
   {
      question: "What is 2 ^ 3?",
      answers: [
         { text: "2", correct: false },
         { text: "40", correct: false},
         { text: "8", correct: true},
         { text: "12", correct: false}
      ]
   },
   {
      question: "What is 5 * 3?",
      answers: [
         { text: "22", correct: false },
         { text: "45", correct: false},
         { text: "11", correct: false},
         { text: "15", correct: true}
      ]
   }, 
   {
      question: "What is 16 / 4?",
      answers: [
         { text: "4", correct: true },
         { text: "2", correct: false},
         { text: "12", correct: false},
         { text: "6", correct: false}
      ]
   }, 
   {
      question: "What is 22 + 100?",
      answers: [
         { text: "22", correct: false },
         { text: "122", correct: true},
         { text: "102", correct: false},
         { text: "88", correct: false}
      ]
   },
   {
      question: "What is 12 ^ 0?",
      answers: [
         { text: "1", correct: true },
         { text: "12", correct: false},
         { text: "2", correct: false},
         { text: "144", correct: false}
      ]
   }, 
   
]