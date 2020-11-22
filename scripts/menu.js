window.onload = init;

function init(){
    const button2 = document.getElementById("pic1");
    const button1 = document.getElementById("pic2");
    button1.addEventListener('click', getMenu);
    button2.addEventListener('click', getText);
}

function getMenu() {
    const grid = document.getElementById("grid")
    const menu = document.getElementById("menu")
    grid.classList.replace("visible", "invisible_nav")
    menu.classList.replace("invisible_nav", "visible")
}

function getText() {
    const grid = document.getElementById("grid")
    const menu = document.getElementById("menu")
    menu.classList.replace("visible", "invisible_nav")
    grid.classList.replace("invisible_nav", "visible")
}