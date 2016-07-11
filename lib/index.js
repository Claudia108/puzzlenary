import './main.css';
import Game from './game';
// import Grid from './grid';
import Config from './config';
import $ from 'jQuery';

let game = new Game(Config.levelOne.columns, Config.levelOne.rows);
game.start();
// let game = new Game(Config.columns, Config.rows);
// game.start();

setInterval(function() {
  var number=(Math.floor((Math.random() * 7)));
  var cell= game.grid.cellArray[(Math.floor( (Math.random() * game.grid.cellArray.length)) )];
  var id= cell.id;
  var colors = "highlighted" + "-" + number;
  $("td" +"#" + id).attr('class', colors);
}, 500);
