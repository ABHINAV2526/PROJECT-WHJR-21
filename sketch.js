var car,carImage
var wall
var greenCarImage
var yellowCarImage
var redCarImage
var speed
var weight
var deformation 
var time 
var colour
var PLAY = 1
var END = 0
var gameState = PLAY
var time2

function setup() {
  createCanvas(1366,657);

  boundary1 = createSprite(1360, 275, 30, 800);
  boundary1.shapeColor = "gray"

  boundary2 = createSprite(4, 275, 30, 800);
  boundary1.shapeColor = "gray"
  
  boundary3 = createSprite(660,5,1370, 30);
  boundary3.shapeColor = "gray"
  
  boundary4 = createSprite(660, 650, 1370, 30);
  boundary4.shapeColor = "gray"

  wall = createSprite(1300,328,50,600)
  wall.shapeColor = "brown"

  speed = Math.round(random(55,90))
  weight = Math.round(random(400,1500))

  car = createSprite(120,590,40,40)
  car.addImage(carImage)
  car.scale = 0.08
  car.y = Math.round(random(80,590))
  car.setLifetime = 50
  car.velocityX = speed

  time = 0

  time2 = 0
 
  deformation = Math.round(0.5 * weight * speed * speed/22500)
}

function preload(){

  carImage = loadImage("MAINCAR.png")
  greenCarImage = loadImage("GREENCAR.png")
  yellowCarImage = loadImage("YELLOW LAMBO.png")
  redCarImage = loadImage("REDCARSTRIGHT.png")

}

function draw() {

  background("lightblue");

    

    stroke("white")
    fill("red")
    textSize(30)
    text("Weight = " + weight, 205, 65)

    stroke("white")
    strokeWeight(3)
    fill("red")
    textSize(30)
    text("Speed = " + speed, 505, 65)

    

    if (car.isTouching(wall)){

    car.velocityX = 0

    stroke("white")
    strokeWeight(3)
    fill("red")
    textSize(30)
    text("deformation = " + deformation, 805, 65)

    if(deformation<100){

      car.addImage(greenCarImage)
      car.scale = 0.08

    } 
    
    if(deformation<180 && deformation>100){

      car.addImage(yellowCarImage)
      car.scale = 0.08

    } 
    
    if(deformation>180){
      
      car.addImage(redCarImage)
      car.scale = 0.08

    }  

}

if(frameCount%30 === 0){
  time = time+1
}

spawnCar()

  drawSprites();
}

function spawnCar(){

  if(time === 3){
    time = 0
    car.destroy()
  car = createSprite(120,590,40,40)
      car.addImage(carImage)
      car.scale = 0.08
      car.y = Math.round(random(80,590))
      car.setLifetime = 30
      speed = Math.round(random(55,90))
      weight = Math.round(random(400,1500))
      deformation = Math.round(0.5 * weight * speed * speed/22500)
      car.velocityX = speed 
           
    }

}
