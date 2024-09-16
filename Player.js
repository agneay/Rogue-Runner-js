export class Player{
    constructor(game){
        this.game = game;
        this.height = 91.3;
        this.width = 100;
        this.image = document.getElementById("player");
        this.x =0;
        this.y =this.game.height - this.height;
    }

    update(){
        
    }

    draw(context){
        context.drawImage(this.image,0,0,this.width,this.height,this.x,this.y,this.width,this.height);
    }
}