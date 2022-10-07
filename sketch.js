var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(45,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(300,180,600,20);
 ground.velocityX=-5

ground.addImage(groundImage)

invisibleGround=createSprite(300,190,600,10)
invisibleGround.visible=false

}

function draw() {
  background(220);

  //jumping the trex on space key press
  if(keyDown("space")&& trex.y>150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  console.log(trex.y)
  if (ground.x <0){
    ground.x=300
  }
 
 //stop trex from falling down 
  trex.collide(invisibleGround);
  
  drawSprites();
}
