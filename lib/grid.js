"use strict";

class Grid {
  constructor(options) {
    this.columns = options.columns;
    this.rows = options.rows;
    this.cell_array = [];
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
/*
        const obj ={
          current_color: AVAILABLE_COLORS(Math.random() * AVAILABLE_COLORS.length),
          id: i
        }
*/
        this.cell_array.push(i);

        cell.addEventListener('click',(function(el,r,c) {
          return function() {
            callback(el,r,c);
          };
        })(cell,r,c),false);
      }
    }
    return grid;
  }
}

module.exports = Grid;
