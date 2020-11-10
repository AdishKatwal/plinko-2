class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB;
        this.constraint = Constraint.create(options);
        World.add(world,this.constraint);
    }
    display(){
        var bodyA = this.constraint.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(5);
        stroke("black");
        line(pointB.x,pointB.y,bodyA.x,bodyA.y);
        pop();
        
    }
}