
export default class Puzzle{

    constructor(convas){
        this.puzzle = convas;
        this.context = convas.getContext("2d");
        this.puzzleWidth = 300;
        this.padding = 2;
        this.column = 3;
        this.imageWidth = (this.puzzleWidth - (this.padding * (this.column + 1))) / this.column;
    
        this.imageIndex = [0,1,2,3,4,5,6,7,8]
    }


    // return the last index
    lastIndex() {
        return this.column * this.column - 1;
    }

    // recalculate the starting point of drawing an image
    rectForPosition(position) {
        if (position < 0 || position > this.lastIndex()) {
            return [0, 0, 0, 0];
        }
        let x = (position % this.column) * (this.padding + this.imageWidth) + this.padding;
        let y = parseInt(position / this.column) * (this.padding + this.imageWidth) + this.padding;
        
        return [x, y, this.imageWidth, this.imageWidth];
    }

    // drawing a single piece of puzzle
    drawPiece(meme, index, position) {
        // console.log('index' + index)
        let img = new Image();
        img.src = `../../dist/images/${meme}` + String(index+1) + '.jpg';
        img.onload = () => {
            let rect = this.rectForPosition(position);
            console.log('position: '+ position)
            console.log('rect: '+ rect)
            this.context.drawImage(img, rect[0], rect[1], rect[2], rect[3]);
        }
    }

    // draw whole puzzle, skip the last one.
    drawAllImage(meme){
        for (let position = 0; position < this.column * this.column; position++) {
            let index = this.imageIndex[position];
            if (index === this.lastIndex()) {
                continue;
            }
            // console.log('index' + index)
            this.drawPiece(meme,index, position);
        }
    }

}