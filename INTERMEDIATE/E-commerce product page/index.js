const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".nav__mobile-toggle");
const PrimaryNavList = document.querySelector(".nav__list--primary");

navToggle.addEventListener("click", ()=>{
    let visibilty = navToggle.getAttribute("data-expanded");
    if(visibilty === "false"){
        navToggle.setAttribute("data-expanded", true);
        PrimaryNavList.setAttribute("data-visible", true);
    } else{
        navToggle.setAttribute("data-expanded", false);
        PrimaryNavList.setAttribute("data-visible", false);
    }
});