class Player{
    constructor(){
        this.index = null; 
        this.distance = 0; 
        this.name = null;
    }

    static getplayerinfo()
    { var playerinforef = database.ref('players'); 
    playerinforef.on("value",(data)=>{ allPlayers = data.val(); }) }



    getCount(){
        var playercountref= database.ref("playercount");
    playercountref.on("value" , function(data){
        playercount=data.val()

    })
    }
    updateCount(count){
        database.ref('/' ).update({
            playercount:count
        })

        
    }
update(name){
    var playerindex="player" +playercount;
    database.ref(playerindex).set({
        name:name
    })
    
}
}