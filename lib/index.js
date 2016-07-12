import './main.css';
import Game from './game';
// import Grid from './grid';
import Config from './config';

import $ from 'jQuery';

let game = new Game(Config.columns, Config.rows);
game.start();

setInterval(function() {
  var number=(Math.floor((Math.random() * 7)));
  var cell= game.grid.cellArray[(Math.floor( (Math.random() * game.grid.cellArray.length)) )];
  if(game.grid.cellArray.length > 0){
    var id= cell.id;
    var colors = "highlighted" + "-" + number;
    $("td" +"#" + id).attr('class', colors);
  }
  console.log("still going");
}, 500);

function testSp()
{
  alert("hit");
}
window.onload=testSp;

var startModal = document.getElementById('myModal');

var endModal = document.getElementById('endGameModal');

// var start = document.getElementsByClassName("start")[0];
var close = document.getElementsByClassName("close")[0];

// window.onload = function() {
//     startModal.style.display = "block";
// };

// start.onclick = function() {
//     startModal.style.display = "none";
// };

close.onclick = function() {
    endModal.style.display = "none";
};

window.onload = function() {
    endModal.style.display = "block";
};
