const navToggle = document.querySelector('.nav-mobile-toggle');
const navList = document.querySelector(".nav__list");
const header = document.querySelector('.primary-header');

navToggle.addEventListener("click", ()=>{
    let visibilty = navList.getAttribute("data-visible");
    if( visibilty === "false"){
        header.toggleAttribute("data-overlay");
        navToggle.setAttribute("data-expanded", true)
        navList.setAttribute("data-visible", true)
    } else{
        header.toggleAttribute("data-overlay");
        navList.setAttribute("data-visible", false)
        navToggle.setAttribute("data-expanded", false)
    }
})