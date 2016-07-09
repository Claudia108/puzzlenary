"use strict";
import Cell from './cell';

class Grid {
  constructor(options) {
    this.columns = options.columns;
    this.rows = options.rows;
    this.cellArray = [];
  }

  setupClickEvents(callback){
    console.log('inside setupClickEvents');
    //debugger;
    let cells = document.querySelectorAll('td');
    console.log("cells.length = " + cells.length);
    for(let cell of cells){
        console.log("cell = " + cell);
        cell.addEventListener('click',(function(el) {
          console.log('setting click listener');
          return function() {
            //debugger;
            callback(el);
          };
        })(cell),false);
      }
    }

  buildGrid() {
    let i = 0;
    const grid = document.createElement('table');
    grid.className = 'game-table';
    grid.style.backgroundColor = "transparent";

    for (let r = 0; r < this.rows; ++r){
      let tr = grid.appendChild(document.createElement('tr'));
      for (let c = 0; c < this.columns; ++c) {
        let cell = tr.appendChild(document.createElement('td'));
        cell.id = ++i;
        let cell_data = new Cell(i);
        this.cellArray.push(cell_data);
      }
    }
    document.body.appendChild(grid);
    return new Promise(function(resolve, reject){
      resolve(grid);
    });
  }
}

module.exports = Grid;
