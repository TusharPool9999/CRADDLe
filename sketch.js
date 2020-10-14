
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1, ball, ball3;
var bar;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ball1 = new Balls(400,350,15,15,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



  ball1.display();
  drawSprites();
}



