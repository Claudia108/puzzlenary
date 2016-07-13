import './main.css';
import Game from './game';
import Config from './config';
import { startModalSetup, winModalSetup, loseModalSetup } from './modals';

let game = new Game(Config.columns, Config.rows);
game.start();
startModalSetup();
winModalSetup();
loseModalSetup();

////////////////////////////////////////////
var startModal = document.getElementById('startModal');

window.onload = function() {
  startModal.style.display = "block";
};

// while(true){
  checkLives(game);
// }
// debugger;

function checkLives(game){
  var troll1 = document.getElementsByClassName('lt1');
  var troll2 = document.getElementsByClassName('lt2');

  if (game.lives.length === 2) {
    troll1.style.display = "none";
  } else if (game.lives.length === 1) {
    troll2.style.display = "none";
  }
}
