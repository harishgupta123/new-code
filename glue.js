class chain {
    constructor(codeA,gokuB){
        var options = {
            bodyA : codeA,
            bodyB : gokuB,
            stiffness : 0.04,
            length : 10
        }

        this.glue = Constraint.create(options);
         World.add(world,this.glue);
    }
    display(){
        var pointA = this.glue.bodyA.position;
        var pointB = this.glue.bodyB.position;
        strokeWeight(4);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
