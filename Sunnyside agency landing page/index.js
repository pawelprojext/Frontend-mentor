const btn = document.querySelector('i');
const nav = document.querySelector('nav');
btn.addEventListener("click", (e)=>{
        nav.classList.toggle('nav');
        nav.classList.toggle('mobile');
})