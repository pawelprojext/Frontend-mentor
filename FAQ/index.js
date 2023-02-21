const questions = document.getElementById("questions");
const arrow = document.querySelector('img');

for(const question of questions.children){
    for(const answer of question.children){
        if(!answer.classList.contains('question')){
            question.addEventListener("click", ()=>{
                answer.classList.toggle('hide');
                answer.classList.toggle('bnone');
            });
        }
    }  
}