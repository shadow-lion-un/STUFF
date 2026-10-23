let trigger = 0;
var button = document.getElementsByClassName("delete_button")[0];
var pic = document.getElementsByClassName("nowow")[0];

const sound = new Audio("Explosion.mp3")

function buttontrigger() {
    if(trigger == 0){
        trigger = 1;
        button.innerHTML = "되돌리기";
        pic.innerHTML = '<img src="exploded.jpg">'
        sound.currentTime = 0;
        sound.play();
    }
    else if(trigger != 0){
        trigger = 0;
        button.innerHTML = "삭제하기";
        pic.innerHTML = '<img src="likely expolode.jpg">'
    }
}