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
      el.style.backgroundColor = 'transparent';
      console.log("You clicked on item #:" + el.id);
      // debugger;
      grid.cell_array = Helpers.removeArrayElement(el.id,grid.cell_array);
      if (grid.cell_array.length === 0){
        alert("you won!");
      }
    });
    document.body.appendChild(clickArea);

    //main event
    window.setTimeout(function(){
        for( let cell of grid.cell_array){
          //let color = cell.randomColor();
          let cell_element = document.getElementById(cell.id);
          cell_element.style.backgroundColor = cell.randomColor();
          //debugger;
        }
      },50);

    //debugger;
    // render image - later
    // new grid - covered up a picture - all cells inactive
  }

  // game_won(){
  //     once array reaches 0
  //     console.log("You won!")
  // }
}
