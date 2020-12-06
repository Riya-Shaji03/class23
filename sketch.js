// namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine, myWorld, ground
var box, box1,box2,box3,box4, pig, pig2, log, log2
function setup() {
  createCanvas(1200,400);
  
  // To create a body - Engine, World , body
   myEngine = Engine.create()  
   myWorld = myEngine.world 
   

   box = new Box(920,320,70,70);
   box1 = new Box(700,320,70,70)
   pig = new Pig(810,350)
   log = new Log(810,260,300,90)


   box2 = new Box(920,240,70,70)
   box3 = new Box(700,240,70,70)
   pig2 = new Pig(810,220)
   log2 = new Log(810,180,300,90)
   box4 = new Box(810,200,70,70)


   ground = new Ground(600,380,1200,20)

   

   console.log(ground)
}
function draw() {
  background(255,0,0);

  Engine.update(myEngine);

  

  box.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
 
  

  ground.display()

  pig.display()
  pig2.display()
  

  log.display()
  log2.display()
  
}


