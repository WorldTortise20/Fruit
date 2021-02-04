class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h3');
       this.title = createElement('h2');
       this.tell = createElement("h3");
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(displayWidth/4, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(displayWidth/3,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.tell.position(displayWidth/2,displayHeight-430);
        this.tell.html("Move with Left and Right Arrow Keys!");
        this.tell.style('background', 'lightgreen');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Ready Player " + player.index +": "+ player.name)
            this.greeting.position(displayWidth/4,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
            //this.tell.position(displayWidth/2,displayHeight-300);
        });

    }
}