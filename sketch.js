
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var background1,backgroundimage1
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundimage1 = loadImage("jungle-background-with-palm-vector-8536987.jpg")
 
}



function setup() {

  createCanvas(600,600)
  
background1 = createSprite(300,310,10,10);
background1.addImage(backgroundimage1)
  background1.scale = 1
  
  
  
  
   monkey = createSprite(60,450,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.2
  
   ground = createSprite(200,515,700,15)
  ground.visible = false 
  

 

  
  
  
  
  
  

  
}


function draw() {
  background("green")
  background1.velocityX = -3 

    if (background1.x < 0){
      background1.x = background1.width/2;
    }
  
   monkey.collide(ground)
  if(keyDown("Space")&& monkey.y>400 ){
    monkey.velocityY = -16
     monkey.velocityY = monkey.velocityY + 0.8
  }
   
  monkey.velocityY = monkey.velocityY + 0.8
drawSprites()
  
  if(frameCount%30===0){
     banana = createSprite(500,200,10,10)
  banana.velocityX = -10
  banana.addImage(bananaImage)
  banana.scale = 0.2
    banana.lifetime = 50
    
  }
  
  if(frameCount%40===0){
       
  obstacle = createSprite(400,450,10,10)
  obstacle.velocityX = -15
  obstacle.addImage(obstacleImage)
  obstacle.scale = 0.3
    obstacle.lifetime = 27
  }
    
  
}






