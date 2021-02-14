!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(0);function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t,i,n,o){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=i,this.puzzle=t,this.context=t.getContext("2d"),this.puzzleWidth=300,this.padding=2,this.column=3,this.imageWidth=(this.puzzleWidth-this.padding*(this.column+1))/this.column,this.emptyPosition=0,this.imageIndex=this.setupRandomPosition(this.puzzle),this.correctIndex=[0,1,2,3,4,5,6,7,8],this.gameOver=!1,this.setGameOver=o,this.gameStart=n||!1,this.puzzle.addEventListener("mousedown",(function(e){if(!s.gameOver){var t=parseInt(e.offsetX/(s.padding+s.imageWidth)),i=parseInt(e.offsetY/(s.padding+s.imageWidth))*s.column+t,n=s.moveImageIfCanAtPosition(s.imageIndex,s.puzzle,i);n>=0&&s.refreshImagePositions(s.context,s.imageIndex,i,n),s.checkIfFinished(s.imageIndex)&&(s.drawPiece(s.meme,s.imageIndex[s.lastIndex()],s.lastIndex()),s.gameOver=!0,s.setGameOver(),e.preventDefault(),s.printWinner())}})),document.addEventListener("keydown",(function(e){var t=-1;if(2===s.player?"ArrowLeft"==e.key?t=s.rightOfPosition(s.puzzle.emptyPosition):"ArrowUp"==e.key?t=s.bottomOfPosition(s.puzzle.emptyPosition):"ArrowRight"==e.key?t=s.leftOfPosition(s.puzzle.emptyPosition):"ArrowDown"==e.key&&(t=s.topOfPosition(s.puzzle.emptyPosition)):"a"==e.key?t=s.rightOfPosition(s.puzzle.emptyPosition):"w"==e.key?t=s.bottomOfPosition(s.puzzle.emptyPosition):"d"==e.key?t=s.leftOfPosition(s.puzzle.emptyPosition):"s"==e.key&&(t=s.topOfPosition(s.puzzle.emptyPosition)),!s.gameOver&&!(t<0||t>s.lastIndex())){var i=s.moveImageIfCanAtPosition(s.imageIndex,s.puzzle,t);i>=0&&s.refreshImagePositions(s.context,s.imageIndex,t,i)}})),document.addEventListener("keyup",(function(e){s.checkIfFinished(s.imageIndex)&&(s.drawPiece(s.meme,s.imageIndex[s.lastIndex()],s.lastIndex()),s.gameOver=!0,s.setGameOver(),e.preventDefault(),s.printWinner())}))}var t,i,o;return t=e,(i=[{key:"moveSound",value:function(){var e=new Audio("https://raw.githubusercontent.com/kaizhu94/Kai_Zhu_JS_Project/gh_pages/dist/sound/done.mp3");e.volume=.2,e.play()}},{key:"printWinner",value:function(){1==this.player?document.getElementById("winner_message_1").classList.add("show"):document.getElementById("winner_message_2").classList.add("show")}},{key:"removeWinner",value:function(){1==this.player?document.getElementById("winner_message_1").classList.remove("show"):document.getElementById("winner_message_2").classList.remove("show")}},{key:"gameFinished",value:function(){this.gameOver=!0}},{key:"lastIndex",value:function(){return this.column*this.column-1}},{key:"rectForPosition",value:function(e){return e<0||e>this.lastIndex()?[0,0,0,0]:[e%this.column*(this.padding+this.imageWidth)+this.padding,parseInt(e/this.column)*(this.padding+this.imageWidth)+this.padding,this.imageWidth,this.imageWidth]}},{key:"drawPiece",value:function(e,t,i){var n=this;this.meme=e;var o=new Image;o.src="https://raw.githubusercontent.com/kaizhu94/Kai_Zhu_JS_Project/gh_pages/dist/images/".concat(e)+String(t+1)+".jpg",o.onload=function(){var e=n.rectForPosition(i);n.context.drawImage(o,e[0],e[1],e[2],e[3]),n.moveSound()}}},{key:"drawAllImage",value:function(e){for(var t=0;t<this.column*this.column;t++){var i=this.imageIndex[t];i!==this.lastIndex()&&this.drawPiece(e,i,t)}}},{key:"setupRandomPosition",value:function(e){for(var t=[[4,3,2,8,0,7,5,6,1],[2,0,5,6,8,7,3,1,4],[3,7,2,4,1,6,8,0,5],[3,2,4,1,7,6,5,0,8]][parseInt(4*Math.random())],i=t.length-1;i>=0;i--)if(t[i]==this.lastIndex()){this.emptyPosition=i;break}e.emptyPosition=this.emptyPosition;for(var n=15;n--;){var o=parseInt(4*Math.random()),s=-1;0==o?s=this.topOfPosition(this.emptyPosition):1==o?s=this.leftOfPosition(this.emptyPosition):2==o?s=this.rightOfPosition(this.emptyPosition):3==o&&(s=this.bottomOfPosition(this.emptyPosition)),s<0||s>this.lastIndex()||this.moveImageIfCanAtPosition(t,e,s)>=0&&(this.emptyPosition=s)}return t}},{key:"isPositionEmpty",value:function(e,t){return!(t<0||t>this.lastIndex())&&e[t]===this.lastIndex()}},{key:"moveImageIfCanAtPosition",value:function(e,t,i){var n=this.topOfPosition(i),o=this.leftOfPosition(i),s=this.bottomOfPosition(i),a=this.rightOfPosition(i),r=-1;return this.isPositionEmpty(e,n)?r=n:this.isPositionEmpty(e,o)?r=o:this.isPositionEmpty(e,s)?r=s:this.isPositionEmpty(e,a)&&(r=a),r>=0?(e[r]=e[i],e[i]=this.lastIndex(),t.emptyPosition=i,r):-1}},{key:"refreshImagePositions",value:function(e,t,i,n){var o=this.rectForPosition(i);e.clearRect(o[0],o[1],o[2],o[3]),this.drawPiece(this.meme,t[n],n)}},{key:"checkIfFinished",value:function(e){for(var t=0;t<e.length;t++)if(e[t]!==this.correctIndex[t])return!1;return!0}},{key:"reset",value:function(e){this.gameStart&&(this.context.clearRect(0,0,this.puzzle.width,this.puzzle.height),this.imageIndex=this.setupRandomPosition(this.puzzle),this.drawAllImage(e),this.gameOver=!1,this.removeWinner())}},{key:"leftOfPosition",value:function(e){return e%this.column==0?-1:e-1}},{key:"rightOfPosition",value:function(e){return e%this.column==this.column-1?-1:e+1}},{key:"topOfPosition",value:function(e){return e-this.column}},{key:"bottomOfPosition",value:function(e){return e+this.column}}])&&n(t.prototype,i),o&&n(t,o),e}();function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player1=1,this.player2=2,this.cavas1=t,this.cavas2=i,this.playing=!1,this.setGameOver=this.setGameOver.bind(this),this.start=this.start.bind(this),this.reset=this.reset.bind(this)}var t,i,n;return t=e,(i=[{key:"setGameOver",value:function(){this.player1Board.gameFinished(),this.player2Board.gameFinished()}},{key:"start",value:function(e){this.playing=!0,this.player1Board=new o(this.cavas1,this.player1,this.playing,this.setGameOver),this.player2Board=new o(this.cavas2,this.player2,this.playing,this.setGameOver),this.player1Board.drawAllImage(e),this.player2Board.drawAllImage(e)}},{key:"reset",value:function(e){this.player1Board&&this.player2Board?(this.player1Board.reset(e),this.player2Board.reset(e)):alert("You can't reset an empty game!")}}])&&s(t.prototype,i),n&&s(t,n),e}();document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("background_music"),t=!1;document.addEventListener("keypress",(function(i){" "!==i.key&&"Spacebar"!==i.key||(t?(e.pause(),t=!1):(e.play(),t=!0))})),document.getElementById("pause").addEventListener("click",(function(i){i.preventDefault(),t?(e.pause(),t=!1):(e.play(),t=!0)}));var i=document.getElementById("player1Board"),n=document.getElementById("player2Board"),o=new a(i,n),s=document.getElementsByClassName("intro")[0];window.addEventListener("click",(function(e){s.classList.add("off")})),document.getElementById("xButton").addEventListener("click",(function(e){s.classList.add("off")}));var r="";document.getElementById("images-selector").addEventListener("change",(function(e){e.preventDefault(),r=e.target.value})),document.getElementById("start").addEventListener("click",(function(e){e.preventDefault(),0!==r.length?o.playing?alert("You have a game runing, use reset for a new puzzle."):o.start(r):alert("Pick your favorite meme")})),document.getElementById("reset").addEventListener("click",(function(e){0!==r.length?o.reset(r):alert("You can't reset before start a game!")}))}))}]);
//# sourceMappingURL=main.js.map