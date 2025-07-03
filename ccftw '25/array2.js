//Evanne Robertson
//7-3-25

let nene;

let x = []
let y = []

function preload(){
	nene = loadImage("Images/nene.jpg")
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

	for(let i = 0; i < 10; i++){
		x.push(random(45, windowWidth - 45))
		y.push(random(45, windowHeight - 45))
	}
}

function draw(){
	background(117, 222, 122)
	for(let i = 0; i < x.length; i++){
		image(nene, x[i], y[i], 90, 90)
	}
}

function mouseClicked(){
	x.push(mouseX)
	y.push(mouseY)
}