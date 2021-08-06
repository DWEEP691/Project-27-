
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	f1 = new roof(400,100,500,35);

	b1 = new bob(200,500,30);
	b2 = new bob(300,500,30);
	b3 = new bob(400,500,30);
	b4 = new bob(500,500,30);
	b5 = new bob(600,500,30);

	r1 = new Rope(b1,f1,-30*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  f1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  r1.display();

  drawSprites();
 
}



