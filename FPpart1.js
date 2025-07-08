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

let startQuizBool = true
let activeQuizBool = false 
let quizCrashBool = false

let showCam = false
let cam 

let restartButton

let fontVCR
let pointer
let tacoBell
let dragon

let quizQuestions = [
	{
		question: "What's your main?",
		answers: ["Soft Taco", "Chalupa", "Crunchwrap"]
	},
	{
		question: "Yum! What about your side?",
		answers:["Nacho Fries", "Fiesta Potatoes", "Chips & Cheese"]
	},
	{
		question: "Okay, now what're we drinking?",
		answers: ["Baja Blast", "Mango Brisk Tea", "Water"]
	},
	{
		question: "Nice order. Do you enjoy eating alone?",
		answers: ["Yes", "No", "What..?"]
	},
	{
		question: "It's okay, we're almost done. Just to confirm, you are alone, correct?",
		answers: ["Yes", "Why wouldn't I be?", "I think so"]
	}
]

function preload(){
	fontVCR = loadFont("Fonts/VCR_OSD_MONO_1.001.ttf")
	pointer = loadImage("Images/pointer.jpg")
	tacoBell = loadImage("Images/tacobell.jpg")
	dragon = loadImage("Images/dragon.jpg")
}

function setup(){
	createCanvas(windowWidth, windowHeight)

	startButton = createButton('Click 2 Start')
	startButton.position(600, 500)
	startButton.mousePressed(showQuestions)
	//startButton.mousePressed(questionOne)

	//restartButton = createButton("RE sSTART?")
	//restartButton.position(windowWidth/2 - 60, windowHeight - 100)
}

function draw(){

	if(startQuizBool == true){
		startQuiz()
	}
	if(quizCrashBool == true){
		quizCrash()
	}
	if(activeQuizBool == true){
		showQuestions()
	}

}

function startQuiz(){
	background(255)
	noStroke()
	fill(111, 14, 138)
	rect(windowWidth/2 - 280, 0, windowWidth/2.5, windowHeight)

	image(tacoBell, windowWidth/2 - 270, 10, 250, 200)
	image(dragon, windowWidth/2 - 20, 10, 250, 200)

	textSize(35)
	fill(200)
	strokeWeight(1)
	stroke(2)
	text("Build a Taco Bell Order and We'll", windowWidth/2 - 270, 270)
	text("Tell You Which Mythical Beast", windowWidth/2 - 250, 320)
	text("You're Most Compatible With!", windowWidth/2 - 240, 370)
	textSize(25)
	text("Hungry for answers? :)", windowWidth/2 - 150, 430)

	
}

function showQuestions(){
	startQuizBool = false
	activeQuizBool = true
	startButton.hide()
	print('Show Questions')
	
	background(255)
	noStroke()
	fill(111, 14, 138)
	rect(windowWidth/2 - 280, 0, windowWidth/2.5, windowHeight)
	
	ellipse(600, 600, 30, 30)
}

function quizCrash(){

}