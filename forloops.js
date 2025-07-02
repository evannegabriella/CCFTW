//Evanne Robertson
//7-1-25
//Practicing with images and forloops.

function setup(){
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
}

function draw() {
	if (mouseIsPressed == true){
		background(7, 2, 78) //my mom's birthday
	} else{
	background(1, 21, 8) //my birthday

}

//loops
	strokeWeight(2)
	stroke(0)
	for(let i = 0; i < windowWidth; i = i + 15){
		line(i, 0, i, windowHeight)
	}
	for(let i = 0; i < windowHeight; i = i + 15){
		line(0, i, windowWidth, i)
	}

	//text
	strokeWeight(3)
	stroke(255)
	textSize(60)
	fill(228, 207, 76)
	text("For-Loops :)", 500, 350);
}