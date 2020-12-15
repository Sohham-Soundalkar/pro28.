class Tree{

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        this.body.image = loadImage("tree.png");
        this.body.image.setScale = 2;
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        var pos = this.body.position;
        image(this.body.image, pos.x, pos.y, 400, 600);
    }
}