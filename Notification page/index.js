const markAll = document.querySelector('.mark');
const notifications = document.querySelectorAll('.notification');
const span = document.querySelector('span');
const unreaded = [];
const readed = [];

Array.from(notifications).forEach((element, index)=>{
    
    if(element.classList.contains('unread')){
        unreaded.push(element);
    }
    });

    function checkNotifiactions (){
        unreaded.forEach((element, index)=>{
            span.innerText = unreaded.length;
    })
    }  
    checkNotifiactions();
markAll.addEventListener("click", (e)=>{
    // let howMany = 3;




    // GOWNIANA SOLUCJA

    // Array.from(notifications).forEach((element, index)=>{
    
    //     if(element.classList.contains('unread')){
    //         howMany--;
    //         element.classList.remove('unread');
    //     }
    //     span.innerText = howMany;
    //     });

    //  PROBA LEPSZEJ SOLUCJI

        unreaded.forEach((element)=>{
        element.classList.remove('unread');    
    })
    unreaded.clear();
    console.log(unreaded.length);   
    checkNotifiactions();
});
