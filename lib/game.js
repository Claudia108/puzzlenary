'use strict';

import Grid from './grid';
let Helpers = require('./helpers.js')

export default class Game {

  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
  }

  start(){
    console.log("game started");
    var grid = this.grid;
    var clickArea = this.grid.buildGrid(function(el){
      el.className='clicked';
      console.log("You clicked on item #:" + el.id);
      grid.cell_array = Helpers.removeArrayElement(el.id,grid.cell_array);
      if (grid.cell_array.length === 0){
        alert("you won!");
      }
    //debugger;
    });
    document.body.appendChild(clickArea);
    //debugger;
    // render image - later
    // new grid - covered up a picture - all cells inactive
  }

  // game_won(){
  //     once array reaches 0
  //     console.log("You won!")
  // }
}
