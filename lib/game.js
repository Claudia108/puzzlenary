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
    debugger
    el.className='clicked';
    el.style.backgroundColor = 'transparent';
    console.log("You clicked on item #:" + el.id + el.state);

    grid.cellArray = Helpers.endPlayArray(el.id,grid.cellArray);

    if (grid.cellArray.length === 0){
      alert("you won!");
    }
  }

  setupClickEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      // get element from event
      return callback(e,self.grid);
    });
  }

  start(){
    var grid = this.grid;

    console.log("game started");
    this.grid.buildGrid();
    this.setupClickEvents(this.callbackToChangeClickState);

    //begin random states

     setInterval(function() {
       debugger
       for(let cell of grid.cellArray){
        //  let state = cell.randomState();
         let cell_element = document.getElementsByClassName(cell.id);
         cell_element.className = cell.randomState();
     }
  },100);
  }
}
