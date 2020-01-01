class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png");
    this.smoke = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){

      var array = [this.body.position.x,this.body.position.y];
      this.smoke.push(array);
    }
    for(var I = 0;I < this.smoke.length;I++){
      image(this.smokeimg,this.smoke[I][0],this.smoke[I][1]);
    }
    
  }
}
