//Evanne Robertson
// 7-8-25
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
let question1Bool = false
let question2Bool = false
let question3Bool = false  
let question4Bool = false
let quizCrashBool = false

let showCam = false
let cam 

let restartButton

let fontVCR
let pointer
let tacoBell
let dragon
let bajaBlast, chalupa, chipandCheese, crunchwrap, fiestaPotatoes, mangoTea, nachoFry, softTaco, water;

let answer1button
let answer2button
let answer3button


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
	bajaBlast = loadImage("Images/bajablast.jpeg")
	chalupa = loadImage("Images/chalupa.jpeg")
	chipandCheese = loadImage("Images/chipandcheese.jpeg")
	crunchwrap = loadImage("Images/crunchwrap.jpeg")
	fiestaPotatoes = loadImage("Images/fiestapotatoes.jpeg")
	mangoTea = loadImage("Images/mangotea.jpeg")
	nachoFry = loadImage("Images/nachofry.jpeg")
	softTaco = loadImage("Images/softtaco.jpeg")
	water = loadImage("Images/water.jpeg")
}

function setup(){
	createCanvas(windowWidth, windowHeight)

	startButton = createButton('Click 2 Start')
	startButton.position(600, 500)
	startButton.mousePressed(question1)

	answer1button = createButton('')
	answer1button.position(400, 150)

	answer2button = createButton('')
	answer2button.position(400, 350)

	answer3button = createButton('')
	answer3button.position(400, 550)


	answer1button.hide()
	answer2button.hide()
	answer3button.hide()

	//restartButton = createButton("RE sSTART?")
	//restartButton.position(windowWidth/2 - 60, windowHeight - 100)


	print(quizQuestions)

	print(quizQuestions[0].answers[1])
}

function draw(){

	if(startQuizBool == true){
		startQuiz()
	}
	if(quizCrashBool == true){
		quizCrash()
	}
	if(question1Bool == true){
		question1()
	}
	if(question2Bool == true){
		question2()
	}

}

function startQuiz(){

	startQuizBool = true 

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

function question1(){
	startQuizBool = false
	question1Bool = true
	answer1button.show()
	answer2button.show()
	answer3button.show()
	background(255)
	noStroke()
	fill(111, 14, 138)
	rect(windowWidth/2 - 280, 0, windowWidth/2.5, windowHeight)

	image(softTaco, 530, 100, 150, 150)
	image(chalupa, 530, 290, 150, 150)
	image(crunchwrap, 530, 480, 150, 150)
	
	textSize(35)
	fill(200)
	strokeWeight(1)
	stroke(2)
	text(quizQuestions[0].question, 500, 80)


	answer1button.html(quizQuestions[0].answers[0])
	answer2button.html(quizQuestions[0].answers[1])
	answer3button.html(quizQuestions[0].answers[2])

	answer1button.mousePressed(question2)
	answer2button.mousePressed(question2)
	answer3button.mousePressed(question2)


	startButton.hide()

		
}

function question2(){
	question1Bool = false
	question2Bool = true
	background(255)
	noStroke()
	fill(111, 14, 138)
	rect(windowWidth/2 - 280, 0, windowWidth/2.5, windowHeight)

	image(nachoFry, 530, 100, 150, 150)
	image(fiestaPotatoes, 530, 290, 150, 150)
	image(chipandCheese, 530, 480, 150, 150)
	
	textSize(35)
	fill(200)
	strokeWeight(1)
	stroke(2)
	text(quizQuestions[1].question, 420, 80)


	answer1button.html(quizQuestions[1].answers[0])
	answer2button.html(quizQuestions[1].answers[1])
	answer3button.html(quizQuestions[1].answers[2])

	answer1button.mousePressed(question3)
	answer2button.mousePressed(question3)
	answer3button.mousePressed(question3)
}

function question3(){
	question1Bool = false
	question2Bool = false
	question3Bool = true
	background(255)
	noStroke()
	fill(111, 14, 138)
	rect(windowWidth/2 - 280, 0, windowWidth/2.5, windowHeight)

	image(bajaBlast, 530, 100, 150, 150)
	image(mangoTea, 530, 290, 150, 150)
	image(water, 530, 480, 150, 150)
	
	textSize(35)
	fill(200)
	strokeWeight(1)
	stroke(2)
	text(quizQuestions[2].question, 400, 80)


	answer1button.html(quizQuestions[2].answers[0])
	answer2button.html(quizQuestions[2].answers[1])
	answer3button.html(quizQuestions[2].answers[2])

	answer1button.mousePressed(question4)
	answer2button.mousePressed(question4)
	answer3button.mousePressed(question4)
}

function question4(){
	question1Bool = false
	question2Bool = false
	question3Bool = false
	question4Bool = true
	background(255)
	noStroke()
	fill(111, 14, 138)
	rect(windowWidth/2 - 280, 0, windowWidth/2.5, windowHeight)

	textSize(35)
	fill(200)
	strokeWeight(1)
	stroke(2)
	text(quizQuestions[3].question, 400, 80)


	answer1button.html(quizQuestions[3].answers[0])
	answer2button.html(quizQuestions[3].answers[1])
	answer3button.html(quizQuestions[3].answers[2])

	answer1button.mousePressed(question5)
	answer2button.mousePressed(question5)
	answer3button.mousePressed(question5)
}

function quizCrash(){

}