const Engine = Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,ground1,world,box1,box2;

function setup() {

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box1=new box(300,250,50,50);
  box2 =new box(340,150,50,100)
ground1=new ground(200,380,400,25)
}

function draw() {
  background(0);  
Engine.update(engine);
box1.display();
box2.display();
ground1.display();

}

