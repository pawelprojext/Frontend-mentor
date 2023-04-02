const planetImage = document.querySelector(".planet-image");
const planetTitle = document.querySelector(".planet-title");
const planetDescribtion = document.querySelector(".content-text");
const planetDistanceValue = document.querySelector(".distance-value");
const planetTravelValue = document.querySelector(".travel-value");

const switchBtn = document.querySelectorAll(".planet-switch");

function hideActiveBtn() {
  const activeBtn = document.querySelector(".active-switch");
  activeBtn.classList.remove("active-switch");
}

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    const destinations = data.destinations;

    const changeData = (i) =>{
      planetImage.src = destinations[i].images.png;
      planetTitle.innerText = destinations[i].name;
      planetDescribtion.innerText = destinations[i].description;
      planetDistanceValue.innerText = destinations[i].distance;
      planetTravelValue.innerText = destinations[i].travel;
    };
    switchBtn.forEach((e, i) => {
      e.addEventListener("click", () => {
        hideActiveBtn();
        e.classList.toggle("active-switch");

        switch (e.innerText) {
          case "MOON":
            changeData(0);
            break;
          case "MARS":
            changeData(1);
            break;
          case "EUROPA":
            changeData(2);
            break;
          case "TITAN":
            changeData(3);
            break;
        }
      });
    });
  });
