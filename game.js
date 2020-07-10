class Game{
    constructor(){}




    getstate(){
var gamestateref=database.ref('gamestate');
gamestateref.on("value" ,function(data){
    gamestate=data.val()
})
}
 update(state){
     database.ref('/').update({
gamestate:state
     })
 }
 async start()
 { if(gameState === 0)
    { 
     player = new Player(); 
    var playercountref = await database.ref('playerCount').once("value"); 
    if(playercountref.exists())
    { playercount = playercountref.val(); 
        player.getCount(); }
     form = new Form() 
     form.display(); } 
car1=createSprite(100,200);
car2=createSprite(300,200);
car3=createSprite(500,200);
car4=createSprite(700,200);
cars=[car1,car2,car3,car4];




    }
play(){
    form.hide();
    Text("Game Start", 120,100);
    player.getplayerinfo();
    if(allplayers !==undefined ){
        var index=0;
        var x=0;
        var y;
var display_position=130;
for(var plr in allplayers){
index=index+1;
x=x+200;
y=displayHeight-allplayers[plr].distance;
cars[index-1].x=x;
cars[index-1].y=y;
if(index===player.index){
    cars[index-1].shapecolor="Red";
    camera.position.x=displayWidth/2;
    camera.position.y=cars[index-1].y;
}

    if (plr === "player" + player.index) 
    fill("red"); 
    else
     fill("black"); 
     display_position+=20; 
     textSize(15); 
     text(allplayers[plr].name + ": " + allplayers[plr].distance, 120,display_position)  
}
    
}
if(keyIsDown(UP_ARROW) && player.index !== null)
{ player.distance +=50 
    player.update();
}
    }
}
