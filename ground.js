class ground{
    constructor(x,y,height,width){
        var option={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,height,width,option)
    this.height=height;
    this.width=width;
    World.add(world,this.body);
    }
    display(){
var pos=this.body.position;
rectMode(CENTER);
rect(pos.x,pos.y,this.height,this.width)
    }
}