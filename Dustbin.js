class Dustbin{
    constructor(midx,midy){
        this.options = {
            isStatic: true
        }

        this.mBody = Bodies.rectangle(midx, midy, 200, 20, this.options);
        this.lBody = Bodies.rectangle(midx-100, midy-40, 20, 100, this.options);
        this.rBody = Bodies.rectangle(midx+100, midy-40, 20, 100, this.options);
        
        World.add(world, this.mBody);
        World.add(world, this.lBody);
        World.add(world, this.rBody);
      }
      display(){
        var mpos =this.mBody.position;
        var lpos =this.lBody.position;
        var rpos =this.rBody.position;

        fill("grey");
        
        push();

        translate(mpos.x,mpos.y);
        rect(0, 0, 200, 20);
    
        pop();
        push();

        translate(lpos.x,lpos.y);
        rect(0, 0, 20, 100);
        pop();
        
        push();
        
        translate(rpos.x,rpos.y);
        rect(0, 0, 20, 100);
        pop();
        }
    }