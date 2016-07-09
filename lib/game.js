import Grid from './grid';
let Helpers = require('./helpers.js');

export default class Game {

  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
  }

  start(){
    console.log("game started");
    var grid = this.grid;
    var clickArea = this.grid.buildGrid(function(el){
      console.log("You clicked on item #:" + el.id);

      grid.cell_array = Helpers.removeArrayElement(el.id,grid.cell_array);

      if (grid.cell_array.length === 0){
        alert("you won!");
      }
    });
    document.body.appendChild(clickArea);
  }
}
