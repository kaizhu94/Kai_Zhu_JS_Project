import "./styles/index.scss";
import MemeGame from './scripts/game'



document.addEventListener("DOMContentLoaded", () => {
    const backgroundMusic = document.getElementById('background_music')
    let isMusicOn = false;

    document.addEventListener('keydown', e =>{
        if (e.key === ' ' || e.key === 'Spacebar') {
            if(isMusicOn){
                backgroundMusic.pause();
                isMusicOn = false;
            }else{
                backgroundMusic.play();
                isMusicOn = true;
            }
        }
    })

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
   

    const xButton = document.getElementById('xButton');
    xButton.addEventListener('click', (e)=>{
        e.preventDefault();
        intro.classList.add('off');
    })

    const questionMark = document.getElementById('question');
    questionMark.addEventListener('click', (e)=>{
        e.preventDefault();
        intro.classList.remove('off');
    })

    const originMeme =  document.getElementById('original-meme');
    
    let meme = '';
    let selector = document.getElementById('images-selector')
    selector.addEventListener('change', e=>{
        e.preventDefault();
        meme = e.target.value
        originMeme.src = `https://raw.githubusercontent.com/kaizhu94/Kai_Zhu_JS_Project/gh_pages/dist/images/${meme}`+'.PNG';
        originMeme.classList.add('show');
    })


    const start = document.getElementById('start');
    start.addEventListener('click', e=>{
        e.preventDefault();
        if(meme.length !== 0){
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
        // e.preventDefault();
        if(meme.length !== 0){
            game.reset(meme);
        }else{
            alert("You can't reset before start a game!")
        }
    })
});