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
    switchBtn.forEach((e, i) => {
      e.addEventListener("click", () => {
        hideActiveBtn();
        e.classList.toggle("active-switch");

        switch (e.innerText) {
          case "MOON":
            planetImage.src = destinations[0].images.png;
            planetTitle.innerText = destinations[0].name;
            planetDescribtion.innerText = destinations[0].description;
            planetDistanceValue.innerText = destinations[0].distance;
            planetTravelValue.innerText = destinations[0].travel;
            break;
          case "MARS":
            planetImage.src = destinations[1].images.png;
            planetTitle.innerText = destinations[1].name;
            planetDescribtion.innerText = destinations[1].description;
            planetDistanceValue.innerText = destinations[1].distance;
            planetTravelValue.innerText = destinations[1].travel;
            break;
          case "EUROPA":
            planetImage.src = destinations[2].images.png;
            planetTitle.innerText = destinations[2].name;
            planetDescribtion.innerText = destinations[2].description;
            planetDistanceValue.innerText = destinations[2].distance;
            planetTravelValue.innerText = destinations[2].travel;
            break;
          case "TITAN":
            planetImage.src = destinations[3].images.png;
            planetTitle.innerText = destinations[3].name;
            planetDescribtion.innerText = destinations[3].description;
            planetDistanceValue.innerText = destinations[3].distance;
            planetTravelValue.innerText = destinations[3].travel;
            break;
        }
      });
    });
  });
