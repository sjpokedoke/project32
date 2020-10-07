class Box{
  constructor(x, y, width, height) {
      var options = {
        isStatic: false,
          'restitution':0.4,
          'friction':0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.visibility = 255;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<5){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
      } else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        pop();
      }
    }
    score(){
      if(this.visibility<0&&this.visibility>-105){
        score++;
      }
    }
}