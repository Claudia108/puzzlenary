// import $ from "jquery";
// import View from './view';
import './main.css';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const Grid = require('./grid');


const gameInstance = new View("game-canvas");

function emptyBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 2;
  context.strokeStyle= "#000000";
  context.strokeRect(0, 0, canvas.width, canvas.height);
}

gameInstance.render();
