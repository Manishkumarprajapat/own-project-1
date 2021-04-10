const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bird,night,fire,rain,water,button;
var birdImage,nightImage,fireImage,rainImage,buttonImage;
var birdsound,firesound,rainsound,nightsound;
var tree,treeImg,cloudImg;

function preload() {
    birdImage = loadImage("birdside_01.png")
    nightImage = loadImage("star.png");
    
    fireImage = loadImage("fire.png");
    rainImage = loadImage("rain.png");
    buttonImage = loadImage("utton.png");

    birdsound = loadSound("Bird sound.m4a");
    nightsound = loadSound("Crow sound.m4a");
   
    firesound = loadSound("Fire.m4a");
    rainsound = loadSound("rain.m4a");

    treeImg = loadImage("tree 1.png");
    cloudImg = loadImage("cloud.png");
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    button = createSprite(100,10000,30,50);
  
   

tree=createSprite(200,400,30,30)


    


    bird  =createSprite(1205,130,10,10);
   
    button1 = createSprite(1205,300,1,1);
   
  //  bird.addSound(birdsound);

    star = createSprite(70,100,10,20);
   

    button3 = createSprite(200,100,30,50);
    
  //  night.addSound(nightsound);

    rain = createSprite(950,350,70,60);
   
    button2 = createSprite(950,550,30,50);
    
    cloud = createSprite(950,150,30,50);
    
    //rain.addSound(rainsound);

    fire = createSprite(650,450,40,90);
    

    button4 = createSprite(650,600,30,50);
  
   // fire.addSound(firesound);




    
}

function draw(){
    background("darkblue");
    drawSprites();
}
