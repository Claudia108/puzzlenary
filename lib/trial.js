"use strict";
/*jshint -W079 */
/*jshint -W117 */

let canvas  = document.getElementById('game');
let context = canvas.getContext('2d');
let $       = require('jQuery');
let Board  = require('./board');
let board = new Board();
let currentShape = board.pieces[0];

$(document).ready(function(){
  userInput();
  emptyBoard();
});

// $('.score').text(board.score);

function emptyBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 2;
  context.strokeStyle= "#000000";
  context.strokeRect(0, 0, canvas.width, canvas.height);
};

function drawBoard() {
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;
    context.strokeStyle= "#000000";
    context.strokeRect(0, 0, canvas.width, canvas.height);
    board.draw(context);
};
