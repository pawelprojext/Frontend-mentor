const navToggle = document.querySelector(".nav-mobile-open");
const navList = document.querySelector(".nav__list");

navToggle.addEventListener("click", ()=>{
    let visiblity = navList.getAttribute("data-visible");

    if(visiblity === "false"){
        navList.setAttribute("data-visible", true);
        navToggle.setAttribute("data-expanded", true);
    } else{
        navList.setAttribute("data-visible", false);
        navToggle.setAttribute("data-expanded", false);
    }
})