//Evanne Robertson
// 7-7-25
 //Final project idea (interactive horror story) and coding progress.

//HORROR STORY EFFECTS: 
// - basic black screen with images/sounds to intensify gameplay
// - easy to read fonts
// - screen carousel with certain buttons so players can make certain choices
// - ability to restart

//STORY PLOT:
//User will be playing a personality quiz, answering 2-3 simple questions (ex. What's your favorite color?) 
//but by the 3/4 question, they will be asked very personal questions like "Are you alone?" and the 'game' 
//will crash and turn on the user's camera, ending with the game saying something about them being watched
//in a glitchy VCR font. Users will have the option to restart as well, simply to choose different options.

let currentQ = 0

let showCam = false

let cam 

let restartButton

let fontVCR

let questions = []

function preload(){
	fontVCR = loadFont("Fonts/VCR_OSD_MONO_1.001.ttf")
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	textFont(fontVCR)
	textAlign(CENTER, CENTER)
	text(20)

	restartButton = createButton("RE sSTART?")
	restartButton.position(windowWidth/2 - 60, windowHeight - 100)
}

function draw(){
	background(0)
}