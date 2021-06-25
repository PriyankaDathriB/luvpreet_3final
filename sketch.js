var ground,player;
var monster,monsterImage,monsterGroup;
var obs,obsImage,obsGroup;
var ghost,ghostImage,ghostGroup;
var PLAY = 1;
var END= 0;
var gameState = "PLAY";
var lives = 3, KILLS;

function preload () {

}

function setup(){
    createCanvas(windowWidth,windowHeight);

    ground = createSprite(width,height-20,width*4,10);
    player = new Player(400,200,20,50);
     
    obsGroup = new Group();
    monsterGroup = new Group();
    ghostGroup = new Group();
    spawnObs();

    KILLS =  0;

}

function draw() {
    background("skyblue");
    
    
    player.display();
    if(gameState === "PLAY") {
       
        spawnMonsters();
        spawnGhost();
        if(player.sprite.isTouching(obsGroup)) {
            lives = lives - 1;
            player.sprite.x -=100;
            if(lives === 0){
                gameState = "END";
            }
            
        }

        if(player.sprite.isTouching(monsterGroup)) {
            monsterGroup.destroyEach();
            KILLS = KILLS+1;
        }

      /*  if(player.sprite.isTouching(ghostGroup))    {
            ghostGroup.destroyEach()
            gameState  = "END";
            monsterGroup.destroyEach();
            ghostGroup.setVelocityXEach(0);
            monsterGroup.setVelocityXEach(0);
           // player.sprite.addImage(gameOverImage)
            player.sprite.x=500
            player.sprite.y= 300
        }*/
    }

    if(gameState === "END"){
        
        player.sprite.destroy();
    }
    
    player.sprite.collide(ground);

    drawSprites();
    textSize(20);
    text("LIVES:" + lives,player.sprite.x+150,50);
    text("KILLS:" + KILLS,player.sprite.x+300,50);
 
}

   function spawnObs() {
      for(var i = 100; i< width*4; i+= random(600,1000)) {
          obs = new Obstacle(i,height-50,20,60);
          obs.display();
      }
   }
   function spawnMonsters() {
       if(frameCount%100 === 0) {
           var i = 1000;
           monster = new Monster(i,height-50,20,20);
           monster.display();
       }
   }

   function spawnGhost() {
       if(frameCount%320 === 0) {
       for(var i = 600; i< width*4; i+=random(600,1000))   {
           ghost = new Ghost(i,height-450,20,20);
           ghost.display();
       }
       }
   }

