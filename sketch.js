var canvas;
var music;
var box1 , box2 , box3 , box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,600);

     box1 = createSprite(90,500,150,20)
     box1.shapeColor="cyan"
    box2= createSprite(270,500,150,20)
     box2.shapeColor="purple"
 
      box4= createSprite(450,500,150,20)
     box4.shapeColor="magenta"
    box3 = createSprite(630,500,150,20)
    box3.shapeColor="orange"
ball=createSprite(700,300,50,50)
ball.shapeColor="white"
ball.velocityX=6;
ball.velocityY=5;

edges = createEdgeSprites ()

    //create box sprite and give velocity

}

function draw() {
    background("black");
    ball.bounceOff(edges)
if(box1.isTouching(ball)&&ball.bounceOff(box1)){
    ball.shapeColor="cyan"
    music.play()
    
}
if(box2.isTouching(ball)&&ball.bounceOff(box2)){
    ball.shapeColor="purple"
    music.play()
    
    
}if(box3.isTouching(ball)&&ball.bounceOff(box3)){
    ball.shapeColor="orange"
    music.play()
    
    
}if(box4.isTouching(ball)&&ball.bounceOff(box4)){
    ball.shapeColor="magenta"
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop()
    
    
}






drawSprites();

    //add condition to check if box touching surface and make it box
}