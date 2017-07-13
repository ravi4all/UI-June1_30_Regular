window.addEventListener("load",init);

var move_x = 50;

function init(){
    screen = document.getElementById("screen");
    screen_bg = document.getElementById("background");
    player = document.getElementById("player");
    screen.addEventListener("keydown",check_key);
    screen.addEventListener("keyup",change_image);
    screen.addEventListener("keyup",check_jump);
}

function check_key(){
    key = event.keyCode;
    if(key == 39){
        player.style.transform = 'rotateY(0deg)';
        changePos();
        event.preventDefault();
        /*change_image()*/
        player.innerHTML = '<img src="../../../images/hulk5-18463.gif" alt="image"/>';
    }
    else if(key == 37){
        change_player_direction()
        player.innerHTML = '<img src="../../../images/hulk5-18463.gif" alt="image"/>';
        /*change_image()*/
        event.preventDefault();
    }
    /*else if(key == 32){
        player.innerHTML = '<img src="hulk5.gif" alt="image"/>';
        setTimeout(function(){
            player.innerHTML = '<img src="01-img.png" alt="image"/>';
        },2500);
    }*/
}

function check_jump(){
    if(key == 32){
        player.innerHTML = '<img src="hulk5.gif" alt="image"/>';
        setTimeout(function(){
            player.innerHTML = '<img src="01-img.png" alt="image"/>';
        },2500);
    }
}

/*function default_image(){
    player.innerHTML = '<img src="01-img.png" alt="image"/>'
}*/

function change_image(){
    player.innerHTML = '<img src="01-img.png" alt="image"/>';
}

function changePos(){
    /*screen_bg.style.backgroundPositionX = -move_x+"px";*/
    screen_bg.style.transform = 'translateX('+(-move_x)+"px"+')';
    move_x += 20;
}

function change_player_direction(){
    player.style.transform = 'rotateY(180deg)';
    screen_bg.style.transform = 'translateX('+(-move_x)+"px"+')';
    move_x -= 20;
}

function jump_player(){
    player.innerHTML = '<img src="hulk5.gif" alt="image"/>'
}