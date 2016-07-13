'use strict';

function classToggler(el, game, gameLifeCycle) {
  if (game.isInvalidClick(el)) {
    // console.log("You clicked: " + el.className );
    removeLife(game.lives, gameLifeCycle);
  } else if (el.className === "highlighted-green") {
    el.className = "highlighted-transparent";
    solveTile(el.id, game.grid.cellArray, gameLifeCycle);
  }
}

function solveTile(id, array, gameLifeCycle) {
  array = endPlayArray(id, array);
  if (array.length === 0) {
    gameLifeCycle.emit("end-game", "win");
  }
}

function endPlayArray(cellId, array){
  for( let i = 0; i < array.length; i++){
    if( array[i].id === Number(cellId)){
      array.splice(i,1);
    }
  }
  return array;
}

function removeLife(array, gameLifeCycle) {
  array.pop();
  document.querySelector('#lives-galada').innerHTML = "Lives: " + array.length;
  if (array.length === 0) {
    gameLifeCycle.emit("end-game", "lost");
  }
}

module.exports = classToggler;
