import "./styles/index.scss";
import MemeGame from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {
    const player1Board = document.getElementById('player1Board');
    const player2Board = document.getElementById('player2Board');
    const game = new MemeGame(player1Board, player2Board)

    let selector = document.getElementById('images-selector')
    let meme = '';
    selector.addEventListener('click', e=>{
        meme = e.currentTarget.value
    })
    const start = document.getElementById('start');
    start.addEventListener('click', e=>{
        game.start(meme);
    })

    const reset = document.getElementById('reset');
    reset.addEventListener('click', e=>{
        game.reset(meme);
    })
});