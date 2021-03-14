class Log extends BaseClass{
  constructor(x, y, height, angle) {

    super(x,y,20,height, angle);  ///call baseclass property
    this.image = loadImage("sprites/wood2.png")
    Matter.Body.setAngle(this.body, angle);

  }
  
}
