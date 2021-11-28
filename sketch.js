//namespace - giving nickname to variable
const Engine = Matter.Engine
const World =Matter.World
const Bodies = Matter.Bodies
//global variables
var engine,world,body1

var ground,ball
var obj1,obj2

function setup() {
  createCanvas(800,600);

  //creating the engine
  engine = Engine.create()
  //creating world and linking it to the engine
  world = engine.world
 
  //creating ground
  ground=new Ground(width/2,height,width,20)

  //creating ball
  var ballOption={
    isstatic:false,restitution:1
  }
  ball=Bodies.circle(400,100,50,ballOption)
  World.add(world,ball)

  //creating objects of Box class
  obj1=new Box(200,20,50,50)
  obj2=new Box(210,100,50,100)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display()
rectMode(CENTER)
ellipse(ball.position.x,ball.position.y,100,100)
 
//displaying the object of box class
obj1.display()
obj2.display()
}