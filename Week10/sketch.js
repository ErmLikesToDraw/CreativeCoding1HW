var ReyeX = 160;
var ReyeY = 190;
var ReyeDiameter = 5;
var ReyeDirection = 3;

var LeyeX = 200;
var LeyeY = 190;
var LeyeDiameter = 5
var LeyeDirection = 6;

var HeadX = 190;
var HeadY = 190;
var HeadH = 150;
var HeadW = 180;
var HeadDirection = 1;

var RearX = 110;
var RearY = 205;
var RearDiameter = 20;
var RearDirection = 4;

var LearX = 270;
var LearY = 205;
var LearDiameter = 20;
var LearDirection = 7;

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(100,180,175,100);
  circle(RearX,RearY,RearDiameter);
  RearY+=RearDirection
  if(RearY >= 418 || RearY <= 10)
    {
     RearDirection *= -1;
     }
  circle(LearX,LearY,LearDiameter);
  LearY+=LearDirection
  if(LearY >= 418 || LearY <= 10)
    {
      LearDirection *= -1;
    }
  rect(165,250,50,200);
  ellipse(HeadX,HeadY,HeadH,HeadW);
  HeadX+=HeadDirection;
    if(HeadX >= 418 || HeadX <= 82)
    {
        HeadDirection *= -1;
    }
  HeadY+=HeadDirection;
  if(HeadY >= 400 || HeadY <= 82)
    {
      HeadDirection *= -1;
    }
  circle(ReyeX,ReyeY,ReyeDiameter);
  ReyeX+=ReyeDirection;
    if(ReyeX >= 418 || ReyeX <= 10)
    {
        ReyeDirection *= -1;
    }
  circle(LeyeX,LeyeY,LeyeDiameter);
  LeyeX+=LeyeDirection;
  if(LeyeX >= 418 || LeyeX <= 10)
    {
      LeyeDirection *= -1;
    }
  triangle(175,220,180,190,185,220);
  line(165,225,180,230);
  line(180,230,200,225);
  line(150,180,170,175);
  line(190,175,215,180);
  point(250,220);
  point(140,220);
  circle(210,183,2);
  circle(210,176,2);
  rect(90,320,200,300);
  quad(180,150,185,95,120,120,90,205);
  quad(180,150,185,95,260,120,280,200);
  textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Emily Milligan",160,40 );
  
}