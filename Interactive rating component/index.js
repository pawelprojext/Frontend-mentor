const buttons = document.querySelector(".buttons");
const Submit = document.querySelector("button");

for(const button of buttons.children){

        button.addEventListener("click", (e)=>{
            for(const button2 of buttons.children){
                button.classList.add('clicked');
                button2.classList.remove('clicked');

                if(button.classList.contains('clicked')){
                    button.classList.remove('buttonhover');
                    button2.classList.add('buttonhover');
                }
         }
        Submit.addEventListener("click", ()=>{
            document.getElementById("SecondContainer").style.display = "flex";
            document.getElementById("FirstContainer").style.display = "none";
            document.getElementById("choosen").innerHTML = `You selected ${button.textContent} out of 5`;
        });
    });
}