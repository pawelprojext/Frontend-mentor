const drops = document.querySelectorAll('.open');
drops.forEach((drop) =>{
    drop.addEventListener("click", ()=>{
        drop.parentElement.lastElementChild.classList.toggle("hide");
        drop.parentElement.lastElementChild.classList.toggle("show");
    })
});