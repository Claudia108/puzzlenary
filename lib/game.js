'use strict';
import $ from 'jQuery';
import Grid from './grid';
let classToggler = require('./helpers.js');
let endPlayArray = require('./helpers.js');

export default class Game {
  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
    this.lives = 0;
  }


  callbackToChangeClickState(e, grid){
    let el = e.target;
    classToggler(el, grid);
    // debugger;
    // console.log("You clicked on item #:" + el.id);
  }

  killClick(lives) {
    debugger;
    let self = this;
    $('td.highlighted-1').on('click', function(lives){
      lives - 1;
    });
  }





  setupClickEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      return callback(e, self.grid);
    });
  }

    // $('td.highlighted-2').on('click', function(){
    //   self.lives ++;
    //   console.log(lives);
    //   return self.lives;
    // });

 // looseGame(lives) {
 //    if (this.lives > 2 ) {
 //      alert("LOSER");
 //    }
// }
  start(){
    console.log("game started");
    // let lives = 0;
    this.grid.buildGrid();
    this.setupClickEvents(this.callbackToChangeClickState);
  }

}

module.exports = Game;
