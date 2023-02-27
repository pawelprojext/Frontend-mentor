const nameInput = document.getElementById('inputName');
const numberInput = document.getElementById('inputNumber');
const yearInput = document.getElementById('inputYear');
const monthInput = document.getElementById('inputMonth');
const cvcInput = document.getElementById('inputCvc');
const button = document.querySelector('button');
var letters = /^[A-Za-z ]+$/;
var numbers = /^[0-9 ]+$/;
let divs = document.getElementsByClassName("form-element, inline");

const inputs = [nameInput,numberInput,yearInput,monthInput,cvcInput];

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
})

monthInput.addEventListener("input", function() {
    const numberRegex = this.value.match(numbers);
    if(numberRegex){
        document.querySelector('.front-card-month').innerHTML = this.value + ' / '
    }

    if (monthInput.value == ''){
        document.querySelector('.front-card-month').innerText = "00/";
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

})

cvcInput.addEventListener("input", function() {
    const numberRegex = this.value.match(numbers);
    if(numberRegex){
        document.querySelector('.back-card-cvc').innerHTML = this.value;
    }
    
    if (cvcInput.value == ''){
        document.querySelector('.back-card-cvc').innerText = "000";
    }
})

button.addEventListener("click", (e)=>{
    let isBlank = false;
    let isGoodForm1 = false;
    let isGoodForm2 = false;
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
            if(input.value.match(numbers)){
                console.log(input.value);
                isGoodForm1 = true;
            } 
        }

        if(input.classList.contains('letterRegex')){
            if(input.value.match(letters)){
                isGoodForm2 = true;
            } 
        }
        console.log('1' + isBlank, '2' +  isGoodForm1, '3' + isGoodForm2);
    }
})

