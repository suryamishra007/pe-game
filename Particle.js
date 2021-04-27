class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {
        

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
    score()
    {
        if(particle!= null)
 {
   
   particle.display();
   if(this.body.position.y>600)
   {console.log("hello")
     if(this.body.position.x>0&&this.body.position.x<160)
     {
       score = score+500;
       
     }
     else if(this.body.position.x>160&&this.body.position.x<320)
     {
       score = score+200;
     }
     else if(this.body.position.x>320&&this.body.position.x<480)
     {
       score = score+100;
       
     }
     else if(this.body.position.x>480&&this.body.position.x<640)
     {
       score = score+200;
     }
     else if(this.body.position.x>640&&this.body.position.x<800)
     {
       score = score+500;
     }
     
   }
   particle = null;
 }
    }

};