const dailyBtn = document.querySelector('.daily');
const weeklyBtn = document.querySelector('.weekly');
const mothlyBtn = document.querySelector('.monthly');

const actualTime = document.querySelectorAll('.card__actual-time');
const previousTime = document.querySelectorAll('.card__previous-time');

function daily(){
    fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
      actualTime.forEach((e,i)=>{
        actualTime[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
        previousTime.innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
      });
    });
}

function weekly(){
    fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
      actualTime.forEach((e,i)=>{
        actualTime[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
        previousTime.innerHTML = 'Last weekly - ' + data[i].timeframes.weekly.previous + 'hrs';
      });
    });
}

function monthly(){
    fetch('data.json')
    .then((res) => res.json())
    .then((data) => {
      actualTime.forEach((e,i)=>{
        actualTime[i].innerHTML = data[i].timeframes.monthly.current + 'hrs';
        previousTime.innerHTML = 'Last monthly - ' + data[i].timeframes.monthly.previous + 'hrs';
      });
    });
}

dailyBtn.addEventListener("click", ()=>{
    dailyBtn.classList.remove('grey');
    weeklyBtn.classList.add('grey');
    mothlyBtn.classList.add('grey');
    daily();
});
weeklyBtn.addEventListener("click", ()=>{
    dailyBtn.classList.add('grey');
    weeklyBtn.classList.remove('grey');
    mothlyBtn.classList.add('grey');
    weekly();
});
mothlyBtn.addEventListener("click", ()=>{
    dailyBtn.classList.add('grey');
    weeklyBtn.classList.add('grey');
    mothlyBtn.classList.remove('grey');
    monthly();
});
