var canvas;
var music;
var surface1, surface2, surface3, surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

 //create 4 different surfaces
    surface1 = createSprite(100, 550, 150, 20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(280, 550, 150, 20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(460, 550, 150, 20);
    surface3.shapeColor = "red";

    surface4 = createSprite(640, 550, 150, 20);
    surface4.shapeColor = "green";

 //create box sprite and give velocity

    ball = createSprite(random(20,750), 150, 40, 40);
    ball.shapeColor = "black";
    ball.velocityY = 5;
    ball.velocityX = 5;
    

    edges = createEdgeSprites();



}

function draw() {
    background("pink");

    if(surface1.isTouching(ball)&& ball.bounceOff(surface1)){
        ball.shapeColor = "blue";
    }

    
    if(surface3.isTouching(ball)&& ball.bounceOff(surface3)){
        ball.shapeColor = "red";
    }

    if(surface2.isTouching(ball)&& ball.bounceOff(surface2)){
        ball.shapeColor = "orange";
        music.start();
    }

    if(surface4.isTouching(ball) ){
        ball.shapeColor = "green";
        ball.velocityX = 0
        ball.velocityY=0;
        music.stop()
    }

 //create edgeSprite
    createEdgeSprites();

    ball.bounceOff(edges)



    drawSprites();


    //add condition to check if box touching surface and make it box
}
