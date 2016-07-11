'use strict';
import $ from 'jQuery';
import Grid from './grid';
let Helpers = require('./helpers.js');

export default class Game {
  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
  }

  callbackToChangeClickState(e, grid){
    let el = e.target;
    Helpers.classToggler(el, grid);
    // console.log("You clicked on item #:" + el.id);
  }

  setupClickEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      return callback(e, self.grid);
    });
  }

  start(){
    console.log("game started");
    this.grid.buildGrid();
    this.setupClickEvents(this.callbackToChangeClickState);
  }
}

module.exports = Game;
