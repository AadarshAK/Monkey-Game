
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;
var bc=0;
var forest;
var forestI;
var csk;
var play=1;
function preload(){
  
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  forestI=loadImage("jungle.jpg");
  csk=loadSound("CSK.mp3");
}



function setup() {
  createCanvas(600,600);
    forest=createSprite(300,300,600,600);
  forest.addImage(forestI);
      monkey=createSprite(100,420,20,20);
    monkey.addAnimation("RCB",monkey_running);
    monkey.scale=0.2;
  ground = createSprite(300,480,600,10);
  bananaGroup=new Group();
  obstacleGroup=new Group();




       
}


function draw() {
  background("white");
            forest.velocityX=-2;

    if (forest.x < 110){
      forest.x = forest.width/2;
    }


  if(monkey.scale<=0){
    monkey.scale=0.2; }

  if((keyDown("space"))&&monkey.y>=280){
    monkey.velocityY=-20; 

   }   

    if(keyDown("p")){
      csk.play();
    }
  

    
    
      monkey.lifetime=-1;
      
      monkey.velocityY=monkey.velocityY+0.8;
     monkey.collide(ground);  

    ground.visible=false;
  
  bananafun();
  stones();
  
    score = score + Math.round(getFrameRate()/60);
  
  
  
  if(monkey.isTouching(obstacleGroup)){
       bananaGroup.destroyEach();
    monkey.scale=monkey.scale-0.12;

  }
  
  
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    bc=bc+1;
    monkey.scale=monkey.scale+0.12;
  }
  
  if(keyDown("r")&&play===0){
    monkey.visible=true;
    play=1;
  }

  
  console.log("Forest.x : ",forest.x)
  
console.log("frameCount : "+frameCount);
  drawSprites();
  fill("red");//221
  textSize(32);
  stroke("white");
  text("Score : "+score,400,30);
  text("Bananas collected : "+bc,25,30);
}



function bananafun(){
  if(frameCount%80===0){
   banana=createSprite(550,300,20,20);
   banana.velocityX=-4;
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.y=Math.round(random(120, 200));
   bananaGroup.add(banana);
   bananaGroup.setLifetimeEach=-1;
  }

}


function stones(){
  if(frameCount%200===0){
   obstacle=createSprite(550,440,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.20;
   obstacle.velocityX= -(4 + 3*score/10);
  obstacleGroup.setLifetimeEach=-1;
  obstacleGroup.add(obstacle);
  }
}