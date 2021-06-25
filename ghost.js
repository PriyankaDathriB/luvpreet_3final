class Ghost {
    constructor(x,y,width,height) {
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
              this.sprite = createSprite(this.x,this.y,this.width,this.height);

    }
    display (){
        this.sprite.shapeColor = "yellow";
        ghostGroup.add(this.sprite);
        this.sprite.velocityX = -5;
        this.sprite.velocityY = 5;
    }
}