const button = document.querySelector('button');
const valid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const formContainer = document.querySelector('.formContainer')



button.addEventListener("click", (e)=>{
    e.preventDefault();    

    const errorImage = document.createElement('img')
    errorImage.src = 'images/icon-error.svg';
    errorImage.classList.add('error');
    errorImage.alt = 'errorImage';
    for(const InputContainer of formContainer.children){
        for(const input of InputContainer.children){
            if (!!input.value){
                
            } else{ 
                input.classList.add('test');
                InputContainer.chilappendChild(errorImage);
            }
        }
    }

})