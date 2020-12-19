class Mango{
    constructor(x,y,radius){
        var mangoOptions={
            isStatic:true,
            restitution:0,
            friction:1
        }
    this.body=Bodies.circle(x,y,radius,mangoOptions)
    this.image=loadImage("mango.png")
    this.r=radius
    World.add(world,this.body,this.r)
     }
     display(){
       imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
     }
}