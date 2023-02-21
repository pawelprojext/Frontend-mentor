const container = document.querySelector(`#scores`);

fetch('data.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    for(const obj of data){
        const div = document.createElement("div");
        div.classList.add("summaryScore");
        div.setAttribute("id", `${obj.color}`);

        const divChild = document.createElement("div");
        divChild.classList.add("SummaryText");

        const image = document.createElement("img");
        image.src = `${obj.icon}`;
        image.alt = "icon";

        const span = document.createElement("span");
        span.innerText = `${obj.category}`; 

        const p = document.createElement("p");
        p.innerText = `${obj.score} / 100`;

        container.appendChild(div);
        div.appendChild(image);
        div.appendChild(span);
        div.appendChild(p);
    }

    const ContinueButton = document.createElement("div");
    ContinueButton.setAttribute("id", "continue");

    const a = document.createElement("a");
    a.href = "#";
    a.innerText = "Continue";

    container.appendChild(ContinueButton);
    ContinueButton.appendChild(a);
  });