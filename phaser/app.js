var game = new Phaser.Game(800,600, Phaser.AUTO, '', 
    {preload:preload, create:create, update:update})

var score = 0;
var lives = 3;


function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('firstaid', 'assets/firstaid.png');
	game.load.image('diamond', 'assets/diamond.png');
	game.load.image('star', 'assets/star.png');
    game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32); 
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48); 

}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');

	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 560, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.inmoveable = true;

	var ledge1 = platforms.create(400, 400, 'ground');
	ledge1.body.inmoveable = true;

    var ledge2 = platforms.create(-100, 250, 'ground');
	ledge2.body.inmoveable = true;

	var style = {font: "bold 32px Arial", fill: "white"};

	scorelabel = game.add.text(300, 565, "score", style);
	scoretext = game.add.text(420, 560, score, style);
	scorelabel.setShadow(3, 3, 'black', 2);
	scoretext.setShadow(3, 3, 'black', 2);

	liveslabel = game.add.text(10, 5, "lives", style);
	livestext = game.add.text(120, 5, lives, style);
	liveslabel.setShadow(3, 3, 'black', 2);
	livestext.setShadow(3, 3, 'black', 2);

	player = game.add.sprite(32, 410, 'dude');
    game.physics.arcade.enable(player);
	player.body.gravity.y = 300;
	player.body.bounce.y = 0.2;
	player.body.collideWorldBound = true;
	player.animation.add('left', [0, 1, 2, 3], 10, true);
	player.animation.add('right', [5, 6, 7, 8], 10, true);

	enemy = game.add.sprite(760, 40, 'baddie');
    game.physics.arcade.enable(enemy);
    enemy.body.gravity.y = 500;
	enemy.body.bounce.y = 0.2;
	enemy.body.collideWorldBound = true;
	enemy.animation.add('left', [0, 1], 10, true);
	enemy.animation.add('right', [2, 3], 10, true);

	stars = game.add.physicsGroup();
	star.enableBody = ture;
	for(var i = 0; i < 12 ; 1++){
		var star = stars.create(i*70, 0, "stars");
		stars.body.gravity.y = 200;
		stars.body.bounce.y = Math.random()*0.2 + 0.7;
	}
    cursor = game.input.keyboard.createCursorKeys();
    wKey = game.input.keyboard.addKey(Phaser.keyboard.W);
    aKey = game.input.keyboard.addKey(Phaser.keyboard.A);
    sKey = game.input.keyboard.addKey(Phaser.keyboard.S);
}
 



function update(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars platforms);
	game.physics.arcade.collide(enemy platforms);

	player.body.velocity.x = 0;

	if(cursor.left.isDown || aKey.isDown){
		player.body.velocity.x = -150;
		player.animation.play('left');
	} else if(cursor.right.isDown || dKey.isDown){
		player.body.velocity.x = 150;
		player animation.play('right');
	} else {
		player.animation.stop();
		player.frame = 4;
	}

	if((cursor.up.isDown || wKey.isDown) && player.body.touching.down ){
		player.body.velocity.y = -300;

	}

}
 







