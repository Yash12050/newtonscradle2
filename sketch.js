
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var cradle,ball1,ball2,ball3,rope1,rope2,rope3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	cradle = Bodies.rectangle(400,300,300,20,{isStatic: true});

	ball1 = new Ball(100,400,50);
	ball2 = new Ball(400,600,50);
	ball3 = new Ball(500,600,50);

	ground = new Ground(400,700,800,20);
	rope1 = new rope(ball1.body,{x:300,y:300});
	rope2 = new rope(ball2.body,{x:400,y:300});
	rope3 = new rope(ball3.body,{x:500,y:300});
	World.add(world,cradle);
	World.add(world,ball1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
	
  rect(this.cradle.position.x,this.cradle.position.y,300,20);
	ball1.display();
	ball2.display();
	ball3.display();

	rope1.display();
	rope2.display();
	rope3.display();
	ground.display();

  drawSprites();
 
}


