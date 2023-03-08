const nav = document.querySelector('.primary-navigation');
const navOpenBtn = document.querySelector('.nav-mobile-open');

navOpenBtn.addEventListener("click", ()=>{
    let visibility = nav.getAttribute('data-visible');

    if(visibility === 'false'){
        nav.setAttribute('data-visible', true);
    } else{
        nav.setAttribute('data-visible', false);
    }
});