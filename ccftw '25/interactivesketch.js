//Evanne Robertson
//7-2-25

let flake;
let bag;
let thought;
let fire;
let pupilL;
let pupilR;

function preload() {
  flake = loadImage("Images/snowflake-removebg-preview.png");
  bag = loadImage("Images/bag-removebg-preview.png");
  thought = loadImage(
    "Images/speech-bubble-illustration-colored-text-bubbles-free-free-png.webp"
  );
  fire = loadImage("Images/fire.jpg")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(128, 168, 192);
  if (mouseIsPressed === true){
    background(fire)
  }

  //ground
  noStroke();
  fill(213, 213, 213);
  rect(0, 350, 400, 100);

  //body
  fill(255);
  ellipse(200, 300, 150, 150); //bottom
  ellipse(200, 200, 100, 100); //middle
  ellipse(200, 120, 75, 75); //top

  strokeWeight(4);
  stroke(85, 24, 4); //dark brown
  line(160, 200, 90, 130); //left arm
  line(240, 200, 310, 330); //right arm

  //brows
  strokeWeight(3);
  fill("black");
  line(200, 105, 180, 100); //left
  line(210, 105, 230, 100); //right

  //eyes
  noStroke();
  fill("black");
  ellipse(190, 110, 15); //left
  ellipse(220, 110, 15); //right
  stroke(0, 0, 0);
  strokeWeight(1);
  fill(255);
  

  if(key === 'u'){
    fill(255, 0, 0);
    pupilL = ellipse(190, 110, 8); //left pupil
    pupilR = ellipse(220, 110, 8); //right pupil
    textSize(30)
    text("SIKE!", 165, 350)
  }else{
    pupilL = ellipse(193, 110, 8); //left pupil
    pupilR = ellipse(223, 110, 8); //right pupil
  }

  //mouth
  strokeWeight(6);
  stroke(0, 0, 0);
  point(178, 137);
  point(184, 143);
  point(192, 146);
  point(200, 147);
  point(208, 147);
  point(216, 144);
  point(224, 139);

  //nose
  fill("orange");
  noStroke();
  triangle(200, 120, 245, 135, 200, 133);

  //buttons
  strokeWeight(20);
  stroke(0, 0, 0);
  point(200, 180);
  point(200, 220);
  point(200, 260);

  //hat
  noStroke();
  fill("black");
  rect(173, 40, 50); //box
  rect(159, 80, 80, 15); //brim
  fill(177, 13, 13);
  rect(173, 70, 50, 10); //dark red accent

  //extras
  image(thought, 240, 40, 100, 100);
  image(bag, 260, 250, 150, 150);
  image(flake, 340, 50, 20, 20);
  image(flake, 20, 280, 40, 40);
  image(flake, 125, 30, 30, 30);
  image(flake, 60, 150, 20, 20);
  image(flake, 280, 300, 25, 25);
  image(flake, 330, 190, 35, 35);
  image(flake, 20, 50, 15, 15);
  textSize(15);
  fill(0, 0, 0);
  text("Santa will ", 255, 63);
  text("NEVER ", 263, 83);
  text("catch me.", 257, 100);
  textSize(12)
  text("Click the mouse and 'u' key for the snowman to change his ways.", 30, 20)
}