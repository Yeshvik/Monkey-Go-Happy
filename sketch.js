
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 300); 
 
  monkey = createSprite(80, 200, 20, 20);
  monkey.addAnimation("moving" ,monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,230,1200,5);
  ground.x = ground.width /2;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
  
  ground.velocityX = -4;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/frameRate())
  text("Survival Time:"+survivalTime,250, 20)
  
  if (monkey.isTouching(foodGroup)){
    foodGroup.destroyEach();
  }
  
  
  
  spawnFood();
  spawnObstacles();
  
 drawSprites();
}

function spawnFood(){
  if (frameCount%150==0){
   banana = createSprite(600, Math.round(random(100,150)), 20, 20);
   banana.velocityX = -4;
   banana.lifetime = 150;
   banana.addImage(bananaImage)
   banana.scale = 0.1;
   foodGroup.add(banana);
  }  
}
function spawnObstacles(){
  if (frameCount%150==0){
   obstacle = createSprite(600, 215, 20, 20);
   obstacle.velocityX = -4;
   obstacle.lifetime = 150;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacleGroup.add(obstacle);
  }
}




