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
    const pic = document.getElementById("pic")
    const num = Math.floor(Math.random() * 15) + 1
    if (num === 1) {
        pic.src = "img/activ.jpg"
    }
    else if (num === 2){
        pic.src = "img/artek.jpg"
    }
    else if (num === 3){
        pic.src = "img/comp.jpg"
    }
    else if (num === 4){
        pic.src = "img/el.jpg"
    }
    else if (num === 5){
        pic.src = "img/first.jpg"
    }
    else if (num === 6){
        pic.src = "img/greeting.jpg"
    }
    else if (num === 7){
        pic.src = "img/kar_v.jpg"
    }
    else if (num === 8){
        pic.src = "img/kar_z.jpg"
    }
    else if (num === 9){
        pic.src = "img/kr.jpg"
    }
    else if (num === 10){
        pic.src = "img/moskow.jpg"
    }
    else if (num === 11){
        pic.src = "img/birth.jpg"
    }
    else if (num === 12){
        pic.src = "img/nav_2.jpg"
    }
    else if (num === 13){
        pic.src = "img/sсhool.jpg"
    }
    else if (num === 14){
        pic.src = "img/vol_2.jpg"
    }
    else if (num === 15){
        pic.src = "img/voley_3.jpg"
    }

}
