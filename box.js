class box{
    constructor(x,y,height,width){
        var option={
            restitution:0.8
        }
    this.body=Bodies.rectangle(x,y,height,width)

    this.height=height
    this.width=width;
    World.add(world,this.body);
    }
    display(){
var pos=this.body.position;

var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.height,this.width)
pop();
    }
}