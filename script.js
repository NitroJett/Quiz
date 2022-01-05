const quizDB=[
    {
        question:"Q1: A complete graph can have",
        a:"n2 spanning trees",
        b:"nn - 2 spanning trees",
        c:"nn - 2 spanning trees",
        d:"nn - 2 spanning trees",
        ans:"ans3"
    },
    {
        question:"Q2: What is full form of CSS?",
        a:"JavaScript",
        b:"Java",
        c:"HTML",
        d:"None of these",
        ans:"ans4"
    },
    {
        question:"Q3:How to include javaScript in HTML document?",
        a:"Script",
        b:"anchor tag",
        c:"link tag",
        d:"None of these",
        ans:"ans1"
    },
    {
        question:"Q4:How to declare a variable in JavaScript?",
        a:"head",
        b:"iframe",
        c:"var",
        d:"null",
        ans:"ans3"
    },
    {
        question:"Q5:What => means in javaScript",
        a:"Arrow function",
        b:"anonymous",
        c:"block",
        d:"return",
        ans:"ans1"
    },
    {
        question:"Q6:Which of the following is not a javaScript framework?",
        a:"Django",
        b:"Angular",
        c:"Node",
        d:"React",
        ans:"ans1"
    },
    {
        question:"Q7:How do you define object in javaScript?",
        a:"()",
        b:"${}",
        c:"{}",
        d:"[{},{}]",
        ans:"ans3"
    },
    {
        question:"Q8:Which of the following is not a valid js version",
        a:"EX6",
        b:"EX5",
        c:"EX19",
        d:"none",
        ans:"ans3"
    },
    {
        question:"Q9:What is the ouput of '2'+2?",
        a:"22",
        b:"4",
        c:"undefined",
        d:"2222",
        ans:"ans1"
    },
    {
        question:"Q10:What is the ouput of '2'-1?",
        a:"21",
        b:"1",
        c:"NAN",
        d:"None",
        ans:"ans2"
    },
    {
        question:"Q11:How to check if a value is NaN in JavaScript?",
        a:"Number(val)",
        b:"isNaN(val)",
        c:"isTrue(val)",
        d:"None",
        ans:"ans2"
    },
    
];
 const head=document.querySelector('.head');
 const question=document.querySelector('.question');
 const option1=document.querySelector('#option1'); 
 const option2=document.querySelector('#option2'); 
 const option3=document.querySelector('#option3'); 
 const option4=document.querySelector('#option4'); 
 const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
const showAnswer=document.getElementById('showAnswer');
 let questionCount=0;
 let score=0;
 let keep=true;
const loadQuestion=()=>{
    let questionList=quizDB[questionCount];
    question.innerHTML=`${questionList.question} <hr>`;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}
 loadQuestion();
const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;

        }
        
    });
    return answer;
};
 submit.addEventListener('click',function(){
     const checkedAnswer=getCheckAnswer();
     if(checkedAnswer===undefined){
     alert('Please Select an Option');
     keep=false;
     }
     console.log(checkedAnswer);
    if(keep){
     if(checkedAnswer===quizDB[questionCount].ans){
         score++;
     }
    deselectAll();


     questionCount++;
     if(questionCount<quizDB.length){
         loadQuestion();
     }else{
          head.textContent=`Score:${score}`;
          submit.classList.add('showAns');
          showScore.innerHTML=`
          <h1>Do You Want To try the Quiz Again!!! Press on Restart Button👨‍👩‍👧‍👦</h1><button class="btn" onclick="location.reload()">Restart</button>`;
          showScore.classList.remove('scoreArea');
          showAnswer.classList.remove('showAns');
          showAnswer.innerHTML=` <h1>Answers of the Exam</h1>
          <ul>
         <li><h3>${quizDB[0].question} --> ${quizDB[0].c}</h3></li>
         <li><h3>${quizDB[1].question} --> ${quizDB[1].d}</h3></li>
         <li><h3>${quizDB[2].question} --> ${quizDB[2].a}</h3></li>
         <li><h3>${quizDB[3].question} --> ${quizDB[3].c}</h3></li>
         <li><h3>${quizDB[4].question} --> ${quizDB[4].a}</h3></li>
         <li><h3>${quizDB[5].question} --> ${quizDB[5].a}</h3></li>
         <li><h3>${quizDB[6].question} --> ${quizDB[6].c}</h3></li>
         <li><h3>${quizDB[7].question} --> ${quizDB[7].c}</h3></li>
         <li><h3>${quizDB[8].question} --> ${quizDB[8].a}</h3></li>
         <li><h3>${quizDB[9].question} --> ${quizDB[9].b}</h3></li>
         <li><h3>${quizDB[10].question} --> ${quizDB[10].b}</h3></li>
          </ul>
          `;

     }
    }
    keep=true;
    })


