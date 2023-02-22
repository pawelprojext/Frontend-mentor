const questions = document.getElementById("questions");
const arrow = document.querySelectorAll('.ToogleArrow');


for(const question of questions.children){
    for(const answer of question.children){
        if(!answer.classList.contains('question')){
            question.addEventListener("click", ()=>{
                answer.classList.toggle('hide');
                question.classList.toggle('blackText');
                arrow.forEach(function (button){
                    button.classList.toggle('arrow');
                });
            });
            
        }
    }  
}