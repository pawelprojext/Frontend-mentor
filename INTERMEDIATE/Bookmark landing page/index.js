const header = document.querySelector(".primary-header");
const navToggle = document.querySelector(".nav-mobile-toggle");
const navList = document.querySelector(".nav__list");

navToggle.addEventListener("click", ()=>{
    let visiblity = navList.getAttribute("data-visible");
    header.toggleAttribute("data-overlay");
    console.log("clicked");
    if (visiblity === "false"){
        navList.setAttribute("data-visible", true);
        navToggle.setAttribute("data-expanded", true);
    } else{
        navList.setAttribute("data-visible", false);
        navToggle.setAttribute("data-expanded", false);
    }
});