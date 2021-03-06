class Paper{
    constructor(){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(30, 600, 20, 20, options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.width, this.height);
    }
}