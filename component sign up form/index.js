const button = document.querySelector('button');
const valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const FirstName = document.getElementById('name');
const LastName = document.getElementById('lastName');
const email = document.getElementById('email');
const pswd = document.getElementById('pswd');
const formContainer = document.querySelector('.formContainer')



button.addEventListener("click", (e)=>{
    e.preventDefault();
    let nameValue = FirstName.value;
    let lastNameValue = LastName.value;
    let emailValue = email.value;
    let pswdValue = pswd.value;
    
    for(const input of formContainer.children){
        if (!!input.value){
            window.location.reload();
        } else{
            input.classList.toggle('test')
        }
    }

})