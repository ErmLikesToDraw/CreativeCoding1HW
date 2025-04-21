var x = 50;
var y = 50;
var diameter = 25;
var mousex = 0
var mousey = 0
var speed = 10
var ellipsex = 375
var ellipsey = 100
var rectx = 100
var recty = 300


function setup() {
  createCanvas(500,400);
}

function draw() {
  background(500);
CreateGoal();
DrawEllipse();
EllipseBorders();
DrawRect();
RectBorders();
Player();
PlayerBorders();
playerMovement();
YouWin();
DrawSquare();
mouseClicked();

  
function playerMovement(){
    if (keyIsDown(83)) {
    y += 5;
  } else if (keyIsDown(87)) {
    y -= 5;
  }

  if (y >= 400) {
    y = 50;
  }
  if (x >= 600) {
    x = 50;
  }
  if (keyIsDown(68)) {
    x += 5;
  } else if (keyIsDown(65)) {
    x -= 5;
  }

}
 function Player(){
   fill(20,20,200)
   circle(x,y,diameter)
 }
  function PlayerBorders(){
       if (x >= 600) {
    x = 50;
  }
  if (y >= 400) {
    y = 50;
    
  }
  }
function DrawSquare(){
  fill(255,255,0)
  square(mousex,mousey, 50)
}
  function mouseClicked()
{
  mousex = mouseX;
  mousey = mouseY;
}
  function DrawRect(){
     rectx += random(-speed,speed);
  recty += random(-speed,speed);
  fill(220,20,60)
  rect(rectx,recty,50,75)
  }
  function RectBorders(){
      if(rectx >= 500)
    {
      rectx = 0
    }
  if(recty >= 400)
    {
      recty = 0
    }
  if(rectx <= 0)
    {
      rectx = 500
    }
  if(recty <= 0)
    {
      recty = 400
    }
  }
  function DrawEllipse(){
     fill(138,43,226)
  ellipsex += random(-speed,speed);
  ellipsey += random(-speed,speed);
  ellipse(ellipsex,ellipsey,25,60)
  }
  function EllipseBorders(){
      if(ellipsex >= 500)
    {
      ellipsex = 0
    }
  if(ellipsey >= 400)
    {
      ellipsey = 0
    }
  if(ellipsex <= 0)
    {
      ellipsex = 500
    }
  if(ellipsey <= 0)
    {
      ellipsey = 400
    }
  }
  function YouWin(){
     if (x >= 500){
     fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
  }
  }
  function CreateGoal(){
      fill(20,20,100)
  rect(490,0,30,400)
  }
}