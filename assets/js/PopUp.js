const closeBtn = document.getElementById("close");
const modalMenu = document.getElementById("modal");
const modalBtn = document.querySelector(".modal__button");
//const viewMoreBtn = document.querySelectorAll(".contentBx a")

const viewMore = () => { modalMenu.classList.add("show") }

//viewMoreBtn.addEventListener("click",()=>{modalMenu.classList.add("show")});
closeBtn.addEventListener("click", () => { modalMenu.classList.remove("show") });
//hide it when clicking anywhere else except the popup and the trigger
document.addEventListener("click", (event) => {
    if (!$(event.target).parents().addBack().is('a')) {
        modalMenu.classList.remove("show");
    }
});

// Stop propagation to prevent hiding "#tooltip" when clicking on it
modalMenu.addEventListener("click", (event) => {
    event.stopPropagation();
});