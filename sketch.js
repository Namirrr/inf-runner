var car, truck, carImg, truckImg
var bg, bgImg
var busGroup, truckGroup
var gamestate, score



function preload() {
truckImg = loadImage("truck.png")
carImg = loadImage("car.png")

bgImg = loadImage("bg.png")

}

function setup() {
  
  createCanvas(500,550);
  bg = createSprite(250, 100, 50, 50);
  bg.addImage(bgImg)
  bg.scale = 0.9
  bg.velocityY = 2

  car = createSprite(250, 500)
  car.addImage(carImg)
  car.scale = 0.7

  truckGroup = new Group();
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(bg.y > 400){
    bg.y = 100}

    if(keyDown(RIGHT_ARROW)) {
      car.x = car.x + 5
    }
    if(keyDown(LEFT_ARROW)) {
      car.x = car.x - 5

spawnObs();

    }
    
  
}

function spawnObs() {
  
  if (frameCount % 60 === 0) {
    var truck = createSprite(200,120,40,10);
    truck.y = Math.round(random(80,120));
   truck.addImage(truckImg);
    truck.scale = 0.5;
    truck.velocityY = -3;
    
     
    truck.lifetime = 200;

    
    truckGroup.add(truck)
  
  }
  
}