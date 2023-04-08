// NAVBAR

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".nav__mobile-toggle");
const PrimaryNavList = document.querySelector(".nav__list--primary");

navToggle.addEventListener("click", ()=>{
    let visibilty = navToggle.getAttribute("data-expanded");
    if(visibilty === "false"){
        navToggle.setAttribute("data-expanded", true);
        PrimaryNavList.setAttribute("data-visible", true);
    } else{
        navToggle.setAttribute("data-expanded", false);
        PrimaryNavList.setAttribute("data-visible", false);
    }
    primaryHeader.toggleAttribute("data-overlay");
});

// END NAVBAR


// SLIDER

const ArrowNext = document.querySelectorAll(".arrow-next");
const arrowPrevious = document.querySelectorAll(".arrow-previous");
const smallImages = document.querySelectorAll(".img-s");
let ActiveSlideNumber = 1;

let hideActiveSlide = () =>{
    let ActiveImage = document.querySelectorAll(".active");
    ActiveImage.forEach((e,i)=>{
        e.classList.remove("active");
    })
}

let hideActiveSmallSlide = () =>{
    let ActiveSmallImage = document.querySelectorAll(".active-s");
    ActiveSmallImage.forEach((e,i)=>{
        e.classList.remove("active-s");
    })
}

let showSlide = (SlideNumber) =>{
    hideActiveSlide();
    hideActiveSmallSlide();
    let activeB =  document.querySelectorAll("#img-b-"+SlideNumber);
    let activeS = document.querySelectorAll("#img-s-"+SlideNumber);
    
    activeB.forEach((e, i)=>{
        e.classList.add("active");
    });

    activeS.forEach((e,i)=>{
        e.classList.add("active-s");
    });
}

let showNextSlide = () =>{
    if (ActiveSlideNumber === 4){
        ActiveSlideNumber = 1;
    } else{
        ActiveSlideNumber = ActiveSlideNumber + 1;
    }
    showSlide(ActiveSlideNumber);
};

let showPreviousSlide = () =>{
    if (ActiveSlideNumber === 1){
        ActiveSlideNumber = 4;
    } else{
        ActiveSlideNumber = ActiveSlideNumber - 1;
    }
    showSlide(ActiveSlideNumber);
}

ArrowNext.forEach((arrow, index)=>{
    arrow.addEventListener("click", ()=>{
        showNextSlide();
    });
});

arrowPrevious.forEach((arrow, index)=>{
    arrow.addEventListener("click", ()=>{
        showPreviousSlide();
    });
});

smallImages.forEach((e,i)=>{
    e.addEventListener("click", ()=>{
        let index = i+1;
        ActiveSlideNumber = index;
        showSlide(index);
    });
});

// END SLIDER



// CART VALUE ADDING

const addValue = document.querySelector(".add-number");
const removeValue = document.querySelector(".remove-number");
let Cart = document.querySelector(".product-number");
let CartValue = Math.floor(Cart.innerText);
addValue.addEventListener("click", ()=>{
    CartValue = CartValue + 1;
    Cart.innerText = CartValue;
});

removeValue.addEventListener("click", ()=>{
    if(CartValue > 0){
        CartValue = CartValue - 1;
        Cart.innerText = CartValue;
    }
});
// END CART VALUE ADDING



//ADD CART BTN
const addCartBtn = document.querySelector(".add-to-cart--btn");
let products = [];

addCartBtn.addEventListener("click", ()=>{
    for(let i = 0; i<CartValue; i++){
        products.push(i);
    }
});

//ADD CART BTN END



//LIGHTBOX
const BigImages = document.querySelectorAll(".big-image");
const lightbox = document.querySelector("#lightbox");
BigImages.forEach((image, index)=>{
    image.addEventListener("click", ()=>{
        lightbox.setAttribute("data-visible", true);
    })
});

lightbox.addEventListener("click", (e)=>{
    const BigImagesContainer = document.querySelectorAll(".big-image-container");
    BigImagesContainer.forEach(Container=>{
        if(e.target === Container)
        lightbox.setAttribute("data-visible", false);
    });
})

//END LIGHTBOX