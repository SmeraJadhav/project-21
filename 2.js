var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;




function preload(){
    music = loadSound("music.mp3");
   
    

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1= createSprite(random(20,750));
    surface1.shapeColor=red;
    surface2= createSprite(random(20.750));
    surface2.shapeColor=yellow;
    surface3= createSprite(random(20.750));
    surface3=createSprite= green;
    surface4= createSprite(random(20.750));
    surface4.shapeColor=blue;
    

    //create box sprite and give velocity
      box=createSprite(300,400);
      box.shapeColor=white;
      box.velocityX = 0;
      box.velocityY = 2;
    
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
   if(box.isTouching(surface1)){
       
   }

   if(surface1.isTouching(box) && box.bounceOff(surface1)){
    changeColor(red);
  }

   if(surface2.isTouching(box) && box.bounceOff(surface2)){
    changeColor(yellow);
   }

   if(surface3.isTouching(box) && box.bounceOff(surface3)){
    changeColor(green);
   }

   if(surface4.isTouching(box) && box.bounceOff(surface4)){
    changeColor(blue);
   }

   if(block2.isTouching(ball)){
    ball.shapeColor= rgb(255,128,0);
    ball.velocityX=0;
    music.stop();

   }




    drawSprites();
}
