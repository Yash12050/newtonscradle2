class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 300
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }



    display(){    
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        stroke(250,55,125);
        //strokeWeight(7);
        line(pointA.x, pointA.y, pointB.x, pointB.y);   
    }   
}
