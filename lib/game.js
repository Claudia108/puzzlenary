'use strict';
import $ from 'jQuery';
import Grid from './grid';
let Config = require('./config.js')
let Helpers = require('./helpers.js');

export default class Game {
  constructor(columns, rows) {
    this.currentLives = Config.defaultLives;
    this.grid = new Grid({columns: columns, rows: rows});
  }

  callbackToChangeClickState(e, game){
    let el = e.target;
    let status = Helpers.classToggler(el, game.grid);
    if(status){
      console.log("game.currentLives = " + game.currentLives);
      if(--game.currentLives == 0 ){
        alert("Sorry, you are a loser");
      }
    }
    // console.log("You clicked on item #:" + el.id);
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
