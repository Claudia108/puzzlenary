"use strict";
// import $ from 'jQuery';
import Cell from './cell';

class Grid {
  constructor(options) {
    this.columns = options.columns;
    this.rows = options.rows;
    this.cellArray = [];
    this.classes = ["active", "forbidden", "initial"];
  }

  buildGrid() {
    let i = 0;
    const grid = document.createElement('table');
    grid.className = 'game-table';

    for (let r = 0; r < this.rows; ++r){
      let tr = grid.appendChild(document.createElement('tr'));
      for (let c = 0; c < this.columns; ++c) {
        let cell = tr.appendChild(document.createElement('td'));
        cell.id = ++i;
        let cell_data = new Cell(i);
        // debugger;
        cell_data.className = this.classes[Math.floor (Math.random() * this.classes.length)];
        this.cellArray.push(cell_data);
      }
    }
    document.body.appendChild(grid);
  }
}

module.exports = Grid;
