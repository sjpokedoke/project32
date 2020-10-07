const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, base1, base2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box1a, box2a, box3a, box4a, box5a, box6a, box7a, box8a, box9a;
var score = 0;
var bgimg = "images.jpg";
var bg;

function preload(){
  polygonimg = loadImage("polygon.png")
  getTime();
}
function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 395, 1000, 10)
	base1 = new Ground(390, 340, 300, 10)
	base2 = new Ground(800, 200, 200, 10)

	box1 = new Box(300,275, 30, 40);
	box2 = new Box(330,275, 30, 40);
	box3 = new Box(360,275, 30, 40);
	box4 = new Box(390,275, 30, 40);
	box5 = new Box(420,275, 30, 40);
	box6 = new Box(450,275, 30, 40);
	box7 = new Box(480,275, 30, 40);
	box8 = new Box(330, 235, 30, 40);
	box9 = new Box(360, 235, 30, 40);
	box10 = new Box(390,235, 30, 40);
	box11 = new Box(420, 235, 30, 40);
	box12 = new Box(450, 235, 30, 40);
	box13 = new Box(360, 195, 30, 40);
	box14 = new Box(390, 195, 30, 40);
	box15 = new Box(420, 195, 30, 40);
	box16 = new Box(390, 155, 30, 40);

	box1a = new Box(740, 150, 30, 40);
	box2a = new Box(770, 150, 30, 40);
	box3a = new Box(800, 150, 30, 40);
	box4a = new Box(830, 150, 30, 40);
	box5a = new Box(860, 150, 30, 40);
	box6a = new Box(770, 110, 30, 40);
	box7a = new Box(800, 110, 30, 40);
	box8a = new Box(830, 110, 30, 40);
	box9a = new Box(800, 70, 30, 40);

	polygon = Bodies.circle(50,200,20);
	World.add(world,polygon);

	slingshot = new Slingshot(this.polygon,{x:100,y:200})

  Engine.run(engine);
}


function draw() {
  if (bg) {
    background(bg);
}
  
  drawSprites();
  ground.display();
  base1.display();
  base2.display();
  fill("skyblue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("pink")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise")
  box13.display();
  box14.display();
  box15.display();
  fill("grey")
  box16.display();

  fill("skyblue")
  box1a.display();
  box2a.display();
  box3a.display();
  box4a.display();
  box5a.display();
  fill("pink")
  box6a.display();
  box7a.display();
  box8a.display();
  fill("turquoise")
  box9a.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box1a.score();
  box2a.score();
  box3a.score();
  box4a.score();
  box5a.score();
  box6a.score();
  box7a.score();
  box8a.score();
  box9a.score();

  slingshot.display();

  imageMode(CENTER)
  image(polygonimg, polygon.position.x, polygon.position.y, 40, 40)

  fill("blue")
  text("Drag the hexagon stone and release it to launch toward the two towers", 100, 50);
  text("Press space to re throw", 100, 80);
  text("Score: "+score, 750, 40)
}
function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  function mouseReleased(){
	slingshot.fly();
  }

  function keyPressed() {
	if(keyCode === 32){
	  Matter.Body.setPosition(this.polygon, {x: 50, y: 200})
	  slingshot.attach(this.polygon)
	}
}
async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var jsondata = await response.json();
  var datetime = jsondata.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  if (hour>=6&&hour<=18) {
    bgimg = "images.jpg"
} else{
    bgimg = "download.jpg"
}
bg = loadImage(bgimg);
console.log(bg)
}