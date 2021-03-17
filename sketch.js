var h,m,s;
var hhand,mhand,shand

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(400,200)
  rotate(-90);
  h = hour();
  m = minute();
  s = second();

  hhand = map(h%12,0,12,0,360)
  mhand = map(m,0,60,0,360)
  shand = map(s,0,60,0,360)

  push();
  rotate(shand);
  stroke("green")
  strokeWeight(3)
  line(0,0,100,0)
  pop();

  push();
  rotate(mhand)
  stroke("blue")
  strokeWeight(8)
  line(0,0,100,0)
  pop();

  push();
  rotate(hhand)
  stroke("red")
  strokeWeight(10)
  line(0,0,100,0)
  pop();

  stroke(255,20,150);
  point(0,0)
  strokeWeight(10)
  noFill();
  stroke("green");
  arc(0,0,320,320,0,shand)
  stroke("blue");
  arc(0,0,300,300,0,mhand)
  stroke("red");
  arc(0,0,280,280,0,hhand)

  drawSprites();
}