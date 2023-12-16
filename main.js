function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	coin = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	kill_enemy = loadSound("kick.wav");
	died = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
    video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
 
	instializeInSetup(mario);

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log('Model is loaded!');
}

function gotPoses(results){
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX =" + noseX + "noseY = " + noseY);
	}
}

function draw() {
	game();
}






