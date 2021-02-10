var movingRect,fixedRect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50,100);
  fixedRect=createSprite(200,200,100,50);
  rect1=createSprite(10,100,50,100);
  rect1.velocityX=3;
  rect2=createSprite(790,100,100,50);
  rect2.velocityX=-3;
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

}

function draw() {
  background(0);
  //text(mouseX+" "+mouseY,mouseX,mouseY)  ;
  //movingRect.y=World.mouseY;
  //movingRect.x=World.mouseX;
  if(isTouching(movingRect,rect1)){
  movingRect.shapeColor="red";
  rect1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    rect1.shapeColor="green";
  }
  bounceOff(rect1,rect2);
  console.log(movingRect.x-fixedRect.x);
  console.log(fixedRect.x-movingRect.x);
  drawSprites();
}
