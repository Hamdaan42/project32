class b2{
     constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            }
            this.visibility=225
            this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

     score(){
      if (this.visibility<0 && this.visibility >-105) {
        score++;
      }
     }

      display(){
      if (this.body.speed<3) {
        var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      } else {
        World.remove(world,this.body)
        push()
        this.visibility=this.visibility-5
        pop()
      }
      
    }
}
    
    