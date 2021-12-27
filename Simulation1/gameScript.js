var start = [10,10,10];
var counter = 0;

function erasefast()
{
    document.getElementById("erasesoon").style.display = "none";
    document.getElementById("showup").style.display = "block";
}

document.onload = starter();
document.onload = realgame();

function starter()
{
    document.getElementById("hp").innerHTML = "HP:" + start[0];
    document.getElementById("st").innerHTML = "ST:" + start[1];
    document.getElementById("mt").innerHTML = "MT:" + start[2];
    counter++;
}

function realgame()
{
    if(counter !== 10) {
        document.getElementById("Daycounter").innerHTML = "Day " + counter;
    }
}