const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
divisions = []
var divisionHeight = 300;
var plinkos = [];
var particles = [];
var score = 0;
var turn = 0;
function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    
    //row 1
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }
    //row 2
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }
    for (var i = 0; i<500; i = i+80){
      divisions.push(new Divisions(i,550,10,divisionHeight));
   }
   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,360));
   }
   
  ground = new Ground(600,700,1200,20);
 // part1 = new Particle(200,10,5);
}

function draw(){
    background("blue");
    Engine.update(engine);
    
    for (var i = 0; i < divisions.length; i++) {
     
      divisions[i].display();
    }
    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(100, 400), 10,10));
    }
    for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }
    ground.display();
}


