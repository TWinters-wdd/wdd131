let btn = document.querySelector(".menu-btn")
let nav = document.querySelector(".navigation")
let lines = document.querySelector(".lines")

btn.addEventListener("click", openMenu);

function openMenu() {
    btn.classList.toggle("open");
    nav.classList.toggle("open");
    lines.classList.toggle("open");
}