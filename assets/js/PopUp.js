const closeBtn = document.getElementById("close");
const modalMenu = document.getElementById("modal");
const modalBtn = document.querySelector(".modal__button");
//const viewMoreBtn = document.querySelectorAll(".contentBx a")

const viewMore = ()=>{modalMenu.classList.add("show")}

//viewMoreBtn.addEventListener("click",()=>{modalMenu.classList.add("show")});
closeBtn.addEventListener("click",()=>{modalMenu.classList.remove("show")});
$("body").click(function(){ $("#modal").fadeOut(); });