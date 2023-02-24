const input = document.querySelector("input");
const button = document.querySelector("button");
const valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

button.addEventListener("click", (e)=>{
    e.preventDefault();
    let email = input.value;

    if(email.match(valid) && !!email){
        input.innerHTML = " ";
        window.location.reload();
    } else{
        input.classList.add('error');
        input.innerHTML = " ";
    }
});