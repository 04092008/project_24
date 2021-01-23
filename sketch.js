
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {720,
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground=new Ground(2,680,2000,10)
	dustbin1=new Dustbin(560,610,10,100)
	dustbin2=new Dustbin(640,660,160,10)
	dustbin3=new Dustbin(720,610,10,100)
	paperball=new Paperball(100,600,10)
  
}


function draw() {
  
  background("black")
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperball.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:15,y:-15})
}

}


