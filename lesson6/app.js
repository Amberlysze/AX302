console.log("hi");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 600;

var x, y, s;

var mx, my;

var circleX, circleY, circleS;
var circleCollision = false;

var ghostX, ghostY, ghostS;
var circleCollision = false;

var score = 0;

function drawpacman(){
	var pacman = new Image();
    pacman.src =  "pacman.png"
	ctx.drawImage(pacman, x, y, s, s)
}

function drawball(){
	var ball = new Image();
    ball.src =  "ball.png"
	ctx.drawImage(ball, circleX, circleY, circleS, circleS);
}

function drawghost(){
	var ghost = new Image();
    ghost.src =  "ghost.png"
	ctx.drawImage(ghost, ghostX, ghostY, ghostS, ghostS)
	
}

function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init(){
	x = 300;
	y = 300;
	s = 50;
	mx = 0;
	my = 0;

	circleS = 50;
	circleX = Math.floor(Math.random()*(WIDTH - circleS));
	circleY = Math.floor(Math.random()*(HEIGHT - circleS));

	ghostS = 50;
	ghostX = Math.floor(Math.random()*(WIDTH - ghostS));
	ghostY = Math.floor(Math.random()*(HEIGHT - ghostS));

    window.onkeydown = keydownControl;

    return setInterval(draw, 10);
}

function keydownControl(e){
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	}
	if(e.keyCode == 38){
		mx = 0;
		my = -4;
	}
	if(e.keyCode == 39){
		mx = 4;
		my = 0;
	}
	if(e.keyCode == 40){
		mx = 0;
		my = 4;
	}
}

function draw(){
	clear(); 
	drawpacman();
	drawball();
	drawghost();
	followPacman();

	x += mx;
	y += my;

	if(x + mx > WIDTH - s || x + mx < 0){
		mx = -mx;
	}
    if(y + my > HEIGHT- s || y + my < 0){
		my = -my;
	}

	collisionCheck();
	collisionHandle();
	
}

function collisionCheck(){
    if( (x + s >= circleX) && (x <= circleX + circleS) && 
    	(y + s >= circleY) && (y <= circleY + circleS)) {
    	circleCollision = true;
    }else {
    	circleCollision = false;
    	}

	}
function collisionHandle(){
		if(circleCollision){
            score += 1;
            document.getElementById("score").innerHTML = "score: " + score;
	        circleX = Math.floor(Math.random()*(WIDTH - circleS));
	        circleY = Math.floor(Math.random()*(HEIGHT - circleS));

			}
    }

function followPacman(){
	if (ghostX <  x){
		ghostX += 1;
	}
	if (ghostX >  x){
		ghostX -= 1;
	}
	if (ghostY <  y){
		ghostY += 1;
	}
	if (ghostY >  y){
		ghostY -= 1;
	}
}




init();











