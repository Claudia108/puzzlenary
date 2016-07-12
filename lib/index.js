import './main.css';
import Game from './game';
import Config from './config';

let game = new Game(Config.columns, Config.rows);
game.start();

////////////////////////////////////////////
var startModal = document.getElementById('startModal');

window.onload = function() {
  startModal.style.display = "block";
};

var closeStart = document.getElementsByClassName("closeStart")[0];

closeStart.onclick = function() {
  startModal.style.display = "none";
};
////////////////////////////////////////////

var winModal = document.getElementById('winGameModal');

var closeWin = document.getElementsByClassName("closeWinGame")[0];

closeWin.onclick = function() {
    winModal.style.display = "none";
};

////////////////////////////////////////////
var endModal = document.getElementById('loseGameModal');
var close = document.getElementsByClassName("closeLoseGame")[0];

close.onclick = function() {
    endModal.style.display = "none";
};
