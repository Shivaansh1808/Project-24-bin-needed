const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperSprite, paperBody;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	paperBody = new Paper();

	paperSprite = createSprite(paperBody.body.position.x, paperBody.body.position.y, 20, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperSprite.x = paperBody.body.position.x;
  paperSprite.y = paperBody.body.position.y;
  
  drawSprites();
}



