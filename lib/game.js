'use strict';
import $ from 'jQuery';
import Grid from './grid';
let Helpers = require('./helpers.js');

export default class Game {

  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
  }

  //playing the game
  callbackToChangeClickState(e,grid){
    // update click state here in the section
    let el = e.target;
    el.className='clicked';
    el.style.backgroundColor = 'transparent';
    console.log("You clicked on item #:" + el.id);

    grid.cellArray = Helpers.endPlayArray(el.id,grid.cellArray);

    if (grid.cellArray.length === 0){
      alert("you won!");
    }

    //}
  }

  setupClickEvents(callback){
    //debugger;
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      // get element from event
      debugger;
      return callback(e,self.grid);
    });
  }

  start(){
    console.log("game started");
    //    var self = this;

    this.grid.buildGrid();

    this.setupClickEvents(this.callbackToChangeClickState);
  }
  //main event
  /*
  window.setInterval(function(){
  for( let cell of grid.cellArray){
  //let color = cell.randomColor();
  let cell_element = document.getElementById(cell.id);
  // cell_element.style.backgroundColor = cell.randomColor();
}
},50);
*/
// }
// game_won(){
//     once array reaches 0
//     console.log("You won!")
// }
}
