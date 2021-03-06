class Pig{
    constructor(x,y){
        var options = {
            restitution : 0.8, 
            friction : 1,
            density : 1
        }
        this.body = Bodies.rectangle(x, y, 50,50,options)
        World.add(myWorld,this.body)
        this.height = 50
        this.width = 50
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