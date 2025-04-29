
const mobileToggleMenu = document.querySelector(".mobile-menu-toggle");
const navBarList = document.querySelector(".nav-bar-list");
const mobileCancelBtn = document.querySelector(".mobile-menu-cancel");

mobileToggleMenu.addEventListener("click",()=>{
    navBarList.classList.add("active");
    mobileToggleMenu.classList.add("none");
    mobileCancelBtn.classList.add("block");
});

mobileCancelBtn.addEventListener("click",()=>{
    navBarList.classList.remove("active");
    mobileToggleMenu.classList.remove("none");
    mobileCancelBtn.classList.remove("block");
})