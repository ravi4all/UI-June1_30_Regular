window.addEventListener("load",init);

var move_x = 50;

function init(){
    screen = document.getElementById("screen");
    screen.addEventListener("keyup",changePos);
    screen_bg = document.getElementById("background");
}

function changePos(){
    screen_bg.style.backgroundPositionX = -move_x+"px";
    move_x += 20;
}