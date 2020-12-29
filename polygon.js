class Polygon{
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){
      
      push()
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 50);
      pop();
    }
  };
