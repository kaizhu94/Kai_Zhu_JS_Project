import "./styles/index.scss";
import MemeGame from './scripts/game'



document.addEventListener("DOMContentLoaded", () => {
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

    
    const player1Board = document.getElementById('player1Board');
    const player2Board = document.getElementById('player2Board');
    
    const game = new MemeGame(player1Board, player2Board)
    
    const classes = document.getElementsByClassName('intro');
    const intro = classes[0]
    window.addEventListener('click', (e)=>{
        e.preventDefault();
        intro.classList.add('off');
    })

    
    let selector = document.getElementById('images-selector')
    let meme = '';
    selector.addEventListener('click', e=>{
        meme = e.currentTarget.value
    })

    const start = document.getElementById('start');
    start.addEventListener('click', e=>{
        // backgroundMusic.play();
        if(meme !== ''){
            if(game.playing){
                alert("You have a game runing, use reset for a new puzzle.")
            }else{
                game.start(meme);
            }
        }else{
            alert("Pick your favorite meme")
        }
    })

    const reset = document.getElementById('reset');
    reset.addEventListener('click', e=>{
        if(meme !== ''){
            game.reset(meme);
        }else{
            alert("You can't reset before start a game!")
        }
    })

    
    
});