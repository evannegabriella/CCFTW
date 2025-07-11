//Evanne Robertson
// 7-9-25
 //Final project idea (interactive horror story) and coding progress.

//HORROR STORY EFFECTS: 
// - basic black screen with images/sounds to intensify gameplay
// - easy to read fonts
// - screen carousel with certain buttons so players can make certain choices
// - ability to restart

//STORY PLOT:
//User will be playing a Taco Bell personality quiz, answering 3 simple questions (ex. What's your main?)
//but by the 4th question, they will be asked very personal questions like "Are you alone?" and the 'game' 
//will crash and turn on the user's camera, ending with the game saying something about them being watched
//in a glitchy VCR font. Users will have the option to restart as well, simply to choose different options.

let startQuizBool = true
let question1Bool = false
let question2Bool = false
let question3Bool = false  
let question4Bool = false
let question5Bool = false 
let revealBool = false
let quizCrashBool = false
let restartQuizBool = false

let showCam = false
let cam 

let restartButton

let fontVCR
let pointer
let tacoBell
let dragon
let bajaBlast, chalupa, chipandCheese, crunchwrap, fiestaPotatoes, mangoTea, nachoFry, softTaco, water;
let monster1, monster2, monster3;
let glitch1, glitch2, quizMusic, growl, hum;

let answer1button
let answer2button
let answer3button

let animateButton

let stopPopUp
let stopPopUpBool = true

let quizQuestions = [
  {
    question: "First off, what's your main?",
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
    question: "Last question, are you alone right now?",
    answers: ["Yes", "Why wouldn't I be?", "I think so"]
  }
]

let popUpQuestions = [
  "You aren't alone anymore.",
  "YOU ARE BEING WATCHED.",
  "Don't try to run.",
  "I'm starving.",
  "They taste better scared.",
  "D0N'T TRrY 2 RUn.",
  "I've fFfound yyou."
]


function preload(){
  fontVCR = loadFont("Fonts/VCR_OSD_MONO_1.001.ttf")
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
  monster1 = loadImage("Images/monster1.jpg")
  monster2 = loadImage("Images/monster2.jpg")
  monster3 = loadImage("Images/monster3.jpeg") 
  quizMusic = loadSound("Sounds/ModemSound.mp3")
   growl = loadSound("Sounds/GrowlingMonster.mp3")
   glitch1 = loadSound("Sounds/glitch1.mp3")
   glitch2 = loadSound("Sounds/glitch2.mp3")
  hum = loadSound("Sounds/low-engine-hum.mp3")
}

function setup(){
  createCanvas(windowWidth, windowHeight)

  startButton = createButton('Click 2 Start')
  startButton.mousePressed(question1)
  startButton.position(600, 500)

  answer1button = createButton('')
  answer1button.position(450, 150)

  answer2button = createButton('')
  answer2button.position(450, 350)

  answer3button = createButton('')
  answer3button.position(450, 550)

  continueButton = createButton('Continue...')
  continueButton.position(600, 550)


  answer1button.hide()
  answer2button.hide()
  answer3button.hide()
  continueButton.hide()

  print(quizQuestions)

  print(quizQuestions[0].answers[1])

  rectMode(CENTER)

  stopPopUp = createButton("Die.")
  stopPopUp.position(600, 500)
  stopPopUp.addClass('stopButton')
  stopPopUp.hide()
  stopPopUp.mousePressed(stopDeletePopUp)

}

function stopDeletePopUp(){
  stopPopUpBool = false
  const buttons = document.querySelectorAll('button');
  restartQuizBool = true
  buttons.forEach(button => {
  button.remove()
   })
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

if(stopPopUpBool == true){
 
}

if (restartQuizBool == true){
  restartQuiz()
}

}

function makePopup(speed, textArray){
  let rand = ceil(random(0, speed)) //The higher the speed value, the slower the popups
  //Debug text - uncomment the line below to see value of rand variable
  //text(`${rand}`, 100, 200)

  if(rand === 1 || rand === 10){
    createButton(random(textArray))
    .addClass('popUpButton')
    .position(random(0, windowWidth - 100), random(windowHeight - 50))
    //.size(150, 50)
    .mousePressed(function(){
      this.remove()
    })
  }
}

