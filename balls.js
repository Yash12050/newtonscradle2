class Ball {
    constructor(x,y,width){
        var options = {
            'restitution':1.5,
            'friction':0.0,
            'density':5.0
        }
        this.body = Matter.Bodies.circle(x,y,width,options);
        this.width = width;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(100);
        ellipse(pos.x,pos.y,this.width);
    }
}