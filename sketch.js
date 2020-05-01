var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,99);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
}
function draw() {
  background(0,0,0);  
  car.velocityX = speed;

  if(car.weight*speed*speed*0.5/22500>100){
    car.shapeColor(0,255,0);
  }
  
  if(car.weight*speed*speed*0.5 <100||car.weight*speed*speed*0.5/22500 > 180){
    car.shapeColor(230,230,0);
  }

  if(car.weight*speed*speed*0.5/22500 < 180){
    car.shapeColor(255,0,0);
  }

  car.isTouching(wall);
  drawSprites();
}

