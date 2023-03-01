const nav = document.querySelector('nav');
const mobile = document.querySelector('.mobileOff');
const OpenBtn = document.getElementById('openMenu');
const closeBtn = document.querySelector('.closeMenu');

OpenBtn.addEventListener("click", (e) =>{
    nav.classList.replace('nav', 'hide');
    mobile.classList.replace('mobileOff', 'mobile');
    
    if(nav.classList.contains('hide')){
        OpenBtn.style.display = 'none';
    } else{
        OpenBtn.style.display = 'block';
    }

});

closeBtn.addEventListener("click", (e)=>{
    nav.classList.replace('hide', 'nav');
    mobile.classList.replace('mobile', 'mobileOff');

    if(nav.classList.contains('nav')){
        OpenBtn.style.display = 'block';
    } else{
        OpenBtn.style.display = 'none';
    }
});


