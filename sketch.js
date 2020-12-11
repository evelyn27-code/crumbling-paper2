
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dumper1,ground1,waste1;
var world;
function preload(){

}

function setup() {
  createCanvas(1365, 600);
  
 rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

  dumper1 = new dumper(1150,450);
  

  ground1 = new Ground(700,594,1365,10);
 waste1 = new Waste(200,575,50);
 


 Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("pink");

  waste1.display();
  dumper1.display(); 
  

  ground1.display();
  
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(waste1.body,waste1.body.position,{x:142,y:-142});
    
  
   }
  }
