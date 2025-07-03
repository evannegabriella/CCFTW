//Evanne Robertson
//Practicing animation.

let xPos 
let yPos

let xSpeed = 2
let ySpeed = 2

let ballDiam = 100

function preload(){
	nene = loadImage("Images/nene.jpg")
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2 //middle of screen
	yPos = windowHeight/2 //middle of screen

	imageMode(CENTER)
	background(0)
}

function draw(){
	
	strokeWeight(2)
	stroke(255, 255, 0)
	fill(255)
	textSize(50)
	text("Bouncing Ball WP", 450, 100)

	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	strokeWeight(1)
	stroke(255)
	fill(random(255), random(255), random(255))
	ellipse(xPos, yPos, ballDiam, ballDiam)
	//image(nene, xPos, yPos, ballDiam, ballDiam)

	if(xPos>= windowWidth - ballDiam/2 || xPos <= ballDiam/2){
		xSpeed = xSpeed * - 1
	}

	if(yPos>= windowHeight - ballDiam/2 || yPos <= ballDiam/2){
		ySpeed = ySpeed * - 1
	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}