
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var boy,boyImage,backImage,mangos
function preload()
{
	boyImage=loadImage("Plucking Mangoes/boy.png")
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1= new Mango(740,100,50);
	mango2= new Mango(600,100,50);
	mango3= new Mango(760,150,50);
	mango4= new Mango(600,250,50);
	tree=new Trees(600,600,70,150);
	surface=new Grounds(400,1200,10000,20);
	rock=new Stone(500,50,50);
	slingKing = new Slingshot(rock.body,{x:240,y:700});
	Engine.run(engine);
  
}


function draw() {
  
  background("orange");
  image(boyImage,200,650,200,200)
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango2.display();
  surface.display();
  rock.display();
  slingKing.display();

  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingKing.fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(rock.body,{x:240,y:700})
		launcherObject.attach(rock.body);
	}
}
function detectCollision(rock,mangos){

	
mangoBodyPosition=mangos.body.position;
rockBodyPosition=rock.body.position;

var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
console.log("mangos.r and rock.r" + (mangos.radius+rock.radius))
console.log("distance" + distance)
if(distance<=mangos.radius+rock.radius){
	Matter.Body.setStatic(mangos.body,false)
}
}

