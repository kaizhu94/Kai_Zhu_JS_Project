# Meme Puzzle Generator
[Live Demo]()

## Background
Have you ever fight for a meme with your friends because you want to show that you loved this meme so much. Here is where Meme Puzzle Competition comes in. In this game, you can compete with a friend for the speed in solving the puzzle. The more you love the meme, the faster you can do it!

***

## Functionality & MVP
In this game, users will be able to :
* [ ] Start and reset the game board
* [ ] Move a slice of puzzle by clicking on the movable slice
* [ ] Move a slice of puzzle by using keyboard 'WASD'(player1) and Arrows(player2)
* [ ] End the game when he or she solved the puzzle before the other player

Bonus MVP:
* [ ] Start and Pause the background music
* [ ] Select different puzzles


***

## Wireframes
This app will be a single screen app. The navbar will include the the Github link, LinkedIn Link, and the README. The game control will include start, reset and select puzzle. On the main, the board will contain two puzzles, player1 and player2. Whoever is the winner, his or her name will pop on the hearder.


![image](https://user-images.githubusercontent.com/71399999/107162237-cc9c1700-696f-11eb-8ed2-b1547b1cafda.png)


***

## Architecture and Technologies
* `Javascript` for game logic
* `Canvas` for drawing images
* `HTML5` for effects rendering
* `Webpack` for the JS module bundler

In addition to the entry file, the following scripts are employed to support the game implementation:
* game.js: this script will handle the logic for start the game and reset the game.
* puzzle.js: this script will handle the logic for the puzzle.


***

## Challenges
* Google's new Audio police requires user interact with the DOM before autoplay the music.
```Javascript
    const backgroundMusic = document.getElementById('background_music')
    let isMusicOn = false;
    function playMusic(){
        backgroundMusic.play();
        isMusicOn = true;
        document.removeEventListener('keypress', playMusic)
    }

    document.addEventListener('keypress', playMusic)

    const pauseMusic = document.getElementById('pause');

    pauseMusic.addEventListener('click', (e)=>{
        e.preventDefault();
        if(isMusicOn){
            backgroundMusic.pause();
            isMusicOn = false;
        }else{
            backgroundMusic.play();
            isMusicOn = true;
        }
    })
```
* To update the puzzle, first of all, need to determine which key being press then find out which piece is movable around the empty space. Set that piece as current position and empty spot will be the target position. Employed Canva to clear image on the old position and draw the new one on the new position.
```Javascript
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
            let target = this.moveImageIfCanAtPosition(this.imageIndex, this.puzzle, position);
            if (target >= 0) {
                this.refreshImagePositions(this.context, this.imageIndex, position, target);
            }
        });
```
* Mouse click requires to use offset and parseInt methods to caluculate current row and column the user is clicking on the puzzle.
```javascript
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

                e.preventDefault();
                this.printWinner();
            }
        });
```
***

## Implementation Timeline
### Day 1
* Set up webpack and node modules
* Set up Canvas for the game
* Seed images for the puzzle.
* Build up script for the game

### Day 2
* Figure out how to split image using canvas
* Build up script for the puzzle.
* Connect puzzle with the game.

### Day 3
* Completed the backend Game logic for how the slice move.
* Add second player to the game
* Add selector for images

### Day 4
* Wrapped up with styling front end 
* Testing any bugs


