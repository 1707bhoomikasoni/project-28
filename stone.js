class Stones{
    constructor(x,y,radius){
var stoneOptions={
 isStatic:false,
 restitution:0,
 friction:1,
 density:1.2 
}
this.body=Bodies.circle(x,y,40,stoneOptions)   
this.image=loadImage("stone.png")
this.r=radius
World.add(world,this.body,this.r)
}
display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
}
}