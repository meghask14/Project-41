var man, manWalking;
var lightning, light;
var dropImg;

function preload(){
    manWalking = loadAnimation("yo/walking_1.png","yo/walking_2.png","yo/walking_3.png",
    "yo/walking_4.png","yo/walking_5.png","yo/walking_6.png","yo/walking_7.png","yo/walking_8.png");

    light = loadAnimation("yoo/1.png", "yoo/2.png", "yoo/3.png", "yoo/4.png");

    dropImg = loadImage("yoo/drop.png");
    
}

function setup(){
    createCanvas(600,600);

    man = createSprite(300, 460, 40, 40);
    man.addAnimation("walking", manWalking);
    man.scale = 0.4;

    lightning = createSprite(300, 100, 40, 40);
    lightning.addAnimation("striking", light);
    lightning.scale = 0.3;
   
    
}

function draw(){
    background("black");

    spawnDrops();


    drawSprites();
    
}   


function spawnDrops() {
    if (frameCount % 60 === 0) {
      var drops = createSprite(600,30,40,10);
      drops.x = Math.round(random(600,30));
      drops.addImage(dropImg);
      drops.scale = 0.05;
      drops.velocityY = 5;
      
      drops.depth = man.depth;
      man.depth = man.depth + 1;
      
    }
    
  }

