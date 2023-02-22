const input = document.querySelector("input");
const button = document.querySelector("button");
const valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const ErrorMessage = document.querySelector('.errorMessage');
const ErrorImage = document.querySelector('.error')

button.addEventListener("click", (e)=>{
    e.preventDefault();
    let email = input.value;

    if(email.match(valid) && !!email){
        input.innerHTML = "";
        window.location.reload();
    } else{
        ErrorMessage.textContent = "Please provide a valid email";
        ErrorImage.classList.remove('hide');
        input.classList.add('outline');
    }
});