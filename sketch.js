var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "blue";
  gameObject1.velocityX = 3;

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "pink";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "purple";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "cyan";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(gameObject1,gameObject4)){

 
     movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";


  }
  else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  }
  
  bounceOff(gameObject1,gameObject3)
  drawSprites();
}



