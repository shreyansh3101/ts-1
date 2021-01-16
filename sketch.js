const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render= Matter.Render;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var polygon,slingshot
function preload(){
    img=loadImage('polygon.png')
}
function setup(){
    createCanvas(1600, 700);
    engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
stand1=new ground(382,500,210,10)
stand2=new ground(700,300,200,10)
block1=new box(296,480,30,40)
block2=new box(325,480,30,40)
block3=new box(354,480,30,40)
block4=new box(383,480,30,40)
block5=new box(412,480,30,40)
block6=new box(441,480,30,40)
block7=new box(470,480,30,40)
//2nd
block8=new box(322,430,30,40)
block9=new box(354,430,30,40)
block10=new box(383,430,30,40)
block11=new box(412,430,30,40)
block12=new box(440,430,30,40)
//3rd
block13=new box(354,400,30,40)
block14=new box(383,400,30,40)
block15=new box(412,400,30,40)
//last
block16=new box(383,350,30,40)
//2nd
b1=new box(640,220,30,40)
b2=new box(670,220,30,40)
b3=new box(700,220,30,40)
b4=new box(730,220,30,40)
b5=new box(760,220,30,40)
//2
b6=new box(670,250,30,40)
b7=new box(700,250,30,40)
b8=new box(730,250,30,40)
//3
b9=new box(700,280,30,40)
//polygon
polygon=Bodies.circle(50,200,20)
World.add(world,polygon)
slingshot=new con(polygon,{x:100,y:200})

}
function draw(){
    Engine.update(engine)
    rectMode(CENTER)
    background("white")

stand1.display()
stand2.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
//2nd
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
//3rd
block13.display()
block14.display()
block15.display()
//last
block16.display()
//2nd
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
//2
b6.display()
    b7.display()
b8.display()
//3
b9.display()
//polygon
imageMode(CENTER)
image(img,polygon.position.x,polygon.position.y,40,40)
}
function mouseDragged(){
Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingshot.fly()


}
