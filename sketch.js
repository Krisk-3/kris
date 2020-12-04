
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var roof1
var rope1

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	roof1 = new roof (400,50,600,60)
	bob1 = new bob (200,500,100)
    bob2 = new bob (300,500,100)
	bob3 = new bob (400,500,100)
	bob4 = new bob (500,500,100)
	bob5 = new bob (600,500,100)
	
    rope1 = new Rope (bob1.body,roof1.body)
	

	Engine.run(engine);
  
}


function draw() {

  background("grey");

  Engine.update(engine);
   roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


 rope1.display();
 


 text(mouseX + "," + mouseY, mouseX, mouseY)
  

  drawSprites();
  
}



