import './main.css';
import Game from './game';
import Grid from './grid';
import Config from './config';
import $ from 'jQuery';

let game = new Game(Config.columns, Config.rows);
game.start();

setInterval(function() {
  // let game = new Game(Config.columns, Config.rows);
  // debugger;
  // debugger;
  // var grid = this.grid;
  var number=(Math.floor((Math.random() * 4) +  1));
  // var id=(Math.floor((Math.random() * 9) +  1));

  var cell= game.grid.cellArray[(Math.floor( (Math.random() * game.grid.cellArray.length)) )];
  var id= cell.id;
  var colors = "highlighted" + "-" + number;
  $("td" +"#" + id).attr('class', colors);

}, 500);
