window.onload = init;

function init(){
    const button = document.getElementById("pic");
    button.addEventListener('click', change);
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