function startQuiz(){
  startQuizBool = true 

  background(255)
  noStroke()
  fill(111, 14, 138)
  rect(windowWidth/2, windowHeight/2, 500, windowHeight)

  image(tacoBell, windowWidth/2 - 250, 10, 250, 200)
  image(dragon, windowWidth/2, 10, 250, 200)

  textSize(34)
  fill(200)
  textAlign(CENTER)
  strokeWeight(1)
  stroke(2)
  text("Build a Taco Bell Order and We'll", windowWidth/2, 270)
  text("Tell You Which Mythical Beast", windowWidth/2, 320)
  text("You're Most Compatible With!", windowWidth/2, 370)
  textSize(25)
  text("Hungry for answers? :)", windowWidth/2, 430)

  
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
  rect(windowWidth/2, windowHeight/2, 500, windowHeight)

  image(softTaco, 630, 100, 150, 150)
  image(chalupa, 630, 290, 150, 150)
  image(crunchwrap, 630, 480, 150, 150)
  
  textSize(35)
  fill(200)
  textAlign(CENTER)
  strokeWeight(1)
  stroke(2)
  text(quizQuestions[0].question, windowWidth/2, 80)


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
  fill(83, 10, 103)
  rect(windowWidth/2, windowHeight/2, 500, windowHeight)

  image(nachoFry, 630, 100, 150, 150)
  image(fiestaPotatoes, 630, 290, 150, 150)
  image(chipandCheese, 630, 480, 150, 150)
  
  textSize(35)
  fill(200)
  textAlign(CENTER)
  strokeWeight(1)
  stroke(2)
  textAlign(CENTER)
  text(quizQuestions[1].question, windowWidth/2, 80)


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
  fill(55, 7, 69)
  rect(windowWidth/2, windowHeight/2, 500, windowHeight)

  image(bajaBlast, 630, 100, 150, 150)
  image(mangoTea, 630, 290, 150, 150)
  image(water, 630, 480, 150, 150)
  
  textSize(35)
  fill(200)
  textAlign(CENTER)
  strokeWeight(1)
  stroke(2)
  text(quizQuestions[2].question, windowWidth/2, 80)


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
  fill(28, 3, 35)
  rect(windowWidth/2, windowHeight/2, 500, windowHeight)

  textSize(35)
  fill(200)
  textAlign(CENTER)
  strokeWeight(1)
  stroke(2)
  text(quizQuestions[3].question, windowWidth/2, 60, 550)

  answer1button.html(quizQuestions[3].answers[0])
  answer2button.html(quizQuestions[3].answers[1])
  answer3button.html(quizQuestions[3].answers[2])

  answer1button.mousePressed(question5)
  answer2button.mousePressed(question5)
  answer3button.mousePressed(question5)
}

function question5(){
  question1Bool = false
  question2Bool = false
  question3Bool = false
  question4Bool = false
  question5Bool = true 
 
  background(0)
  noStroke()
  fill(0)
  rect(windowWidth/2, windowHeight/2, 500, windowHeight)

  textSize(35)
  fill(200)
  textAlign(CENTER)
  strokeWeight(1)
  stroke(2)
  text(quizQuestions[4].question, windowWidth/2, 60, 550)
  fill(255, 0, 0)
  text("alone", windowWidth/2 + 138, 60, 550)


  answer1button.html(quizQuestions[4].answers[0])
  answer2button.html(quizQuestions[4].answers[1])
  answer3button.html(quizQuestions[4].answers[2])

  answer1button.mousePressed(revealResultBool)
  answer2button.mousePressed(revealResultBool)
  answer3button.mousePressed(revealResultBool)
}

function revealResultBool(){
question1Bool = false
question2Bool = false
question3Bool = false
question4Bool = false
question5Bool = false
revealBool = true 

background(255)
noStroke()
fill(111, 14, 138)
rect(windowWidth/2, windowHeight/2, 500, windowHeight)

textSize(35)
fill(200)
textAlign(CENTER)
strokeWeight(1)
stroke(2)
text("Cool beans! (get it?)", windowWidth/2, 40, 550)
textSize(45)
text("You got paired with:", windowWidth/2, 90, 550)
textSize(50)
fill(255, 0, 0)
textFont(fontVCR)
text("THE STARVING ONE", windowWidth/2, 520)

imageMode(CENTER)
image(monster2, windowWidth/2, 300, 300, 300)

answer1button.remove()
answer2button.remove()
answer3button.remove()
continueButton.show()

continueButton.mousePressed(quizCrash)

}

function quizCrash(){
  question1Bool = false
  question2Bool = false
  question3Bool = false
  question4Bool = false
  question5Bool = false
  quizCrashBool = true 

  continueButton.hide()
  stopPopUp.show()
  background(0)
  textSize(60)
  fill(255, 0, 0)
  textAlign(CENTER)
  textFont(fontVCR)
  text("I see you.", windowWidth/2, windowHeight/2)

  if(stopPopUpBool == true){
   makePopup(25, popUpQuestions)
  }
}

function restartQuiz(){
question1Bool = false
question2Bool = false
question3Bool = false
question4Bool = false
question5Bool = false
quizCrashBool = false
restartQuizBool = true 

textAlign(CENTER)

restartButton = createButton("REsSTART?")
restartButton.addClass('restartButton')
restartButton.position(windowWidth/2, windowHeight/2)
restartButton.mousePressed(startQuiz)
}