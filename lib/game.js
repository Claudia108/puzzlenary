'use strict';

import Grid from './grid';
let Helpers = require('./helpers.js');

export default class Game {

  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
  }

  update(){

  }


   changeClickState(el,grid){
    //function(el){
    //debugger;
      el.className='clicked';
      el.style.backgroundColor = 'transparent';
      console.log("You clicked on item #:" + el.id);

      grid.cellArray = Helpers.endPlayArray(el.id,grid.cellArray);
      debugger;
      if (grid.cellArray.length === 0){
        alert("you won!");
      }

    //}
  }

  start(){
    console.log("game started");
    var self = this;

    var grid = this.grid;

    this.grid.buildGrid();

    // var callbackToChangeClickState = function(el){
    //   self.changeClickState.call(this,el,grid);
    // }

   grid.setupClickEvents(this.changeClickState.bind(this, el, grid))

    grid.setupClickEvents(callbackToChangeClickState);
    // this.grid.buildGrid().then(function(clickArea){
    //   console.log('clickArea = ' + clickArea);
    //   //grid.setupClickEvents(Game.callback);
    //   grid.setupClickEvents(function(el){
    //     self.changeClickState.call(this,el,grid);
    //   });
    },function(err){});



    //main event
    window.setInterval(function(){
        for( let cell of grid.cellArray){
          //let color = cell.randomColor();
          let cell_element = document.getElementById(cell.id);
          // cell_element.style.backgroundColor = cell.randomColor();
        }
      },50);

  // }
  // game_won(){
  //     once array reaches 0
  //     console.log("You won!")
  // }
}
}
