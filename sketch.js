
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var tree, treeImage
var ground;
var boy, boyImage;
var stone;
var launcher;

function preload(){
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(300,450,50,50);
	boy.addImage(boyImage);
    boy.scale = 0.1;
	//Create the Bodies Here.
	tree = new Tree(1000,350,50,50);
	mango1 = new Mango(1000,200,20,20);
	mango2 = new Mango(900,250,20,20);
	mango3 = new Mango(1100,250,20,20);
	mango4 = new Mango(900,200,20,20);
	mango5 = new Mango(1100,170,20,20);
	mango6 = new Mango(1000,250,20,20);
	mango7 = new Mango(1000,150,20,20);
	mango8 = new Mango(950,280,20,20);
	mango9 = new Mango(1050,300,20,20);
	mango10 = new Mango(850,250,20,20);

	stone = new Stone(250,420,50,50);

	launcher = new Launcher(stone.body,{x:250,y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);

  drawSprites();

  stone.display();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420});
		launcher.attach(stone.body);
	}
}

function detectcollision(Lstone, Lmango){
	var distance = dist(stone.body.position.x, stone.body.position.y, mango.body.positon.x, mango.body.position.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body, false);
	}
}

/*function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}*/



