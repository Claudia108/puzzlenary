'use strict';
import $ from 'jQuery';
import Grid from './grid';
import Config from './config';
let Helpers = require('./helpers.js');

export default class Game {
  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
    this.lives = ['troll_pink', 'troll_yellow','troll_red'];
    this.currentLevel = 1;
  }

  callbackToChangeClickState(e,game){
    let el = e.target;
    if (el.className === "highlighted-1"){
      el.className = "clicked";
      game.grid.cellArray = Helpers.endPlayArray(el.id,game.grid.cellArray);
      if (game.grid.cellArray.length === 0){
        alert("you won!");
        ++ this.currentLevel;
        Config.levelSelctor(this.currentLevel);
      }
    }
    else if (el.className === "highlighted-2") {
        game.lives.pop();
       if(game.lives.length === 0){
       alert("LOSER");
       location.reload();
     }
    }
    console.log("You clicked on item #:" + el.id);
    console.log("game.lives: " + game.lives);
  }


  setupClickEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      return callback(e,self);
    });
  }

  start(){
    console.log("game started");
    this.grid.buildGrid();
    this.setupClickEvents(this.callbackToChangeClickState);
  }
}

module.exports = Game;
module.exports = Config;
