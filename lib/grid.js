"use strict";
import $ from 'jQuery';
import Cell from './cell';

class Grid {
  constructor(options) {
    this.columns = options.columns;
    this.rows = options.rows;
    this.cellArray = [];
  }

  setupClickEvents(callback){
    $('.game-table').on('click', 'td', function(e){
      // get element from event
      callback(el);
    })
    // let cells = document.querySelectorAll('td');
    // for(let cell of cells){
    //     cell.addEventListener('click',(function(el) {
    //       return function() {
    //         //debugger;
    //         callback(el);
    //       };
    //     })(cell),false);
    //   }
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
    // return new Promise(function(resolve, reject){
    //   resolve(grid);
    // });
  }
}

module.exports = Grid;
