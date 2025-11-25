const hamburgerBtn = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-menu");
hamburgerBtn.addEventListener("click", (e) => {
    navBar.classList.toggle("active");
});