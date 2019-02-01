console.log("hi");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(100,0);
ctx.lineTo(100,300);
ctx.strokeStyle = "rgb(0,170,250)"
ctx.lineWidth = 70;
ctx.stroke()

ctx.moveTo(0,150);
ctx.lineTo(500, 150);
ctx.strokeStyle = "rgb(0,0,255)"
ctx.lineWidth = 70;
ctx.stroke()

ctx.fillStyle = "yellow"
ctx.fillRect(65,115,70,70);

ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.strokeRect(200,0,115,115);


