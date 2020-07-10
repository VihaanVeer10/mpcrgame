var form, player, game;
var canvas;
var bgimg;
var database;
var gamestate=0;
var playercount;
var allplayers;
var distance=0;
var cars,car1,car2,car3,car4;

function setup(){
  canvas=createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  console.log(database);
game=new Game();
game.getstate();
game.start();

}

function draw(){
  background("white");
  if(playercount===4){
    game.update(1);

  }
  if(gamestate===1){
    clear();
    game.play();
  }
  
    
    drawSprites();
  
}

