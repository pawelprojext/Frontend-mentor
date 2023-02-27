const nameInput = document.getElementById('inputName');
const numberInput = document.getElementById('inputNumber');
const yearInput = document.getElementById('inputYear');
const monthInput = document.getElementById('inputMonth');
const cvcInput = document.getElementById('inputCvc');
const button = document.querySelector('button');
var letters = /^[A-Za-z ]+$/;
var numbers = /^[0-9 ]+$/;
const doneStage = document.getElementById('complete-container');
const form = document.getElementById("form-container");
const inputs = [nameInput,numberInput,yearInput,monthInput,cvcInput];

let isBlank = false;
let isGoodForm1 = false;
let isGoodForm2 = false;
let isMin1 = false;
let isMin2 = false;
let isMin3 = false;
let isMin4 = false;

nameInput.addEventListener("input", function() {
    const letterRegex = this.value.match(letters);
    if(letterRegex){
        document.querySelector('.front-card-name').innerText = this.value;
    } 
    if (nameInput.value == ''){
        document.querySelector('.front-card-name').innerText = "e.g. Jane Appleseed";
    }
}) 
numberInput.addEventListener("input", function() {
    const numberRegex = this.value.match(numbers);
    if(numberRegex){
        document.querySelector('.front-card-number').innerHTML = this.value
    }
        if (numberInput.value == ''){
            document.querySelector('.front-card-number').innerText = "0000 0000 0000 0000";
        }

        if(this.value.length == 16){
            isMin1 = true;
        }
})

monthInput.addEventListener("input", function() {
    const numberRegex = this.value.match(numbers);
    if(numberRegex){
        document.querySelector('.front-card-month').innerHTML = this.value + ' / '
    }

    if (monthInput.value == ''){
        document.querySelector('.front-card-month').innerText = "00/";
    }

    if(this.value.length == 2){
        isMin2 = true;
    }
})

yearInput.addEventListener("input", function() {
    const numberRegex = this.value.match(numbers);
    if(numberRegex){
        document.querySelector('.front-card-year').innerHTML = this.value;
    }
    
    if (yearInput.value == ''){
        document.querySelector('.front-card-year').innerText = "00";
    }

    if(this.value.length == 2){
        isMin3 = true;
    }

})

cvcInput.addEventListener("input", function() {
    const numberRegex = this.value.match(numbers);
    if(numberRegex){
        document.querySelector('.back-card-cvc').innerHTML = this.value;
    }
    
    if (cvcInput.value == ''){
        document.querySelector('.back-card-cvc').innerText = "000";
    }
    if(this.value.length == 3){
        isMin3 = true;
    }
})

button.addEventListener("click", (e)=>{

    e.preventDefault();

    for (const input of inputs){
        if (input.value == ''){
            input.classList.add('errorOutline');
            input.parentElement.classList.add('blank');
            input.classList.add('valid');
        } else{
            input.classList.remove('errorOutline');
            input.parentElement.classList.remove('blank');
            isBlank = true;
        }

        if(input.classList.contains('numberRegex')){
            if(input.value.match(numbers)){;
                isGoodForm1 = true;
            } 
        }

        if(input.classList.contains('letterRegex')){
            if(input.value.match(letters)){
                isGoodForm2 = true;
            } 
        }
    }

     if(isBlank == true && isGoodForm1 == true && isGoodForm2 == true && numberInput.value.length == 16 && monthInput.value.length, yearInput.value.length == 2 && cvcInput.value.length == 3){
         doneStage.style.display = "flex";
         form.style.display = "none";
     } else{
        form.classList.add('valid');
     }
   
})

