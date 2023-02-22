const input = document.querySelector("input");
const button = document.querySelector("button");
const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
        ErrorImage.classList.toggle('hide');
        input.classList.toggle('outline');
    }
});