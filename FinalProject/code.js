function preload(){
     fly = loadImage("spritesheet (1).png")
     back1 = loadImage("backdrop1.png")
     city = loadImage("city.png")
     streetlight = loadImage("lights.png")
     back2 = loadImage("backdrop2.png")
     city2 = loadImage("city2.png")
     streetlight2 = loadImage("lights2.png")
     building = loadImage("blue.png")
     building2 = loadImage("blue2.png")
   }
   
   function setup() {
     createCanvas(1920, 1080);
     x = 0
     y = 0
   }
   
   let Dframe = 0;
   let Bframe = 0;
   let Cframe = 0;
   let Lframe = 0;
   let x
   let y
   let posX = 0
   let posY = 0
   let cposX = 0
   let cposY = 0
   let lposX = 0
   let lposY = 0
   let bposX = 2000
   let bposY = 0
   let xposX = 1920
   let xposY = 0
   let yposX = 1920
   let yposY = 0
   let eposX = 0
   let eposY = 0
   let wposX = 1920
   let wposY = 0
   function draw() {
     background(220);
     
     image(back2,bposX,0)
     
     bposX += -1
     bposY += -1
     
     if(bposX < 0) bposX = 2000
     
     image(back1,posX,0)
     
     posX += -1
     posY += -1
     
     if(posX < -2000) posX = 0
     
       image(building,eposX,0)
     
     eposX += -0.5
     eposY += -0.5
     
     if(eposX < -1920) eposX = 0
     
     image(building2,wposX,0)
     
     wposX += -0.5
     wposY += -0.5
     
     if(wposX < 0) wposX = 1920
     
     image(city,cposX,380)
     
     cposX += -2
     cposY += -2
     
     if(cposX < -1920) cposX = 0
     
     image(city2,xposX,380)
     
     xposX += -2
     xposY += -2
     
     if(xposX < 0) xposX = 1920
     image(fly,x+100,y+100,fly.height,fly.height,
     fly.height*floor(Dframe),0,fly.height,fly.height)
     
     Dframe += 0.1
     if(Dframe > 8) Dframe = 0
     
     if(keyIsPressed){
       if(key == "d"){
         x = x + 2
       }
     }
     if(keyIsPressed){
       if(key == "a"){
         x = x + -2
       }
     }
     if(keyIsPressed){
       if(key == "w"){
         y = y + -2
       }
     }
     if(keyIsPressed){
       if(key == "s"){
         y = y + 2
       }
     }
     image(streetlight,lposX,400)
     
     lposX += -4
     lposY += -4
     
     if(lposX < -1920) lposX = 0
     
     image(streetlight2,yposX,400)
     
     yposX += -4
     yposY += -4
     
     if(yposX < 0) yposX = 1920
     textSize(25)
     text("W,A,S,D",20,40)
   }