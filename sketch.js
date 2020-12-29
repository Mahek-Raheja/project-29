const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,polygon;


function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,30);
    stand = new Ground(800,500,600,20);
    block1 = new Box(800,450,70,70);
    block2 = new Box(720,450,70,70);
    block3 = new Box(640,450,70,70);
    block4 = new Box(880,450,70,70);
    block5 = new Box(960,450,70,70);
    block6 = new Box(750,350,70,70);
    block7 = new Box(930,350,70,70);
    block8 = new Box(690,350,70,70);
    block9 = new Box(820,350,70,70);
    block10 = new Box(720,250,70,70);
    block11 = new Box(790,250,70,70);
    block12 = new Box(850,250,70,70);
    block13 = new Box(750,150,70,70);
    block14 = new Box(830,150,70,70);
    block15 = new Box(790,50,70,70);

    polygon = new Polygon(50,200,2);
    slingshot = new SlingShot(polygon.body,{x:200,y:200});
  
}

function draw(){
    background("grey");
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    polygon.display();
    
    slingshot.display();
   

}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}