console.log("hi");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 400;

var x, y;
var mx, my;

var x1, y1;
var mx1, my1;

function init(){
    x = 300;
    y = 200;
    mx = 3;
    my = 4;
    x1 = 100;
    y1 = 100;
    mx1 = 6;
    my1 = 2;
    return setInterval(draw, 10);
}

 
function circle(x, y, r, color){
	ctx.beginPath();
    ctx.arc( x, y, r, 0 , 6.28)
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}


function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


function draw(){
	clear();
    circle(x, y, 30, "yellow"); 

    x += mx;
    y += my;

    if (x < 15 || x > WIDTH - 15){
    	mx = -mx;
    }

     if (y < 15 || y > HEIGHT - 15){
    	my = -my;
    } 

     circle(x1, y1, 30, "blue"); 


    x1 += mx1;
    y1 += my1;

    if (x1 < 15 || x1 > WIDTH - 15){
    	mx1 = -mx1;
    }

     if (y1 < 15 || y1 > HEIGHT - 15){
    	my1 = -my1;
    } 
}

init();






