var initialQuiz = 0;
var result = 0;
var wholeCont = document.getElementById("wholeCont");
var question = document.getElementById("quizes");
var option1 = document.getElementById("opt0");
var option2 = document.getElementById("opt1");
var option3 = document.getElementById("opt2");
var option4 = document.getElementById("opt3");
var score = document.getElementById("score");
var btn = document.getElementById("next");
var total = noOfQuizes.length;

function loadQuizes(index){
var q = noOfQuizes[index];
question.textContent = (index + 1) + ".)" + q.question;
option1.textContent = q.choose1;
option2.textContent = q.choose2;
option3.textContent = q.choose3;
option4.textContent = q.choose4;
};

function nextQuiz(){
    var selectOpt = document.querySelector('input[type = radio]:checked');
    
    if(!selectOpt){
        alert("please select the answer");
        return;
    }
    var inpValue = selectOpt.value;
    
    if( noOfQuizes[initialQuiz].correct == inpValue){
           result = result + 10;
    }
    selectOpt.checked = false;
    initialQuiz++;
    // if(initialQuiz == total -  1)
    // {
    //     btn.textContent = "finish";
    // }
    if(initialQuiz == total)
    {
        wholeCont.style.display = 'none';
        score.style.display = '';
        score.textContent = 'your result: ' + result ;
        return;
    }
    loadQuizes(initialQuiz);
}
loadQuizes(initialQuiz);