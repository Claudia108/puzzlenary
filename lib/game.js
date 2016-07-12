'use strict';
import $ from 'jQuery';
import Grid from './grid';
import Level from './level';
let classToggler = require('./helpers.js');
const events = require('events');
const gameLifeCycle = new events.EventEmitter();

export default class Game {
  constructor(columns, rows) {
    this.currentLevel = 1;
    this.levelData = new Level(this.currentLevel).data; //sets level of rows and columns
    this.grid = new Grid({columns: this.levelData.columns, rows: this.levelData.rows});
    this.lives = this.resetLives();
    this.interval = "";
    this.clicks = 0;
  }

  resetLives(){ //creates the number of lives for user
    return [ "troll1", "troll2", "troll3" ];
  }

  callbackToChangeClickState(e, game){
    let el = e.target;
    ++game.clicks;
      console.log('number of clicks' + ' = ' + game.clicks);
    classToggler(el, game, gameLifeCycle);
  }

  setupEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      return callback(e, self);
    });
    gameLifeCycle.on("end-game", function(outcome) {
      console.log(outcome);
      self.handleOutcome(outcome);
      self.end();
    });
  }

  handleOutcome(outcome) {
    if (outcome === "win") {
      this.currentLevel++; //keeps track of currentLevel
      alert("Yey, you won!");
    } else {
      //alert("Well, you managed to loose.... Wanna try again?");
      this.playAgain();
    }
    console.log("this.currentLevel = " + this.currentLevel);
  }

    playAgain(){ // allows user to start game/level over with full life
      this.lives = this.resetLives();
      if (confirm("Well, you managed to loose.... Wanna try again?") === true) {
          //do nothing stay on currentLevel
      }
      else {
          this.currentLevel = 1;
      }
    }

  start(levelData=null){
    console.log("game started");
    this.grid.buildGrid(levelData);//starts off a null then changes based on level
    this.interval = setInterval(this._assignClasses(), 500);
    this.setupEvents(this.callbackToChangeClickState);
  }

  end() {
    clearInterval(this.interval);
    this.clicks = 0 //resets number of clicks to 0
    this.clearEvents();//*** > clearEvents including on-end
    this.clearGrid(); //get rid of old grid
    this.levelData = new Level(this.currentLevel).data;
    this.start(this.levelData);
  }

  clearEvents(){ //removes all listeners after game is level is won or lost
                // allows you not to skip levels
    gameLifeCycle.removeAllListeners('end-game');
  }

  clearGrid(){ // clears grid to 00 after each level to allow for next level
    let element = document.querySelector('.game-table');
    element.parentNode.removeChild(element);
  }

  _assignClasses() {
    let grid = this.grid;
    return function() {
      var number = Math.floor((Math.random() * 7)); // 7 represents all available colors in main.css
      var cell = grid.cellArray[Math.floor(Math.random() * grid.cellArray.length)];
      var id = cell.id;
      var colors = "highlighted" + "-" + number;
      $("td" +"#" + id).attr('class', colors);
      console.log("going");
    };
  }
}


module.exports = Game;
