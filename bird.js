class Bird extends BaseClass{//extends keyword tell you that this a child class
    constructor(x, y) {
      super(x,y,50,50);  ///call baseclass property
      this.image = loadImage("sprites/bird.png")
    }
    display(){//overriidding of the function means u r changing the baseclass function.
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  };
  