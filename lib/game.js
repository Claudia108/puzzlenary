import Grid from './grid';

export default class Game {

  constructor(options) {
    this.grid = new Grid(options.colums, options.rows);
  }

  start(){
    console.log("game started");
    this.grid.buildGrid();
    // render image - later
    // new grid - covered up a picture - all cells inactive
  }

  gameHasEnded() {

  }
}


// export const x = .....
// export const x1 = .....
//
// impirt Game, { x, x1 } frm './'

 // -start game
 // -end game
 // -collect score
 // -select level
 //
