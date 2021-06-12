const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var ground1;


function setup() {
  createCanvas(800,400);
  ground1 = createSprite(300,350,200,20)
  ground1.velocityY = -2
  engine = Engine.create();
  world = engine.world;

  
  tarzann = new Tarzan(350,300,50,30)
  obstacles = new Obstacle(300,300)
}

function draw() {
  background("cyan");  
  Engine.update(engine)
  
  
  
  tarzann.display();
  obstacles.display();
  drawSprites();
}