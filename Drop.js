class Drop{
    constructor(x,y){
        this.body = Bodies.circle(x,y,5);
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x, pos.y,10,10);
    }

    repositionDrop(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,400)});
        }
    }
    
    
}