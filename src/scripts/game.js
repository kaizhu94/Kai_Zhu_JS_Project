import Puzzle from './puzzle';

export default class MemeGame{
    constructor(player1Board, player2Board){
        this.player1Board = new Puzzle(player1Board);
        this.player2Board = new Puzzle(player2Board)
    }

    start(meme){
        this.player1Board.drawAllImage(meme);
        this.player2Board.drawAllImage(meme);
    }

    reset(meme){
        this.player1Board.drawAllImage(meme);
        this.player2Board.drawAllImage(meme);
    }
}