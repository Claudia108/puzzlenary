"use strict";

class Grid {
  constructor(options) {
    this.columns = options.columns || 10;
    this.rows = options.rows || 10;
    this.cell_array = [];
  }

  buildGrid(callback) {
    var i = 0;
    var grid = document.createElement('table');
    grid.className = 'game-table';

    for (var r = 0; r < this.rows; ++r){
      var tr = grid.appendChild(document.createElement('tr'));
      for (var c = 0; c < this.columns; ++c) {
        var cell = tr.appendChild(document.createElement('td'));
        cell.id = ++i;
/*
        var obj ={
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
