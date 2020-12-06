class Log{
    constructor(x,y,height,angle){
        var options = {
            restitution : 0.8, 
            friction : 1,
            density : 1
        }
        this.body = Bodies.rectangle(x, y, 25,height,options)
        World.add(myWorld,this.body)
        this.height = height
        this.width = 20
        Matter.Body.setAngle(this.body,angle)
    }
    display(){
        var angle = this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        strokeWeight(5)
        stroke("black")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
    
}