const crewImage = document.querySelector(".image");
const memberStatus = document.querySelector(".member-status");
const memberName = document.querySelector(".member-name");
const memberDesc = document.querySelector(".member-desc");
const dots = document.querySelectorAll(".dot");

const hideActive = () => {
  const activeMember = document.querySelector(".active-dot");
  activeMember.classList.toggle("active-dot");
};

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    const members = data.crew;
    
    const changeData = (i) => {
      crewImage.src = members[i].images.png;
      memberStatus.innerText = members[i].role;
      memberName.innerText = members[i].name;
      memberDesc.innerText = members[i].bio;
    };

    dots.forEach((e, i) => {
      e.addEventListener("click", () => {
        hideActive();
        e.classList.toggle("active-dot");

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

          case (i = 3):
            changeData(3);
            break;
        }
      });
    });
  });
