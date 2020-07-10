class Form{
    constructor(){this.input = createInput("Name");
     this.button = createButton('Play');
      this.greet = createElement('h2');}


      hide(){ this.greet.hide(); 
        this.button.hide(); 
        this.input.hide(); }

    display(){
        var title = createElement("H2");
        title.html("Car Racing Game");
        var input = createInput("Name");
        var button = createButton("Play");
        var greet = createElement("H3");
        
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
    var name = input.value();
    playercount+=1;
    player.update(name);
    player.updateCount(playercount);
    greet.html("Hello!" +name);
    this.greet.position(displayWidth/2-70,displayHeight/4);
        })
    }
}