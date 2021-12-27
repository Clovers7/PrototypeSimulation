var x = document.getElementById("myAudio");
var counter = 0;

function playAudio() {
    if(counter == 0)
    {
        x.play();
        counter++;
    }
    else
    {
        x.pause();
        counter--;
    }
}

function movetogame(){
        location.href = 'Game Page.html';
}