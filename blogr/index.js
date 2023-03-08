const drops = document.querySelectorAll('.open');
const mobileOpenBtn = document.querySelector('.nav__mobile-open-btn');
const mobileContainer = document.querySelector('.nav__dropdown-containers');
const mobileContent = document.querySelector('.nav__dropdown');
const mobileDropContent = document.querySelector('.nav__dropdown-content');

drops.forEach((drop) =>{
    drop.addEventListener("click", ()=>{
        drop.parentElement.lastElementChild.classList.toggle("hide");
        drop.parentElement.lastElementChild.classList.toggle("show");
    })
});

mobileOpenBtn.addEventListener("click", ()=>{
    mobileContainer.classList.toggle('nav__mobile-containers');
    mobileContent.classList.toggle('nav__mobile-container');
    mobileContainer.classList.toggle('nav__mobile-dropdown-content');
});