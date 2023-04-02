const imgSmall = document.querySelector(".img-s");
const imgXl = document.querySelector(".img-xl");
const launchName = document.querySelector(".content-vechicle");
const launchDesc = document.querySelector(".content-desc");
const listElem = document.querySelectorAll(".switch");

const hideActive = () => {
  const activeSwitch = document.querySelector(".active-switch");
  activeSwitch.classList.toggle("active-switch");
};

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    const tech = data.technology;

    const changeData = (i) => {
      imgSmall.src = tech[i].images.landscape;
      imgXl.srcset = tech[i].images.portrait;
      launchName.innerText = tech[i].name;
      launchDesc.innerText = tech[i].description;
    };

    listElem.forEach((e, i) => {
      e.addEventListener("click", () => {
        hideActive();
        e.classList.toggle("active-switch");

        switch (i) {
          case (i = 0):
            changeData(0);
            break;
          case (i = 1):
            changeData(1);
            break;
          case (i = 2):
            changeData(2);
            break;
        }
      });
    });
  });
