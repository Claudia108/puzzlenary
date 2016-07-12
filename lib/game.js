'use strict';
import $ from 'jQuery';
import Grid from './grid';
let classToggler = require('./helpers.js');
const events = require('events');
const gameLifeCycle = new events.EventEmitter();

export default class Game {
  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
    this.lives = [ "troll1", "troll2", "troll3" ];
    this.interval = "";
  }

  callbackToChangeClickState(e, game){
    let el = e.target;
    classToggler(el, game, gameLifeCycle);
  }

  setupEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      return callback(e, self);
    });
    gameLifeCycle.on("end-game", function(outcome) {
      console.log(outcome);
      self.end();
      self.handleOutcome(outcome);
    });
  }

  handleOutcome(outcome) {
    if (outcome === "win") {
      var winModal = document.getElementById('winGameModal');
      winModal.style.display = "block";
    } else {
      var loseModal = document.getElementById('loseGameModal');
      loseModal.style.display = "block";
    }
  }

  start(){
    console.log("game started");
    this.grid.buildGrid();
    this.interval = setInterval(this._assignClasses(), 500);
    this.setupEvents(this.callbackToChangeClickState);
  }

  end() {
    clearInterval(this.interval);
  }

  _assignClasses() {
    let grid = this.grid;
    return function() {
      var number = Math.floor((Math.random() * 3));
      var cell = grid.cellArray[Math.floor(Math.random() * grid.cellArray.length)];
      var id = cell.id;
      var colors = "highlighted" + "-" + number;
      $("td" +"#" + id).attr('class', colors);
      console.log("going");
    };
  }
}


module.exports = Game;
