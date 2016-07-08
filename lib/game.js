import Grid from './grid';

export default class Game {

  constructor(columns, rows) {
    this.grid = new Grid(columns, rows);
  }

  start(){
    console.log("game started");
    this.grid.buildGrid();
    // render image - later
    // new grid - covered up a picture - all cells inactive
  }
}
