"use strict";
import Cell from './cell';

class Grid {
  constructor(options) {
    this.columns = options.columns;
    this.rows = options.rows;
    this.cellArray = [];
  }

  buildGrid(callback) {
    let i = 0;
    const grid = document.createElement('table');
    grid.className = 'game-table';

    for (let r = 0; r < this.rows; ++r){
      let tr = grid.appendChild(document.createElement('tr'));
      for (let c = 0; c < this.columns; ++c) {
        let cell = tr.appendChild(document.createElement('td'));
        cell.id = ++i;
        cell.addEventListener('click',(function(el,r,c) {
          return function() {
            callback(el,r,c);
          };
        })(cell,r,c),false);

        let cell_data = new Cell(i);
        this.cellArray.push(cell_data);
      }
    }
    return grid;
  }
}

module.exports = Grid;
