const header = document.querySelector(".primary-header");
const navToggle = document.querySelector(".nav-mobile-toggle");
const navList = document.querySelector(".nav__list");
const opacity = document.querySelector(".opacity");
const main = document.querySelector("main");

const featuresAnswers = document.querySelectorAll(".feature-item");

const faqQuestion = document.querySelectorAll(".faq-question");

const Input = document.querySelector("input");
const InputValue = Input.value;
const sendBtn = document.querySelector(".input-btn");

//navbar
navToggle.addEventListener("click", ()=>{
    let visiblity = navList.getAttribute("data-visible");
    
    header.toggleAttribute("data-overlay");
    main.toggleAttribute("data-overlay");
    opacity.toggleAttribute("data-expanded");

    if (visiblity === "false"){
        navList.setAttribute("data-visible", true);
        navToggle.setAttribute("data-expanded", true);
    } else{
        navList.setAttribute("data-visible", false);
        navToggle.setAttribute("data-expanded", false);
    }
});

//features

function hideActive(){
    const activeElement =  document.querySelector(".active-paragraph");
    activeElement.classList.toggle("active-paragraph");
}
function hideActiveFeature(){
    const activeFeature =  document.querySelector(".feature-active");
    activeFeature.classList.toggle("feature-active");
}

featuresAnswers.forEach((e, i)=>{
    let tabs = i+1;
    e.addEventListener("click", ()=>{
        hideActive();
        hideActiveFeature();
        e.classList.toggle("active-paragraph");
        document.getElementById("tab"+tabs).classList.toggle("feature-active");
    })  
});

//faq

faqQuestion.forEach((e,i)=>{

    e.addEventListener("click", ()=>{
        let visiblity = e.parentElement.lastElementChild.getAttribute("data-visible");
        if (visiblity === "false"){
            e.parentElement.lastElementChild.setAttribute("data-visible", true);
            e.lastElementChild.setAttribute("data-expanded", "exp");
            
        } else{
            e.parentElement.lastElementChild.setAttribute("data-visible", false);
            e.lastElementChild.setAttribute("data-expanded", "hidden");
        }

        
    });
});