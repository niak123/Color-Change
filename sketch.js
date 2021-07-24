
var box 
function setup() {
  createCanvas(400,400);
  background(51);
  box=createSprite(200,200,20,20);
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)){
    background("teal");
  }
  if (keyIsDown(LEFT_ARROW)){
    background("purple");
  }
  if (keyIsDown(UP_ARROW)){
    background("pink");
  }
  if (keyIsDown(DOWN_ARROW)){
    background("green");
  }
  drawSprites()
;}




