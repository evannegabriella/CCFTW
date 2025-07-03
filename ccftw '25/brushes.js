//Evanne Robertson
//Practicing a painting app.

//default settings are off. this allows the user to only use the brushes when functions are called (key is pressed)
let ellipseBrushBool = false
let squareBrushBool = false
let imageBrushBool = false

function preload(){
	furby = loadImage("Images/furby.png")
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
}

function draw(){
	if (ellipseBrushBool == true){
		ellipseBrush()
	}

	if (squareBrushBool == true){
		squareBrush()
	}

	if (imageBrushBool == true){
		imageBrush()
	}
}

function keyPressed(){
	if (key === 'e') {
		ellipseBrushBool = true
		squareBrushBool = false
		imageBrushBool = false
	} //turns on circle brush

	if (key === 's'){
		squareBrushBool = true
		ellipseBrushBool = false
		imageBrushBool = false
	} //turns on square brush

	if (key === 'i'){
		imageBrushBool = true
		ellipseBrushBool = false
		squareBrushBool = false
	} //turns on image brush

	if (key === 'o'){
		ellipseBrushBool = false
		squareBrushBool = false
		imageBrushBool = false
	}
}

function ellipseBrush(){
	fill(random(255), random(255), random(255))
	ellipse(mouseX, mouseY, 50, 50)
}

function squareBrush(){
	fill(random(255), random(255), random(255))
	rect(mouseX, mouseY, 80, 80)
}

function imageBrush(){
	image(furby, mouseX, mouseY, 60, 60)
}