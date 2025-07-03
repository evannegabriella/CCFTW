//Evanne Robertson
//7-3-25

let modemSound;
let playButton;
let canvas;

let modemVolSlider;
let modemRateSlider;

let level;
let apmlitude;

function preload(){
	modemSound = loadSound("Sounds/ModemSound.mp3")
}
function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)

	playButton = createButton("Play Audio")
	playButton.position(600, 300)
	playButton.mousePressed(playModem)

	modemVolSlider = createSlider(0, 1, 1, 0.01)
	modemRateSlider = createSlider(0.1, 3, 1, 0.01)

	apmlitude = new p5.Amplitude()
}

function playModem(){

	if(!modemSound.isPlaying()){
		modemSound.loop()
		playButton.html('Pause Audio')
	}else{
		modemSound.pause()
		playButton.html('Play Audio')
	}
}

function draw(){
	background(0)

	level = apmlitude.getLevel()
	//print(level)
	let size = map(level, 0, .6, 100, 1900)

	fill(255)
	ellipse(640, 300, size, size)

	modemSound.setVolume(modemVolSlider.value())
	modemSound.rate(modemRateSlider.value())	
}
