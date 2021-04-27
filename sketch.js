var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisions = [];
var plinkos = [];

var score = 0;
var particle;
var count = 0;

var gameState = "play"




var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  t = new Ground(40,500,20,20)


   for (var k = 0; k <=width; k = k + 160) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,100));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,150));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,200));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,250));
    }

    

    
}
 


function draw() {
  background("white");
  Engine.update(engine)

  //t.display();

  if(frameCount%60===0)
   {
     particles.push(new Particle(random(width/2+100,width/2-100),10,10))
     score++
   }

  textSize(20)
 text("Score : "+score,20,30);

 
 text("500",100,600);
 text("200",250,600);

 text("100",400,600);

 text("200",575,600);
 text("500",750,600);

 

  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display(); 
   }
   

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     particles[j].score();

   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}

