'use strict';
import $ from 'jQuery';
import Grid from './grid';
let classToggler = require('./helpers.js');
// let endPlayArray = require('./helpers.js');

export default class Game {
  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
    this.lives = [ "troll1", "troll2", "troll3" ];
  }


  callbackToChangeClickState(e, game){
    let el = e.target;
    classToggler(el, game);
  }

  setupClickEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      return callback(e, self);
    });
  }


  start(){
    console.log("game started");
    this.grid.buildGrid();
    this.setupClickEvents(this.callbackToChangeClickState);
  }
}

module.exports = Game;
