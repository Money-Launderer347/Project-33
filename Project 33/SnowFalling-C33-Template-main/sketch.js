var backgroundImg;
var snow;

function preload() {
 backgroundImg = loadImage("snow3.jpg");
}




function setup() {
  createCanvas(800,400);

  snow = new Snow(200,200,100,80);

  
}

function draw() {
  background(backgroundImg);

  snow.display();
  
   
  drawSprites();
}