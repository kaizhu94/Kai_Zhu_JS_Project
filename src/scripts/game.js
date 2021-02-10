import Puzzle from './puzzle';

export default class MemeGame{
    constructor(player1Board, player2Board){
        this.player1 = 1;
        this.player2 = 2;
        this.cavas1 = player1Board;
        this.cavas2= player2Board;
        this.playing = false;
        this.gameOver = false
    }
    updateGameOver(){
        this.gameOver = !this.gameOver
    }
    
    start(meme){
        this.playing = true;
        this.start = true;
        console.log("In game: "+ this.gameOver)
        this.player1Board = new Puzzle(this.cavas1, this.player1, this.start, this.updateGameOver);
        this.player2Board = new Puzzle(this.cavas2, this.player2, this.start,  this.updateGameOver);
        console.log("In game: "+ this.gameOver)
        this.player1Board.drawAllImage(meme);
        this.player2Board.drawAllImage(meme);
    }

    reset(meme){

        if(this.player1Board && this.player2Board){
            this.player1Board.reset(meme);
            this.player2Board.reset(meme);
        }else{
            alert("You can't reset a empty game!")
        }
    }
}