class Box{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        var option={
            restitution:0.5,
            friction:0.2,
            density:0.5
        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,option)
        World.add(world,this.body)
    }
    display(){
        push ()//helps in adding new changes
        translate (this.body.position.x,this.body.position.y)//this helps in moving the object
        rotate (this.body.angle)//this helps moving the object based on the bodies angle 
        fill ("blue")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop ()//this helps us to get back the previous settings
    }
}