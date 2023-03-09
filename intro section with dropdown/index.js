const nav = document.querySelector('.primary-navigation');
const navOpenBtn = document.querySelector('.nav-mobile-open');

const arrow = document.querySelectorAll('.open');

navOpenBtn.addEventListener("click", ()=>{
    let visibility = nav.getAttribute('data-visible');
    let navChangeBtn = navOpenBtn.getAttribute('data-visible');
    if(visibility === 'false'){
        nav.setAttribute('data-visible', true);
        navOpenBtn.setAttribute('data-visible', true);
    } else{
        nav.setAttribute('data-visible', false);
        navOpenBtn.setAttribute('data-visible', false);
    }
});

arrow.forEach((e,i)=>{
    e.addEventListener("click", ()=>{
     let visibility = e.getAttribute('data-visible');
    if(visibility === 'false'){
        e.setAttribute('data-visible', true);
        e.parentElement.lastElementChild.classList.remove('hide');
    } else{
        e.setAttribute('data-visible', false);
        e.parentElement.lastElementChild.classList.add('hide');
    }
  })
});

