console.log("hi");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 400;

var x, y;
var mx, my;

function init(){
    x = 300;
    y = 200;
    mx = 3;
    my = 4;
    return setInterval(draw, 10);
}


function circle(x, y, r){
	ctx.beginPath();
    ctx.arc( x, y, r, 0 , 6.28)
    ctx.closePath();
    ctx.fillStyle = "yellow"
    ctx.fill();
}


function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


function draw(){
	clear();
    circle(x, y, 30); 

    x += mx;
    y += my;

    if (x < 0 || x > WIDTH - 15){
    	mx = -mx;
    }

     if (y < 15 || y > HEIGHT - 15){
    	my = -my;
    }   

}

init();






