// import $ from "jquery";
// import View from './view';
import './main.css';
import Game from './game';

// const canvas = document.getElementById('game-canvas');
// const ctx = canvas.getContext('2d');
// const Grid = require('./grid');
const getGameOptions = () => {
  return {
    columns: 10,
    rows: 10
  };
};

let game = new Game(getGameOptions());
game.start();


// const gameInstance = new View("game-canvas");

// function emptyBoard() {
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // context.lineWidth = 2;
  // context.strokeStyle= "#000000";
  // context.strokeRect(0, 0, canvas.width, canvas.height);
// }

// gameInstance.render();

// Game
//   - starting the game
    // - create getGameOptions;
//   - connecting Grid with whateve other elements you have (image)
//   - requestAnimationFrame
//       - which tiles are blinking
//       - whether or not we need a new image
//       - is the game over yet? (ask the grid)
//       - vary the state of the cells (3s intervals)
//
//   - start()
//     - create a grid
//
//   Grid
//     - are all of your cells of state transparent?
//     - on start(), create a grid
//       - create cells --> loop and assign inactive state
//       - reassigningn the state of the cells --> loop over exisiting cells and reassign the state (if transparent, leave it alone)
//         - boundaries: only x cells are red, oyl x cells are green
//
//     Cell
// cell.on('click', () => {
//   this.emit('cellWasClicked', this.position)
// })
//
// game.on('cellWasClicked'....)
//       - transparent - green(pos points, rchange to transparent) - red (neg ponits) - inactive (nothing happens, freeze the game for 5 s)
//
//   Image
