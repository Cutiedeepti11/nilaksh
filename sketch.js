const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig,log;
var pig2,log2,box3,box4;
var box5,log3,log4;


function setup(){
    var canvas = createCanvas(1100,550);
    engine = Engine.create();
    world = engine.world;
    pig= new Pig(600,450)
    box1 = new Box(500,450,50,50);
    box2 = new Box(700,450,50,50);
    ground = new Ground(200,height,width+700,20)
    log= new Log(600,400,300,PI/2)
    pig2=new Pig(600,380)
    box3=new Box(500,380,50,50)
    box4=new Box(700,380,50,50)
    log2=new Log(600,300,300, PI/2)
    box5=new Box(600,300,50,50);
    log3= new Log(550,200,130,PI/7);
    log4= new Log(650,200,130,-PI/7);
}

function draw(){
    background("#add93f");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}