
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
* `Canvas` for drawing images( Need to use Canvas to split the image into 9 equally pieces, and I don't know how yet)
* `HTML5` for effects rendering
* `Webpack` for the JS module bundler

In addition to the entry file, the following scripts are employed to support the game implementation:
* game.js: this script will handle the logic for start the game and reset the game. 
* player.js: this script will handle the logic for the player.
* puzzle.js: this script will handle the logic for the puzzle.


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


