import './main.css';
import Game from './game';
// import Grid from './grid';
import Config from './config';
import $ from 'jQuery';

let game = new Game(Config.columns, Config.rows);
game.start();

setInterval(function() {
  var number = Math.floor((Math.random() * 3));
  var cell = game.grid.cellArray[Math.floor(Math.random() * game.grid.cellArray.length)];
  // if (game.grid.cellArray > 0) {
    var id = cell.id;
    var colors = "highlighted" + "-" + number;
    $("td" +"#" + id).attr('class', colors);
  // }
  // console.log("still going");
}, 500);
