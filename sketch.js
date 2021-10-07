var ship;
var astroid;
var backg;
var backg2;
var backg3;
var mars;
var uranas;
var astroidGroup;
var block;
var block2;
var block3;
var block4;
var score=100

function preload(){
spaceship=loadImage("ship.png");

rockimage=loadImage("rocks.png");

backgroundimage=loadImage("6.jpg");

marsimage=loadImage("m.png");
}
function setup(){

  createCanvas(displayWidth/2, displayHeight);

  backg=createSprite(900,1800,2000,9000);
  backg.addImage("g",backgroundimage);

backg3=createSprite(900,2300)
backg3.addImage("r",backgroundimage);

  backg2=createSprite(900,-500,2000,9000);
  backg2.addImage('t',backgroundimage);

 block=createSprite(500,2850,50,3000);
 block2=createSprite(900,2850,6000,300);
 block3=createSprite(1420,2850,50,3000);
 

ship=createSprite(900,2800,10,10);
  ship.addImage("s",spaceship);
  ship.scale=0.4;
 
  mars=createSprite(890,3000,10,10);
  mars.addImage('k',marsimage);
   mars.scale=0.4
   mars.rotation=50
astroidGroup=new Group();

camera.on();
  
}
function draw(){

  ship.collide(block);
  ship.collide(block2);
  ship.collide(block3);
  
  if (ship.collide(astroidGroup)){
    score=score-10;
  }
 
  
   mars.rotation=mars.rotation+3

  camera.x=displayWidth/2;
  camera.y=ship.y; 
  mars.depth=0.4
   backg3.depth=0.1
   backg.depth=0.1
   backg2.depth=0.1
   ship.depth=0.1
   block.depth=0.1
   block2.depth=0.3
   block3.depth=0.1
  

        
   if(keyIsDown(LEFT_ARROW)){
    ship.velocityX=-7;
  }else(
    ship.velocityX=0
  );
       
       if(keyIsDown(RIGHT_ARROW)){
        ship.velocityX=7;
      }else(
        ship.velocityX=0
      );
 
  if (frameCount%80==0){
    astroid=createSprite(950,-10,4,10);
    astroid.rotation=20;
    astroid.depth=0.1;
  astroid.addAnimation("doo",rockimage);
    astroid.velocityY=10;
   astroid.lifetime=350;
    astroid.x=Math.round(random(600,1400));
astroid.setCollider("aabb",0,0,35,10);
    astroidGroup.add(astroid);
  }
 
  drawSprites();
  
  stroke("black");
   textSize(20);
   fill("white");
   text("Health:"+score,600,2800);
  
   textSize(20);
   fill("white");
   text("Start Location: Mars", 800,2880)
   if(score==0){
  ship.velocityX=0;
  ship.velocityY=0;
  astroidGroup.velocityX=0;
  astroidGroup.velocityY=0;
   textSize(100)
   fill("white");
   text("GAME OVER",650,2480);
   
 }if(score<0){
   ship.velocityX=0;
   ship.velocityY=0;
   astroidGroup.velocityX=0;
   astroidGroup.velocityY=0;
  textSize(100)
  fill("white");
  text("GAME OVER",650,2480);
  if(ship.collide(uranas)){
    textSize(100)
    fill("white");
    text("YOU WIN!!!", 600,2480);
  }
}
}