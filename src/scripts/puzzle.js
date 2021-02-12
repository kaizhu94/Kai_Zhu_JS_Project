
export default class Puzzle{

    constructor(convas, player, start, setGameOver){
        this.player = player;
        this.puzzle = convas;
        this.context = convas.getContext("2d");
        this.puzzleWidth = 300;
        this.padding = 2;
        this.column = 3;
        this.imageWidth = (this.puzzleWidth - (this.padding * (this.column + 1))) / this.column;
    
        this.emptyPosition = 0;
        this.imageIndex = this.setupRandomPosition(this.puzzle)
        this.correctIndex=[0,1,2,3,4,5,6,7,8]

        this.gameOver = false;
        this.setGameOver = setGameOver;
        this.gameStart = start || false;

       

        this.puzzle.addEventListener('mousedown', (e)=>{
            if (this.gameOver) {
                return;
            }
            let x = parseInt(e.offsetX / (this.padding + this.imageWidth));
            let y = parseInt(e.offsetY / (this.padding + this.imageWidth));

            let position = y * this.column + x;
            let target = this.moveImageIfCanAtPosition(this.imageIndex, this.puzzle, position);
            
            if (target >= 0){
                this.refreshImagePositions(this.context, this.imageIndex, position, target);
            }
            if (this.checkIfFinished(this.imageIndex)) {
                this.drawPiece(this.meme ,this.imageIndex[this.lastIndex()], this.lastIndex());
                this.gameOver = true;
                this.setGameOver();
                // console.log('gameover in keyup inner loop: '+this.gameOver)
            }
        });

        document.addEventListener('keydown', (e)=>{
            
            let position = -1;
            if(this.player === 2){
                if (e.key== 'ArrowLeft') {  // left
                    position = this.rightOfPosition(this.puzzle.emptyPosition);
                } else if (e.key == 'ArrowUp') { // up
                    position = this.bottomOfPosition(this.puzzle.emptyPosition);
                } else if (e.key == 'ArrowRight') { //right
                    position = this.leftOfPosition(this.puzzle.emptyPosition);
                } else if (e.key == 'ArrowDown') { // down
                    position = this.topOfPosition(this.puzzle.emptyPosition);
                }
            } else{
                if (e.key == 'a') { // A
                position = this.rightOfPosition(this.puzzle.emptyPosition);
            } else if (e.key == 'w') { // W
                position = this.bottomOfPosition(this.puzzle.emptyPosition);
            } else if (e.key == 'd') { // D
                position = this.leftOfPosition(this.puzzle.emptyPosition);
            } else if (e.key == 's') { // S
                position = this.topOfPosition(this.puzzle.emptyPosition);
            }
            }
            
            
        
            if (this.gameOver) {
                return;
            }
        
            if (position < 0 || position > this.lastIndex()) {
                return;
            } 
        
           
            // console.log('position: ' + position)
            // console.log('imageIndex:' +this.imageIndex)
            let target = this.moveImageIfCanAtPosition(this.imageIndex, this.puzzle, position);
            // console.log('target: ' + target)
            if (target >= 0) {
                
                this.refreshImagePositions(this.context, this.imageIndex, position, target);
            }
            // console.log('gameover in keydown: '+this.gameOver)
        });
        
        document.addEventListener('keyup', (e)=>{
            
            if (this.checkIfFinished(this.imageIndex)) {
                this.drawPiece(this.meme ,this.imageIndex[this.lastIndex()], this.lastIndex());
                this.gameOver = true;
                this.setGameOver();
                
                e.preventDefault();
                console.log("player: "+ this.player)
                if(this.player == 1){
                    const wM = document.getElementById("winner_message_1");
                    wM.classList.add('show')
                }else{
                    const wM = document.getElementById("winner_message_2");
                    wM.classList.add('show')
                }
            }
        })
        
    }
    gameFinished(){
        this.gameOver = true;
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
        this.meme = meme;

        let img = new Image();
        img.src = `../../dist/images/${meme}` + String(index+1) + '.jpg';
        img.onload = () => {
            let rect = this.rectForPosition(position);
            // console.log('position: '+ position)
            // console.log('rect: '+ rect)
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

    //gives a randon position array
    setupRandomPosition(canvas) {
        let list1 = [4, 3, 2, 8, 0, 7, 5, 6, 1];
        let list2 = [2, 0, 5, 6, 8, 7, 3, 1, 4];
        let list3 = [3, 7, 2, 4, 1, 6, 8, 0, 5];
        let list4 = [3, 2, 4, 1, 7, 6, 5, 0, 8];
        let lists = [list1, list2, list3, list4];
    
        let imageIndexForPosition = lists[parseInt(Math.random() * 4)];
    
        
        for (let i = imageIndexForPosition.length - 1; i >= 0; i--) {
            if (imageIndexForPosition[i] == this.lastIndex()) {
                this.emptyPosition = i;
                break;
            }
        }
        canvas.emptyPosition = this.emptyPosition;
        
    
        
        let times = 10;
        while (times--) {
            
            let direction = parseInt(Math.random() * 4);
    
            let target = -1;
            if (direction == 0) {
                target = this.topOfPosition(this.emptyPosition); 
            } else if (direction == 1) {
                target = this.leftOfPosition(this.emptyPosition); 
            } else if (direction == 2) {
                target = this.rightOfPosition(this.emptyPosition);  
            } else if (direction == 3) {
                target = this.bottomOfPosition(this.emptyPosition);  
            }
            if (target < 0 || target > this.lastIndex()) {  
                continue;
            }
            // console.log('imageIndexForPosition in randomsetup: '+ imageIndexForPosition)
            let result = this.moveImageIfCanAtPosition(imageIndexForPosition, canvas, target);
            if (result >= 0) { 
                this.emptyPosition = target;
            }
        }
    
        return imageIndexForPosition;
    }

    // return true if that positon is empty
    isPositionEmpty (imageIndexForPosition, position) {
        // console.log("imageIndexForPosition in isPosition: "+ imageIndexForPosition)
        if (position < 0 || position > this.lastIndex()) {
            return false;
        } 
        if (imageIndexForPosition[position] === this.lastIndex()) {
            return true;
        } else {
            return false;
        }
    }

    //test which direct is possible to move
    moveImageIfCanAtPosition(imageIndexForPosition, canvas, position) {
        let top = this.topOfPosition(position);
        let left = this.leftOfPosition(position);
        let bottom = this.bottomOfPosition(position);
        let right = this.rightOfPosition(position);
        // console.log("imageIndexForPosition: "+imageIndexForPosition)
        let targetPositioin = -1; 
        if (this.isPositionEmpty(imageIndexForPosition, top)) {
            targetPositioin = top;
        } else if (this.isPositionEmpty(imageIndexForPosition, left)) {
            targetPositioin = left;
        } else if (this.isPositionEmpty(imageIndexForPosition, bottom)) {
            // console.log("check for bottom: "+ bottom)
            targetPositioin = bottom;
        } else if (this.isPositionEmpty(imageIndexForPosition, right)) {
            targetPositioin = right;
        }
    
        // console.log('targetPositioin in moveIf can:'+targetPositioin )
        if (targetPositioin >= 0) {
            imageIndexForPosition[targetPositioin] = imageIndexForPosition[position];
            imageIndexForPosition[position] = this.lastIndex();
            canvas.emptyPosition = position; 
            return targetPositioin;
        }
        return -1;
    }

    //clear image on the old position, and draw new image on new position
    refreshImagePositions(context, imageIndexForPosition, origin, target) {
        let originRect = this.rectForPosition(origin);
    
        context.clearRect(originRect[0], originRect[1], originRect[2], originRect[3]);

        // console.log("In refresh")
        // console.log('target: ' + target)
        this.drawPiece(this.meme, imageIndexForPosition[target], target);
    }

    checkIfFinished(imageIndex) {
        // console.log("in checkIfFinish: "+ imageIndex)
        // console.log('correctIndex' + this.correctIndex)
        for (let index = 0; index < imageIndex.length; index++) {
            if (imageIndex[index] !== this.correctIndex[index]) {
                return false;
            }
        }
        return true;
    }

    reset(meme){
        if(this.gameStart){
            this.context.clearRect(0, 0, this.puzzle.width, this.puzzle.height);
            this.imageIndex = this.setupRandomPosition(this.puzzle);
            this.drawAllImage(meme)
            this.gameOver = false
        }
    }

    //return true if it is valid to move left
    leftOfPosition(position) {
        return (position % this.column) === 0 ? -1 : position - 1;
    }

    //return true if it is valid to move right
    rightOfPosition(position) {
        return (position % this.column) === (this.column - 1) ? -1 : position + 1;
    }

   //return true if it is valid to move top
    topOfPosition(position) {
        return position - this.column;
    }

  //return true if it is valid to move down
    bottomOfPosition(position) {
        return position + this.column;
    }

}