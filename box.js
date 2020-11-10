class Box{
    constructor(x,y,width,height){
      
        var options = {
            isStatic: false,
            density: 0.05,
            restitution: 0.8,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height=height;
        World.add(world,this.body);
        
    }
    display(){
      
        var angle;
        var pos = this.body.position;
        angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}