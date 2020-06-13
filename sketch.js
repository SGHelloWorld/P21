var  bullet,wall,thickness;
var  speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,20,20);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor=color(255,255,255);
  bullet.depth=wall.depth+1;
}

function draw() {
  background(0,0,0);  
 
  BounceOff(bullet,wall);
  drawSprites();
}
function BounceOff(obj1,obj2)
{ 
  if((bullet.x+bullet.width/2)>=(wall.x-wall.width/2) )
  { //bullet.x=wall.x-bullet.width;
    bullet.x=wall.x-wall.width/2-bullet.width/2;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    calculation(damage);
  }
}
function calculation(damage )
{
   if(damage>10)
   {wall.shapeColor='red';}
   if(damage<10)
   {wall.shapeColor='green';}
}