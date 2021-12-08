
var pathImg;
var path;
var runnerImg;
var runner;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");
  //create sprites here
  path=createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2
  runner=createSprite(200, 300, 200, 400);
  runner.addAnimation("runner", runnerImg);
  runner.scale = 0.10;

  leftBoundary=createSprite(70, 200, 20, 400);
  rightBoundary=createSprite(340, 200, 20, 400);
 leftBoundary.visible = false
 rightBoundary.visible = false
 
}

function draw() {
  background(0);
  drawSprites();
  if (path.y > 400)
  {
    path.y=height/2;
  }
  runner.x=World.mouseX;
 edges =  createEdgeSprites();
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  runner.collide(edges)

}
