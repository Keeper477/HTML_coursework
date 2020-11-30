window.onload = init;

function init(){
    const button2 = document.getElementById("pic1");
    const button1 = document.getElementById("pic2");
    const button = document.getElementById("pic");
    button1.addEventListener('click', getMenu);
    button2.addEventListener('click', getText);
    button.addEventListener('click', change);
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

function change() {
    let img = ["img/activ.jpg", "img/artek.jpg", "img/comp.jpg", "img/el.jpg", "img/first.jpg", "img/greeting.jpg",
        "img/kar_v.jpg", "img/kr.jpg", "img/moskow.jpg", "img/birth.jpg", "img/nav_2.jpg", "img/sсhool.jpg",
        "img/vol_2.jpg", "img/voley_3.jpg", "img/nav_0.jpg"]
    const pic = document.getElementById("pic").src =img[Math.floor(Math.random() * 15)]
}
